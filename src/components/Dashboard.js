import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Navigation } from './Navigation';
import { Topbar } from './Topbar';
import { Stats } from './Stats';
import ChartsDashboard from './Charts';
import { ProfileCard } from './ProfileCard';
import ResponsiveProfileDashboard from './ProfileLayout';
export const Dashboard = () => {
    const [isDark, setIsDark] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [activeNav, setActiveNav] = useState('/');
    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };
    return (_jsx("div", { className: `${isDark ? 'dark' : ''}`, children: _jsxs("div", { className: "flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300", children: [_jsx(Navigation, { isDark: isDark, isNavExpanded: isNavExpanded, activeNav: activeNav, setIsNavExpanded: setIsNavExpanded, setActiveNav: setActiveNav, toggleTheme: toggleTheme }), _jsxs("div", { className: `flex-1 ml-${isNavExpanded ? '64' : '20'} transition-all duration-300`, children: [_jsx(Topbar, {}), _jsx(ProfileCard, {}), _jsxs("div", { className: "p-6", children: [_jsx(Stats, {}), _jsx("div", { id: 'me', children: _jsx(ResponsiveProfileDashboard, {}) }), _jsx(ChartsDashboard, {})] })] })] }) }));
};
