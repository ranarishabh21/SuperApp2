import React, { useEffect, useState } from 'react'
import styles from "./Weather.module.css"
import wind from "../../assets/icons/wind.png"
import humidity from "../../assets/icons/humidity.png"
import pressure from "../../assets/icons/pressure.png"
function Weather() {
    const [weather, setWeather] = useState();
    console.log(import.meta.env.VITE_WEATHER_KEY)
  const weatherData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5c358312abeb4902811155720240905&q=India&aqi=no`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const inputDate = new Date(data.location.localtime);
        const date = `${
          +inputDate.getMonth() + 1
        }-${inputDate.getDate()}-${inputDate.getFullYear()}`;
        const time = `${inputDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`;
        data.location.date = date;
        data.location.time = time;
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    weatherData();
  }, []);
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherHeader}>
        <span>{weather && weather.location.date}</span>
        <span>{weather && weather.location.time}</span>
      </div>
      <div className={styles.weatherFooter}>
        <div className={styles.dayCondition}>
          <img
            src={weather && weather.current.condition.icon}
            alt="weather_condition"
          />
          <span>{weather && weather.current.condition.text}</span>
        </div>
        <div className={styles.border}></div>
        <div className={styles.tempraturePressure}>
          {`${weather && weather.current.temp_c}°C`}
          <span>
            <img src={pressure} alt="temprature" />
            {`${weather && weather.current.pressure_mb} mbar`}
            <br /> Pressure
          </span>
        </div>
        <div className={styles.border}></div>
        <div className={styles.windHumidity}>
          <span>
            <img src={wind} alt="wind" />
            {weather && weather.current.wind_kph}
            <br />
            Wind
          </span>
          <span>
            <img src={humidity} alt="humidity" />
            {`${weather && weather.current.humidity} %`}
            <br />
            Humidity
          </span>
        </div>
      </div>
    </div>
  )
}

export default Weather