/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050208',
          900: '#0a0512',
          850: '#0f0a1c',
          800: '#140d26',
          700: '#1d1338',
        },
        violet: {
          DEFAULT: '#8b5cf6',
        },
        lavender: {
          100: '#f3eeff',
          200: '#e4d9ff',
          300: '#cbb4ff',
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        neon: {
          DEFAULT: '#b388ff',
          dim: '#7c5cff',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee-up': 'marqueeUp 28s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marqueeUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
