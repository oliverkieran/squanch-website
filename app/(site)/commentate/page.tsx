import React from "react";
import Stream from "@/components/Stream";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commentator Page - Squanch",
  description: "This is Commentator page for Squanch",
  // other metadata
};

const CommentatorPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Stream />
    </div>
  );
};

export default CommentatorPage;
