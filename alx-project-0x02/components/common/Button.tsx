import React from 'react';
import { type ButtonProps } from '@/interfaces'; 

const sizeClasses = {
  small: 'text-sm px-3 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-5 py-3',
};

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const classes = `bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`;

  return <button className={classes}>{title}</button>;
};

export default Button;
