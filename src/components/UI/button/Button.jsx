import React from "react";
import styled from "styled-components";

function Button({ children, onClick, disabled }) {
  return (
    <Buttons onClick={onClick} disabled={disabled}>
      {children}
    </Buttons>
  );
}

export default Button;

const Buttons = styled.button`
  background-color: #151515;
  color: #bbbbbb;
  border-radius: 0px 10px 10px 0px;
  padding: 12px 30px 12px 60px;
  font-size: 1.3rem;
  border: none;
  transition: 0.2s;

  :hover {
    background-color: #000000;
    color: #fbfbfb;
  }

  :active {
    background-color: #151515;
    color: #dfdfdf;
  }

  :disabled {
    background-color: #151515;
    color: #bbbbbb;
  }
`;
