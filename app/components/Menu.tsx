import Link from 'next/link';
import React, { SetStateAction } from 'react';
import { motion } from "framer-motion";
// import { menuOpacity } from './anim';


const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact'}
]

function Menu({setIsMenuOpen}:{isMenuOpen:boolean,setIsMenuOpen:React.Dispatch<SetStateAction<boolean>>}) {

    function hideMenu(){
        setIsMenuOpen(false);
    }

    
            // variants={menuOpacity} 
            // animate={isMenuOpen ? "open" : "closed"} 
            // [.52,0,.24,1]
    return (
        <motion.div 
            className='fixed inset-0 h-screen w-full flex justify-center items-center bg-slate-300 z-10'
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100% '}}
            transition={{ duration: 0.5, ease: [.62,0,.19,1] }}>
                <ul className='flex flex-col justify-center gap-20 text-center text-8xl font-light'>
                    {
                        menuItems.map((item) => (
                            <motion.li
                                key={item.name}
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className='relative overflow-hidden'>
                                    <motion.div
                                        className='relative'
                                        initial={{ y: '35%', opacity: 0.6 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 }}>
                                        <Link href={item.href} onClick={hideMenu}>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                            </motion.li>
                        ))
                    }
                </ul>
        </motion.div>
    )
}

export default Menu