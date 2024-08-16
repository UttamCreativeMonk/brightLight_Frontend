import React, { useState } from "react";
import styles from "../styles/BCPNPCalculator.module.css";

const BCPNPCalculator = () => {
  const [points, setPoints] = useState(0);

  const handleExperienceChange = (e) => {
    const experienceValue = e.target.value;

    // Update points based on the selected experience value
    switch (experienceValue) {
      case "5+":
        setPoints(15);
        break;
      case "4-5":
        setPoints(12);
        break;
      case "3-4":
        setPoints(9);
        break;
      case "2-3":
        setPoints(6);
        break;
      case "1-2":
        setPoints(3);
        break;
      case "<1":
        setPoints(1);
        break;
      case "0":
        setPoints(0);
        break;
      default:
        setPoints(0);
        break;
    }
  };

  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.bannerHeading}>
          <h1>B.C PNP Calculator 2024</h1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          1. Directly Related Work Experience in the Occupation of B.C. Job
          Offer:
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="5+"
                onChange={handleExperienceChange}
              />{" "}
              5 or more years
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="4-5"
                onChange={handleExperienceChange}
              />{" "}
              At least 4 but less than 5 years
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="3-4"
                onChange={handleExperienceChange}
              />{" "}
              At least 3 but less than 4 years
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="2-3"
                onChange={handleExperienceChange}
              />{" "}
              At least 2 but less than 3 years
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="1-2"
                onChange={handleExperienceChange}
              />{" "}
              At least 1 but less than 2 years
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="<1"
                onChange={handleExperienceChange}
              />{" "}
              Less than a year
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="0"
                onChange={handleExperienceChange}
              />{" "}
              No Experience
            </label>
          </div>
        </div>
        <div className={styles.points}>
          Points <input type="text" value={points} readOnly />
        </div>
      </div>
    </>
  );
};

export default BCPNPCalculator;
