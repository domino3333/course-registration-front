import axios from "axios"
import { ApiHost } from "./ApiHost"

const token = localStorage.getItem("accessToken");
const apiPrefix = '/api/cartItem'

export const getCartItemList = async ()=>{

    const result = await axios.get(`${ApiHost}/api/cartItem`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
    
}

export const addToCart = async (lectureNo) =>{

    const result = await axios.post(`${ApiHost}${apiPrefix}/${lectureNo}`,null,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

}


export const cancelLectureInMyCart = async (lectureNo)=>{

    const result = await axios.delete(`${ApiHost}${apiPrefix}/${lectureNo}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return result.data;
    
}

export const getCartItems = async()=>{

    const result = await axios.get(`${ApiHost}${apiPrefix}`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )

}