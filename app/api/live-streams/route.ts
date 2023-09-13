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

export async function POST(req: NextRequest) {
  try {
    const { commentator, game } = await req.json();
    const [firstname, lastname = ""] = commentator.toLowerCase().split(" ");

    console.log("COMMENTATOR:", commentator);
    console.log("GAME:", game);

    const data = {
      commentator: { connect: { username: `${firstname}${lastname}` } },
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
