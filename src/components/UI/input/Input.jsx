import React from "react";
import styled from "styled-components";

function Input({ type, value, onChange }) {
  return (
    <div>
      <Inputs
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

const Inputs = styled.input`
  outline: none;
  border: none;
  padding: 10px 20px;
  width: 380px;
  font-size: 1.5rem;
  border-radius: 10px 0px 0px 10px;
`;
