/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        secondary: "#535bf2",
        light: "rgba(255, 255, 255, 0.87)",
      },
      backgroundColor: {
        primary: "#242424",
        secondary: "#535bf2",
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
