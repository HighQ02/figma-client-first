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

    return (
        <div className="clock">
            <h2>Время регистрации</h2>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;