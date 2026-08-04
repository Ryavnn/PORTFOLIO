/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F2EDE4',
        text: '#0F0F0F',
        accent: '#E83B1F',
        border: '#0F0F0F',
        'card-bg': '#ECEAE0',
      },
      fontFamily: {
        sans: ['"DM Mono"', 'monospace'],
        heading: ['"Syne"', 'sans-serif'],
      },
      fontSize: {
        'xs': 'clamp(11px, 2vw, 12px)',
        'sm': 'clamp(13px, 2.5vw, 14px)',
        'base': 'clamp(15px, 3vw, 16px)',
        'lg': 'clamp(18px, 4vw, 22px)',
        'xl': 'clamp(24px, 5vw, 32px)',
        '2xl': 'clamp(32px, 7vw, 48px)',
        '3xl': 'clamp(28px, 6vw, 64px)',
      },
      spacing: {
        'grid-margin': 'var(--grid-margin)',
        'grid-gutter': 'var(--grid-gutter)',
      },
      maxWidth: {
        'grid-max': 'var(--grid-max-width)',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
