
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text, onClick}) => {

    return (
        <>
            <button type="button" onClick={onClick} className="GreenMiniBtn">
                {text}
            </button>
        </>
    )

}

export default GreenMiniBtn;