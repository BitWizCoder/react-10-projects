import { styled } from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  min-width: 220px;
  font-size: 15px;
  border: 2px solid #000;
  transition: 0.4s background ease-in;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
