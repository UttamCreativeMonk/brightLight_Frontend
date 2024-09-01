import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { 
    fetch("https://brightlight-node.onrender.com")
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
        return;
      })
      .catch((error) => {
        console.log(error);
      });

    let loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3700);
  }, []);

  return (
    <div
      className={styles.loaderParent}
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible"
      }}
    >
      <div className={styles.pl}></div>
    </div>
  );
};

export default Loader;
