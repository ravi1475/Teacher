
// import React, { useState } from 'react';
// import { Book, Users, CheckCircle, MoreVertical } from 'lucide-react';

// // Define the type for a single stat
// interface Stat {
//   label: string;
//   value: string | number;
//   change?: number; // Optional field for percentage change
// }

// // Define the props for the ProfileCard component
// interface ProfileCardProps {
//   name?: string;
//   avatar?: React.ReactNode;
//   courses?: number;
//   certifications?: number;
//   students?: number;
//   progress?: number;
//   stats?: Stat[];
//   isOnline?: boolean;
//   theme?: 'light' | 'dark'; // Light or dark theme
//   onEdit?: (newName: string) => void; // Callback for the Edit button with new name
// }

// // Reusable Avatar Component
// const Avatar: React.FC<{ avatar: React.ReactNode; isOnline: boolean }> = ({ avatar, isOnline }) => (
//   <div className="relative group" >
//     <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1" >
//       <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-2xl">
//         {avatar}
//       </div>
//     </div>
//     {isOnline && (
//       <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white " />
//     )}
//   </div>
// );

// // Reusable Stat Component
// const StatItem: React.FC<Stat> = ({ label, value, change }) => (
//   <div className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition-colors">
//     <div className="text-gray-500 text-sm mb-1">{label}</div>
//     <div className="text-2xl font-bold text-gray-800" >{value}</div>
//     {change !== undefined && (
//       <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//         {change > 0 ? '+' : ''}
//         {change}% from last week
//       </div>
//     )}
//   </div>
// );

// export const ProfileCard: React.FC<ProfileCardProps> = ({
//   name = 'Rahul kumar',
//   avatar = '👤',
//   courses = 15,
//   certifications = 5,
//   students = 235,
//   progress = 78,
//   stats = [],
//   isOnline = true,
//   theme = 'light',
//   onEdit = () => {},
// }) => {
//   const [showStats, setShowStats] = useState<boolean>(false);
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [newName, setNewName] = useState<string>(name);

//   // Theme-based classes
//   const bgClass =
//     theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100';
//   const cardClass = `${bgClass} rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg`;

//   const handleEditClick = () => {
//     if (editMode) {
//       onEdit(newName); // Pass the updated name to the parent component or handle it here
//     }
//     setEditMode(!editMode);
//   };

//   return (
//     <div className={cardClass}>
//       {/* Profile Header */}
//       <div className="flex items-center gap-4 mb-6"  >
//         <Avatar avatar={avatar} isOnline={isOnline} />

//         {/* User Info */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-1">
//             {editMode ? (
//               <input
//                 type="text"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 className="bg-transparent text-2xl font-bold border-b-2 border-gray-300 focus:outline-none dark:border-gray-700 dark:text-gray-100"
//               />
//             ) : (
//               name
//             )}
//           </h2>
//           <div className="flex items-center gap-4 text-gray-500 text-sm">
//             <span className="flex items-center gap-1">
//               <Book className="w-4 h-4" /> {courses} Courses
//             </span>
//             <span className="flex items-center gap-1">
//               <CheckCircle className="w-4 h-4" /> {certifications} Certifications
//             </span>
//           </div>
//           <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
//             <Users className="w-4 h-4" />
//             <span>{students} Students</span>
//           </div>
//         </div>

//         {/* Edit Button */}
//         <button
//           onClick={handleEditClick}
//           className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl transition-colors flex items-center gap-2 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-white"
//         >
//           {editMode ? 'Save' : 'Edit Profile'}
//           <MoreVertical className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Progress Section */}
//       <div className="space-y-4">
//         <div
//           className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-200"
//           onClick={() => setShowStats(!showStats)}
//         >
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Completion Status</span>
//             <div className="relative w-full max-w-[500px] h-2 bg-gray-300 rounded-full overflow-hidden">
//               <div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//             <span className="text-purple-600 ml-2">{progress}%</span>
//           </div>
//         </div>

//         {/* Stats Section */}
//         {showStats && stats.length > 0 && (
//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <StatItem key={index} {...stat} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;





import React, { useState } from 'react';
import { Book, Users, CheckCircle, MoreVertical, Moon, Sun } from 'lucide-react';

// Define the type for a single stat
interface Stat {
  label: string;
  value: string | number;
  change?: number; // Optional field for percentage change
}

// Define the props for the ProfileCard component
interface ProfileCardProps {
  name?: string;
  avatar?: React.ReactNode;
  courses?: number;
  certifications?: number;
  students?: number;
  progress?: number;
  stats?: Stat[];
  isOnline?: boolean;
  theme?: 'light' | 'dark'; // Light or dark theme
  onEdit?: (newName: string) => void; // Callback for the Edit button with new name
}

// Reusable Avatar Component
const Avatar: React.FC<{ avatar: React.ReactNode; isOnline: boolean }> = ({ avatar, isOnline }) => (
  <div className="relative group">
    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
      <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-2xl">
        {avatar}
      </div>
    </div>
    {isOnline && (
      <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
    )}
  </div>
);

// Reusable Stat Component
const StatItem: React.FC<Stat> = ({ label, value, change }) => (
  <div className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600">
    <div className="text-gray-500 text-sm mb-1 dark:text-gray-300">{label}</div>
    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</div>
    {change !== undefined && (
      <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? '+' : ''}
        {change}% from last week
      </div>
    )}
  </div>
);

const DarkModeButton: React.FC<{ theme: string; onToggle: () => void }> = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
  >
    {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
  </button>
);

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name = 'Rahul Kumar',
  avatar = '👤',
  courses = 15,
  certifications = 5,
  students = 235,
  progress = 88,
  stats = [],
  isOnline = true,
  theme = 'light',
  onEdit = () => {},
}) => {
  const [showStats, setShowStats] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name);
  const [currentTheme, setCurrentTheme] = useState<string>(theme);

  // Toggle theme
  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Theme-based classes
  const bgClass =
    currentTheme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100';
  const cardClass = `${bgClass} rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg`;

  const handleEditClick = () => {
    if (editMode) {
      onEdit(newName); // Pass the updated name to the parent component or handle it here
    }
    setEditMode(!editMode);
  };

  return (
    <div className={cardClass}>
      {/* Dark Mode Button */}
      <div className="flex justify-end mb-4">
        <DarkModeButton theme={currentTheme} onToggle={toggleTheme} />
      </div>

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar avatar={avatar} isOnline={isOnline} />

        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">
            {editMode ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-transparent text-2xl font-bold border-b-2 border-gray-300 focus:outline-none dark:border-gray-700 dark:text-gray-100"
              />
            ) : (
              name
            )}
          </h2>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <Book className="w-4 h-4" /> {courses} Courses
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> {certifications} Certifications
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
            <Users className="w-4 h-4" />
            <span>{students} Students</span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl transition-colors flex items-center gap-2 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-white"
        >
          {editMode ? 'Save' : 'Edit Profile'}
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        <div
          className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={() => setShowStats(!showStats)}
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Completion Status</span>
            <div className="relative w-full max-w-[500px] h-2 bg-gray-300 rounded-full overflow-hidden dark:bg-gray-600">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-purple-600 ml-2">{progress}%</span>
          </div>
        </div>

        {/* Stats Section */}
        {showStats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
