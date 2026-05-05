import axios from "axios"
import { ApiHost } from "./ApiHost"


const apiPrefix = "/api/queue";

const authHeader = () => {

    const token = localStorage.getItem("accessToken");

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

}



export const enterQueue = async () => {

    const result = await axios.post(`${ApiHost}${apiPrefix}/enter`, null, authHeader())
    return result.data;

}


export const getQueueStatus = async () => {

    const result = await axios.get(`${ApiHost}${apiPrefix}/status`, authHeader());
    return result.data;
}

export const admitQueue = async () => {

    const result = await axios.post(`${ApiHost}${apiPrefix}/admit`, null, authHeader());
    return result.data;

}

export const leaveQueue = async () => {

    const result = await axios.delete(`${ApiHost}${apiPrefix}/leave`, authHeader())
    return result.data;

}
