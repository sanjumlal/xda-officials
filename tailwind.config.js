// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        antipasto: ['AntipastoPro', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
