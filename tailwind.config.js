/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0D0208',
        'neon-pink': '#FF00FF',
        'neon-green': '#00FF00',
        'neon-blue': '#00FFFF',
        'neon-purple': '#9400D3',
        'retro-bg': '#1a1a2e',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'filter': 'filter',
      },
    },
  },
  plugins: [],
};