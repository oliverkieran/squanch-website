import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing id parameter" },
      { status: 500 }
    );
  }

  const response = await prisma.commentator.findUnique({
    where: { id },
    include: {
      commentator: true,
      game: true,
    },
  });
  console.log("RESPONSE:", response);
  return NextResponse.json(response);
}
