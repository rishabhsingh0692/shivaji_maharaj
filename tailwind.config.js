/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kesari: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#FF6F00',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          DEFAULT: '#D4AF37',
        },
        navy: {
          800: '#131e3a',
          850: '#0e172e',
          900: '#0a1124',
          950: '#060a17',
          DEFAULT: '#0B1329',
        },
        parchment: {
          50: '#FFFDF9',
          100: '#FAF6EE',
          200: '#F4EBD9',
          300: '#EADBC0',
          DEFAULT: '#FAF5EC',
        },
        sahyadri: {
          700: '#1e4620',
          800: '#153417',
          900: '#0d220f',
          DEFAULT: '#1B4332',
        }
      },
      fontFamily: {
        royal: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        devanagari: ['Rozha One', 'Yatra One', 'serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(255, 111, 0, 0.25)',
        'royal-gold': '0 10px 30px -5px rgba(212, 175, 55, 0.3)',
        'inner-gold': 'inset 0 0 15px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #FF6F00 0%, #D4AF37 50%, #C2410C 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
