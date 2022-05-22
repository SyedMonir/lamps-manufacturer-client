module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lampsTheme: {
          primary: '#bc9f4c',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
