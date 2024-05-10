import React from "react";
import styles from "./UserDetails.module.css";
import profile from "../../assets/images/profileHome.png";

function UserDetails() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const category = JSON.parse(localStorage.getItem("categories"));
  return (
    <div className={styles.container}>
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className={styles.username}>{user.userName}</h2>
        <div className={styles.categorySelected}>
          {category.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
