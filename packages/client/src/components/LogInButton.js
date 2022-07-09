import React from "react";
import styled from "styled-components";

const Button = styled.button`
  --colour-style: #00b0bb;

  color: var(--colour-style);
  border: 3px solid var(--colour-style);
  border-radius: 15px;
  position: absolute;

  background-color: transparent;
  top: 40px;
  right: 100px;
  width: 125px;
  height: 50px;

  &:hover {
    cursor: pointer;
    background-color: var(--colour-style);
    color: white;
  }
`;

export default function LogInButton() {
  return (
    <Button onClick={() => (window.location = "/dashboard")}>
      <b>Log in</b>
    </Button>
  );
}
