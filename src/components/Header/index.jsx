import { StyledHeader } from "./styles";
import github from "../../assets/github-icon-white.svg";

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
    </StyledHeader>
  );
};

export default Header;
