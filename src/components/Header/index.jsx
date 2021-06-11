import { StyledHeader } from "./styles";
import github from "../../assets/github-icon-white.svg";
import Graphics from "../Graphics";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        linds
        <br />
        tedt.
      </h1>
      <a href="https://github.com/simonlindstedt">
        <img src={github} alt="github-logo" />
      </a>
      <Graphics />
    </StyledHeader>
  );
};

export default Header;
