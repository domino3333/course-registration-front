import CartTable from "../components/table/RegistrationTable";
import LectureTable from "../components/table/LectureTable";
import "../css/pages/MainPage.css"
import RegistrationTable from "../components/table/RegistrationTable";
import { useState } from "react";
import MemberInfo from "../components/box/MemberInfo";
import GrayLongBtn from "../components/button/GrayLongbtn";
import { useLectures } from "../hooks/useLectures";
import { useRegistrations } from "../hooks/useRegistrations";
import { cancelLecture, enroll } from "../api/RegistrationApi";
import { addToCart } from "../api/cartApi";

const MainPage = () => {

    const [lectureRefresh, setLectureRefresh] = useState(0);
    const [registrationRefresh, setRegistrationRefresh] = useState(0);

    const handleEnrollAndRemoveSuccess = () => {
        setLectureRefresh(prev => prev + 1);
        setRegistrationRefresh(prev => prev + 1);
    }

    console.log("lectureRefresh:", lectureRefresh);
    console.log("registrationRefresh:", registrationRefresh);

    const lectureList = useLectures(lectureRefresh);
    const registrationList = useRegistrations(registrationRefresh);

    const handleEnroll = async (lectureNo) => {
        console.log("LectureTable의 handleEnroll 진입")
        try {
            const data = await enroll(lectureNo);
            handleEnrollAndRemoveSuccess();
            alert(`${data}`);
        } catch (e) {
            alert(e.response?.data || '요청 실패');
        }

    }

    const handleCancel = async (registrationNo) => {

        const ok = window.confirm('정말 삭제하시겠습니까?');
        if (!ok) return;
        const data = await cancelLecture(registrationNo);
        handleEnrollAndRemoveSuccess();
    }

    const handleAddToCart = async (lectureNo) => {
        const ok = window.confirm('장바구니에 추가하시겠습니까?');
        if (!ok) return;
        try{
            const data = await addToCart(lectureNo);
            alert(`장바구니에 추가되었습니다. 장바구니 페이지에서 확인해주세요`)
        }catch(e){
            console.log('addToCart 에러 발생')
        }
        
    }


    return (<>
        <h1>수강신청</h1>
        <div className="page">
            <div className="side_section">
                <MemberInfo />
                <GrayLongBtn text='장바구니' />
            </div>

            <div className="main_section">
                <div className="lecture">
                    <LectureTable
                        handleAddToCart={handleAddToCart}
                        handleEnroll={handleEnroll}
                        lectureList={lectureList}
                    />
                </div>
                <div className="registration">
                    <RegistrationTable
                        handleCancel={handleCancel}
                        registrationList={registrationList}
                    />
                </div>
            </div>
        </div>



    </>)
}

export default MainPage;