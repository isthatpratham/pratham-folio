/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'spline-white': '#FFFFFF',
        'spline-light-grey': '#CCCCCC',
        'spline-grey': '#888888',
        'spline-dark-grey': '#333333',
        'spline-black': '#0A0A0A',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-grey': 'rgba(128, 128, 128, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.15)',
        'glow-grey': '0 0 20px rgba(128, 128, 128, 0.2)',
        'glow-strong': '0 0 40px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};