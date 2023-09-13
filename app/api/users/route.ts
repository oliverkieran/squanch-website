import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const response = await prisma.user.findMany();
  console.log("RESPONSE:", response);
  return NextResponse.json(response);
}

// POST /api/users
export async function POST(req: NextRequest) {
  console.log("Create User Request received");
  const { firstname, lastname = "" } = await req.json();
  const username = `${firstname}${lastname}`.toLowerCase();
  const email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@example.com`;
  const password = "password";
  const data = {
    username,
    firstname,
    lastname,
    email,
    password,
  };
  console.log("USER DATA:", data);
  const response = await prisma.user.create({ data });
  console.log("RESPONSE:", response);
  return NextResponse.json(response);
}
