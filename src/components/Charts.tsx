import React, { useState } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const chartData = [
  { month: 'Jan', students: 65, completion: 78, active: 35 },
  { month: 'Feb', students: 75, completion: 82, active: 45 },
  { month: 'Mar', students: 85, completion: 76, active: 55 },
  { month: 'Apr', students: 95, completion: 88, active: 50 },
  { month: 'May', students: 100, completion: 92, active: 60 },
  { month: 'Jun', students: 130, completion: 86, active: 65 },
];

const ChartsDashboard = () => {
  const [isDark, ] = useState(false);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900" id='Gap'>
        {/* Toggle Dark Mode */}
        {/* <nav className="h-16 bg-white dark:bg-gray-800 shadow-sm px-6 flex items-center justify-between">
          <button 
            onClick={() => setIsDark(!isDark)} 
            aria-label="Toggle Dark Mode"
            className="text-gray-800 dark:text-gray-100"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav> */}

        {/* Charts Section */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Student Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="completion" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Area Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Active Students</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="students"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Course Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="active" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsDashboard;
