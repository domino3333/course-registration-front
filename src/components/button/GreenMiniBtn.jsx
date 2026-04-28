
import { cancelLecture, enroll } from "../../api/RegistrationApi"
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text, lectureNo, registrationNo, onEnrollAndRemoveSuccess }) => {

    const clickButton = async ()=>{

        if(text==='신청'){
            console.log("greenMiniBtn 신청 진입")
            const data = await enroll(lectureNo);
            onEnrollAndRemoveSuccess();
        }else if(text ==='담기'){

        }else if(text ==='삭제'){
            const data = await cancelLecture(registrationNo);
            onEnrollAndRemoveSuccess();

        }
    }



    return (
        <>
            <button type="button" onClick={clickButton}>
                {text}
            </button>
        </>
    )

}

export default GreenMiniBtn;