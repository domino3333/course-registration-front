
import { cancelLecture, enroll } from "../../api/RegistrationApi"
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text, onClick, onEnrollAndRemoveSuccess }) => {

    return (
        <>
            <button type="button" onClick={onClick} className="GreenMiniBtn">
                {text}
            </button>
        </>
    )

}

export default GreenMiniBtn;