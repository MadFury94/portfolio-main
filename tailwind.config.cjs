/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      textShadow: {
        custom:
          "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff",
      },
    },
    colors: {
      primary: "#0F172A",
      secondary: "#0b1223",
      resume: "#F2F2F2",
      para: "#878787",
      nav: "#5D5A5A",
      white: "#FFFFFF",
      white2: "#EEEEEE",
      grey2: "#F8F8F8",
      darkgrey: "#232a3a",
      black: "#302E2E",
      bgwhite: "#FOF0F0",
      black2: "#000000",
      bgblack: "#0F172A",
      blacktoggle: "#0D0C0C",
      gray: "#B2B2B3",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff",
        },
      });
    },
  ],
};
