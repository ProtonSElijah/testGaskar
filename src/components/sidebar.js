import React from 'react';

import companyLogo from '../assets/images/sidebar-companyLogo.png';
import miniIcon from '../assets/images/sidebar-miniIcon.svg';

import store from '../redux/store/store.js';
import { setPanel } from '../redux/actions/main-actions.js';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const currentPanel = useSelector((state) => state.mainState.currentPanel);

    const toPanel = (e) => {
        if (currentPanel !== e.currentTarget.dataset.topanel) {
            document.querySelector('.active').classList.remove('active');
            e.currentTarget.classList.add('active');
            store.dispatch(setPanel(e.currentTarget.dataset.topanel));
        }
    }

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={companyLogo} alt="logo" />
            </div>

            <div className="navigation">
                <div className="item" data-topanel='tasks' onClick={toPanel}>
                    <img src={miniIcon} alt="icon" />
                    <p>Задачи и работы 3</p>
                    <div className="activeLine"></div>
                </div>
                <div className="item active" data-topanel='projects' onClick={toPanel}>
                    <img src={miniIcon} alt="icon" />
                    <p>Проекты</p>
                    <div className="activeLine"></div>
                </div>
                <div className="item" data-topanel='calendar' onClick={toPanel}>
                    <img src={miniIcon} alt="icon" />
                    <p>Календарь</p>
                    <div className="activeLine"></div>
                </div>
                <div className="item" data-topanel='opportunities' onClick={toPanel}>
                    <img src={miniIcon} alt="icon"/>
                    <p>Возможности</p>
                    <div className="activeLine"></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
