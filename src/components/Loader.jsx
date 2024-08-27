import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Listen for the window's load event
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Add the event listener
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      className={styles.loaderParent}
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible",
      }}
    >
      <div className={styles.pl}></div>
    </div>
  );
};

export default Loader;
