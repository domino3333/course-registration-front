import { useState } from "react";
import { cancelLectureInMyCart } from "../api/cartApi";
import { enroll } from "../api/RegistrationApi";
import MemberInfo from "../components/box/MemberInfo"
import CartTable from "../components/table/CartTable";
import "../css/pages/CartPage.css"
import { useCartItems } from "../hooks/useCartItems";
import GrayLongBtn from "../components/button/GrayLongbtn";
import { useNavigate } from "react-router-dom";


const CartPage = () => {


    const nav = useNavigate();
    const [cartRefresh, setCartRefresh] = useState(0);

    const cartItemList = useCartItems(cartRefresh);

    const refreshCartTable = () => {
        setCartRefresh(prev => prev + 1);
    }

    //RegistrationApi에 있는 등록 api를 보게함
    const handleEnroll = async (lectureNo) => {
        console.log("CartTable의 handleEnroll 진입")
        try {
            const data = await enroll(lectureNo);
            refreshCartTable();
            alert(`${data}`);
        } catch (e) {
            alert(e.response?.data || '요청 실패');
        }

    }


    const handleCancel = async (lectureNo) => {
        const ok = window.confirm('정말 삭제하시겠습니까?');
        if (!ok) return;
        const data = await cancelLectureInMyCart(lectureNo);
        refreshCartTable();
        console.log('장바구니에서 아이템 삭제');

    }



    return (<>
        <h1>장바구니</h1>
        <div className="main_div_CartPage">
            <div className="CartPage_side_section">
                <MemberInfo />
                <GrayLongBtn text='메인화면' onClick={() => nav('/')} />

            </div>
            <div className="CartPage_main_section">
                <CartTable
                    cartItemList={cartItemList}
                    handleCancel={handleCancel}
                    handleEnroll={handleEnroll}
                />
            </div>
        </div>
    </>)
}

export default CartPage;