const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, user} : { isLoggedIn: false, user: null};
 
const userAuthenticationReducer = (action) => {
    switch (action.type) {
        case "USER_LOGIN_FAILURE":
            return {
                isLoggedIn: false,
                user: null,
            };
        case "USER_LOGIN_SUCCESS":
            return {    
                isLoggedIn: true,
                
            };
        case "USER_LOGOUT":
            return {
                isLoggedIn: false,
                user: null,
            };
        }
    };

}