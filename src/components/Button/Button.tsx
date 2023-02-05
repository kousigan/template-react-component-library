import React from "react";
import "./Button.scss";
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
}

const Suffix = styled.span`
  font-weight: bold;
  padding-right: 4px;
`;

const Button:React.FC<ButtonProps> = (props) => {
  return <button>
    {/* <Suffix>INK</Suffix> */}
    {props.label}</button>;
};

export default Button;
