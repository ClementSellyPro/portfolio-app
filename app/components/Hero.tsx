"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../rainAnimation.css'

function Hero() {

      useEffect(() => {
        function rain() {
            const amount = 15;
            const bg = document.querySelector('#hero-bg');
            let i = 0;
        
            while(i < amount){
                const drop = document.createElement('i');
        
                const size = Math.random() * 5;
                const posX = Math.floor(Math.random() * window.innerWidth);
                const delay = Math.random() * -20;
                const duration = Math.random() * 5;
        
                drop.style.width = 0.2 + size+'px';
                drop.style.left = posX + 'px';
                drop.style.animationDelay = delay + 's';
                drop.style.animationDuration = 1 + duration + 's';
                bg?.appendChild(drop);
        
                i++;
            }
        }
        
        rain();
    }, [])

  return (
    <div id='hero-bg' className='flex flex-col items-center justify-center gap-40 h-screen overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-20'>
            <h1 className='text-9xl font-light'>Creative Fullstack</h1>
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