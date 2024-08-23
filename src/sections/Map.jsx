import React from "react";
import styles from "../styles/Map.module.css";

let Map = () => {
  return (
    <div className={styles.mapParent}>
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.0813915844287!2d-122.79957792894358!3d49.12308935592699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9bc1ae6becd%3A0xaf29d4bfe0aceaae!2sBrightlight%20Immigration!5e0!3m2!1sen!2sin!4v1724327456832!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className={styles.theButton} role="button">
          Find Us On Maps
        </button>
      </div>
    </div>
  );
};

export default Map;
