import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux';

import AuthPage from './pages/auth.js';
import MainPage from './pages/main.js';

import Sidebar from './components/sidebar.js';
import Header from './components/header.js';

import './styles/App.scss';

function App() {

    const isAuth = useSelector((state) => state.authState.isAuth);

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={() =>
                    isAuth ? (
                        children
                    ) : (
                    <Redirect
                        to={{
                          pathname: "/login",
                        }}
                    />
                    )
                }
            />
        );
    }

    return (
            <Router>
                <div className="app">
                    <Switch>
                        <PrivateRoute exact path='/'>
                            <Header />
                            <Sidebar />

                            <MainPage />

                        </PrivateRoute>
                        <Route path='/login'>
                            <AuthPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
    );


}

export default App;
