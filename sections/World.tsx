'use client';

import React from 'react'

function World() {
  return (
    <section className='min-h-[320px]'>
        <div className='mx-auto'>
            <p className='text-center py-4 text-gray-100'>| People on the World</p>
            <p className='text-5xl md:px-40 leading-relaxed md:mx-16 mx-4 px-8 font-extrabold text-white text-center py-4'>Track friends around you and invite them to play together in the same world</p>
            <div className='max-w-[1280px] object-contain mx-auto'>
                <img src="/map.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default World