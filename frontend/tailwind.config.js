/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flat utilities: bg-brand-orange, text-brand-orange, hover:bg-brand-orange, etc.
        'brand-orange': '#FF4D00',
        'brand-dark': '#0A0A0A',
        'brand-gray': '#1A1A1A',
        // Nested form: bg-brand-500, text-brand-orange (legacy — keep for backward compat)
        brand: {
          orange: '#FF4D00',
          dark: '#0A0A0A',
          gray: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
