import store from '../store';
import { instance } from '../axios';



export const loginFailure = () => {
    return {
        type : "USER_LOGIN_FAILURE"
    };
}
export const loginSuccess = (post) => {
    return {
        type : "USER_LOGIN_SUCCESS",
        //set local storage to 
        user : post 
    }
}

export const logout = () => {
    return {
        type : "USER_LOGOUT"
        //set user to uauthenticated 
    }
}

export const Login = (uesrname, password) => {
    store.dispatch()

    instance.get('/auth')
        .then(response =>{
            const data = response.data;
            setUserAuth(data);
            //if entered in information is correct then dispatch login success

            //else dispatch login failure
        })
}