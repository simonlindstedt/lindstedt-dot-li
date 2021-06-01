import { ProjectSection, IndicatorDiv } from "./styles";
import Project from "../Project";
import projectsList from "../../data/projects";
import React from "react";

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
            desc={project.description}
            github={project.github}
            color={project.color}
          />
        );
      })}
      <IndicatorDiv>
        {projectRefs.map((ref, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                ref.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              style={{ backgroundColor: projectsList[index].color }}
            >
              {index + 1}
            </button>
          );
        })}
      </IndicatorDiv>
    </ProjectSection>
  );
};

export default Projects;
