export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const OPEN_MENU = 'OPEN_MENU';

export function login(userCredentials) {
    if(userCredentials.username.toLowerCase() === 'demo' && userCredentials.password === 'demo') {
        return {
            type: LOGIN_SUCCESS
        }
    }
    else {
        return {
            type: LOGIN_ERROR
        }
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
