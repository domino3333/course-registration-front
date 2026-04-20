import axios from "axios";
import { ApiHost } from "./ApiHost"

export const getLectureList = () => {

    const data = axios.get(`${ApiHost}/api/lecture`);
    console.log(data);
    return data;
}
