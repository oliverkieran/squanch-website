"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Stream = () => {
  return (
    <>
      <section id="stream" className="container mx-auto px-4 md:px-8 2xl-px-0">
        <h1 className="text-4xl font-semibold text-black mb-4">
          Start a Stream
        </h1>
        <p className="text-lg mb-4">
          Choose the commentator and the game you want to commentate:
        </p>

        <form>
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            className="flex flex-col w-1/2 border-b p-2 mb-5"
          />
          <input 
            type="text" 
            name="game"
            placeholder="Game"
            className="flex flex-col w-1/2 border-b p-2 mb-5"
          />
          <button 
            type="submit"
            className="bg-titlebg2 text-black px-4 py-2 rounded-lg mt-2"
          >Go Live</button>
        </form>
      </section>
    </>
  );
};

export default Stream;
