import axios from "axios";
import { ApiHost, token } from "./ApiHost";

const apiPrefix = '/api/registration';

//수강 '신청' 버튼 클릭
export const enroll = async (lectureNo) => {

    const result = await axios.post(`${ApiHost}${apiPrefix}/${lectureNo}`,null,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return result.data;

}

// 신청한 강의 목록 불러오기
export const getRegistrationList = async () => {

    const result = await axios.get(`${ApiHost}${apiPrefix}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return result.data;

}




//신청한 강의 삭제(수강취소)
export const cancelLecture = async(registrationNo) =>{

    const result = axios.delete(`${ApiHost}${apiPrefix}/${registrationNo}`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    )
}