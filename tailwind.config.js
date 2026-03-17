/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec5b13", // Dashboard primary orange
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
        sage: "#7d9488",
        orange: "#ec5b13",
        "brand-green": "#87A96B", // Previous primary for petshop
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
