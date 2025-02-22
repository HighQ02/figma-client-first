import React, { useState } from 'react';
import '../../static/Auth.css';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(null);
  const [running, setRunning] = useState(false);
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);

  const startTimer = () => {
    setRunning(true);
    setTimeLeft(4);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeout(() => {
            setRunning(false);
            setTimeLeft(null);
            setShowFullScreenImage(true);
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleImageClick = () => {
    setShowFullScreenImage(false);
  };

  return (
    <div className="timer">
      <h2>Таймер</h2>
      {running ? (
        <div id="countdown">{timeLeft} seconds remaining</div>
      ) : (
        !showFullScreenImage && <button onClick={startTimer} className='timer-btn'>Запустить отчет</button>
      )}

      {showFullScreenImage && (
        <div onClick={handleImageClick} className='screamer'></div>
      )}
    </div>
  );
}

export default Timer;
