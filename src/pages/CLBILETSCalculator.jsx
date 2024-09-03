import React, { useState } from "react";
import styles from "../styles/CLBILETSCalculator.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const CLBILETSCalculator = () => {
  const [scores, setScores] = useState({
    listening: 1.0,
    reading: 1.0,
    writing: 1.0,
    speaking: 1.0,
  });

  const [selectedCLB, setSelectedCLB] = useState("CLB1"); // State to track the selected CLB level

  const handleCLBClick = (level) => {
    setSelectedCLB(level); // Update selected CLB level

    switch (level) {
      case "CLB1":
        setScores({
          listening: 1.0,
          reading: 1.0,
          writing: 1.0,
          speaking: 1.0,
        });
        break;
      case "CLB2":
        setScores({
          listening: 2.0,
          reading: 1.5,
          writing: 2.0,
          speaking: 2.0,
        });
        break;
      case "CLB3":
        setScores({
          listening: 3.0,
          reading: 2.5,
          writing: 3.0,
          speaking: 3.0,
        });
        break;
      case "CLB4":
        setScores({
          listening: 4.0,
          reading: 3.5,
          writing: 4.0,
          speaking: 4.0,
        });
        break;
      case "CLB5":
        setScores({
          listening: 5.0,
          reading: 4.5,
          writing: 5.0,
          speaking: 5.0,
        });
        break;
      case "CLB6":
        setScores({
          listening: 6.0,
          reading: 5.5,
          writing: 6.0,
          speaking: 6.0,
        });
        break;
      case "CLB7":
        setScores({
          listening: 7.0,
          reading: 6.5,
          writing: 7.0,
          speaking: 7.0,
        });
        break;
      case "CLB8":
        setScores({
          listening: 8.0,
          reading: 7.5,
          writing: 8.0,
          speaking: 8.0,
        });
        break;
      case "CLB9":
        setScores({
          listening: 9.0,
          reading: 8.5,
          writing: 9.0,
          speaking: 9.0,
        });
        break;
      case "CLB10":
        setScores({
          listening: 10.0,
          reading: 9.5,
          writing: 10.0,
          speaking: 10.0,
        });
        break;
      case "CLB11":
        setScores({
          listening: 11.0,
          reading: 10.5,
          writing: 11.0,
          speaking: 11.0,
        });
        break;
      case "CLB12":
        setScores({
          listening: 12.0,
          reading: 11.5,
          writing: 12.0,
          speaking: 12.0,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar1 />
      <div className={styles.calculatorBackgroundParent}>
        <div className={styles.calculatorBackground}>
          <div className={styles.calculatorHeading}>
            <h1>Calculator</h1>
            <h4>
              Check your score today with our specifically designed calculators
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.calculatorButtonsParent}>
        <h1>How to convert your score</h1>
        <div className={styles.calculatorButtonsDiv}>
          <div className={styles.calculatorButtons}>
            <button>CLB IELTS CALCULATOR</button>
          </div>
          <div className={styles.calculatorButtons}>
            <button>TEF CALCULATOR</button>
          </div>
          <div className={styles.calculatorButtons}>
            <button>CELPIP CALCULATOR</button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div
            className={`${styles.box} ${selectedCLB === "CLB1" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB1")}
          >
            CLB1
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB2" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB2")}
          >
            CLB2
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB3" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB3")}
          >
            CLB3
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB4" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB4")}
          >
            CLB4
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.box} ${selectedCLB === "CLB5" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB5")}
          >
            CLB5
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB6" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB6")}
          >
            CLB6
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB7" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB7")}
          >
            CLB7
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB8" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB8")}
          >
            CLB8
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.box} ${selectedCLB === "CLB9" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB9")}
          >
            CLB9
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB10" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB10")}
          >
            CLB10
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB11" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB11")}
          >
            CLB11
          </div>
          <div
            className={`${styles.box} ${selectedCLB === "CLB12" ? styles.selectedBox : ""}`}
            onClick={() => handleCLBClick("CLB12")}
          >
            CLB12
          </div>
        </div>

        <div className={styles.scoreContainer}>
          <div className={styles.score}>
            <h5>{scores.listening}</h5>
            <br />
            <p>Listening</p>
          </div>
          <div className={styles.score}>
            <h5>{scores.reading}</h5>
            <br />
            <p>Reading</p>
          </div>
          <div className={styles.score}>
            <h5>{scores.writing}</h5>
            <br />
            <p>Writing</p>
          </div>
          <div className={styles.score}>
            <h5>{scores.speaking}</h5>
            <br />
            <p>Speaking</p>
          </div>
        </div>
      </div>
      <Footer1/>
    </>
  );
};

export default CLBILETSCalculator;
