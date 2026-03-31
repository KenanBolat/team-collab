import React, { useState } from 'react';

const AppCard = ({ app, index, onShowDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = app.icon;

  const handleClick = () => {
    onShowDetails(app);
  };

  return (
    <div
      className={`relative ${app.bgColor} rounded-2xl p-6 card-shadow cursor-pointer 
                  transform transition-all duration-300 animate-slide-up group`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Shortcut Badge */}
      <div className={`shortcut-badge bg-gradient-to-br ${app.color} text-white
                       ${isHovered ? 'scale-110 rotate-3' : ''}`}>
        {app.shortcut}
      </div>

      {/* Icon/Illustration */}
      <div className="mb-4 flex justify-center">
        <div className={`w-24 h-24 bg-gradient-to-br ${app.color} rounded-2xl 
                         flex items-center justify-center text-4xl shadow-lg
                         transform transition-all duration-300
                         ${isHovered ? 'scale-110 rotate-6' : ''}`}>
          {app.illustration || <Icon className="w-12 h-12 text-white" />}
        </div>
      </div>

      {/* App Name */}
      <h3 className="text-2xl font-bold text-center mb-2 text-gray-800 
                     transform transition-all duration-300
                     group-hover:scale-105">
        {app.name}
      </h3>

      {/* Description - appears on hover */}
      <div className={`transition-all duration-300 overflow-hidden text-center
                       ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-gray-600 mt-2">
          {app.description}
        </p>
      </div>

      {/* Click indicator */}
      <div className={`absolute inset-0 rounded-2xl border-4 border-transparent
                       transition-all duration-300
                       ${isHovered ? 'border-blue-300' : ''}`}
      />

     
    </div>
  );
};

export default AppCard;