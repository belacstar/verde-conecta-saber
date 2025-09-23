import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variants = {
    default: 'bg-verde-claro text-white shadow-verde',
    primary: 'bg-verde-folha text-white shadow-verde',
    success: 'bg-verde-claro text-white shadow-verde',
    warning: 'bg-amarelo-sol text-gray-800 shadow-lg',
    earth: 'bg-marrom-terra text-white shadow-lg',
    ods: 'bg-gradient-to-r from-verde-folha to-verde-claro text-white shadow-verde-lg'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-2xl font-bold transition-all duration-300 hover:scale-105
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