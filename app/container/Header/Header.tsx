"use client";

import { motion } from "framer-motion";
import { images } from "@/app/constants/images";
import './Header.scss'
import Image from "next/image";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}
const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <div>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Yusuph Abasi</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        {/*<Typewriter*/}
                        {/*    onInit={(typewriter)=> {*/}

                        {/*        typewriter*/}

                        {/*            .typeString("GeeksForGeeks")*/}

                        {/*            .pauseFor(1000)*/}
                        {/*            .deleteAll()*/}
                        {/*            .typeString("Welcomes You")*/}
                        {/*            .start();*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">UI & UX</p>
                        <p className="p-text">Graphic Designer</p>


                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <Image src={images.profile} alt="profile_bg"/>

                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="overlay_circle"
                >
                    <Image src={images.circle} alt="profile_circle"/>
                </motion.div>

            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.nextjs, images.react, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <Image src={circle} alt="profile_bg" />
                    </div>
                ))}
            </motion.div>
        </div>

    );
};

export default Header;