/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#243c5a',
      },
    },
  },
  plugins: [require("daisyui")],
}
