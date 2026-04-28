import axios from "axios";
import { useEffect, useState } from "react";
import { getLectureList } from "../../api/lectureApi";
import "../../css/components/LectureTable.css"
import GreenMiniBtn from "../button/GreenMiniBtn";
import { getCartItemList } from "../../api/cartApi";
import { getRegistrationList } from "../../api/RegistrationApi";

const RegistrationTable = ({ refresh, onEnrollAndRemoveSuccess }) => {

    const [registrationList, setregistrationList] = useState([]);




    useEffect(() => {

        console.log("registration 테이블 useEffect 시작")

        const fetchData = async () => {
            const data = await getRegistrationList();
            setregistrationList(data);
            console.log("useEffect 후 registration 데이터:", registrationList);
        }
        fetchData();


    }, [refresh])

    return (<>

        <div className="div_tbl_lecture">
            <table className="tbl_lecture">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>등록번호</th>
                        <th>멤버노</th>
                        <th>렉처노</th>
                        <th>등록시간</th>
                    </tr>
                </thead>
                <tbody>
                    {registrationList?.map((item) =>
                        <tr key={item.registrationNo}>
                            <td><GreenMiniBtn text='삭제' registrationNo={item.registrationNo} onEnrollAndRemoveSuccess={onEnrollAndRemoveSuccess} /></td>
                            <td>{item.registrationNo}</td>
                            <td>{item.memberNo}</td>
                            <td>{item.lectureNo}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    </>)
}

export default RegistrationTable;

