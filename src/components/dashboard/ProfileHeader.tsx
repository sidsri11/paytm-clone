
import React from 'react';

interface ProfileHeaderProps {
  name: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, avatarUrl }: ProfileHeaderProps) => {
  return (
    <header className="flex justify-between items-center p-5">
      <div>
        <h1 className="text-xl font-bold">Hi, {name}</h1>
        <p className="text-gray-600 text-sm">Welcome back!</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-primary-600 text-white text-sm font-medium">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
