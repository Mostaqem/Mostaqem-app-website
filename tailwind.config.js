/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f5',
          100: '#fbeee7',
          200: '#f6dcc8',
          300: '#efc19f',
          400: '#ee8664',
          500: '#e06b47',
          600: '#d1553a',
          700: '#ae4633',
          800: '#8b3b31',
          900: '#725142',
        },
        secondary: {
          50: '#fffdf9',
          100: '#fffaf5',
          200: '#fef3e6',
          300: '#fceedd',
          400: '#fcd29e',
          500: '#f4b661',
          600: '#e09b2d',
          700: '#c2821e',
          800: '#a06d1a',
          900: '#84591a',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e5e5e4',
          300: '#d0d0ce',
          400: '#a8a6a3',
          500: '#87857f',
          600: '#6f6d66',
          700: '#5c5a52',
          800: '#4c4a44',
          900: '#41403b',
        }
      },
      fontFamily: {
        'arabic': ['Kufam', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
