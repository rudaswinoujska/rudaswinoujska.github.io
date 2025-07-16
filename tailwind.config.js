module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./css/**/*.css",
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bordo: '#7D1125',
        krem: '#F9F6F2',
        bez: '#eae4df',
        mid: '#d1c7bd',
        accent: '#bc9a97',
        ciemny: '#2d2922',
        tekst: '#222831',
        jasny: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Gilda Display', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: 'class'
};