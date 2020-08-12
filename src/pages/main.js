import React from 'react';

import Sidebar from '../components/sidebar.js';
import Header from '../components/header.js';
import ModalAddProject from '../components/modalAddProject.js';

import store from '../redux/store/store.js';
import { toOpen } from '../redux/actions/projectList-actions.js';
import { useSelector } from 'react-redux';

import ProjectCard from '../components/projectCard.js';

const MainPage = () => {

    const isOpen = useSelector((state) => state.projectListState.isOpen);
    const projectList = useSelector((state) => state.projectListState.projectList);
    const currentPanel = useSelector((state) => state.mainState.currentPanel);

    const handlerOpenModal = () => {store.dispatch(toOpen());}

    return (
        <div className="main_page">

            { isOpen &&
                <ModalAddProject />
            }

            {(currentPanel === 'tasks') &&
                <div className="article">
                    <h1>Задачи и работы 3</h1>
                </div>
            }

            {(currentPanel === 'calendar') &&
                <div className="calendar">
                    <h1>Календарь</h1>
                </div>
            }

            {(currentPanel === 'opportunities') &&
                <div className="article">
                    <h1>Возможности</h1>
                </div>
            }

            {(currentPanel === 'projects') &&

                <div className="article">

                    <h1>Проекты</h1>

                    <div className="navigation">
                        <div className="navigation-item active">
                            <p>СПИСОК ПРОЕКТОВ</p>
                            <div className="activeLine"></div>
                        </div>
                        <div className="navigation-item">
                            <p>ДОРОЖНАЯ КАРТА</p>
                            <div className="activeLine"></div>
                        </div>
                    </div>

                    <div className="listOfProjects-title">
                        <h2>СПИСОК ПРОЕКТОВ</h2>
                        <div className="button" onClick={handlerOpenModal}>Добавить проект</div>
                    </div>

                    <div className="projectList">
                        {projectList.map(
                            (project, index) =>
                                <ProjectCard project={project} index={index}/>
                        )}
                    </div>

                </div>

            }

        </div>
    );
}

export default MainPage;
