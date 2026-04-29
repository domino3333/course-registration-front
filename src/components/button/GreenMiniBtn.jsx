
import { cancelLecture, enroll } from "../../api/RegistrationApi"
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text, lectureNo, registrationNo, onEnrollAndRemoveSuccess }) => {

    const clickButton = async ()=>{

        if(text==='신청'){
            console.log("greenMiniBtn 신청 진입")
            try{
                const data = await enroll(lectureNo);
                onEnrollAndRemoveSuccess();
                alert(`${data}`);
            }catch(e){
                alert(e.response?.data || '요청 실패');
            }
        }else if(text ==='담기'){
            

        }else if(text ==='삭제'){
            const ok = window.confirm('정말 삭제하시겠습니까?');
            if (!ok) return;
            const data = await cancelLecture(registrationNo);
            onEnrollAndRemoveSuccess();

        }
    }



    return (
        <>
            <button type="button" onClick={clickButton} className="GreenMiniBtn">
                {text}
            </button>
        </>
    )

}

export default GreenMiniBtn;