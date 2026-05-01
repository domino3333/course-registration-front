import { useEffect, useState } from "react"
import { getRegistrationList } from "../api/RegistrationApi"


export const useRegistrations = (refresh) => {

    const [registrationList,setRegistrationList] = useState([]);

    useEffect(() => {

        console.log("useRegistraions의 useEffect 시작")

        const fetchData = async () => {
            const data = await getRegistrationList();
            setRegistrationList(data);
            console.log("useEffect 후 registration 데이터:", registrationList);
        }
        fetchData();


    }, [refresh])


    return registrationList;



}