import React from 'react';
import { motion } from 'framer-motion'

interface propsType {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isMenuOpen: boolean
}

function MenuButton({setIsMenuOpen, isMenuOpen}: propsType) {

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='flex flex-col gap-3 z-10 w-fit h-fit hover:cursor-pointer' onClick={toggleMenu}>
            <motion.span 
                className='w-10 h-0.5 bg-black'
                animate={{rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
                }}
            /> 

            <motion.span 
                className='w-10 h-0.5 bg-black'
                animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                }}
            />
        </div>
    )
}

export default MenuButton