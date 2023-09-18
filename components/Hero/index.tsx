"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="lg:flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" lg:w-1/2 mb-12 lg:mb-0">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                🔥 Now available in the Chrome Web Store
              </h4>
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                Become A Part Of
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 mr-2.5 min-[571px]:ml-2.5 lg:ml-0">
                  Crowdsourced
                </span>
                Football Commentary
              </h1>
              <p>
                Use our Chrome Extension to commentator games yourself or to
                listen to other crowdsourced commentators.{" "}
                <strong>For free</strong>.
              </p>

              <p className="text-black dark:text-white mt-10">
                Which experience do you want to try?
              </p>

              <div className="mt-5">
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="#extension"
                    className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                  >
                    Viewer
                  </Link>
                  <Link
                    href="/commentate"
                    className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                  >
                    Commentator
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate_right lg:w-1/2 px-8 lg:px-0">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero-light.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/hero-light.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
