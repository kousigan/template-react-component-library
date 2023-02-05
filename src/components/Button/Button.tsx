import React from "react";
import "./Button.scss";
import StyledButton from './StyledButton';

export interface IButtonProps {
  label: string;
}

const Button = ({label}:IButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
