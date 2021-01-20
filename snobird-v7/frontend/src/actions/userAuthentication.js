import store from '../store';
import { instance } from '../axios';
export const loginFailure = () => {
    return {
        type : "USER_LOGIN_FAILURE"
    };
}
export const fetchLoginSuccesses = () => {
    return {
        type : "USER_LOGIN_SUCCESS"
    }
}

export const fetchUsers = () => {
    store.dispatch()
}