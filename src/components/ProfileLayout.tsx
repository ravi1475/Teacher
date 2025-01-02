
import React, { useState, useRef } from 'react';
import { 
  Headphones, Target, Brain, BookOpen, LineChart, 
  Calendar, Sun, Moon, CircleDot, Code, Palette,
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Card, CardContent } from "./ui/ProfileCards";
import { Button } from "./ui/button";

// Type definitions
type CategoryType = 'All' | 'Design' | 'Science' | 'Coding';

interface Course {
  id: number;
  title: string;
  icon: React.ReactNode;
  lessons: number;
  duration: number;
  assignments: number;
  students: number;
  progress: number;
  category: Exclude<CategoryType, 'All'>;
}

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientClass: string;
  isDark: boolean;
}

// Sample data
const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Biology Molecular",
    icon: <CircleDot className="w-8 h-8 text-orange-500" />,
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
    icon: <Palette className="w-8 h-8 text-blue-500" />,
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
    icon: <Code className="w-8 h-8 text-green-500" />,
    lessons: 32,
    duration: 60,
    assignments: 4,
    students: 189,
    progress: 45,
    category: "Coding"
  }
];

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  icon, title, description, gradientClass, isDark 
}) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer
      ${isDark ? 'bg-gray-800 shadow-gray-900/50' : gradientClass}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-3 rounded-full shadow-md
          ${isDark ? 'bg-gray-700' : 'bg-white/90'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold
          ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
          {description}
        </p>
        <Button 
          variant={isDark ? "outline" : "default"}
          className={`mt-4 ${isDark ? 'hover:bg-gray-600' : ''}`}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

const MergedDashboard: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => setIsDark(!isDark);

  const scroll = (direction: 'left' | 'right') => {
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
      icon: <Headphones className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />,
      title: "Get Consultation",
      description: "Take help from our expert AI",
      gradientClass: "bg-gradient-to-br from-purple-100 to-white"
    },
    {
      icon: <Target className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />,
      title: "Set Target",
      description: "Set your class schedule",
      gradientClass: "bg-gradient-to-br from-blue-100 to-white"
    },
    {
      icon: <Brain className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-500'}`} />,
      title: "AI Learning Path",
      description: "Personalized learning recommendations",
      gradientClass: "bg-gradient-to-br from-green-100 to-white"
    },
    {
      icon: <BookOpen className={`w-8 h-8 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />,
      title: "Course Analytics",
      description: "Track student progress and engagement",
      gradientClass: "bg-gradient-to-br from-orange-100 to-white"
    },
    {
      icon: <LineChart className={`w-8 h-8 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`} />,
      title: "Performance Insights",
      description: "AI-powered student performance analysis",
      gradientClass: "bg-gradient-to-br from-indigo-100 to-white"
    },
    {
      icon: <Calendar className={`w-8 h-8 ${isDark ? 'text-pink-400' : 'text-pink-500'}`} />,
      title: "Lesson Planning",
      description: "AI-assisted curriculum planning",
      gradientClass: "bg-gradient-to-br from-pink-100 to-white"
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 transition-colors duration-200
      ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl font-bold mb-4
            ${isDark ? 'text-white' : 'text-gray-900'}`}>
            AI Teacher Dashboard Features
          </h1>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            Explore our smart teaching assistance tools
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featureCards.map((card, index) => (
            <DashboardCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              gradientClass={card.gradientClass}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Courses Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Today's Courses
            </h2>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Design', 'Science', 'Coding'] as const).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category 
                      ? isDark ? "bg-purple-600" : "bg-purple-600 text-white" 
                      : isDark ? "bg-gray-700 text-white" : "bg-white text-gray-600"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="relative">
            <button 
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hidden md:block
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/80 hover:bg-white'}`}
            >
              <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </button>
            
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 md:gap-6 px-0 md:px-8 pb-4 hide-scrollbar"
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
              }}
            >
              {sampleCourses
                .filter(course => selectedCategory === 'All' || course.category === selectedCategory)
                .map((course) => (
                  <Card 
                    key={course.id}
                    className={`flex-none w-[300px] md:w-[350px] lg:w-[400px] p-4 md:p-6
                      ${isDark ? 'bg-gray-800 text-white' : 'bg-white'}`}
                  >
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full
                            ${isDark ? 'bg-gray-700' : 'bg-purple-50'}`}>
                            {course.icon}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm
                            ${isDark ? 'bg-gray-700 text-purple-400' : 'bg-white text-purple-600'}`}>
                            {course.progress}%
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" /> {course.lessons} Lessons
                            </span>
                            <span>{course.duration} min</span>
                            <span>{course.assignments} Assignments</span>
                            <span>{course.students} Students</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">Skip</Button>
                        <Button className="flex-1">Continue</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hidden md:block
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/80 hover:bg-white'}`}
            >
              <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="mt-8 flex justify-end">
          <Button
            variant="outline"
            onClick={toggleTheme}
            className={isDark ? 'text-white' : ''}
          >
            {isDark ? <Sun className="w-6 h-6 mr-2" /> : <Moon className="w-6 h-6 mr-2" />}
            Toggle Theme
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MergedDashboard;








