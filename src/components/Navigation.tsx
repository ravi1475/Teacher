import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Book, Users, FileText, BarChart2, 
  MessageCircle, HelpCircle, LogOut, Menu,
  Moon, Sun 
} from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  isNavExpanded: boolean;
  activeNav: string;
  setIsNavExpanded: (value: boolean) => void;
  setActiveNav: (path: string) => void;
  toggleTheme: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Book, label: 'Courses', path: '/courses', badge: 3 },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: FileText, label: 'Assignments', path: '/assignments', badge: 5 },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: MessageCircle, label: 'Messages', path: '/messages', badge: 2 },
  { icon: HelpCircle, label: 'Help Center', path: '/help' }
];

export const Navigation: React.FC<NavigationProps> = ({
  isDark,
  isNavExpanded,
  activeNav,
  setIsNavExpanded,
  setActiveNav,
  toggleTheme
}) => {
  return (
    <motion.nav
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 shadow-lg z-50
      ${isNavExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}
      animate={{ width: isNavExpanded ? 256 : 80 }}
    >
      <div className="h-full flex flex-col">
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {isNavExpanded && (
              <motion.h1 className="text-xl font-bold dark:text-white">
                Dashboard
              </motion.h1>
            )}
            <button 
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="w-6 h-6 dark:text-white" />
            </button>
          </div>

          <div className="space-y-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveNav(item.path)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors
                ${activeNav === item.path
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'}`}
              >
                <item.icon className="w-6 h-6" />
                {isNavExpanded && (
                  <>
                    <span className="ml-3">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800
                      text-blue-600 dark:text-blue-200 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50
            dark:hover:bg-gray-700 dark:text-gray-300"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            {isNavExpanded && <span className="ml-3">Toggle Theme</span>}
          </button>


          
          <button className="w-full flex items-center p-3 text-red-600 dark:text-red-400
          hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg mt-2">
            <LogOut className="w-6 h-6" />
            {isNavExpanded && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};