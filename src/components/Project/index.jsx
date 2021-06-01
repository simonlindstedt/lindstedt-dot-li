import { ProjectDiv, StyledLink } from "./styles";

const Project = ({ title, github, desc, color, reference }) => {
  return (
    <ProjectDiv
      style={{ backgroundColor: color }}
      className="project"
      ref={reference}
    >
      <StyledLink href={github}>{title}</StyledLink>
      <p>{desc}</p>
    </ProjectDiv>
  );
};

export default Project;
