import CartTable from "../components/table/RegistrationTable";
import LectureTable from "../components/table/LectureTable";
import "../css/pages/MainPage.css"
import RegistrationTable from "../components/table/RegistrationTable";
import { useState } from "react";

const MainPage = () => {

    const [lectureRefresh, setLectureRefresh] = useState(0);
    const [registrationRefresh, setRegistrationRefresh] = useState(0);

    const handleEnrollAndRemoveSuccess = () => {
        setLectureRefresh(prev => prev + 1);
        setRegistrationRefresh(prev => prev + 1);
    }

    console.log("lectureRefresh:", lectureRefresh);


    return (<>
        <h1>메인페이지</h1>
        <div className="page">
            <div className="side_section">
                기타버튼영역
            </div>

            <div className="main_section">
                <div className="lecture">
                    <LectureTable refresh={lectureRefresh} onEnrollAndRemoveSuccess={handleEnrollAndRemoveSuccess} />
                </div>
                <div className="cart">
                    <RegistrationTable refresh={registrationRefresh} onEnrollAndRemoveSuccess={handleEnrollAndRemoveSuccess} />
                </div>

            </div>

        </div>



    </>)
}

export default MainPage;