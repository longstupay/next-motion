"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard } from "@/components";
import { staggerContainer, textContainer, textVariant2 } from '../utils/motion';


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


export const TypeTitleMotion = (text:string) => {
  return Array.from(text).map((letter, index) => (
    <motion.span variants={textVariant2} key={index}>
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ))
}

export const TitleText = ({title}:{title:string}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
  >
    {title}
  </motion.h2>
);

function Explore() {
  const [active, setActive] = useState("world-2");

  return (
    <section className="min-h-[480px] text-center md:px-32 sm:px-8 pt-8 mt-8 ">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} 
        className="flex flex-col text-white">
        {/* text */}
        <div className=" md:px-36 md:mx-16">
          <motion.p variants={textContainer} className="">{TypeTitleMotion("| The World is best")}</motion.p>
          <TitleText title="Choose the world you want to explore" />
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
