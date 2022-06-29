module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto Slab', serif"
      },
      colors: {
        'primary': '#FD3D57'
      }
    },
  },
  plugins: [],
}
