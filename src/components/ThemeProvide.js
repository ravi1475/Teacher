"use strict";
// // contexts/ThemeContext.tsx
// import React, { createContext, useContext, useState, ReactNode } from 'react';
// interface ThemeContextType {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }
// interface ThemeProviderProps {
//   children: ReactNode;
// }
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//     // Initialize from localStorage if available
//     const savedTheme = localStorage.getItem('darkMode');
//     return savedTheme ? JSON.parse(savedTheme) : false;
//   });
//   const toggleTheme = (): void => {
//     setIsDarkMode(prev => {
//       const newValue = !prev;
//       localStorage.setItem('darkMode', JSON.stringify(newValue));
//       return newValue;
//     });
//   };
//   const value = {
//     isDarkMode,
//     toggleTheme
//   };
//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
// // App.tsx
// interface AppProps {
//   children?: ReactNode;
// }
// export const App: React.FC<AppProps> = ({ children }) => {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// };
// // Example usage in a component
// // components/Navbar.tsx
// interface NavbarProps {
//   title?: string;
// }
// export const Navbar: React.FC<NavbarProps> = ({ title = 'My App' }) => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   return (
//     <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
//       <h1>{title}</h1>
//       <button 
//         onClick={toggleTheme}
//         className={`
//           px-4 py-2 rounded
//           ${isDarkMode 
//             ? 'bg-gray-700 text-white hover:bg-gray-600' 
//             : 'bg-gray-200 text-black hover:bg-gray-300'}
//         `}
//       >
//         {isDarkMode ? '🌞 Light' : '🌙 Dark'}
//       </button>
//     </nav>
//   );
// };
// // Example usage in any other component
// // components/Card.tsx
// interface CardProps {
//   title: string;
//   content: string;
// }
// export const Card: React.FC<CardProps> = ({ title, content }) => {
//   const { isDarkMode } = useTheme();
//   return (
//     <div className={`
//       p-4 rounded-lg shadow-md
//       ${isDarkMode 
//         ? 'bg-gray-800 text-white' 
//         : 'bg-white text-gray-800'}
//     `}>
//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };
