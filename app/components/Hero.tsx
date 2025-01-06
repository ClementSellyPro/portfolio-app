"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-40 h-screen'>
        <div className='flex flex-col justify-center items-center gap-20'>
            <h1 className='text-8xl font-light'>Creative Fullstack</h1>
            <p className='text-4xl font-light'>Let&apos;s dive into my universe</p>
        </div>

        <motion.div
          className='z-0'
          animate={{ y: [0, -20, 0]}}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity
           }}
          >
          <Image src={'/arrow.png'} alt='Arrow' width={40} height={40} />
        </motion.div>
    </div>
  )
}

export default Hero