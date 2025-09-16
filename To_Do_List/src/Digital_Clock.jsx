import { useState, useEffect } from "react";
function Digital_Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {setTime(new Date())}, 1000);
        console.log("Tick");
        return() => {  // vừa vô mount component nên sẽ tick lần 1 và clear, từ lần 2 chỉ setInterval và tick và đếm thời gian
            clearInterval(intervalId); // khi nào unmount, hay re-rendering mới clear.
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    return (<>
        <div>
            <span>{formatTime()}</span>
        </div>
    </>);
}

export default Digital_Clock