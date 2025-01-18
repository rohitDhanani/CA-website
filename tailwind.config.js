/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',    // Custom blue
        secondary: '#0D9488',  // Custom teal
        accent: '#F59E0B',     // Custom yellow
        button:'#2563EB',
        buttonHover:"#1E40AF"
      },
      backgroundImage: {
        'hero-img': "url('src/assets/img1.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}