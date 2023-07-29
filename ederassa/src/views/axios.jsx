import { data } from "autoprefixer";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",

})

axiosClient.interceptors.request.use((config)=>{
    const token = '333';
    config.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;
    return config;
})


axiosClient.interceptors.response.use(response =>{
    return response
}, error=>{
    if(error.response && error.response.status === 401){
        Navigate('/login')
        return error
    }throw error
})
export default axiosClient;