import { StyledNavButton } from "./styles";
import React from "react";

const NavigationButton = ({ isOpen, index, color, text, handleClick }) => {
  const [mouseOver, setMouseOver] = React.useState(false);
  const activePosition = `${64 * (index + 1) * -1}px`;
  return (
    <StyledNavButton
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={handleClick}
      style={{
        backgroundColor: color,
        transform: `translate(0px, ${isOpen ? activePosition : "0px"}) scale(${
          mouseOver ? "1.2" : "1"
        })`,
      }}
    >
      {text}
    </StyledNavButton>
  );
};

export default NavigationButton;
