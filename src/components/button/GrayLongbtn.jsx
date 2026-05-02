
import { useNavigate } from "react-router-dom";
import "../../css/components/GrayLongBtn.css"


const GrayLongBtn = ({ text, onClick }) => {
    return (<>
        <button type="button" className="GrayLongBtn" onClick={onClick}>
            {text}
        </button>
    </>
    )
}

export default GrayLongBtn;