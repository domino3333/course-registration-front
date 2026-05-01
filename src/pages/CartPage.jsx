import MemberInfo from "../components/box/MemberInfo"
import CartTable from "../components/table/CartTable";
import "../css/pages/CartPage.css"

const CartPage = () => {


    //RegistrationApi에 있는 등록 api를 보게함
    const handleEnroll = ()=>{


    }


    const handleCancel = async () => {

        const data = await cancelLectureInMyCart(lectureNo);
        console.log('장바구니에서 아이템 삭제');

    }


    




    return (<>
        <h1>장바구니</h1>
        <div className="main_div_CartPage">
            <div className="CartPage_side_section">
                <MemberInfo />
            </div>
            <div className="CartPage_main_section">
                <h1> <CartTable handleCancel={handleCancel} handleEnroll={handleEnroll}/> </h1>
            </div>
        </div>
    </>)
}

export default CartPage;