import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma";

export async function GET() {
    const response = await prisma.user.findMany();
    console.log("RESPONSE:", response);
    return NextResponse.json(response);
}