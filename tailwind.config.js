/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd5',
          200: '#fbd6aa',
          300: '#f8b874',
          400: '#f4913c',
          500: '#f17316',
          600: '#e2580c',
          700: '#bb420c',
          800: '#953511',
          900: '#782e12',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        himalayan: {
          red: '#dc2626',
          gold: '#fbbf24',
          blue: '#2563eb',
          green: '#16a34a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} 