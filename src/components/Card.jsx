import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  onClick,
  hover = true 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md border border-gray-200 p-4
        ${hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;