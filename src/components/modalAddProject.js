import React, { useState } from 'react';

import store from '../redux/store/store.js';
import { toClose, create } from '../redux/actions/projectList-actions.js';

const ModalAddProject = () => {

    const [projectName, setProjectName] = useState('');
    const [duration, setDuration] = useState('');
    const [leader, setLeader] = useState('');
    const [administrator, setAdministrator] = useState('');

    const updateProjectName = (e) => {setProjectName(e.target.value);}
    const updateDuration = (e) => {setDuration(e.target.value);}
    const updateLeader = (e) => {setLeader(e.target.value);}
    const updateAdministrator = (e) => {setAdministrator(e.target.value);}

    const handlerCloseModal = (e) => {
        if (e.target.className === "modalAddProject") {
            store.dispatch(toClose());
        }
    }
    const addNewProject = () => {
        if (projectName.trim() !== ''
                && duration.trim() !== ''
                && leader.trim() !== ''
                && administrator.trim() !== '') {

            store.dispatch(create(projectName, duration, leader, administrator));
            store.dispatch(toClose());
        }
    }

    return (
        <div className="modalAddProject" onClick={handlerCloseModal}>
            <div className="container">
                <p className="title">Создание нового проекта</p>

                <div className="inputField">
                    <p>Название</p>
                    <input placeholder="Название" onChange={updateProjectName}/>
                </div>

                <div className="inputField">
                    <p>Продолжительность</p>
                    <input placeholder="Продолжительность" onChange={updateDuration}/>
                </div>

                <div className="inputField">
                    <p>Руководитель</p>
                    <input placeholder="Руководитель" onChange={updateLeader}/>
                </div>

                <div className="inputField">
                    <p>Администратор</p>
                    <input placeholder="Администратор" onChange={updateAdministrator}/>
                </div>

                <button className="button" onClick={addNewProject}>
                    <p>Создать</p>
                </button>

            </div>
        </div>
    );
}

export default ModalAddProject;
