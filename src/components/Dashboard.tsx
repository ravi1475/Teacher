import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Topbar } from './Topbar';
import { Stats } from './Stats';
import ChartsDashboard from './Charts';
import { ProfileCard } from './ProfileCard';
import ResponsiveProfileDashboard from './ProfileLayout'
export const Dashboard: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (  

    
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation
          isDark={isDark}
          isNavExpanded={isNavExpanded}
          activeNav={activeNav}
          setIsNavExpanded={setIsNavExpanded}
          setActiveNav={setActiveNav}
          toggleTheme={toggleTheme}
        />

        <div className={`flex-1 ml-${isNavExpanded ? '64' : '20'} transition-all duration-300`}>
          <Topbar />
          <ProfileCard />
          <div className="p-6">
          <Stats />
          <div id='me'>
          <ResponsiveProfileDashboard/>
          </div>
            
            
            <ChartsDashboard />
            
          </div>
        </div>
      </div>
    </div>
  );
};