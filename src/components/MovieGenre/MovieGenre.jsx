import React, { useState } from "react";
import styles from "./MovieGenre.module.css";
import warning from "../../assets/icons/warning.png";
import { useNavigate } from "react-router-dom";
import cross from "../../assets/icons/cross.png";

import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png";
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import CategoryCard from "../CategoryCard/CategoryCard";

function MovieGenre() {
  const navigate = useNavigate();
  const [cardSelected, setCardSelected] = useState([]);
  const [error, setError] = useState();

  const cardData = [
    { name: "Action", img: action, bgColor: " rgba(255, 82, 9, 1)" },
    { name: "Drama", img: drama, bgColor: "rgba(215, 164, 255, 1)" },
    { name: "Romance", img: romance, bgColor: "rgba(20, 138, 8, 1)" },
    { name: "Thriller", img: thriller, bgColor: "rgba(132, 194, 255, 1)" },
    { name: "Western", img: western, bgColor: "rgba(144, 37, 0, 1)" },
    { name: "Horror", img: horror, bgColor: "rgba(115, 88, 255, 1)" },
    { name: "Fantasy", img: fantasy, bgColor: "rgba(255, 74, 222, 1)" },
    { name: "Music", img: music, bgColor: "rgba(230, 30, 50, 1)" },
    { name: "Fiction", img: fiction, bgColor: "rgba(108, 208, 97, 1)" },
  ];

  const handleclick = () => {
    if (cardSelected.length >=3) {
      setError(false);
      localStorage.setItem("categories", JSON.stringify(cardSelected));
      navigate("/home");
    } else {
      setError(true);
    }
  };

  const deselectCard = (e) => {
    const findIndex = cardSelected.indexOf(e.target.alt);
    cardSelected.splice(findIndex, 1);
    setCardSelected([...cardSelected]);
  };
  const data = cardSelected.map((item, index) => {
    return (
      <div>
        {item}
        <img onClick={deselectCard} src={cross} alt={item} />
      </div>
    );
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Super app</h3>
          <p>Choose your entertainment category</p>
          <div className={styles.selectedCategory}>{data}</div>
          {error && (
            <div className={styles.error}>
              <img src={warning} alt="warning_icon" />
              Minimum 3 category required
            </div>
          )}
        </div>

        <div className={styles.right}>
          {cardData.map((item, index) => {
            return (
              <CategoryCard
                key={index}
                name={item.name}
                img={item.img}
                bgColor={item.bgColor}
                cardSelect={cardSelected}
                setCardSelect={setCardSelected}
                selectedStatus={cardSelected.includes(item.name) ? true : false}
                setError={setError}
              />
            );
          })}
        </div>

        <button onClick={handleclick}>Next Page</button>
      </div>
    </>
  );
}

export default MovieGenre;
