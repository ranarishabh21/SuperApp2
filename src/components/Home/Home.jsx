import React from 'react'
import UserDetails from '../UserDetails/UserDetails'
import Weather from '../Weather/Weather'
import Notes from '../Notes/Notes'
import Timer from '../Timer/Timer'
import News from '../News/News'
import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie");
  };
  return (
    <>
    <div className={styles.container}>
      <section className={styles.leftPart}>
        <div className={styles.leftTop}>
          <div className={styles.leftTopLeft}>
            <UserDetails />
            <Weather />
          </div>
          <Notes />
        </div>
        <div className={styles.leftBottom}>
          <Timer />
        </div>
      </section>

      <section className={styles.rightPart}>
        <News />
      </section>
      <button onClick={handleClick}>Browse</button>
    </div>

    </>
  )
}

export default Home