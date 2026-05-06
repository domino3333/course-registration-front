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


//큐 페이지에서 대기열 큐로 진입
export const enterQueue = async () => {

    const result = await axios.post(`${ApiHost}${apiPrefix}/enter`, null, authHeader())
    return result.data;

}

// 현재 이용가능한 좌석 등 대기열에 대한 정보 불러오기
export const getQueueStatus = async () => {

    const result = await axios.get(`${ApiHost}${apiPrefix}/status`, authHeader());
    return result.data;
}

// 입장이 허락될 때 호출
export const admitQueue = async () => {

    const result = await axios.post(`${ApiHost}${apiPrefix}/admit`, null, authHeader());
    return result.data;

}

// 큐에서 사용자 제거
export const leaveQueue = async () => {

    const result = await axios.delete(`${ApiHost}${apiPrefix}/leave`, authHeader())
    return result.data;

}


export const hasTicket = async () => {

    const result = await axios.get(`${ApiHost}${apiPrefix}/ticket`,authHeader())
    return result.data;

}