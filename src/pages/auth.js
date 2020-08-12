import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import store from '../redux/store/store.js';
import { logIn, signOut } from '../redux/actions/auth-actions.js';
import { setPanel } from '../redux/actions/main-actions.js';

const AuthPage = () => {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [isSave, setIsSave] = useState(false);

    const updateLogin = (e) => {setLogin(e.target.value);}
    const updatePass = (e) => {setPass(e.target.value);}
    const updateIsSave = (e) => {setIsSave(e.target.checked);}

    const handlerLogIn = () => {store.dispatch(logIn(login, pass, isSave));}

    useEffect(() => {
        store.dispatch(signOut());
        let localLogin = localStorage.getItem('login');
        let localPass = localStorage.getItem('pass');
        if (localLogin !== null && localPass !== null) {
            let inputs = document.querySelectorAll('.inputField');
            inputs[0].childNodes[1].value = localLogin;
            inputs[1].childNodes[1].value = localPass;
            setLogin(localLogin);
            setPass(localPass);
        }
        store.dispatch(setPanel('projects'));
    }, []);

    return (
         <div className="authorization_page">
            <div className="container">

                <div className="inputField">
                    <p>Логин</p>
                    <input placeholder="Логин" onChange={updateLogin}/>
                </div>

                <div className="inputField">
                    <p>Пароль</p>
                    <input type="password" placeholder="Пароль" onChange={updatePass}/>
                </div>

                <div className="checkField">
                    <input type="checkbox" onChange={updateIsSave}/>
                    <p>Запомнить пароль</p>
                </div>

                <Link to="/" className="button" onClick={handlerLogIn}>Войти</Link>

                <p className="retake">Забыли пароль?</p>

            </div>
        </div>
    );
}

export default AuthPage;
