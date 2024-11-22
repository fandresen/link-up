import { useKeycloak } from "../context/KeycloackContext";
import axios from "axios"

const BASE_URL = "http://localhost:2005/api"

export const useAxiosWithToken = ()=>{
    const {kc} = useKeycloak();
    const token = kc?.token;
    const axiosRequest = axios.create({
        baseURL:BASE_URL,
        headers:{
            Authorization:`Bearer ${token}`
        },
    })
    return axiosRequest;

}