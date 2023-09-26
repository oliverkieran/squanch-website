import { NextRequest, NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { event: string } }
) {
  /*
    This is the endpoint that gets called by the chrome extension.
    It returns a list of all active commentators for a given event.
     */

  // Get all active live streams from Mux
  const auth = Buffer.from(
    `${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`
  ).toString("base64");
  const muxUrl = "https://api.mux.com/video/v1/live-streams?status=active";
  const muxResponse = await fetch(muxUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    next: {
      revalidate: 10,
    },
  });

  if (!muxResponse.ok) {
    console.error("Mux API call failed: Get Active Live Streams.");
    return NextResponse.json(
      { error: "Mux API call failed: Get Active Live Streams." },
      { status: 500 }
    );
  }
  const { data } = await muxResponse.json();
  if (data.length > 0) {
    const liveStreamIds = data.map((stream) => stream.id);

    // Get commentators with active streams and matching event
    const commentators: any = await prisma.commentator.findMany({
      where: {
        liveStreamId: {
          in: liveStreamIds,
        },
        game: {
          is: { title: params.event },
        },
      },
      include: {
        commentator: true,
        game: true,
      },
    });

    // Remove all attributes from commentator except for firstname and lastname
    commentators.forEach((commentator) => {
      const { id, firstname, lastname } = commentator.commentator;
      commentator.commentator = { id, firstname, lastname };
    });

    return NextResponse.json(commentators);
  } else {
    return NextResponse.json([]);
  }
}
