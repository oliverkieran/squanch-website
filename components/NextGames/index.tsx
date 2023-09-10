"use client";

import React from "react";
import { motion } from "framer-motion";
import gameData from "./GameData";

const NextGames = () => {
  return (
    <>
      <section id="nextGames" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top text-center mx-auto"
          >
            <div className="mb-8">
              <div className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
                <h4 className="font-medium text-sectiontitle text-black dark:text-white">
                  UPCOMING GAMES
                </h4>
              </div>
              <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-2/3 mx-auto mb-4">
                Synchronized Games on Squanch
              </h2>
              <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
                Below are all of the upcoming games, where Squanch's
                synchronization solution will be activated.
              </p>
            </div>
            {/* <!-- ==== List Start ==== --> */}
            <div className="flex justify-center">
              <ul className="max-w-3xl divide-y divide-gray-200 dark-divide-gray-700">
                {gameData.map((game) => (
                  <li key={game.time} className="pb-3 sm:pb-4">
                    <div className="inline-block px-2 py-1 mt-4 mb-2 text-xs font-medium text-black bg-titlebg2 rounded">
                      {game.date} - {game.time}
                    </div>
                    <div className="space-x-4">
                      <div className="font-medium">
                        {game.homeTeam} vs {game.awayTeam}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* <!-- ==== List End ==== --> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NextGames;
