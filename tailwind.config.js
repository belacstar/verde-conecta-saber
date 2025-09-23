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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}