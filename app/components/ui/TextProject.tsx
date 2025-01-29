"use client"

import React, { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
    techno: string[];
}

type Description = Project[];

function TextProject({selectedProject}:{selectedProject: string}) {

    const projectDescription: Description = [
        {
            title: "Kalipro",
            description: "This platform is designed to connect artisans with clients looking for skilled professionals for all types of home improvement projects. Whether it's minor renovations, specific repairs, or even the complete construction of a house, it helps users find the right experts effortlessly. With a network of specialized artisans, clients can compare offers, read reviews, and select the perfect professional to bring their projects to life with confidence.",
            techno: ["NextJS", "FramerMotion", "Typescript", "MongoDB"]
        },
        {
            title: "Chess",
            description: "Description du projet Chess",
            techno: ["ReactJS", "GSAP", "Javascript"]
        },
        {
            title: "HackerRank",
            description: "Description du projet HackerRank",
            techno: ["ReactJS", "MongoDB", "Typescript"]
        },
    ];

    const [projectDisplay, setProjectDisplay] = useState<Project>(projectDescription[0]);

    useEffect(() => {
        switch(selectedProject){
            case 'Kalipro':
                setProjectDisplay(projectDescription[0])
                break;
            case 'Chess':
                setProjectDisplay(projectDescription[1])
                break;
            case 'HackerRank':
                setProjectDisplay(projectDescription[2])
                break;
        }

        //eslint-disable-next-line
    }, [selectedProject]);


    return (
        <div className='flex flex-col gap-10 h-full text-black ml-4 pl-5 pt-20'>
            <div className='flex items-baseline'>
                <span className='font-semibold text-2xl pr-2'>Title:</span>
                <h2 className='text-5xl pl-20'>{projectDisplay.title}</h2>
            </div>

            <div className='h-96 flex flex-col justify-between'>
                
                <div className='flex items-baseline pr-5'>
                    <span className='font-semibold text-2xl pr-2'>Description:</span>
                    <p className='text-lg'>
                        {projectDisplay.description}
                    </p>
                </div>

                <div className='flex items-center'>
                    <span className='font-semibold text-2xl pr-2'>Technologies:</span>
                    <ul className='flex gap-2'>
                        {
                            projectDisplay.techno.map((tech, i) => {
                                return <li key={i} className='px-4 py-1 rounded-full border'>{tech}</li>
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default TextProject