/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "primary-color": "#F9FBE7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
