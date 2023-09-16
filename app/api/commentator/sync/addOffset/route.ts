import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  const { id, offset } = await req.json();
  if (!id || !offset) {
    return NextResponse.json(
      { error: "commentatorId or offset are missing." },
      { status: 400 }
    );
  }

  const response = await prisma.commentator.update({
    where: { id },
    data: { gameOffset: offset },
  });

  return NextResponse.json(response);
}
