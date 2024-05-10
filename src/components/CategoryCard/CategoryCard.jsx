import React, { useRef } from 'react'
import styles from "./CategoryCard.module.css"

function CategoryCard(
   { name,
    img,
    bgColor,
    cardSelect,
    setCardSelect,
    selectedStatus,
    setError,}
) {

    const selected = useRef(null);

  const handleselect = (e) => {
    const cardName = selected.current.innerText;
    const exist = cardSelect.indexOf(cardName);

    if (exist !== -1) {
      cardSelect.splice(exist, 1);
      setCardSelect([...cardSelect]);
    } else {
      setCardSelect([...cardSelect, cardName]);
    }

    if (cardSelect.length >= 2) {
      setError(false);
    }
  };

  return (
    <div
      ref={selected}
      onClick={handleselect}
      className={`${styles.cards} ${selectedStatus ? styles.selected : ''}`}
      style={{ background: bgColor }}
    >
      {name} <img src={img} alt="action" />
    </div>
  )
}

export default CategoryCard