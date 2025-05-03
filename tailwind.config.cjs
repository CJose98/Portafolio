/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",//"#050816",
        secondary: "#d1d0da",
        tertiary: "#0643b4",//"#151030",    //fuerte
        "black-100": "#2a63ce",//"#100d25", //suave
        "black-200": "#090325",   
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/fondo.jpg')",
      },
    },
  },
  plugins: [],
};
/*
#2a63ce
#0643b4
#fa00d4
#fefefe
#d1d0da
#aaa6c3
#ce75e4


HOLOGRAPHIC 3d shapes
*/