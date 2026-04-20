import axios from "axios";
import { useEffect } from "react";
import { getLectureList } from "../api/lectureApi";

const LectureTable = () => {


    const fetchData = function(){

        getLectureList();
    }

    useEffect(()=>{

        fetchData();
    },[])




    return (<>

        <table>
            <tr>
                <th>신청</th> {/* 신청 버튼 넣을거임 */}
                <th>과목 번호</th> {/* 시퀀스 */} 
                <th>교과목명</th> {/* title */}
                <th>학점</th> {/* credit */}
                <th>수강 인원</th>
                <th>수강 제한 인원</th> {/* capacity */}
                <th>담당 교수</th> {/* professor */}
            </tr>
            <tr>
                <td>td22</td>
                <td>td23</td>
                <td>td24</td>
            </tr>
        </table>
    </>)
}

export default LectureTable;

