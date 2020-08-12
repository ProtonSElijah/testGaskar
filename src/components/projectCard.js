import React from 'react';

import projectPhoto from '../assets/images/project1.jpg';
import personIcon from '../assets/images/user.svg';
import personPhoto from '../assets/images/person.jpg';

const ProjectCard = (project, index) => {

    return (
        <div className="projectCard" key={index}>


            <div className="top">
                <img src={projectPhoto} alt="projectPhoto" />
                <div className="branch">Медицина</div>
                <div className="company">Строитей</div>
                <p>Hadassah Medical</p>
            </div>


            <div className="bottom">
                <p className="cardTitle">{project.project.name}</p>

                <div className="info">
                    <div className="info-item">
                        <img src={personIcon} alt="icon" />
                        <p>{project.project.duration}</p>
                    </div>
                    <div className="info-item">
                        <img src={personIcon} alt="icon" />
                        <p>{project.project.leader}</p>
                    </div>
                    <div className="info-item">
                        <img src={personIcon} alt="icon" />
                        <p>{project.project.administrator}</p>
                    </div>
                </div>

                <div className="peopleAndProgress">
                    <div className="people">
                        <img src={personPhoto} alt="person" />
                        <img src={personPhoto} alt="person" />
                        <img src={personPhoto} alt="person" />
                        <img src={personPhoto} alt="person" />
                    </div>
                    <div className="progress">

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;
