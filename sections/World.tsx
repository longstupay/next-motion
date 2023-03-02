"use client";

import { fadeIn, staggerContainer, textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { TypeTitleMotion } from "./Explore";

function World() {
  return (
    <section className="min-h-[320px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto"
      >
        <motion.p
          variants={textContainer}
          className="text-center py-4 text-gray-100"
        >
          {TypeTitleMotion("| People on the World")}
        </motion.p>
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:px-40 leading-relaxed md:mx-16 mx-4 px-8 font-extrabold text-white text-center py-4"
        >
          Track friends around you and invite them to play together in the same
          world
        </motion.p>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="max-w-[1280px] object-contain mx-auto"
        >
          <img src="/map.png" alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
