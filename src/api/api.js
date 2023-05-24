import axios from "axios";

const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,
  credentials: "same-origin",
});

Api.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}` 
    return config;
})

export default Api;

