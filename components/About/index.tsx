"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section
        id="extension"
        className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden"
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex max-lg:flex-wrap-reverse items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-2/3 md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/extension-showcase.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/extension-showcase.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2 mx-auto"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  New
                </span>{" "}
                Super Easy Setup
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Download the
                <span className="mx-2.5 inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-gametime dark:before:bg-titlebgdark before:-z-1">
                  Squanch
                </span>
                Chrome Extension
              </h2>
              <p>
                It's super eassy to get started with Squanch. Just download the
                Chrome Extension and you're ready to go! The extension will
                automatically detect when you're watching a football game and
                will give you the option to choose a commentator.
              </p>

              <div className="mt-7.5 flex justify-center items-center">
                <button className="p-5 text-black font-semibold bg-gametime rounded-full">
                  Download Here
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
