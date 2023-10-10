const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        front: `rgb(var(--front) / <alpha-value>)`,
        back: `rgb(var(--back) / <alpha-value>)`,
      },
      fontFamily: {
        sans: [
          "GeneralSans-Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};
