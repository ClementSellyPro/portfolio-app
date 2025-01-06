"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Menu from './Menu';
import MenuButton from './ui/MenuButton';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
        <div className='relative'>
            <div className=' flex items-center justify-between md:px-10 px-5 py-5 border'>
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='Logo' width={100} height={50} />
                </Link>

                {/* menu button */}
                <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            </div>
            
            {/* menu */}
            <AnimatePresence>
            {
                isMenuOpen && <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            }
            </AnimatePresence>
        </div>
    )
}

export default Header