import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/BestChoice.module.css";
import BestChoiceImg from "../assets/best-choice.png";
import PlaneMap from "../assets/planeMap.png";

let BestChoice = () => {
  let [planeTop, setPlaneTop] = useState(150);
  let [isTrackImageVisible, setIsTrackImageVisible] = useState(false);
  let trackImageRef = useRef(null);
  let [bestChoiceHeading, setBestChoiceHeading] = useState([]);
  let [bestChoiceImage, setBestChoiceImage] = useState([]);
  let [plane, setPlane] = useState([]);

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

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/aboutUsBestChoiceSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBestChoiceHeading(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/bestChoice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBestChoiceImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/plane")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPlane(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.bestChoiceParent}>
      <div className={styles.bestChoice}>
        <div className={styles.bestChoiceHeading}>
          <h2>{bestChoiceHeading?.heading}</h2>
        </div>
        <img
          src={plane?.image}
          alt="err"
          className={styles.plane}
          style={{ top: `${planeTop}px` }}
        />
        <img
          src={bestChoiceImage?.image}
          ref={trackImageRef}
          alt="err"
          className={styles.trackImage}
        />
      </div>
    </div>
  );
};

export default BestChoice;