import { ProjectDiv, StyledLink } from "./styles";

const Project = ({ title, github, desc, color }) => {
  return (
    <ProjectDiv style={{ backgroundColor: color }}>
      <StyledLink href={github}>{title}</StyledLink>
      <p>{desc}</p>
    </ProjectDiv>
  );
};

export default Project;
