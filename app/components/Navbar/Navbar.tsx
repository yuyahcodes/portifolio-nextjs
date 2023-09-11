"use client";

import React, {useState} from 'react';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from 'framer-motion';
import './Navbar.scss';
import Image from "next/image";
import { images } from "@/app/constants/images";
interface NavbarProps {
    id: string;
    title: string;
}

interface navLinksProps {
    navLinks: NavbarProps[];
}

const Navbar = ( { navLinks }: navLinksProps ) => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">

            <div className="app__div">
                <div className="app__navbar-logo">
                    <Image src={images.logo} alt="logo"/>
                </div>
                <div className="container__navbar">
                    <ul className="app__navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.id} className="app__flex p-text">

                                <a href={`#${link.id}`}>{link.title}</a>
                                {/*<div />*/}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}>
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <a href={`#${link.id}`} onClick={() => setToggle(false)}>{link.title}</a>
                                </li>

                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
