import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="px-4 md:px-8 2xl:px-0 mb-10 xl:mb-20">
      <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20">
        <div className="lg:w-3/4 mb-8">
          <h1 className="text-blacksection dark:text-stroke text-3xl md:text-5xl md:leading-normal font-medium">
            We are on a mission to bring sports commentary closer to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              fans.
            </span>
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="w-1/6"></p>
          <p className="font-light w-5/6">
            Squanch is built on the fundament of a central belief: decentralized
            systems outperform centralized one's in the long run. In the case of
            sports commentary, legacy companies provide the same commentators to
            millions of fans every weekend. In our view, this solution is
            outdated. We believe that the sports community has more to offer.
            More expertise. More humour. More passion. All of this potential
            will be unleashed by our platform and create superior sports
            commentary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
