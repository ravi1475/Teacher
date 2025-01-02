import React from 'react';

// Props for the AvatarManager component
interface AvatarManagerProps {
  avatar: string; // Path to the image
  isOnline?: boolean; // Online status indicator
}

const AvatarManager: React.FC<AvatarManagerProps> = ({ avatar, isOnline = false }) => {
  return (
    <div className="relative group">
      {/* Avatar Container */}
      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
        <img
          src={avatar} // Render the avatar image dynamically
          alt="User Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* Online Indicator */}
      {isOnline && (
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
      )}
    </div>
  );
};

export default AvatarManager;
