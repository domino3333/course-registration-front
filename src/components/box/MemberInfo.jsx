import { useEffect, useState } from "react";
import { fetchMe } from "../../api/authApi";
import "../../css/components/MemberInfo.css"

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
            <p>&lt;이름&gt;<br/>{info.name}</p>
            <p>&lt;성별&gt;<br/>{info.gender}</p>
            <p>&lt;이메일&gt;<br/>{info.email}</p>
            <p>&lt;학번&gt;<br/>{info.code}</p>
        </div>
    </>)
}

export default MemberInfo;