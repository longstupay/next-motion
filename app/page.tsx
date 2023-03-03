"use client";

import { Footer, NavBar } from "@/components";
import { Banner, Service } from "@/sections";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial="hidden" animate="show" className="lg:mx-32">
      <NavBar />
      <div>
        <Banner />
        <Service />
      </div>
      <Footer />
    </motion.div>
  );
}
