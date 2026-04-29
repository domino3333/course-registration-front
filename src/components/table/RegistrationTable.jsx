import axios from "axios";
import { useEffect, useState } from "react";
import { getLectureList } from "../../api/lectureApi";
import "../../css/components/LectureTable.css"
import GreenMiniBtn from "../button/GreenMiniBtn";
import { getCartItemList } from "../../api/cartApi";
import { getRegistrationList } from "../../api/RegistrationApi";
import { formatDateTime } from "../../util/formatDateTime";

const RegistrationTable = ({ registrationList, onEnrollAndRemoveSuccess }) => {

    return (<>

        <div className="div_tbl_lecture">
            <table className="tbl_lecture">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>과목명</th>
                        <th>교수명</th>
                        <th>학점</th>
                        <th>제한인원</th>
                        <th>등록 시간</th>
                    </tr>
                </thead>
                <tbody>
                    {registrationList?.map((item) =>
                        <tr key={item.registrationNo}>
                            <td><GreenMiniBtn text='삭제' registrationNo={item.registrationNo} onEnrollAndRemoveSuccess={onEnrollAndRemoveSuccess} /></td>
                            <td>{item.title}</td>
                            <td>{item.professor}</td>
                            <td>{item.credit}</td>
                            <td>{item.capacity}</td>
                            <td>{formatDateTime(item.createdAt)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    </>)
}

export default RegistrationTable;

