import axios from "axios";
import { ApiHost } from "./ApiHost";


export const enroll = async () => {

    const token = localStorage.getItem("accessToken");

    const result = await axios.post(`${ApiHost}/api/registration`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return result.data;

}
export const getRegistrationList = async () => {

    const token = localStorage.getItem("accessToken");

    const result = await axios.get(`${ApiHost}/api/registration`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return result.data;

}