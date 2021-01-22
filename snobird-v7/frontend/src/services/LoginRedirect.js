const LoginRedirect = () => {
    if ((localStorage.getItem("isLoggedIn")) === "T") {
        window.location.href = "/profile";
    } else {
        window.location.href = "/login";

        
    }
    
};

export default LoginRedirect;