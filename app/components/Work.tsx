"use client"

import React, { useState } from 'react';
import ImageProject from './ui/ImageProject';

function Work() {
  
  const [selectedProject, setSelectedProject] = useState('kalipro');

  return (
    <div id='work'>
      <h1 className='text-8xl font-light ml-10'>Projects</h1>
      <div className='flex text-white h-screen mt-24'>
        
        <div className='w-1/2'>
          <ImageProject project="kalipro" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <ImageProject project="chess" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <ImageProject project="hr" selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        </div>
        <div className='w-1/2'>
          TEXTE SECTION
        </div>

      </div>
    </div>
)
}

export default Work