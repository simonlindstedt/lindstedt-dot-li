import { ProjectSection, IndicatorDiv } from "./styles";
import Project from "../Project";
import projectsList from "../../data/projects";
import React from "react";
import NavigationMenu from "../NavigationMenu";

const Projects = () => {
  const projectRefs = [];
  return (
    <ProjectSection
      style={{ backgroundColor: projectsList[projectsList.length - 1].color }}
    >
      {projectsList.map((project, index) => {
        const projectRef = React.useRef();
        projectRefs.push(projectRef);
        return (
          <Project
            reference={projectRef}
            key={index}
            title={project.title}
            tags={project.tags}
            desc={project.description}
            github={project.github}
            color={project.color}
          />
        );
      })}
      <NavigationMenu
        items={projectsList.reverse()}
        refs={projectRefs.reverse()}
      />
    </ProjectSection>
  );
};

export default Projects;
