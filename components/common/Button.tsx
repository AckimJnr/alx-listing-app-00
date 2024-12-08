import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;