import axios from "axios";

const betaInstance = axios.create({
  baseURL: '${process.env.REACT_APP_API_URL}$'
});

export default betaInstance;