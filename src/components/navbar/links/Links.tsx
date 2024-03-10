import Link from "next/link";
import React from "react";
import "@/app/globals.css";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/home",
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
    <div className=" flex flex-col text-6xl font-medium font-azeret_mono sm:text-5xl text-yellow z-50 ">
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
