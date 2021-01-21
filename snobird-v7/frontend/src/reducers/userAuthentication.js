const userAuthenticationReducer = (action) => {
    switch (action.type) {
        case "USER_LOGIN_ATTEMPT":
            reutrn {
                loggedIn: false,
            };
        case "USER_LOGIN_FAILURE":
            return {
                loggedIn: false,
            };
        case "USER_LOGIN_SUCCESS":
            return {    
                loggedIn: true,
                
            };
        case "USER_LOGOUT":
            return {
                loggedIn: false,
            };
        }
    };

}