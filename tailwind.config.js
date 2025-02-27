/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:  (theme) =>({
        inputFocus: `${theme('colors.slate.500')} 0px 0px 4px 1px, ${theme('colors.slate.500')}52 2px 2px 16px 0px`,
      }),
    },
  },
  plugins: [],
}

