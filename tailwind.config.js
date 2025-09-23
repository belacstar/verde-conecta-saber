/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta do Verde Conecta Saber
        'verde-folha': '#2E7D32',
        'verde-claro': '#66BB6A',
        'marrom-terra': '#8D6E63',
        'amarelo-sol': '#FBC02D',
        'cinza-claro': '#F5F5F5',
        'branco': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'verde': '0 4px 15px rgba(46, 125, 50, 0.15)',
        'verde-lg': '0 10px 30px rgba(46, 125, 50, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(46, 125, 50, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(46, 125, 50, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}