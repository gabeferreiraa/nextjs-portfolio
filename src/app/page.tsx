"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/base"; // Ensure correct import for MUI Button

const Home: React.FC = () => {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&?'";
  const [spanTexts, setSpanTexts] = useState<string[]>([
    "Welcome",
    "To",
    "Gabriel",
    "Ferreiras",
    "Page",
  ]);

  // Ref for the spans to attach onmouseover dynamically
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const stylizedTexts = ["Welc0me", "t0", "G@br!el", "Fe&reir@'s", "P@GE"];
  useEffect(() => {
    const onMouseOver = (idx: number) => {
      let iteration = 0;
      let interval: number;

      const updateText = () => {
        const newText = stylizedTexts[idx]
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return stylizedTexts[idx][index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        setSpanTexts((currentTexts) =>
          currentTexts.map((text, mapIdx) => (mapIdx === idx ? newText : text))
        );

        iteration += 1 / 3;
        if (iteration >= stylizedTexts[idx].length) {
          clearInterval(interval);
        }
      };

      interval = window.setInterval(updateText, 30);

      return () => clearInterval(interval);
    };

    spansRef.current.forEach((span, idx) => {
      if (!span) return;
      span.onmouseover = () => onMouseOver(idx);
    });
  }, [stylizedTexts, letters]);

  return (
    <>
      <section className="h-screen w-full relative grid grid-cols-1 sm:grid-cols-2">
        <div className="ml-10 mt-24 w-fit sm:ml-24 flex flex-col justify-center text-left gap-12 col-span-1">
          {spanTexts.map((text, idx) => (
            <span
              key={idx}
              ref={(el) => (spansRef.current[idx] = el)}
              className="text-5xl w-fit italic uppercase font-azeret_mono text-yellow tracking-[.4rem]"
              data-value={text}
            >
              {text}
            </span>
          ))}
        </div>
        <div className=" sm:translate-y-28 flex flex-col justify-center gap-6 sm:gap-14 max-w-[900px] ml-10 sm:ml-0 ">
          <div className=" text-lg uppercase text-white tracking-wider sm:tracking-[.25rem] font-azeret_mono font-extralight">
            Designer- Noun
          </div>
          <div className=" text-lg uppercase text-white tracking-wider sm:tracking-[.25rem] font-azeret_mono">
            Plural- Noun: De$igners
          </div>
          <div className=" text-lg uppercase  text-white tracking-wider sm:tracking-[.25rem] font-azeret_mono">
            Definitions:
          </div>
          <div className=" text-lg uppercase max-w-[400px] text-white tracking-wider sm:tracking-[.25rem] font-azeret_mono">
            1.a person who plans the form, look, or workings of something before
            its being made or built, typically by drawing it in detail.
          </div>
          <div className=" text-lg uppercase text-crimson tracking-wider sm:tracking-[.25rem] font-azeret_mono">
            {"{"} Gabriel Ferreira {"}"}
          </div>
        </div>
      </section>
      <div className="h-52 sm:h-48 w-full bg-white flex justify-center items-start flex-col">
        <div className="self-center w-3/4">
          <div className="leading-6 text-lg sm:leading-[1.7] sm:text-2xl font-light font-gilroy tracking-widest mb-4">
            Hello! I'm a User Experience and Interaction Designer based in
            Philadelphia, PA. I focus on full-stack development and
            accessibility design.
          </div>
          <Button className="bg-clear w-fit font-azeret_mono text-sm font-thin sm:font-medium text-navy px-6 py-1 border-2 border-solid border-navy hover:bg-navy hover:text-white">
            <a href="/contact">Reach Out</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
