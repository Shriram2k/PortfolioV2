/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", 'sans-serif'],
        anton: ["Playwrite GB S", 'cursive'],
      },
      transformStyle: {
        preserve: 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        '180': '180deg',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities, e }) {
      addUtilities(
        {
          '.transform-style-preserve-3d': {
            'transform-style': 'preserve-3d',
          },
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.rotate-y-180': {
            'transform': 'rotateY(180deg)',
          },
          '.perspective-1000': {
            'perspective': '1000px',
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
}
