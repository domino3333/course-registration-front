import axios from "axios";
import { ApiHost } from "./ApiHost";


const apiPrefix = '/api/auth'

const token = localStorage.getItem("accessToken");

//login 요청 메서드
export const login = async (data)=>{

    const result = await axios.post(`${ApiHost}${apiPrefix}/login`,data);
    console.log("login응답",result);
    localStorage.setItem("accessToken",result.data.accessToken);
    return result.data;


}


// 회원가입 메서드
export const signUp = async (data)=>{

    const result = await axios.post(`${ApiHost}${apiPrefix}/signUp`,data);
    console.log("signUp응답"+result);

    return result.data;

}

//회원 정보 불러오기 메서드
export const fetchMe = async () =>{

    const result = await axios.get(`${ApiHost}${apiPrefix}`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )

    return result.data;

}