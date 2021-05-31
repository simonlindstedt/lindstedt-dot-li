import { StyledSection } from "./styles";
import large from "../../assets/me.jpg";
import medium from "../../assets/me@0.75x.jpg";
import small from "../../assets/me@0.5x.jpg";
const About = () => {
  return (
    <StyledSection>
      <h2>About me.</h2>
      <img
        src={small}
        srcSet={`
        ${small} 480,
        ${medium} 700w,
        ${large} 960w,
        `}
      />
      <p>
        Currently a full-stack web development student @YRGO <br />
        with a burning passion for developing both functional and useless
        things.
        <br />
        This site was built using mainly React, source code can be found{" "}
        <a href="https://github.com/simonlindstedt/lindstedt-dot-li">here.</a>
      </p>
      <a href="mailto:simon.lindstedt@gmail.com">
        <button>Contact me</button>
      </a>
    </StyledSection>
  );
};

export default About;
