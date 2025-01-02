/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerbgcolor: "#191919",
        primary: "#FCAF3D",
        primarybuttoncolor: "#FA4F09",
        primarytextcolor: "#ED8A19",
      },
      height: {
        bannerheight: "calc(100vh - 112px)",
        smbannerheight: "calc(100vh - 96px)",
      },
    },
  },
  plugins: [],
};
