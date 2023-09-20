import React from "react";
import AboutUs from "@/components/About";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us Page - Squanch",
  description: "This is About Us page for Squanch",
  // other metadata
};

const AboutUsPage = () => {
  return (
    <>
      <div className="pt-40 pb-20">
        <AboutUs />
        <Team />
        <Contact />
      </div>
    </>
  );
};

export default AboutUsPage;
