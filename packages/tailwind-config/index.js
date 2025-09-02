module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E40AF",
          light: "#3B82F6", 
          dark: "#1E3A8A"
        }
      },
      spacing: {
        128: "32rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: [
    // Add component styles here
    function({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply px-4 py-2 rounded font-medium': {}
        },
        '.btn-primary': {
          '@apply btn bg-brand text-white': {}
        }
      })
    }
  ]
}