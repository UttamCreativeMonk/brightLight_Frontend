// import React from "react";
import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/BestChoice.module.css";
import BestChoiceImg from "../assets/best-choice.png";
import PlaneMap from "../assets/planeMap.png";

let BestChoice = () => {
  let [planeTop, setPlaneTop] = useState(150);
  const [isTrackImageVisible, setIsTrackImageVisible] = useState(false);
  const trackImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTrackImageVisible(entry.isIntersecting);
      },
      { threshold: 0.17 }
    );

    if (trackImageRef.current) {
      observer.observe(trackImageRef.current);
    }

    return () => {
      if (trackImageRef.current) {
        observer.unobserve(trackImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!isTrackImageVisible) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setPlaneTop((prevTop) => prevTop + 12.5);
      } else {
        // Scrolling up
        setPlaneTop((prevTop) => prevTop - 12.5);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTrackImageVisible]);
  return (
    <div className={styles.bestChoiceParent}>
      <div className={styles.bestChoice}>
        <div className={styles.bestChoiceHeading}>
          <h2>What makes us the best choice for you?</h2>
        </div>
        <img
          src={PlaneMap}
          alt="err"
          className={styles.plane}
          style={{ top: `${planeTop}px` }}
        />
        <img
          src={BestChoiceImg}
          ref={trackImageRef}
          alt="err"
          className={styles.trackImage}
        />
      </div>
    </div>
  );
};

export default BestChoice;