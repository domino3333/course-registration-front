
import { enroll } from "../../api/RegistrationApi"
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text, lectureNo }) => {

    const clickButton = async ()=>{

        if(text==='신청'){
            console.log("신청 진입")
            const data = await enroll(lectureNo);
        }else if(text ==='담기'){

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