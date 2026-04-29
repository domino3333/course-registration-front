import MemberInfo from "../components/box/MemberInfo"
import "../css/pages/CartPage.css"

const CartPage = () => {


    return (<>
        <h1>서경대 수강신청</h1>
        <div className="main_div_CartPage">
            <div className="CartPage_side_section">
                <MemberInfo />
            </div>
            <div className="CartPage_main_section">
                <h1>장바구니 테이블 영여 </h1>
            </div>
        </div>
    </>)
}

export default CartPage;