import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card'; // Updated import path

const statsData = [
  { title: 'Total Students', value: '235', change: '+12%' },
  { title: 'Course Completion', value: '88%', change: '+15%' },
  { title: 'Active Courses', value: '12', change: '+2' },
  { title: 'Performance', value: '92', change: '+8%' }
];

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" >
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="h-full"
        >
          <Card className="p-6 h-full bg-gradient-to-br from-blue-100 to-purple-100
          dark:from-blue-900/20 dark:to-purple-900/20 dark:text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              </div>
              <span className="text-green-500 dark:text-green-400">{stat.change}</span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};