"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@mui/base";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-black text-yellow">
      <h1 className="text-crimson text-4xl tracking-widest"> Page Not Found</h1>
      <p className="text-white tracking-wider">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button className="mt-4 bg-clear w-fit text-white px-6 py-1 border-2 border-solid border-white hover:border-yellow hover:text-yellow cursor-none">
        <Link className=" tracking-wide text-sm cursor-none " href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
