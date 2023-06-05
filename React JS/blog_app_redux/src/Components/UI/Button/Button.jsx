import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  background-color: var(--background-text);
  color: white;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  border-radius: 5px;
  &:hover{
    background-color:var(--text-dark)
  }
`;

export default Button;
