import { StyledSection } from "./styles";
import large from "../../assets/me.jpg";
import medium from "../../assets/me@0.75x.jpg";
import small from "../../assets/me@0.5x.jpg";
import cv from "../../assets/cv.pdf";
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
        with a passion for developing both functional and useless things.
        <br />
        This site was built using React, source code can be found{" "}
        <a href="https://github.com/simonlindstedt/lindstedt-dot-li">here.</a>
      </p>
      <div>
        <a href="mailto:simon.lindstedt@gmail.com">
          <button>Contact me</button>
        </a>
        <a href={cv}>
          <button>CV</button>
        </a>
      </div>
    </StyledSection>
  );
};

export default About;
