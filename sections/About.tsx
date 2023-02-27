'use client';
import React from 'react'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion'


function About() {
  return (
    <section className='min-h-[320px] text-center md:px-32 sm:px-8 pt-8 mt-8'>
      <p>| About Metaversus</p>
      <p className='text-3xl md:mx-4 md:px-8 px-4 text-gray-200 leading-relaxed'><span className=' font-extrabold text-white'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really real,
         you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want,
         turn your dreams into reality. Let&apos;s explore the madness of the metaverse by scrolling down</p>
        
         <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] mx-auto"
      />
    </section>
  )
}

export default About