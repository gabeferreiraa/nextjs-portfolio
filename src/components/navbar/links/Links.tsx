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
    <div className="flex flex-col gap-12 z-50 ">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className=" font-azeret_mono text-center sm:text-left text-5xl md:text-6xl text-yellow font-normal mb-6 tracking-[.5rem] hover:tracking-[1.6rem] transition-all duration-200"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
