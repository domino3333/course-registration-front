import axios from "axios"
import { ApiHost } from "./ApiHost"


const apiPrefix = '/api/cartItem'

// 장바구니에 있는 아이템들 호출
export const getCartItemList = async () => {
    
    const token = localStorage.getItem("accessToken");
    const result = await axios.get(`${ApiHost}/api/cartItem`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;

}

// 장바구니에 아이템 추가(lectureNo 전달)
export const addToCart = async (lectureNo) => {
    const token = localStorage.getItem("accessToken");
    const result = await axios.post(`${ApiHost}${apiPrefix}/${lectureNo}`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}


// 장바구니에서 아이템 삭제
export const cancelLectureInMyCart = async (lectureNo) => {
    const token = localStorage.getItem("accessToken");
    const result = await axios.delete(`${ApiHost}${apiPrefix}/${lectureNo}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;

}
