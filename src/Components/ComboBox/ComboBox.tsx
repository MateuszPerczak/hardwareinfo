import type { FC } from "react";
import { useState } from "react";
import StyledComboBox, { StyledComboBoxList } from "./ComboBox.style";
import ComboBoxProps from "./ComboBox.types";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const ComboBox: FC<ComboBoxProps> = ({ header, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((wasOpen: boolean) => !wasOpen);

  return (
    <StyledComboBox onClick={toggleIsOpen}>
      <Text>{header}</Text>
      <Icon>{isOpen ? "\uE010" : "\uE011"}</Icon>
      <StyledComboBoxList
        initial={{ opacity: 0, height: "0%" }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "300%" : "0%" }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 200,
        }}
        onMouseLeave={() => setIsOpen(false)}
      >
        {isOpen && children}
      </StyledComboBoxList>
    </StyledComboBox>
  );
};

export default ComboBox;
