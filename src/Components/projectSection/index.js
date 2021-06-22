import React from 'react';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectH2, ProjectIcon, ProjectP, ProjectCard} from './projectElement';
import { projectData } from './projectData';

function ProjectSection() {
    return (
        <>
            <ProjectContainer id="project">
                <ProjectH1>My Project</ProjectH1>
                <ProjectWrapper>
                    {projectData.map((item, index) => {
                        return (
                        <ProjectCard key={index}>
                            <ProjectIcon src={item.projectImg} />
                            <ProjectH2>{item.projectTitle}</ProjectH2>
                            <ProjectP>{item.projectDescription}</ProjectP>
                        </ProjectCard>
                        );
                    })}
                </ProjectWrapper>
            </ProjectContainer>
            
        </>
    )
}

export default ProjectSection
