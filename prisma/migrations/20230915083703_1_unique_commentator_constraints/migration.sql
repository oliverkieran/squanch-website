/*
  Warnings:

  - A unique constraint covering the columns `[liveStreamId]` on the table `Commentator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[streamKey]` on the table `Commentator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[playbackId]` on the table `Commentator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Commentator_liveStreamId_key" ON "Commentator"("liveStreamId");

-- CreateIndex
CREATE UNIQUE INDEX "Commentator_streamKey_key" ON "Commentator"("streamKey");

-- CreateIndex
CREATE UNIQUE INDEX "Commentator_playbackId_key" ON "Commentator"("playbackId");
