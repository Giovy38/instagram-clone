/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "mobile-s": "320px",
      "mobile-m": "375px",
      "mobile-l": "425px",
      "tablet-n": "768px",
      "laptop-n": "1024px",
      "laptop-l": "1440px",
      "laptop-4k": "2560px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
