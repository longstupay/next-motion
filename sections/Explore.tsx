"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard } from "@/components";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/planet-05.png",
    title: "Hawkins Labs",
  },
];

function Explore() {
  const [active, setActive] = useState("world-2");

  return (
    <section className="min-h-[480px] text-center md:px-32 sm:px-8 pt-8 mt-8 ">
      <motion.div className="flex flex-col text-white">
        {/* text */}
        <div className=" md:px-36 md:mx-16">
          <p>| The World</p>
          <p className=" md:text-7xl font-extrabold my-4">
            Choose the world you want to explore
          </p>
        </div>
        {/* Card */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 md:mx-16">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
