"use client"

import React, { useEffect } from 'react'

function RainAnimation() {

    useEffect(() => {
        function rain() {
            let amount = 5;
            let bg = document.querySelector('#hero-bg');
            let i = 0;
        
            while(i < amount){
                let drop = document.createElement('i');
        
                let size = Math.random() * 5;
                let posX = Math.floor(Math.random() * window.innerWidth);
        
                drop.style.width = 0.2 + size+'px';
                drop.style.left = posX + 'px'
                bg.appendChild(drop);
        
                i++;
            }
        
        }
        
        rain();
    }, [])
    
  return (
    // <div>RainAnimation</div>
    <></>
  )
}

export default RainAnimation

