"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NewsletterPopup from "@/components/NewsletterPopup";

const Extension = () => {
  return (
    <>
      {/* <!-- ===== Extension Start ===== --> */}
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
                alt="Extension"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/extension-showcase.png"
                alt="Extension"
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
                <span className="bg-sky-400 text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  New
                </span>{" "}
                Super Easy Setup
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Download the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-500">
                  Squanch
                </span>{" "}
                Chrome Extension
              </h2>
              <p>
                It is effortless to get started. Download the Chrome Extension
                and you are ready. The extension will automatically detect the
                football game that you are watching and enable you to choose
                your commentator.
              </p>

              <div className="mt-7.5 flex justify-center items-center">
                <NewsletterPopup buttonText="Join Waitlist" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Extension End ===== --> */}
    </>
  );
};

export default Extension;
