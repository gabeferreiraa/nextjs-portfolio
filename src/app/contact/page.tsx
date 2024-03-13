import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import FolderIcon from "@/components/navbar/FolderIcon/FolderIcon";

const ContactPage = () => {
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
    <>
      <section className="w-full h-[75vh] bg-black flex flex-col sm:relative">
        <div className="text-white w-fit h-fit font-azeret_mono text-4xl tracking-[.6rem] leading-loose absolute inset-x-12 inset-y-24 sm:inset-y-8 hover:text-yellow">
          R1ng...
          <br />
          &ing...
          <br />
          RRR1ngg...
        </div>
        <div className="text-white w-96 h-fit sm:w-fit font-azeret_mono text-3xl tracking-[.6rem] absolute bottom-1/2 right-10 hover:text-yellow">
          +ry!ng t0 r3@ch m3 ~/?
        </div>
        <div className="text-white w-fit h-fit font-azeret_mono text-3xl tracking-[.6rem] absolute inset-y-2/3 sm:inset-y-3/4 inset-x-24 hover:text-yellow">
          MŸ ll1nk$:{" "}
        </div>
      </section>
      <section className="w-full h-[80vh] flex flex-col justify-center items-center gap-24 sm:relative bg-black text-white font-azeret_mono text-sm sm:text-lg tracking-[.3rem]">
        <div className="bottom-20 left-36 sm:absolute h-fit w-fit ">
          <Link className=" " href="mailto:gferreira0404@gmail.com">
            <FolderIcon color={"white"} />
          </Link>
          Email
        </div>
        <div className="top-40 right-40 sm:absolute h-fit w-fit">
          <Link href="https://github.com/gabeferreiraa">
            <FolderIcon color={"white"} />
          </Link>
          GitHub
        </div>
        <div className="inset-y-1/2 inset-x-1/2 sm:absolute h-fit w-fit">
          <Link href="https://www.linkedin.com/in/gabriel-ferreira-544b95251/">
            <FolderIcon color={"white"} />
          </Link>
          LinkedIn
        </div>
        <div className="inset-y-1/4 inset-x-96 sm:absolute h-fit w-fit ">
          <Link href="tel:6093517981">
            <FolderIcon color={"white"} />
          </Link>
          Phone
        </div>
      </section>
    </>
  );
};

export default ContactPage;
