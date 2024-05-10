import React, { useState, useEffect } from "react";

function MovieCard({ category }) {
  const [moviesData, setMoviesData] = useState([]);

  const genre = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const fetchData = () => {
    const genreItem = genre.find((item) => item.name === category);
    if (genreItem) {
      const genreId = genreItem.id;
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=86620f896472fef4f057d18c281f4410&with_genres=${genreId}`
      )
        .then((res) => res.json())
        .then((data) => {
          const randomMovies = data.results.slice(0, 4);
          setMoviesData(randomMovies);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="category-name">{category}</h1>
      <div className="movies-card">
        {moviesData.map((item) => (
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieCard;