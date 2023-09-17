/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#404040",
        firebrick: "#ba011c",
        white: "#fff",
        darkgray: "#b3b3b3",
        maroon: "#920016",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "794xl": "813px",
        "18xl": "37px",
        "109xl": "128px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
