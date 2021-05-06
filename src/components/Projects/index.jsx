import { ProjectSection } from "./styles";
import Project from "../Project";
import projectsList from "../../data/projects";

const Projects = () => {
  return (
    <ProjectSection>
      {projectsList.map((project, index) => {
        console.log(project);
        return (
          <Project
            key={index}
            title={project.title}
            desc={project.description}
            github={project.github}
            color={project.color}
          />
        );
      })}
    </ProjectSection>
  );
};

export default Projects;
