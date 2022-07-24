import styled from "@emotion/styled";
import ComboBoxThemeComponent from "./ComboBoxTheme.types";

const ComboBoxTheme: ComboBoxThemeComponent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  height: 100%;
  padding: 0 10px;
  &:hover {
    background-color: ${({ theme: { button } }) => button};
  }
  &:active {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
`;

export default ComboBoxTheme;
