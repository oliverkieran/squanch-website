"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
//import Select from "react-select";
import { Input, Select, SelectItem } from "@nextui-org/react";
import gameData from "@/components/NextGames/GameData";
import { GameOption } from "@/types/game";

function prepareOptions() {
  const options: GameOption[] = [];
  gameData.forEach((game) => {
    const title = `${game.homeTeam} vs ${game.awayTeam}`;
    options.push({ value: title, label: title });
  });
  return options;
}

const Stream = () => {
  const [commentator, setCommentator] = useState("");
  const [game, setGame] = useState("");
  const router = useRouter();

  const gameOptions = prepareOptions();

  const createStream = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { commentator, game };
      console.log("BODY:", body);
      const response = await fetch("/api/live-streams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.error({ error: "Live Stream could not be created." });
      } else {
        const data = await response.json();
        console.log("RESPONSE:", data.result);

        // Route to stream page
        router.push(`commentate/stream?id=${data.result.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section id="stream" className="container mx-auto px-4 md:px-8 2xl-px-0">
        <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
          Start a Stream
        </h1>
        <p className="text-lg mb-4">
          Choose the commentator and the game you want to commentate:
        </p>

        <form onSubmit={createStream}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            variant="underlined"
            className="flex flex-col md:w-1/2 mb-5"
            onChange={(e) => setCommentator(e.target.value)}
            value={commentator}
          />
          <Select
            items={gameData}
            label=""
            placeholder="Select a game"
            variant="underlined"
            className="flex flex-col md:w-1/2 mb-5"
            onChange={(e) => setGame(e.target.value)}
          >
            {(item) => (
              <SelectItem key={item.title} value={item.title}>
                {item.title}
              </SelectItem>
            )}
          </Select>
          <input
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 text-white  px-4 py-2 rounded-lg mt-2"
            value="Go Live"
          />
        </form>
      </section>
    </>
  );
};

export default Stream;
