import axios from "axios";
import { useEffect, useState } from "react";
import { getLectureList } from "../../api/lectureApi";
import "../../css/components/LectureTable.css"
import GreenMiniBtn from "../button/GreenMiniBtn";
import { enroll } from "../../api/RegistrationApi";

const LectureTable = ({ lectureList, onEnrollAndRemoveSuccess }) => {

    const handleEnroll = async (lectureNo) => {
        console.log("greenMiniBtn 신청 진입")
        try {
            const data = await enroll(lectureNo);
            onEnrollAndRemoveSuccess();
            alert(`${data}`);
        } catch (e) {
            alert(e.response?.data || '요청 실패');
        }

    }


    return (<>

        <div className="div_tbl_lecture">
            <table className="tbl_lecture">
                <thead>
                    <tr>
                        <th>신청</th>
                        <th>장바구니</th>
                        <th>과목 번호</th>
                        <th>교과목명</th>
                        <th>학점</th>
                        <th>수강 인원</th>
                        <th>제한 인원</th>
                        <th>담당 교수</th>
                    </tr>
                </thead>
                <tbody>
                    {lectureList.map((lecture) =>
                        <tr key={lecture.lectureNo}>
                            <td><GreenMiniBtn text='신청' onClick={()=>handleEnroll(lecture.lectureNo)} onEnrollAndRemoveSuccess={onEnrollAndRemoveSuccess} /></td>
                            <td><GreenMiniBtn text='담기' lectureNo={lecture.lectureNo} /></td>
                            <td>{lecture.lectureNo}</td>
                            <td>{lecture.title}</td>
                            <td>{lecture.credit}</td>
                            <td>{lecture.currentEnrollment}</td>
                            <td>{lecture.capacity}</td>
                            <td>{lecture.professor}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    </>)
}

export default LectureTable;

