/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  prefix: "ink-",
  theme: {
    extend: {
      colors: {
        primary: "#7132F5",
      },
    },
  },
  plugins: [],
};

export default config;
