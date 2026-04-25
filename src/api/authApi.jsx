import axios from "axios";
import { ApiHost } from "./ApiHost";


export const login = async (data)=>{

    const result = await axios.post(`${ApiHost}/api/auth/login`,data);
    console.log("login응답"+result);
    localStorage.setItem("accessToken",result.data.accessToken);
    return result.data;

}

