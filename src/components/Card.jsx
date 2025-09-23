import React from 'react';

const Card = ({
  children,
  className = '',
  onClick,
  hover = true,
  glass = true
}) => {
  return (
    <div
      className={`
        ${glass ? 'card-glass' : 'bg-white'} 
        rounded-2xl p-6
        ${hover ? 'card-hover' : ''}
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