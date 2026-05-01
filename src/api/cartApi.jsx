import axios from "axios"
import { ApiHost } from "./ApiHost"

const token = localStorage.getItem("accessToken");


export const getCartItemList = async ()=>{

    const token = localStorage.getItem("accessToken");
    const result = await axios.get(`${ApiHost}/api/cartItem`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
    
}