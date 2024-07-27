import axios from "axios";
const REACT_APP_API_URL = "https://johanposso.up.railway.app";
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
});

export default api;
