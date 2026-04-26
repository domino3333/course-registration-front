import CartTable from "../components/table/RegistrationTable";
import LectureTable from "../components/table/LectureTable";
import "../css/pages/MainPage.css"
import RegistrationTable from "../components/table/RegistrationTable";


const MainPage = () => {

    return (<>
        <h1>메인페이지</h1>
        <div className="page">
            <div className="side_section">
                기타버튼영역
            </div>

            <div className="main_section">
                <div className="lecture">
                    <LectureTable />
                </div>
                <div className="cart">
                    <RegistrationTable/>
                </div>

            </div>

        </div>



    </>)
}

export default MainPage;