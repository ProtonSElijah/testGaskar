const initialState = {
    isOpen: false,
    projectList: [
        {
            name: 'Терапевтический корпус',
            duration: '08.04.2019 - 31.01.2021',
            leader: 'Денис Конев',
            administrator: 'Просолим Лимитед',
        },
    ],
};

function addProject(state = initialState, action) {
    switch (action.type) {


        case 'CREATE':
            state.projectList.push({
                name: action.name,
                duration: action.duration,
                leader: action.leader,
                administrator: action.administrator,
            })
            return state;


        case 'OPEN':
            if (!state.isOpen) state.isOpen = true;
            return state;

        case 'CLOSE':
            if (state.isOpen) state.isOpen = false;
            return state;

        default:
            return state;
    }
}

export default addProject;
