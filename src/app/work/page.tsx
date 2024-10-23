"use client";
import React from "react";
// Default theme
import "@splidejs/react-splide/css";
import Link from "next/link";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { generateSlides } from "@/utils";
import { generateSlides2 } from "@/utils/generateSlides/generateSlides2";

const WorkPage = () => {
  const options = {
    type: "loop",
    focus: "center", // Optional: ensures the active slide is centered
    padding: { left: "20rem", right: "20rem" },
    gap: "2rem",
    height: "26rem",
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      640: {
        height: "18rem",
        padding: { left: "0", right: "0" },
      },
    },
  };

  return (
    <>
      <section className="w-full h-screen relative">
        <div className=" font-azeret_mono text-md text-crimson tracking-[.4rem] font-light -rotate-90 translate-y-96 sm:-translate-y-24">
          Consol el el el.,+
          <br />
          Console./log(W3lcom3 U$R 00000001)
        </div>
        <div className="flex ml-16 mt-12 sm:mt-0">
          <div className="text-5xl font-azeret_mono leading-[1.5] sm:leading-[2] text-white tracking-[.5rem] sm:tracking-[.7rem] ">
            W0rk !n
            <br />
            Pr0gre$s ... B_Low
          </div>
        </div>
        <div className="absolute right-20 bottom-16 w-48 h-48 border-2 border-yellow flex rotate-45 justify-center items-center sm:w-64 sm:h-64 sm:inset-x-2/3 sm:bottom-28">
          <div className=" font-azeret_mono text-yellow text-center text-lg sm:text-2xl tracking-widest leading-[2] -rotate-45 ">
            Ccau+i0N:
            <br />
            Ro@d W_rk
            <br />
            @H3aD
          </div>
        </div>
      </section>
      <section className="bg-black w-full block">
        <div className="my-12 mx-auto ">
          <Splide
            options={options}
            aria-labelledby="Figma Wireframes"
            hasTrack={false}
          >
            <h2 className="text-yellow font-azeret_mono text-4xl tracking-wide uppercase mx-auto my-4 w-3/4">
              Impact Six, LLC
            </h2>
            <SplideTrack className="cursor-grab">
              {generateSlides2().map((slide) => (
                <SplideSlide key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="flex flex-col font-bold justify-between mx-auto w-3/4 mt-8 sm:mt-0 sm:flex-row sm:font-normal ">
              <div className="flex flex-col text-white font-gilroy leading-6 tracking-wide uppercase text-2xl sm:text-sm sm:font-thin">
                <p>
                  <span className="font-bold text-yellow">Type </span>
                  Interactive, Assignment
                </p>
                <p>
                  <span className="font-bold text-yellow">Tools </span>
                  HTML, CSS, JS, Tailwind
                </p>
                <p>
                  <span className="font-bold text-yellow">Year </span>
                  2024
                </p>
                <span className="font-bold text-yellow underline mt-4 hover:text-white">
                  <Link href="https://www.figma.com/file/uKxfFHSEtypXptaszp0ddI/IDM-213-Template?type=design&node-id=4%3A491&mode=design&t=KnPQnyuhzNGHUd9B-1">
                    Figma link
                  </Link>
                </span>
              </div>
              <div className="mt-8 sm:mt-0 max-w-[700px]">
                <p className="text-white font-gilroy font-bold tracking-wide text-3xl leading-9 sm:text-base sm:leading-7 ">
                  Our proposal for the Apple Clock app introduces a new grouping
                  feature, resolving the issue of inefficient alarm
                  organization. Users can now easily create, label, and manage
                  alarm groups, improving productivity and organization. This
                  update streamlines time management, providing a personalized
                  and efficient experience for users.
                </p>
              </div>
            </div>
          </Splide>
        </div>
        <div className="my-20 mx-auto ">
          <Splide
            options={options}
            aria-labelledby="Figma Wireframes"
            hasTrack={false}
          >
            <h2 className="text-yellow font-azeret_mono text-4xl tracking-wide uppercase mx-auto my-4 w-3/4">
              Hermae Inc.
            </h2>
            <SplideTrack className="cursor-grab">
              {generateSlides().map((slide) => (
                <SplideSlide key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="flex flex-col font-bold justify-between mx-auto w-3/4 mt-8 sm:mt-0 sm:flex-row sm:font-normal ">
              <div className="flex flex-col text-white font-gilroy leading-5 tracking-wide uppercase text-2xl sm:text-sm sm:font-thin">
                <p>
                  <span className="font-bold text-yellow">Type </span>
                  Branding, Custom
                </p>
                <p>
                  <span className="font-bold text-yellow">Tools </span>
                  React, Nextjs, Figma
                </p>
                <p>
                  <span className="font-bold text-yellow">Year </span>
                  2024
                </p>
                <span className="font-bold text-white mt-1 hover:text-crimson">
                  <Link href="https://github.com/gabeferreiraa/nextjs-portfolio">
                    Repo link
                  </Link>
                </span>
                <span className="font-bold text-yellow underline mt-4 hover:text-white">
                  <Link href="https://portfolio-psi-virid-27.vercel.app">
                    Live link
                  </Link>
                </span>
              </div>
              <div className="mt-8 sm:mt-0 max-w-[700px]">
                <p className="text-white font-gilroy font-bold tracking-wide text-3xl leading-9 sm:text-base sm:leading-7 ">
                  Welcome to my bespoke website, meticulously crafted with the
                  latest web development techniques. From wireframe design using
                  Figma to thorough accessibility testing, every step is
                  optimized for excellence. With Tailwind CSS for responsive
                  styling, the site ensures seamless user experience across
                  devices. Leveraging the power of Vercel and Next.js,
                  deployment is swift and scalable. Explore the epitome of
                  modern web development standards.
                </p>
              </div>
            </div>
          </Splide>
        </div>
        <div className="my-20 mx-auto ">
          <Splide
            options={options}
            aria-labelledby="Figma Wireframes"
            hasTrack={false}
          >
            <h2 className="text-yellow font-azeret_mono text-4xl tracking-wide uppercase mx-auto my-4 w-3/4">
              Custom Portfolio
            </h2>
            <SplideTrack className="cursor-grab">
              {generateSlides().map((slide) => (
                <SplideSlide key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="flex flex-col font-bold justify-between mx-auto w-3/4 mt-8 sm:mt-0 sm:flex-row sm:font-normal ">
              <div className="flex flex-col text-white font-gilroy leading-5 tracking-wide uppercase text-2xl sm:text-sm sm:font-thin">
                <p>
                  <span className="font-bold text-yellow">Type </span>
                  Branding, Custom
                </p>
                <p>
                  <span className="font-bold text-yellow">Tools </span>
                  React, Nextjs, Figma
                </p>
                <p>
                  <span className="font-bold text-yellow">Year </span>
                  2024
                </p>
                <span className="font-bold text-white mt-1 hover:text-crimson">
                  <Link href="https://github.com/gabeferreiraa/nextjs-portfolio">
                    Repo link
                  </Link>
                </span>
                <span className="font-bold text-yellow underline mt-4 hover:text-white">
                  <Link href="https://portfolio-psi-virid-27.vercel.app">
                    Live link
                  </Link>
                </span>
              </div>
              <div className="mt-8 sm:mt-0 max-w-[700px]">
                <p className="text-white font-gilroy font-bold tracking-wide text-3xl leading-9 sm:text-base sm:leading-7 ">
                  Welcome to my bespoke website, meticulously crafted with the
                  latest web development techniques. From wireframe design using
                  Figma to thorough accessibility testing, every step is
                  optimized for excellence. With Tailwind CSS for responsive
                  styling, the site ensures seamless user experience across
                  devices. Leveraging the power of Vercel and Next.js,
                  deployment is swift and scalable. Explore the epitome of
                  modern web development standards.
                </p>
              </div>
            </div>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
