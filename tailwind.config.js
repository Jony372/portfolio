/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-bg': 'radial-gradient(circle, rgba(51,0,105,1) 20%, rgba(0,0,0,1) 100%)',
        'light-bg': 'radial-gradient(circle, rgba(179,233,199,1) 20%, rgba(240,255,241,1) 100%)',
      },
    },
    colors: {
      primary1: "#330069",
      primary2: "#8367c7",
      primary3: "#c6afff",
      secondary1: "#b3e9c7",
      secondary2: "#c2f8cb",
      secondary3: "#f0fff1"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

