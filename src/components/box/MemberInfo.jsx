import { useEffect, useState } from "react";
import { fetchMe } from "../../api/authApi";



const MemberInfo = () => {

    const [info,setInfo] = useState({
        name:"",
        gender:"",
        email:"",
        credit:""
    });

    useEffect(()=>{

        const fetchData = async () =>{
            //멤버 데이터 불러오기
            try{
                const data = await fetchMe();
                setInfo(data);
            }catch(e){
                console.log('회원정보 불러오기 실패',e.response?.data || '데이터가 없어')
            }
        }
        fetchData();
    },[])

    return (<>
        <div className="div_MemberInfo">
            <p>{info.name}</p>
            <p>{info.gender}</p>
            <p>{info.email}</p>
            <p>{info.code}</p>
        </div>
    </>)
}

export default MemberInfo;