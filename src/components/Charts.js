import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const chartData = [
    { month: 'Jan', students: 65, completion: 78, active: 35 },
    { month: 'Feb', students: 75, completion: 82, active: 45 },
    { month: 'Mar', students: 85, completion: 76, active: 55 },
    { month: 'Apr', students: 95, completion: 88, active: 50 },
    { month: 'May', students: 100, completion: 92, active: 60 },
    { month: 'Jun', students: 130, completion: 86, active: 65 },
];
const ChartsDashboard = () => {
    const [isDark,] = useState(false);
    return (_jsx("div", { className: `${isDark ? 'dark' : ''}`, children: _jsx("div", { className: "flex flex-col h-screen bg-gray-50 dark:bg-gray-900", id: 'Gap', children: _jsx("div", { className: "flex-1 overflow-y-auto p-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 dark:text-white", children: "Student Progress" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "completion", stroke: "#2563eb", strokeWidth: 2 })] }) })] }), _jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 dark:text-white", children: "Active Students" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(AreaChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "students", stroke: "#22c55e", fill: "#22c55e", fillOpacity: 0.3 })] }) })] }), _jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 dark:text-white", children: "Course Activity" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "active", fill: "#3b82f6" })] }) })] })] }) }) }) }));
};
export default ChartsDashboard;
