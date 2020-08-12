import {combineReducers} from 'redux';

import authReducer from './auth-reducer.js';
import projectListReducer from './projectList-reducer.js';
import mainReducer from './main-reducer.js';

const reducers = combineReducers({
    authState: authReducer,
    projectListState: projectListReducer,
    mainState: mainReducer,
});

export default reducers;
