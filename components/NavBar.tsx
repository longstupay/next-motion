'use client';

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from '../styles/';
import { navVariants } from '../utils/motion';

function NavBar() {

 const clsPadding = useMemo(()=>{
  return styles['paddings']
 },[])

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`flex justify-between items-center md:px-16 md:py-8 md:mx-16 text-white`}>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="flex-1 text-center font-extrabold md:text-2xl text-xl">
        MetaVersus
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </motion.nav>
  );
}

export default NavBar;
