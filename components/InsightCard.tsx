'use client';

import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import React from 'react'

function InsightCard({ imgUrl, title, subtitle, index }:any) {
  return (
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className='flex flex-col lg:flex-row mx-auto w-full items-center gap-4 md:gap-16' key={index}>
        <div className='w-[270px] h-[250px] bg-red-400 rounded-3xl overflow-hidden'><img className='w-full h-full object-fill' src={imgUrl} alt="" /></div>
        <div className='flex-1'>
            <p className='text-white px-4 text-4xl max-w-[460px] leading-relaxed mx-auto md:mx-0 md:px-0'>{title}</p>
            <p className='text-gray-100 text-xl sm:max-w-[300px] md:max-w-[860px] mx-auto md:mx-0 text-center md:text-left'>{subtitle}</p>
        </div>
        <div className='border-4 hidden border-white rounded-full w-24 h-24 md:flex items-center justify-center'>
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
        </div>
    </motion.div>
  )
}

export default InsightCard