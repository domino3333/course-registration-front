import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { admitQueue, enterQueue, getQueueStatus, hasTicket } from "../api/queueApi";
import "../css/pages/QueuePage.css";




const QueuePage = () => {


    const nav = useNavigate();

    const [status,setStatus] = useState({
        rank:null,
        waitingAhead:null,
        allowed:false,
        nextPollMillis:10000
    });

     useEffect(() => {
        let timerId;
        let stopped = false;
        
        const pollStatus = async () => {
            if (stopped) return;

            try {
                const data = await getQueueStatus();
                setStatus(data);

                if (data.allowed) {
                    const admitted = await admitQueue();

                    if (admitted) {
                        nav("/main");
                        return;
                    }
                }

                const nextDelay = Math.max(data.nextPollMillis ?? 10000, 1000);
                timerId = setTimeout(pollStatus, nextDelay);
            } catch (e) {
                timerId = setTimeout(pollStatus, 10000);
            }
        };

        const startQueue = async () => {
            try {
                await enterQueue();
                await pollStatus();
            } catch (e) {
                nav("/login");
            }
        };

        startQueue();

        return () => {
            stopped = true;
            clearTimeout(timerId);
        };
    }, [nav]);


    

    return(
        <div className="div_QueuePage">
            <div className="div_queueBox">
                <h1 className="h1_queueTitle">대기열 페이지</h1>
                <div className="div_queueStatus">
                    <p>현재 순번: {status.rank}</p>
                    <p>앞에 남은 사람: {status.waitingAhead}</p>
                    <p>입장 가능 여부: {status.allowed === true ? "가능" : "대기중"}</p>
                </div>
            </div>
        </div>
    )
}

export default QueuePage;
