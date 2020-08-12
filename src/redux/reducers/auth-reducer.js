const initialState = {
    isAuth: false,
};

function auth(state = initialState, action) {
    switch (action.type) {


        case 'LOGIN':
            if (action.login === "admin" && action.pass === "admin") {
                if (action.isSave) {
                    localStorage.setItem('login', action.login);
                    localStorage.setItem('pass', action.pass);
                }
                else {
                    localStorage.removeItem('login');
                    localStorage.removeItem('pass');
                }
                state.isAuth = true;
            }
            return state;


        case 'SIGNOUT':
            state.isAuth = false;
            return state;


        default:
            return state;
    }
}

export default auth;
