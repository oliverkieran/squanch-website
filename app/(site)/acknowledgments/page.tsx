import React from "react";
import Acknowledgments from "@/components/Acknowledgments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acknowlegments Page - Squanch",
  description: "This is the Ack page for Squanch",
};

const CommentatorPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Acknowledgments />
    </div>
  );
};

export default CommentatorPage;
