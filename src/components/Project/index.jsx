import { ProjectDiv, StyledLink, StyledTags } from "./styles";

const Project = ({ title, github, desc, color, reference, tags }) => {
  return (
    <ProjectDiv
      style={{ backgroundColor: color }}
      className="project"
      ref={reference}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <StyledLink href={github}>{title}</StyledLink>
        <p>{desc}</p>
      </div>
      <StyledTags>
        {tags?.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </StyledTags>
    </ProjectDiv>
  );
};

export default Project;
