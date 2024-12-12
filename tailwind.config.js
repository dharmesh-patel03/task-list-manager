module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        // Custom UI Colors
        ui: {
          100: '#bf7774',
          200: '#ffefd4',
          300: '#ffdaa8',
          400: '#ffbf71',
          500: '#ff9a38',
          600: '#663539',
          700: '#ef5f07',
          800: '#371a1c',
          900: '#9d380f',
          1000: '#7e3010',
          1100: '#441506',
        },
      },
    },
  },
  plugins: [],
};
