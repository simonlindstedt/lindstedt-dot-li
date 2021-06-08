import { StyledNavigatorDiv, StyledMenuButton } from "./styles";
import menuOpen from "../../assets/menu-open.svg";
import menuClose from "../../assets/menu-close.svg";
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
      >
        <img src={open ? menuClose : menuOpen} />
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
