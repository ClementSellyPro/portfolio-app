"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

interface ImageProjectType {
    project: string, 
    selectedProject:string, 
    setSelectedProject:React.Dispatch<React.SetStateAction<string>>}


function ImageProject({project, selectedProject, setSelectedProject}:ImageProjectType) {

    const [opacity, setOpacity] = useState('50');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if(project === selectedProject){
            setOpacity('100');
        }else{
            setOpacity('50');
        }
        console.log(selectedProject);
        console.log(opacity);
        
    }, [selectedProject]);

    function onHoverFn(){
        setSelectedProject(project);
        setIsHovered(true);
    }

    return (
        <motion.div className='relative h-1/4 hover:cursor-pointer rounded-lg border'
        initial={false} animate={{x: isHovered ? 15 : 0}} transition={{ duration: 0.3 }}
        >
            <Image className={`opacity-${opacity} rounded-lg`} src={`/projects/${project}.png`} alt='Project' fill sizes="100vw" style={{ objectFit: "cover" }}
            onMouseEnter={() => onHoverFn()}
            onMouseLeave={() => setIsHovered(false)}
            />
        </motion.div>
    )
}

export default ImageProject