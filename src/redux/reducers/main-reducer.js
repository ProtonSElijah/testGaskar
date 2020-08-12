const initialState = {
    currentPanel: 'projects',
};

function auth(state = initialState, action) {
    switch (action.type) {


        case 'SETPANEL':
            state.currentPanel = action.panel;
            return state;


        default:
            return state;
    }
}

export default auth;
