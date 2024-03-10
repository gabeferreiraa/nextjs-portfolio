"use client";
import { Squash as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import Links from "./links/Links";
import { Button } from "@mui/base";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 pt-4 w-full flex h-20 items-center justify-between px-12 sm:px-32 z-50 bg-clear">
        <div></div>
        <div
          className="w-14 h-12 flex items-center justify-center cursor-pointer z-50"
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
      {isMenuOpen && (
        <motion.section className="fixed left-0 top-0 w-full h-full z-40 bg-black bg-opacity-75 flex flex-col justify-center items-center sm:flex-row">
          <div className="flex flex-col w-4/6 justify-center items-start sm:flex-row sm:ml-0">
            <div className="flex w-1/2 justify-start">
              <Links />
            </div>
            <div className=" w-1/2 hidden sm:flex flex-col gap-8 justify-start ">
              <div className=" font-gilroy font-thin text-2xl text-yellow leading-normal tracking-[.25em] ">
                Bring your ideas
                <br />
                to life
              </div>
              <div className="font-gilroy w-80 font-thin text-l text-white leading-8 tracking-[.2em]">
                <p>
                  Use my contact below, send me some ideas & lets get to work
                </p>
              </div>
              <div className=" font-azeret_mono italic text-s text-yellow mb-4 mt-3">
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
        </motion.section>
      )}
    </>
  );
};

export default Navbar;
