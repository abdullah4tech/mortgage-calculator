/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      hueRotate: {
        200: '200deg'
      },
      width: {
        400: '400px'
      }
    },
  },
  plugins: [],
}

