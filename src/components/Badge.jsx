import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '' 
}) => {
  const variants = {
    default: 'bg-verde-claro text-white',
    primary: 'bg-verde-folha text-white',
    success: 'bg-verde-claro text-white',
    warning: 'bg-amarelo-sol text-gray-800',
    earth: 'bg-marrom-terra text-white',
    ods: 'bg-gradient-to-r from-verde-folha to-verde-claro text-white'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span 
      className={`
        inline-flex items-center justify-center
        rounded-full font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;