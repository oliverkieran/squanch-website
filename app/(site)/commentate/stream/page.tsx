import React from "react";
import { Metadata } from "next";
import Synchronize from "@/components/Synchronize";

export const metadata: Metadata = {
  title: "Stream Page - Squanch",
  description: "This is Stream page for Squanch",
  // other metadata
};

const StreamPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Synchronize />
    </div>
  );
};

export default StreamPage;
