
import "../../css/components/GreenMiniBtn.css"

const GreenMiniBtn = ({ text }) => {


    const clickButton = async ()=>{

        if(text==='신청'){

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