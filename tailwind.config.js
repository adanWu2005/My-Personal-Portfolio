/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Colors for dynamic classes
    'bg-blue-100',
    'bg-blue-50',
    'bg-green-100',
    'bg-green-50',
    'bg-purple-100',
    'bg-purple-50',
    'bg-indigo-50',
    'text-blue-800',
    'text-green-800',
    'text-purple-800',
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-indigo-600',
    // Gradients
    'from-blue-500',
    'to-blue-600',
    'from-purple-500',
    'to-purple-600',
    'from-green-500',
    'to-green-600',
  ],
}