"use client";
import React, { useEffect } from "react";
import { animate, stagger } from "framer-motion";

interface SpinnerAnimationProps {
  color?: string; // Optional prop for the spinner's color
  offset?: number;
}

const SpinnerAnimation: React.FC<SpinnerAnimationProps> = ({
  color = "#fca311",
  offset = 0.2,
}) => {
  useEffect(() => {
    // Get the number of segments
    const numSegments = document.querySelectorAll(".segment").length;

    // Define stagger offset and duration
    const duration = numSegments * offset;

    // Animate the segments
    animate(
      ".segment",
      { opacity: [0, 1, 0] },
      {
        offset: [0, 0.1, 1],
        duration,
        delay: stagger(offset, { startDelay: -duration }),
        repeat: Infinity,
      }
    );
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
      {/* Apply scale transformation to the top segment */}
      <g
        className="segment"
        opacity="0"
        style={{
          transform: "scale(0.3)",
          transformOrigin: "100px 100px", // Ensure correct scaling center
        }}
      >
        <path
          id="loading-path"
          d="M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z"
          fill={color}
        ></path>
      </g>

      {/* Dynamically generate and scale other segments */}
      {[...Array(7)].map((_, i) => (
        <g
          className="segment"
          opacity="0"
          key={i}
          style={{
            transform: `rotate(${(i + 1) * 45}deg) scale(0.3)`, // Apply scale
            transformOrigin: "100px 100px", // Ensure scaling from center
          }}
        >
          <use href="#loading-path" fill={color} />
        </g>
      ))}
    </svg>
  );
};

export default SpinnerAnimation;
