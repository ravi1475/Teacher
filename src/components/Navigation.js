import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Home, Book, Users, FileText, BarChart2, MessageCircle, HelpCircle, LogOut, Menu, Moon, Sun } from 'lucide-react';
const navigationItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Book, label: 'Courses', path: '/courses', badge: 3 },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: FileText, label: 'Assignments', path: '/assignments', badge: 5 },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: MessageCircle, label: 'Messages', path: '/messages', badge: 2 },
    { icon: HelpCircle, label: 'Help Center', path: '/help' }
];
export const Navigation = ({ isDark, isNavExpanded, activeNav, setIsNavExpanded, setActiveNav, toggleTheme }) => {
    return (_jsx(motion.nav, { className: `fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 shadow-lg z-50
      ${isNavExpanded ? 'w-64' : 'w-20'} transition-all duration-300`, animate: { width: isNavExpanded ? 256 : 80 }, children: _jsxs("div", { className: "h-full flex flex-col", children: [_jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [isNavExpanded && (_jsx(motion.h1, { className: "text-xl font-bold dark:text-white", children: "Dashboard" })), _jsx("button", { onClick: () => setIsNavExpanded(!isNavExpanded), className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700", children: _jsx(Menu, { className: "w-6 h-6 dark:text-white" }) })] }), _jsx("div", { className: "space-y-2", children: navigationItems.map((item) => (_jsxs(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => setActiveNav(item.path), className: `w-full flex items-center p-3 rounded-lg transition-colors
                ${activeNav === item.path
                                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'}`, children: [_jsx(item.icon, { className: "w-6 h-6" }), isNavExpanded && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ml-3", children: item.label }), item.badge && (_jsx("span", { className: "ml-auto px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800\r\n                      text-blue-600 dark:text-blue-200 rounded-full", children: item.badge }))] }))] }, item.path))) })] }), _jsxs("div", { className: "mt-auto p-4", children: [_jsxs("button", { onClick: toggleTheme, className: "w-full flex items-center p-3 rounded-lg hover:bg-gray-50\r\n            dark:hover:bg-gray-700 dark:text-gray-300", children: [isDark ? _jsx(Sun, { className: "w-6 h-6" }) : _jsx(Moon, { className: "w-6 h-6" }), isNavExpanded && _jsx("span", { className: "ml-3", children: "Toggle Theme" })] }), _jsxs("button", { className: "w-full flex items-center p-3 text-red-600 dark:text-red-400\r\n          hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg mt-2", children: [_jsx(LogOut, { className: "w-6 h-6" }), isNavExpanded && _jsx("span", { className: "ml-3", children: "Logout" })] })] })] }) }));
};
