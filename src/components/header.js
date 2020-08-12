import React from 'react';

import store from '../redux/store/store.js';
import { signOut } from '../redux/actions/auth-actions.js';

import personPhoto from '../assets/images/person.jpg';

import {Link} from "react-router-dom";

const Header = () => {

    const handlerSignOut = () => {
        store.dispatch(signOut());
    }

    return (
        <div className="header">
            <Link to='/login' onClick={handlerSignOut} className="userPhoto">
                <img src={personPhoto} alt="person" />
            </Link>
        </div>
    );
}

export default Header;
