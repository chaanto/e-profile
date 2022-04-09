import React from 'react';
import ProjectItem from './projectItem';
import './projectCard.css';
import { projectData } from './projectInfoData';

function projectCard() {
    return (
        <div className="cards" id='project'>
            <h1>Project</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {projectData.map((item, index) => {
                        return (
                            <ul className="cards__items" key={index}>
                                {item.content.map ((content, index) => {
                                    return (
                                        <ProjectItem key={index}
                                            src={content.photo}
                                            text={content.headline}
                                            label={content.label}
                                            path={content.path}
                                        />
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default projectCard
