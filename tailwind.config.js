module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1a1a',    // Main background
          secondary: '#2d2d2d',  // Cards background
          accent: '#3a3a3a'      // Hover states
        },
      },
    },
  },
  plugins: [],
};


const toggleDarkMode = () => {
  const root = document.documentElement;
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }
};