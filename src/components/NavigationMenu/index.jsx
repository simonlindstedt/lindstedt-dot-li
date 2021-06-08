import { StyledNavigatorDiv, StyledMenuButton } from "./styles";
import NavigationItem from "../NavigationItem";
import React from "react";

const NavigationMenu = ({ items, refs }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledNavigatorDiv>
      <StyledMenuButton
        onClick={() => {
          setOpen(!open);
        }}
        className={open ? "open" : ""}
      >
        {open ? "open" : "not open"}
      </StyledMenuButton>
      {refs.map((ref, index) => {
        return (
          <NavigationItem
            key={index}
            isOpen={open}
            index={index}
            color={items[index].color}
            text={refs.length - index}
            handleClick={() => {
              ref.current.scrollIntoView({
                behavior: "smooth",
              });
              setOpen(!open);
            }}
          />
        );
      })}
    </StyledNavigatorDiv>
  );
};

export default NavigationMenu;
