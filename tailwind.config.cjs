/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
    },
    extend: {
      spacing: {
        1.5: "1.5px",
        px: "1px",
        0.5: "2px",
        100: "340px",
        63: "15.9rem",
        85: "23rem",
        101: "26rem",
        105: "33rem",
        105.4: "33.4rem",
        106: "34rem",
      },
      screens: {
        sp: "240px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "gray-100": "#272727",
      },
    },
  },
  plugins: [],
};
