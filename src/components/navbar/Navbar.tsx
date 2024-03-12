"use client";
import { Squash as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import Links from "./links/Links";
import { Button } from "@mui/base";
import { AnimatePresence, animate, motion } from "framer-motion";

import testImg from "../../../public/images/curves-lines-image.jpg";
import { init } from "next/dist/compiled/webpack/webpack";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 pt-4 w-full flex h-20 items-center justify-between px-12 sm:px-32 z-50 bg-clear">
        <div></div>
        <div
          className="w-14 h-12 flex items-center justify-center cursor-none z-50"
          onClick={toggleMenu}
        >
          <Hamburger
            size={50}
            toggled={isMenuOpen}
            toggle={setMenuOpen}
            color="#fff"
          />
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundImage: `url(${testImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-black fixed left-0 top-0 bottom-0 right-0 w-full h-full z-40 flex justify-center items-center origin-top "
          >
            <div className="flex flex-col w-4/6 justify-center items-center sm:flex-row sm:ml-0">
              <div onClick={toggleMenu} className="flex sm:w-1/2  ">
                <Links />
              </div>
              <div className=" w-1/2 hidden sm:flex flex-col gap-8 justify-start ">
                <div className=" font-gilroy font-thin text-2xl text-yellow leading-normal tracking-[.25em] ">
                  Bring your ideas
                  <br />
                  to life
                </div>
                <div className="font-gilroy w-96 font-thin text-l text-white leading-8 tracking-[.2em]">
                  <p>
                    Use my contact below, send me some ideas & lets get to work
                  </p>
                </div>
                <div className=" font-azeret_mono italic text-s text-yellow mb-4 tracking-wider ">
                  <a href="mailto:gferreira0404@gmail.com">
                    gferreira0404@gmail.com
                  </a>
                </div>

                <Button
                  href="/contact"
                  className="bg-clear w-fit font-azeret_mono font-medium text-white px-6 py-1 border-2 border-solid border-white hover:bg-crimson "
                >
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
