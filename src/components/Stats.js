import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Card } from './ui/Card'; // Updated import path
const statsData = [
    { title: 'Total Students', value: '235', change: '+12%' },
    { title: 'Course Completion', value: '88%', change: '+15%' },
    { title: 'Active Courses', value: '12', change: '+2' },
    { title: 'Performance', value: '92', change: '+8%' }
];
export const Stats = () => {
    return (_jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6", children: statsData.map((stat, index) => (_jsx(motion.div, { whileHover: { scale: 1.02 }, className: "h-full", children: _jsx(Card, { className: "p-6 h-full bg-gradient-to-br from-blue-100 to-purple-100\r\n          dark:from-blue-900/20 dark:to-purple-900/20 dark:text-white", children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600 dark:text-gray-300", children: stat.title }), _jsx("h3", { className: "text-2xl font-bold mt-2", children: stat.value })] }), _jsx("span", { className: "text-green-500 dark:text-green-400", children: stat.change })] }) }) }, index))) }));
};
