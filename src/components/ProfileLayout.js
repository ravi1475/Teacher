import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Headphones, Target, Brain, BookOpen, LineChart, Calendar, Sun, Moon, CircleDot, Code, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "./ui/ProfileCards";
import { Button } from "./ui/button";
// Sample data
const sampleCourses = [
    {
        id: 1,
        title: "Biology Molecular",
        icon: _jsx(CircleDot, { className: "w-8 h-8 text-orange-500" }),
        lessons: 21,
        duration: 45,
        assignments: 2,
        students: 256,
        progress: 78,
        category: "Science"
    },
    {
        id: 2,
        title: "Color Theory",
        icon: _jsx(Palette, { className: "w-8 h-8 text-blue-500" }),
        lessons: 21,
        duration: 45,
        assignments: 2,
        students: 256,
        progress: 60,
        category: "Design"
    },
    {
        id: 3,
        title: "Full Stack Development",
        icon: _jsx(Code, { className: "w-8 h-8 text-green-500" }),
        lessons: 32,
        duration: 60,
        assignments: 4,
        students: 189,
        progress: 45,
        category: "Coding"
    }
];
const DashboardCard = ({ icon, title, description, gradientClass, isDark }) => {
    return (_jsx("div", { className: `p-6 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer
      ${isDark ? 'bg-gray-800 shadow-gray-900/50' : gradientClass}`, children: _jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [_jsx("div", { className: `p-3 rounded-full shadow-md
          ${isDark ? 'bg-gray-700' : 'bg-white/90'}`, children: icon }), _jsx("h3", { className: `text-xl font-semibold
          ${isDark ? 'text-white' : 'text-gray-800'}`, children: title }), _jsx("p", { className: isDark ? 'text-gray-300' : 'text-gray-600', children: description }), _jsx(Button, { variant: isDark ? "outline" : "default", className: `mt-4 ${isDark ? 'hover:bg-gray-600' : ''}`, children: "Start" })] }) }));
};
const MergedDashboard = () => {
    const [isDark, setIsDark] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const scrollContainerRef = useRef(null);
    const toggleTheme = () => setIsDark(!isDark);
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    const featureCards = [
        {
            icon: _jsx(Headphones, { className: `w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-500'}` }),
            title: "Get Consultation",
            description: "Take help from our expert AI",
            gradientClass: "bg-gradient-to-br from-purple-100 to-white"
        },
        {
            icon: _jsx(Target, { className: `w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }),
            title: "Set Target",
            description: "Set your class schedule",
            gradientClass: "bg-gradient-to-br from-blue-100 to-white"
        },
        {
            icon: _jsx(Brain, { className: `w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-500'}` }),
            title: "AI Learning Path",
            description: "Personalized learning recommendations",
            gradientClass: "bg-gradient-to-br from-green-100 to-white"
        },
        {
            icon: _jsx(BookOpen, { className: `w-8 h-8 ${isDark ? 'text-orange-400' : 'text-orange-500'}` }),
            title: "Course Analytics",
            description: "Track student progress and engagement",
            gradientClass: "bg-gradient-to-br from-orange-100 to-white"
        },
        {
            icon: _jsx(LineChart, { className: `w-8 h-8 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}` }),
            title: "Performance Insights",
            description: "AI-powered student performance analysis",
            gradientClass: "bg-gradient-to-br from-indigo-100 to-white"
        },
        {
            icon: _jsx(Calendar, { className: `w-8 h-8 ${isDark ? 'text-pink-400' : 'text-pink-500'}` }),
            title: "Lesson Planning",
            description: "AI-assisted curriculum planning",
            gradientClass: "bg-gradient-to-br from-pink-100 to-white"
        }
    ];
    return (_jsxs("div", { className: `min-h-screen py-12 px-4 transition-colors duration-200
      ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`, children: [_jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: `text-3xl font-bold mb-4
            ${isDark ? 'text-white' : 'text-gray-900'}`, children: "AI Teacher Dashboard Features" }), _jsx("p", { className: isDark ? 'text-gray-300' : 'text-gray-600', children: "Explore our smart teaching assistance tools" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: featureCards.map((card, index) => (_jsx(DashboardCard, { icon: card.icon, title: card.title, description: card.description, gradientClass: card.gradientClass, isDark: isDark }, index))) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [_jsx("h2", { className: `text-xl md:text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`, children: "Today's Courses" }), _jsx("div", { className: "flex flex-wrap gap-2", children: ['All', 'Design', 'Science', 'Coding'].map((category) => (_jsx(Button, { variant: selectedCategory === category ? "default" : "outline", className: `${selectedCategory === category
                                                ? isDark ? "bg-purple-600" : "bg-purple-600 text-white"
                                                : isDark ? "bg-gray-700 text-white" : "bg-white text-gray-600"}`, onClick: () => setSelectedCategory(category), children: category }, category))) })] }), _jsxs("div", { className: "relative", children: [_jsx("button", { onClick: () => scroll('left'), className: `absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hidden md:block
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/80 hover:bg-white'}`, children: _jsx(ChevronLeft, { className: `w-6 h-6 ${isDark ? 'text-white' : 'text-gray-600'}` }) }), _jsx("div", { ref: scrollContainerRef, className: "flex overflow-x-auto gap-4 md:gap-6 px-0 md:px-8 pb-4 hide-scrollbar", style: {
                                            scrollSnapType: 'x mandatory',
                                            scrollBehavior: 'smooth'
                                        }, children: sampleCourses
                                            .filter(course => selectedCategory === 'All' || course.category === selectedCategory)
                                            .map((course) => (_jsx(Card, { className: `flex-none w-[300px] md:w-[350px] lg:w-[400px] p-4 md:p-6
                      ${isDark ? 'bg-gray-800 text-white' : 'bg-white'}`, children: _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: `w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full
                            ${isDark ? 'bg-gray-700' : 'bg-purple-50'}`, children: course.icon }), _jsxs("div", { className: `absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm
                            ${isDark ? 'bg-gray-700 text-purple-400' : 'bg-white text-purple-600'}`, children: [course.progress, "%"] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: course.title }), _jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm text-gray-500", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(BookOpen, { className: "w-4 h-4" }), " ", course.lessons, " Lessons"] }), _jsxs("span", { children: [course.duration, " min"] }), _jsxs("span", { children: [course.assignments, " Assignments"] }), _jsxs("span", { children: [course.students, " Students"] })] })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { variant: "outline", className: "flex-1", children: "Skip" }), _jsx(Button, { className: "flex-1", children: "Continue" })] })] }) }, course.id))) }), _jsx("button", { onClick: () => scroll('right'), className: `absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hidden md:block
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/80 hover:bg-white'}`, children: _jsx(ChevronRight, { className: `w-6 h-6 ${isDark ? 'text-white' : 'text-gray-600'}` }) })] })] }), _jsx("div", { className: "mt-8 flex justify-end", children: _jsxs(Button, { variant: "outline", onClick: toggleTheme, className: isDark ? 'text-white' : '', children: [isDark ? _jsx(Sun, { className: "w-6 h-6 mr-2" }) : _jsx(Moon, { className: "w-6 h-6 mr-2" }), "Toggle Theme"] }) })] }), _jsx("style", { jsx: true, global: true, children: `
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      ` })] }));
};
export default MergedDashboard;
