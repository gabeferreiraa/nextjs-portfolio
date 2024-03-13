import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import { useRouter } from "next/router"; // Import useRouter

const Links = () => {
  const router = useRouter(); // Use useRouter to get the current path

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
    <div className="flex flex-col gap-12 z-50">
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          <a
            className={`font-azeret_mono text-center sm:text-left text-5xl md:text-6xl text-yellow font-normal mb-6 tracking-[.5rem] hover:tracking-[1.6rem] transition-all duration-200 ${
              router.pathname === link.path ? "line-through" : ""
            }`} // Use Tailwind's line-through utility class
          >
            {link.title}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;
