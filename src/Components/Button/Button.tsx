import styled from "@emotion/styled";
import type ButtonComponent from "./Button.types";

const Button: ButtonComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 8px;
  user-select: none;
  transition: background-color 200ms;
  background-color: ${({ theme: { button } }) => button};
  border: 1px solid ${({ theme: { border } }) => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
  &:hover {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
  &:active {
    background-color: ${({ theme: { navigation } }) => navigation};
  }
`;

export default Button;
