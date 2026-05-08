import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { admitQueue, enterQueue, getQueueStatus, hasTicket } from "../api/queueApi";




const QueuePage = () => {


    const nav = useNavigate();

    const [status,setStatus] = useState({
        rank:null,
        waitingAhead:null,
        allowed:false,
        nextPollMillis:10000
    });

    useEffect(()=>{
        let timerId;

        //2초마다 status 호출
        const startQueue = async () =>{
            await enterQueue();

            timerId = setInterval(async ()=>{
                const data = await getQueueStatus();
                setStatus(data);

                if(data.allowed){
                    const admitted = await admitQueue();

                    if(admitted){
                        clearInterval(timerId);
                        nav("/main");
                    }
                }
            },data.nextPollMillis)

        };

        startQueue();
        return () => clearInterval(timerId);


    },[nav])


    

    return(<>

        <h1>대기열 페이지</h1>
        <p>현재순번: {status.rank}</p>
        <p>앞에 남은 사람:{status.waitingAhead}</p>
        <p>입장 가능 여부:{status.allowed === true ? "가능" : "대기중"}</p>

    </>)
}

export default QueuePage;