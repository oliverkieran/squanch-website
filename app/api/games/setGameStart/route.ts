import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST /api/games/setGameStart
export async function POST(req: NextRequest) {
  const { title, startTs } = await req.json();
  if (!title || !startTs) {
    return NextResponse.json(
      { msg: "both, title and startTs are required" },
      { status: 400 }
    );
  }
  try {
    // parse startTs to float
    const startTsFloat = parseFloat(startTs);

    // update game
    const response = await prisma.game.update({
      where: { title },
      data: { startTimestamp: startTsFloat },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { msg: "startTs must be a number" },
      { status: 400 }
    );
  }
}
