/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'clr-bg': '#35393f',
        clr: {
          blurple: '#5865f2',
          apple: '#57f287',
          crimson: '#ed4245',
          bee: '#fee75c',
          fuchsia: '#eb459e',
          black: '#23272a',
          text: '#ffffff',
          'text-grayed': '#96989d',
          'text-light': '#dcddde',
          'text-mute': '#a4a6aa',
        },
        'clr-bg': {
          separator: '#4F545C7A',
          content: '#4F545C99',
          input: '#40444B',
          primary: '#36393F',
          secondary: '#2F3136',
          panel: '#292B2F',
          dark: '#202225',
          overlay: '#04040510',
        },
      },
    },
  },
  plugins: [],
}
