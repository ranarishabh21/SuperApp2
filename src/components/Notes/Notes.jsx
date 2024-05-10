import React, { useState } from 'react'
import styles from "./Notes.module.css"

function Notes() {
    const [note,setNote] = useState(
        JSON.parse(localStorage.getItem("note")) || ""
    )

    const handleChange = async (e) => {
        setNote(e.target.value);
        localStorage.setItem("note", JSON.stringify(e.target.value));
      };
  return (
    <div className={styles.noteBox}>
      All notes
      <textarea onChange={handleChange} value={note}></textarea>
    </div>
  )
}

export default Notes