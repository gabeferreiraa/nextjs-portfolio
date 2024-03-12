"use client";
import React from "react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { generateSlides } from "@/utils";

const WorkPage = () => {
  const options = {
    type: "loop",
    padding: { left: "20rem", right: "20rem" },
    gap: "1rem",
    height: "28rem",
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
        <div className="my-16 mx-auto ">
          <Splide
            options={options}
            aria-labelledby="Figma Wireframes"
            hasTrack={false}
          >
            <h2 className="text-yellow font-azeret_mono text-4xl tracking-wide uppercase mx-auto my-4 w-3/4">
              Clock App
            </h2>
            <SplideTrack className="cursor-grab">
              {generateSlides().map((slide) => (
                <SplideSlide key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="flex flex-col font-bold justify-between mx-auto w-3/4 mt-8 sm:mt-0 sm:flex-row sm:font-normal ">
              <div className="flex flex-col text-white font-gilroy leading-7 tracking-wide uppercase text-2xl sm:text-base sm:font-thin">
                <p>
                  <span className="font-bold text-yellow">Type </span>
                  Branding, Q.O.L.
                </p>
                <p>
                  <span className="font-bold text-yellow">Tools </span>
                  Figma, After Effects
                </p>
                <p>
                  <span className="font-bold text-yellow">Year </span>
                  2023
                </p>
              </div>
              <div className="mt-8 sm:mt-0 max-w-[700px]">
                <p className="text-white font-gilroy font-bold tracking-wide text-3xl leading-9 sm:text-base sm:leading-7 ">
                  Our proposal for the Apple Clock app introduces a new grouping
                  feature, resolving the issue of inefficient alarm
                  organization. Users can now easily create, label, and manage
                  alarm groups, improving productivity and organization. This
                  update streamlines time management, providing a personalized
                  and efficient experience for users
                </p>
              </div>
            </div>
          </Splide>
        </div>
        <div className="my-16 mx-auto ">
          <Splide
            options={options}
            aria-labelledby="Figma Wireframes"
            hasTrack={false}
          >
            <h2 className="text-yellow font-azeret_mono text-4xl tracking-wide uppercase mx-auto my-4 w-3/4">
              Clock App
            </h2>
            <SplideTrack className="cursor-grab">
              {generateSlides().map((slide) => (
                <SplideSlide key={slide.src}>
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="flex flex-col font-bold justify-between mx-auto w-3/4 mt-8 sm:mt-0 sm:flex-row sm:font-normal ">
              <div className="flex flex-col text-white font-gilroy leading-7 tracking-wide uppercase text-2xl sm:text-base sm:font-thin">
                <p>
                  <span className="font-bold text-yellow">Type </span>
                  Branding, Q.O.L.
                </p>
                <p>
                  <span className="font-bold text-yellow">Tools </span>
                  Figma, After Effects
                </p>
                <p>
                  <span className="font-bold text-yellow">Year </span>
                  2023
                </p>
              </div>
              <div className="mt-8 sm:mt-0 max-w-[700px]">
                <p className="text-white font-gilroy font-bold tracking-wide text-3xl leading-9 sm:text-base sm:leading-7 ">
                  Our proposal for the Apple Clock app introduces a new grouping
                  feature, resolving the issue of inefficient alarm
                  organization. Users can now easily create, label, and manage
                  alarm groups, improving productivity and organization. This
                  update streamlines time management, providing a personalized
                  and efficient experience for users
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
