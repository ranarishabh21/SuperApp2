import React from "react";
import SignUpform from "../SignUpForm/SignUpform";
import styles from "./Register.module.css";

function Register() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <h1 className={styles.slag}>Discover new things on Superapp</h1>
        </div>
        <div className={styles.formContainer}>
          <SignUpform />
        </div>
      </div>
    </>
  );
}

export default Register;
