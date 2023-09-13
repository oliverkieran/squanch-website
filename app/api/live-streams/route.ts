import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const MUX_LS_API_URL = "https://api.mux.com/video/v1/live-streams";
const TEST = true;

async function createLiveStream() {
  // Create new live stream on Mux
  const data = {
    playback_policy: ["public"],
    new_asset_settings: {
      playback_policy: ["public"],
    },
    audio_only: true,
    latency_mode: "low",
    reconnect_window: 30,
    test: TEST,
  };

  const auth = Buffer.from(
    `${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`
  ).toString("base64");

  const response = await fetch(MUX_LS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
}

async function checkIfUserExists(firstname: string, lastname: string) {
  const username = `${firstname}${lastname}`.toLowerCase();
  // Check if commentator already exists in users table
  const commentatorExists = await prisma.user.findUnique({
    where: { username },
  });
  console.log(
    commentatorExists ? "COMMENTATOR EXISTS:" : "COMMENTATOR DOES NOT EXIST"
  );
  // If not, create new user
  if (!commentatorExists) {
    console.log("CREATING NEW COMMENTATOR");
    const email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@example.com`;
    const password = "password";
    const response = await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        email,
        password,
      },
    });
    console.log("NEW COMMENTATOR CREATED:", response);
    return response.username;
  } else {
    return commentatorExists.username;
  }
}

async function checkIfGameExists(game: string) {
  // Check if game already exists in games table
  const gameExists = await prisma.game.findUnique({
    where: { title: game },
  });
  console.log(gameExists ? "GAME EXISTS:" : "GAME DOES NOT EXIST");
  // If not, create new game
  if (!gameExists) {
    console.log("CREATING NEW GAME");
    const response = await prisma.game.create({
      data: { title: game },
    });
    console.log("NEW GAME CREATED:", response);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { commentator, game } = await req.json();
    const [firstname, lastname = ""] = commentator.toLowerCase().split(" ");

    console.log("COMMENTATOR:", commentator);
    console.log("GAME:", game);

    // Check if commentator/game already exist in DB
    // If not, create new commentator/game
    const username = await checkIfUserExists(firstname, lastname);
    if (!username) {
      return NextResponse.json(
        {
          error: "An error occured while creating the user. Please try again.",
        },
        { status: 500 }
      );
    }
    console.log("USERNAME:", username);
    await checkIfGameExists(game);

    const data = {
      commentator: { connect: { username } },
      game: { connect: { title: game } },
    };

    // Create new live stream on Mux
    const muxResponse = await createLiveStream();

    if (muxResponse["data"]) {
      data["streamKey"] = muxResponse["data"]["stream_key"];
      data["liveStreamId"] = muxResponse["data"]["id"];
    }

    console.log("DATA:", data);

    // Create new commentator in DB
    const result = await prisma.commentator.create({ data });

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: `An error occured. ${error}` },
      { status: 500 }
    );
  }
}
