import axios from "axios";
import { ApiHost } from "./ApiHost"



export const getLectureList = async () => {
    
    const token = localStorage.getItem("accessToken");

    const result = await axios.get(`${ApiHost}/api/lecture`);
    console.log('getLectureList함수 데이터:',result);
    return result.data;

    
}
