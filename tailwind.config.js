/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)', // Example gradient
        'another-gradient': 'linear-gradient(to right, #4e54c8, #8f94fb)', // Another example
      },
      colors: {
        'customcolor': '#4b3d91',
        'customcolor2': '#0175b2',
        'customcolor3': '#1eae97' ,
        'customcolor4': 'linear-gradient(to right, #4b3d91, #0175b2 )' ,                     // Overriding the blue-500 class with your custom color
      },
      
    },
  },
  plugins: [],
}

