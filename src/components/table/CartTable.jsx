import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/components/LectureTable.css"
import GreenMiniBtn from "../button/GreenMiniBtn";
import { enroll } from "../../api/RegistrationApi";

const CartTable = ({ cartItemList, handleEnroll, handleCancel}) => {



    return (<>

        <div className="div_tbl_lecture">
            <table className="tbl_lecture">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>-</th>
                        <th>과목 번호</th>
                        <th>교과목명</th>
                        <th>학점</th>
                        <th>수강 인원</th>
                        <th>제한 인원</th>
                        <th>담당 교수</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItemList.map((item) =>
                        <tr key={item.lectureNo}>
                            <td><GreenMiniBtn text='신청' onClick={()=>handleEnroll(item.lectureNo)}/></td>
                            <td><GreenMiniBtn text='삭제' onClick={()=>handleCancel(item.lectureNo)}/></td>
                            <td>{item.lectureNo}</td>
                            <td>{item.title}</td>
                            <td>{item.credit}</td>
                            <td>{item.currentEnrollment}</td>
                            <td>{item.capacity}</td>
                            <td>{item.professor}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    </>)
}

export default CartTable;

