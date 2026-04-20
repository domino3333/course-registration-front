import axios from "axios";
import { useEffect, useState } from "react";
import { getLectureList } from "../api/lectureApi";

const LectureTable = () => {

    const [lectureList, setLectureList] = useState([]);




    useEffect(() => {

        console.log("useeffect 시작")

        const fetchData = async function () {
            const data = await getLectureList();
            setLectureList(data);
            console.log("useeffect 후 lecture 데이터:",lectureList);
        }
        fetchData();

        
    }, [])






    return (<>

        <table>
            <thead>
                <tr>
                    <th>신청</th>
                    <th>과목 번호</th>
                    <th>교과목명</th>
                    <th>학점</th>
                    <th>수강 인원</th>
                    <th>제한 인원</th>
                    <th>담당 교수</th>
                </tr>

            </thead>
            <tbody>
                {lectureList.map((lecture)=>
                    <tr key={lecture.lectureNo}>
                        <td>신청</td>
                        <td>{lecture.lectureNo}</td>
                        <td>{lecture.title}</td>
                        <td>{lecture.credit}</td>
                        <td>-</td>
                        <td>{lecture.capacity}</td>
                        <td>{lecture.professor}</td>
                    </tr>
                )}


            </tbody>
        </table>
    </>)
}

export default LectureTable;

