// import React, { useState } from 'react';
// import { Bell, Calendar, ChevronRight, Search, Settings } from 'lucide-react';
// import { Card } from './components/ui/Card.tsx';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const activityData = [
//   { time: '14.10', requests: 30 },
//   { time: '14.20', requests: 45 },
//   { time: '14.30', requests: 25 },
//   { time: '14.40', requests: 48 },
//   { time: '14.50', requests: 35 },
//   { time: '15.00', requests: 42 },
// ];

// export default function Dashboard() {
//   const [selectedTab, setSelectedTab] = useState('All');

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Navigation */}
//       <nav className="bg-white shadow-sm px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div className="flex items-center space-x-6">
//             <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
//             <Calendar className="w-6 h-6 text-gray-600 cursor-pointer" />
//             <Settings className="w-6 h-6 text-gray-600 cursor-pointer" />
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
//               <span className="font-medium">Rahul Sharma</span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="p-6">
//         <div className="grid grid-cols-12 gap-6">
//           {/* Left Sidebar */}
//           <div className="col-span-3">
//             <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
//               <div className="flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4" />
//                 <h2 className="text-xl font-bold">Rahul Sharma</h2>
//                 <div className="text-sm text-gray-600 mt-2">Profile Completed 90%</div>
//                 <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[90%]" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 w-full mt-6 text-center">
//                   <div className="p-3 bg-white rounded-lg shadow-sm">
//                     <div className="font-medium">Chat History</div>
//                     <div className="text-2xl font-bold text-blue-600">0</div>
//                   </div>
//                   <div className="p-3 bg-white rounded-lg shadow-sm">
//                     <div className="font-medium">Saved Chat</div>
//                     <div className="text-2xl font-bold text-purple-600">0</div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             <Card className="mt-6 p-6">
//               <h3 className="font-semibold mb-4 flex justify-between items-center">
//                 Top Students
//                 <ChevronRight className="w-5 h-5 text-gray-400" />
//               </h3>
//               {[
//                 { name: 'Andrew', rank: 2 },
//                 { name: 'Kareen', rank: 3 },
//                 { name: 'Joseph', rank: 1 }
//               ].map((student, index) => (
//                 <div key={index} className="flex items-center justify-between py-3">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
//                     <span className="font-medium">{student.name}</span>
//                   </div>
//                   <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800">
//                     #{student.rank}
//                   </span>
//                 </div>
//               ))}
//             </Card>
//           </div>

//           {/* Main Content */}
//           <div className="col-span-9">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               <Card className="p-6">
//                 <h3 className="font-semibold mb-6">Learning Activity</h3>
//                 <ResponsiveContainer width="100%" height={200}>
//                   <LineChart data={activityData}>
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line 
//                       type="monotone" 
//                       dataKey="requests" 
//                       stroke="url(#colorGradient)" 
//                       strokeWidth={2}
//                     />
//                     <defs>
//                       <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
//                         <stop offset="0%" stopColor="#3B82F6" />
//                         <stop offset="100%" stopColor="#8B5CF6" />
//                       </linearGradient>
//                     </defs>
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Card>

//               <Card className="p-6">
//                 <h3 className="font-semibold mb-4">Course Progress</h3>
//                 <div className="space-y-4">
//                   {[
//                     { name: 'Biology Molecular', progress: 78 },
//                     { name: 'Color Theory', progress: 60 }
//                   ].map((course, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between mb-2">
//                         <span className="font-medium">{course.name}</span>
//                         <span>{course.progress}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
//                           style={{ width: `${course.progress}%` }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               {[
//                 {
//                   title: 'Set Target',
//                   description: 'Set Targets, Reminders and your classes times',
//                   icon: Calendar
//                 },
//                 {
//                   title: 'Get Consultation',
//                   description: 'Take help from our expert AI to Prepare Lectures',
//                   icon: Settings
//                 }
//               ].map((action, index) => (
//                 <Card key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
//                       <p className="text-gray-600 mb-4">{action.description}</p>
//                       <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                         Start
//                       </button>
//                     </div>
//                     <action.icon className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </Card>
//               ))}
//             </div>

//             <div className="mb-6">
//               <div className="flex space-x-4 mb-6">
//                 {['All', 'Design', 'Science', 'Coding'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setSelectedTab(tab)}
//                     className={`px-6 py-2 rounded-lg transition-colors ${
//                       selectedTab === tab
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
//                         : 'bg-white text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React, { useState } from 'react';
// import { 
//   Bell, Calendar, Search, Settings, Home, Book, 
//   Users, FileText, BarChart2, MessageCircle, 
//   HelpCircle, LogOut, Menu, Moon, Sun
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Card } from './components/ui/Card';
// import ChartsDashboard from './components/Charts.tsx';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// export default function Dashboard() {
//   const [isDark, setIsDark] = useState(false);
//   const [isNavExpanded, setIsNavExpanded] = useState(true);
//   const [activeNav, setActiveNav] = useState('/');

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <div className={`${isDark ? 'dark' : ''}`}>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         {/* Left Navigation */}
//         <motion.nav 
//           className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 shadow-lg z-50 
//           ${isNavExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}
//           animate={{ width: isNavExpanded ? 256 : 80 }}
//         >
//           <div className="h-full flex flex-col">
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-8">
//                 {isNavExpanded && (
//                   <motion.h1 className="text-xl font-bold dark:text-white">
//                     Dashboard
//                   </motion.h1>
//                 )}
//                 <button onClick={() => setIsNavExpanded(!isNavExpanded)}
//                   className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <Menu className="w-6 h-6 dark:text-white" />
//                 </button>
//               </div>

//               <div className="space-y-2">
//                 {[
//                   { icon: Home, label: 'Dashboard', path: '/' },
//                   { icon: Book, label: 'Courses', path: '/courses', badge: 3 },
//                   { icon: Users, label: 'Students', path: '/students' },
//                   { icon: FileText, label: 'Assignments', path: '/assignments', badge: 5 },
//                   { icon: BarChart2, label: 'Analytics', path: '/analytics' },
//                   { icon: MessageCircle, label: 'Messages', path: '/messages', badge: 2 },
//                   { icon: HelpCircle, label: 'Help Center', path: '/help' }
//                 ].map((item) => (
//                   <motion.button
//                     key={item.path}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setActiveNav(item.path)}
//                     className={`w-full flex items-center p-3 rounded-lg transition-colors
//                     ${activeNav === item.path 
//                       ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
//                       : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'}`}
//                   >
//                     <item.icon className="w-6 h-6" />
//                     {isNavExpanded && (
//                       <>
//                         <span className="ml-3">{item.label}</span>
//                         {item.badge && (
//                           <span className="ml-auto px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800 
//                           text-blue-600 dark:text-blue-200 rounded-full">
//                             {item.badge}
//                           </span>
//                         )}
//                       </>
//                     )}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-auto p-4">
//               <button onClick={toggleTheme}
//                 className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 
//                 dark:hover:bg-gray-700 dark:text-gray-300">
//                 {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//                 {isNavExpanded && <span className="ml-3">Toggle Theme</span>}
//               </button>
//               <button className="w-full flex items-center p-3 text-red-600 dark:text-red-400 
//               hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg mt-2">
//                 <LogOut className="w-6 h-6" />
//                 {isNavExpanded && <span className="ml-3">Logout</span>}
//               </button>
//             </div>
//           </div>
//         </motion.nav>

//         {/* Main Content */}
//         <div className={`${isNavExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
//           {/* Top Navigation */}
//           <nav className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm px-6 py-4">
//             <div className="flex justify-between items-center">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg 
//                   bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 
//                   focus:ring-blue-500 dark:text-white"
//                 />
//               </div>

//               <div className="flex items-center space-x-6">
//                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
//                   className="relative">
//                   <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//                   <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white 
//                   text-xs rounded-full flex items-center justify-center">3</span>
//                 </motion.button>
                
//                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                   <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//                 </motion.button>

//                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                   <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//                 </motion.button>

//                 <div className="flex items-center space-x-3">
//                   <motion.div 
//                     className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   />
//                   <span className="font-medium dark:text-white">Rahul Sharma</span>
//                 </div>
//               </div>
//             </div>
//           </nav>

//           {/* Dashboard Content */}
//           <div className="p-6">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//               {[
//                 { title: 'Total Students', value: '2,845', change: '+12%' },
//                 { title: 'Course Completion', value: '78%', change: '+5%' },
//                 { title: 'Active Courses', value: '12', change: '+2' }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   className="h-full"
//                 >
//                   <Card className="p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50 
//                   dark:from-blue-900/20 dark:to-purple-900/20 dark:text-white">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
//                         <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
//                       </div>
//                       <span className="text-green-500 dark:text-green-400">{stat.change}</span>
//                     </div>
//                   </Card>
//                 </motion.div>

                
//               ))}

//              {/* <ChartsDashboard/> */}
//             </div>

//             {/* Add your other dashboard components here with dark theme support */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { Dashboard } from './components/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='happy'>
   
    < Dashboard />
    
    </div>
  );
};

export default App;
