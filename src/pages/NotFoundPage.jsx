import React from "react";
import styles from "../styles/NotFoundPage.module.css";
import PageNotFoundImg from "../assets/pageNotFoundImg.svg";

let NotFoundPage = () => {
  return (
    <>
      <div className={styles.parentNotFound}>
        <div className={styles.mainNotFound}>
            <img className={styles.NotFoundPageimage} src={PageNotFoundImg} alt="Page not Found" />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
