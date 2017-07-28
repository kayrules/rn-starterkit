import {
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions';

let cloneObject = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let newState = {
    loggedIn: false
}

export default function(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState = cloneObject(state);
            newState.loggedIn = true;
            return newState;
        case LOGOUT:
            newState = cloneObject(state);
            newState.loggedIn = false;
            return newState;
        default:
            return state || newState;
    }
}
