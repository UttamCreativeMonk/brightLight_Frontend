import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Odometer.module.css";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-minimal.css";
import "animate.css/animate.min.css";

const OdometerComponent = ({ value }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [odometerInstance, setOdometerInstance] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once we have entered
        }
      });
    });

    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && !odometerInstance) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 1234, // Initial value
        theme: "minimal",
        duration: 3000,
      });
      odometer.render();
      setOdometerInstance(odometer);
    }

    if (odometerInstance && isVisible) {
      odometerInstance.update(value); // Update the value when visible
    }
  }, [isVisible, value, odometerInstance]);

  return (
    <div
      className={`${styles.odometer} animated fadeIn`}
      ref={odometerRef}
    ></div>
  );
};

export default OdometerComponent;
