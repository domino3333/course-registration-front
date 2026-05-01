import axios from "axios";
import { ApiHost } from "./ApiHost"


const token = localStorage.getItem("accessToken");

export const getLectureList = async () => {


    const result = await axios.get(`${ApiHost}/api/lecture`);
    console.log('getLectureList함수 데이터:',result);
    return result.data;

    
}
