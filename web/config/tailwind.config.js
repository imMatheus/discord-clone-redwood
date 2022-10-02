/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'clr-bg': '#35393f',
        'clr-bg-dark': '#303136',
        'clr-bg-sidebar': '#1f2225',
        'clr-text': '#ffffff',
        'clr-text-grayed': '#96989d',
        'clr-bg': {
          separator: '#4F545C7A',
          content: '#4F545C99',
          input: '#40444B',
          primary: '#36393F',
          secondary: '#2F3136',
          panel: '#292B2F',
          dark: '#202225',
        },
      },
    },
  },
  plugins: [],
}
