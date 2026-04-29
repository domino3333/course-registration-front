import { useEffect, useState } from "react";
import { getLectureList } from "../api/lectureApi";

export const useLectures = (refresh) =>{

    const [lectureList, setLectureList] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getLectureList();
            setLectureList(data);
        }

        fetchData();

    },[refresh])



    return lectureList;
}