import React, { useState, useEffect } from 'react';
import '../../static/Auth.css';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const hours = currentTime.getHours();
    let timeMessage = "Добрый вечер";

    if (hours >= 5 && hours < 12) {
        timeMessage = "Доброе утро";
    } else if (hours >= 12 && hours < 18) {
        timeMessage = "Добрый день";
    }

    return (
        <div className="clock">
            <h2>Время регистрации</h2>
            <p>{timeMessage}</p>
            {/* <p>{currentTime.toLocaleTimeString()}</p> */}
        </div>
    );
}

export default Clock;
