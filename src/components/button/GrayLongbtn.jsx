
import { useNavigate } from "react-router-dom";
import "../../css/components/GrayLongBtn.css"


const GrayLongBtn = ({ text }) => {

    const nav = useNavigate();


    const clickBtn = () => {

        if(text==='장바구니'){
            nav('/cart')
        }
    }



    return (<>
        <button type="button" className="GrayLongBtn" onClick={clickBtn}>
            {text}
        </button>
    </>
    )
}

export default GrayLongBtn;