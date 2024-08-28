import React from "react";
import styles from "../styles/CLBILETSCalculator.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const CLBILETSCalculator = () => {
  return (
    <>
    <Navbar1 />
      <div className={styles.calculatorBackgroundParent}>
        <div className={styles.calculatorBackground}>
          <div className={styles.calculatorHeading}>
            <h1>Calculator</h1>
            <h4>
              Check your score today our specifically designed calculators
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.calculatorButtonsParent}>
        <h1>How to convert your score</h1>
        <div className={styles.calculatorButtonsDiv}>
          <div className={styles.calculatorButtons}>
            <button> CLB IELTS CALCULATOR</button>
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
          <div className={styles.box}>CLB1</div>
          <div className={styles.box}>CLB2</div>
          <div className={styles.box}>CLB3</div>
          <div className={styles.box}>CLB4</div>
        </div>
        <div className={styles.row}>
          <div className={styles.box}>CLB5</div>
          <div className={styles.box}>CLB6</div>
          <div className={styles.box}>CLB7</div>
          <div className={styles.box}>CLB8</div>
        </div>
        <div className={styles.row}>
          <div className={styles.box}>CLB9</div>
          <div className={styles.box}>CLB10</div>
          <div className={styles.box}>CLB11</div>
          <div className={styles.box}>CLB12</div>
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.score}>
            <h5>1.0</h5>
            <br />
            <p>Listening</p>
          </div>
          <div className={styles.score}>
            <h5>1.0</h5>
            <br /> <p>Reading</p>
          </div>
          <div className={styles.score}>
            <h5>1.0</h5>
            <br /> <p>Writing</p>
          </div>
          <div className={styles.score}>
            <h5>1.0</h5>
            <br />
            <p>Speaking</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CLBILETSCalculator;
