"use client"

import React, { useState } from 'react';
import ImageProject from './ui/ImageProject';
import TextProject from './ui/TextProject';

function Work() {
  
  const [selectedProject, setSelectedProject] = useState('Kalipro');

  return (
    <div id='work' className='ml-10'>
      <h1 className='text-8xl font-light'>Projects</h1>
      <div className='flex text-white h-screen mt-20'>
        
        <div className='flex flex-col gap-5 w-1/2'>
          <ImageProject project="Kalipro" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <ImageProject project="Chess" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <ImageProject project="HackerRank" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        </div>
        <div className='w-1/2'>
          <TextProject selectedProject={selectedProject} />
        </div>

      </div>
    </div>
)
}

export default Work