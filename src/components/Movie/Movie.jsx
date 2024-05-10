import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Movie.css"
import profile from "../../assets/images/profileMovie.png"
import MovieCard from '../MovieCard/MovieCard';

function Movie() {
    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem("categories"));
  
    return (
      <div className="movie-container">
        <section className="title-box">
          <div>
            <h1>Super app</h1>
            <img
              onClick={() => navigate("/home")}
              src={profile}
              alt="profile"
            />
          </div>
          <h2 className="entertainment">
            Entertainment according to your choice
          </h2>
        </section>
        <section className="movie-box">
          {data.map((item, index) => {
            return <MovieCard category={item} key={index} />;
          })}
        </section>
        <button
          onClick={() => {
            navigate("/genre");
          }}
        >
          Select Again
        </button>
      </div>
    );
}

export default Movie