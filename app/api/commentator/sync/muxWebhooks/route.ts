import { NextRequest, NextResponse } from "next/server";

import { handleStreamStart, handleAssetReady } from "./webhooks";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const webhookType = body.type;

  if (webhookType === "video.live_stream.connected") {
    await handleStreamStart(body);
  } else if (webhookType === "video.asset.ready") {
    await handleAssetReady(body);
  }
  // Always return a 200 response to Mux's webhook, because Mux will
  // retry the webhook if it does not receive a 200 response.
  return NextResponse.json({ received: "Mux webhook received." });
}
