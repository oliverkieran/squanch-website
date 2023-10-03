import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Squanch",
  description: "Privacy Policy of Squanch",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-40 pb-20">
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
