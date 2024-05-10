import React, { useRef, useState } from "react";
import styles from "./Timer.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import increase from "../../assets/icons/increase.png";
import decrease from "../../assets/icons/decrease.png";
import timesUp from "../../assets/auidos/timesUp.mp3";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [playing, setPlaying] = useState(false);

  const sound = useRef(null)


  // hours 
  const increaseHour = () => {
    hours < 23 ? setHours(hours + 1) : setHours(0);
  };
  const decreaseHour = () => {
    hours > 1 ? setHours(hours - 1) : setHours(23);
  };


  //minutes
  const increaseMinute = () => {
    minutes < 59 ? setMinutes(minutes + 1) : setMinutes(0);
  };
  const decreaseMinute = () => {
    minutes > 1 ? setMinutes(minutes - 1) : setMinutes(59);
  };


  // seconds

  const increaseSecond = () => {
    seconds < 59 ? setSeconds(seconds + 1) : setSeconds(0);
  };
  const decreaseSecond = () => {
    seconds > 1 ? setSeconds(seconds - 1) : setSeconds(59);
  };

  const handlePauseStart = () => {
    let totaltime = seconds + hours * 3600 + minutes * 60;
    if (totaltime === 0) {
      setPlaying(false);
      return;
    }
    setPlaying((prev) => !prev);
  };


  const onComplete = () => {
    setPlaying(false);
    sound.current.play();
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };


  const renderTime = (remainingTime) => {
    if (remainingTime < 0) {
      return <div className={styles.timer}>Time Over!!</div>;
    }

    let minutes = Math.floor(remainingTime / 60);
    let secondLeft = remainingTime % 60;
    let hoursLeft = Math.floor(minutes / 60);
    let minutesLeft = minutes % 60;

    if (secondLeft < 10) {
      secondLeft = `0${secondLeft}`;
    }

    if (minutesLeft < 10) {
      minutesLeft = `0${minutesLeft}`;
    }

    if (hoursLeft < 10) {
      hoursLeft = `0${hoursLeft}`;
    }

    return `${hoursLeft}:${minutesLeft}:${secondLeft}`;
  };






  return (
    <>
      
        <div className={styles.countdownContainer}>
          <CountdownCircleTimer
            isPlaying={playing}
            duration={seconds + hours * 3600 + minutes * 60}
            colors={["#ff6a6a"]}
            colorsTime={[10]}
            onComplete={onComplete}
            >
             {({ remainingTime }) => (
            <div className={styles.timer}>{renderTime(remainingTime)}</div>
          )}
          </CountdownCircleTimer>
        </div>

        <div className={styles.timeSetter}>
          <div className={styles.timeCountdown}>
            <div className={styles.hours}>
              <span>Hours</span>
              <img onClick={increaseHour} src={increase} alt="increase" />
              {hours < 10 ? <h3>{`0${hours}`}</h3> : <h3>{hours}</h3>}
              <img onClick={decreaseHour} src={decrease} alt="decrease" />
            </div>
            <span className={styles.sepration}>:</span>
            <div className={styles.minutes}>
              <span>Minutes</span>
              <img onClick={increaseMinute} src={increase} alt="increase" />
              {minutes < 10 ? <h3> {`0${minutes}`} </h3> : <h3>{minutes}</h3>}
              <img onClick={decreaseMinute} src={decrease} alt="decrease" />
            </div>
            <span className={styles.sepration}>:</span>
            <div className={styles.seconds}>
              <span>Seconds</span>
              <img onClick={increaseSecond} src={increase} alt="increase" />
              {seconds < 10 ? <h3>{`0${seconds}`}</h3> : <h3> {seconds}</h3>}
              <img onClick={decreaseSecond} src={decrease} alt="decrease" />
            </div>
          </div>
          {playing ? (
            <button onClick={handlePauseStart}>Pause</button>
          ) : (
            <button onClick={handlePauseStart}>Start</button>
          )}
          <audio ref={sound} src={timesUp} />
        </div>
      
    </>
  );
}

export default Timer;
