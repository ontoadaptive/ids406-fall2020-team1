const FetchUserData = () => {
    const unAuthticateddata = {
        "id":"0",
        "username":"anon",
        "password":"password12",
        "role":"1"
    }
    return (JSON.parse(localStorage.getItem("user")) === null ? unAuthticateddata : JSON.parse(localStorage.getItem("user")));
};
export default FetchUserData;