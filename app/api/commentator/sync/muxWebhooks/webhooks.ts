import prisma from "@/lib/prisma";

export async function handleStreamStart(data: any) {
  console.log("Handling stream start...");

  // Get commentator with matching stream key
  const commentator = await prisma.commentator.findUnique({
    where: {
      streamKey: data.data.stream_key,
    },
  });

  if (!commentator) {
    console.warn("No commentator found with matching stream key");
    return;
  }

  // Update stream start time
  const streamStartTime = new Date(data.created_at);
  await prisma.commentator.update({
    where: { id: commentator.id },
    data: { streamStart: streamStartTime },
  });

  console.log("Stream start time updated");
}

export async function handleAssetReady(data: any) {
  if (data.data.is_live) {
    console.log("Handling asset ready...");

    // Get commentator with matching liveStreamId
    const commentator = await prisma.commentator.findUnique({
      where: {
        liveStreamId: data.data.live_stream_id,
      },
    });

    if (!commentator) {
      console.warn("No commentator found with matching live stream id");
      return;
    }

    // Update playbackId
    await prisma.commentator.update({
      where: { id: commentator.id },
      data: { playbackId: data.data.playback_ids[0].id },
    });

    console.log("Playback ID updated.");
  } else {
    console.warn("Asset ready, but not live.");
  }
}
