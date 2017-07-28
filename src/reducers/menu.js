import { Menu } from '../components/menu'
import {
    OPEN_MENU
} from '../actions';

let cloneObject = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let newState = {
    menu: {
        menuOpened: false
    }
}

export default function(state, action)
{
    switch (action.type) {
        case OPEN_MENU:
            newState = cloneObject(state);
            newState.menu.menuOpened = true;
            return newState;
        default:
            return Menu.router.getStateForAction(action, state);
    }
}
