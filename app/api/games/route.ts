import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const response = await prisma.user.findMany();
  //console.log("RESPONSE:", response);
  return NextResponse.json(response);
}

// POST /api/users
export async function POST(req: NextRequest) {
  const { title } = await req.json();
  const response = await prisma.game.create({
    data: { title },
  });
  return NextResponse.json(response);
}
