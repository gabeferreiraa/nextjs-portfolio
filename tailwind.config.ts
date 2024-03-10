import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      navy: "#14213d",
      crimson: "#dc143c",
      yellow: "#fca311",
      gray: "#e5e5e5",
      white: "#fff",
      black: "#181818",
      clear: "transparent",
    },
    extend: {
      fontFamily: {
        azeret_mono: ['"azeret_mono"', "monospace"],
        azeret_mono_italic: ['"azeret_mono_italic"', "monospace"],
        gilroy_bold: ['"gilroy_bold"', "sans-serif"],
        gilroy: ['"gilroy"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
