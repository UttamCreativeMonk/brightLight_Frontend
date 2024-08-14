import React from "react";
import styles from "../styles/Map.module.css";

let Map = () => {
  return (
    <div className={styles.mapParent}>
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.752602531727!2d76.74414563737653!3d30.63835165105361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febb05ee7e45b%3A0xa17a586890ee2175!2sGmada%20Aerocity%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723022976691!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className={styles.theButton} role="button">
          Find Us On Maps
        </button>
      </div>
    </div>
  );
};

export default Map;