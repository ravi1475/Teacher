import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Search, Settings } from 'lucide-react';

export const Topbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg
            bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2
            focus:ring-blue-500 dark:text-white"
          />
        </div>

        <div className="flex items-center space-x-6">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white
            text-xs rounded-full flex items-center justify-center">3</span>
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <div className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <span className="font-medium dark:text-white">Rahul Sharma</span>
          </div>
        </div>
      </div>
    </nav>
  );
};