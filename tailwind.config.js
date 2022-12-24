/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#FFFFFF",
        "bg-dark": "#2F2E41",
        primary: "#FFFFFF",
        secondary: "#2F2E41",
        accent: "#6C63FF",
        "text-dark": "#FFFFFF",
        "text-light": "#2F2E41",
        "text-accent": "#6C63FF",
        "text-grey": "#6b7280",
      },
    },
  },
  plugins: [],
};
