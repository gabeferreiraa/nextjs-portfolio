import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import { AnimatePresence, animate, motion } from "framer-motion";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Work",
      path: "/work",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="flex flex-col text-5xl text-center font-medium font-azeret_mono sm:text-left md:text-6xl text-yellow z-50 ">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className="leading-loose mb-6 tracking-[.5rem] hover:tracking-[.65em] transition-all duration-200"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
