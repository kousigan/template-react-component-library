import React from "react";
import "./Button.scss";
import { StyledButton } from "./StyledButton";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};

export default Button;
