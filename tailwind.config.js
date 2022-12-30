/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/public/images/image1.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'sevillana': ['Sevillana', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif']
      }
    },
  },
  plugins: [],
}
