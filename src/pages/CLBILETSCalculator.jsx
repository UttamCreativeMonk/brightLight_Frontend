import React, { useState, useEffect } from "react";
import styles from "../styles/CLBILETSCalculator.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const CLBILETSCalculator = () => {
  let [selected, setSelected] = useState(1);
  let [data, setData] = useState([]);
  const [scores, setScores] = useState({
    listening: 1.0,
    reading: 1.0,
    writing: 1.0,
    speaking: 1.0,
  });

  let [scores2, setScores2] = useState({
    listening: 1.0,
    reading: 1.0,
    writing: 1.0,
    speaking: 1.0,
  });

  let [scores3, setScores3] = useState({
    listening: 1.0,
    reading: 1.0,
    writing: 1.0,
    speaking: 1.0,
  });

  const [selectedCLB2, setSelectedCLB2] = useState("1");

  const handleCLBClick2 = (level) => {
    setSelectedCLB(level);

    switch (level) {
      case "1":
        setScores2({
          listening: Math.floor(data.c2b1PointsListening),
          reading: Math.floor(data.c2b1PointsReading),
          writing: Math.floor(data.c2b1PointsWriting),
          speaking: Math.floor(data.c2b1PointsSpeaking),
        });
        break;
      case "2":
        setScores2({
          listening: Math.floor(data.c2b2PointsListening),
          reading: Math.floor(data.c2b2PointsReading),
          writing: Math.floor(data.c2b2PointsWriting),
          speaking: Math.floor(data.c2b2PointsSpeaking),
        });
        break;
      case "3":
        setScores2({
          listening: Math.floor(data.c2b3PointsListening),
          reading: Math.floor(data.c2b3PointsReading),
          writing: Math.floor(data.c2b3PointsWriting),
          speaking: Math.floor(data.c2b3PointsSpeaking),
        });
        break;
      case "4":
        setScores2({
          listening: Math.floor(data.c2b4PointsListening),
          reading: Math.floor(data.c2b4PointsReading),
          writing: Math.floor(data.c2b4PointsWriting),
          speaking: Math.floor(data.c2b4PointsSpeaking),
        });
        break;
      case "5":
        setScores2({
          listening: Math.floor(data.c2b5PointsListening),
          reading: Math.floor(data.c2b5PointsReading),
          writing: Math.floor(data.c2b5PointsWriting),
          speaking: Math.floor(data.c2b5PointsSpeaking),
        });
        break;
      case "6":
        setScores2({
          listening: Math.floor(data.c2b6PointsListening),
          reading: Math.floor(data.c2b6PointsReading),
          writing: Math.floor(data.c2b6PointsWriting),
          speaking: Math.floor(data.c2b6PointsSpeaking),
        });
        break;
      case "7":
        setScores2({
          listening: Math.floor(data.c2b7PointsListening),
          reading: Math.floor(data.c2b7PointsReading),
          writing: Math.floor(data.c2b7PointsWriting),
          speaking: Math.floor(data.c2b7PointsSpeaking),
        });
        break;
      case "8":
        setScores2({
          listening: Math.floor(data.c2b8PointsListening),
          reading: Math.floor(data.c2b8PointsReading),
          writing: Math.floor(data.c2b8PointsWriting),
          speaking: Math.floor(data.c2b8PointsSpeaking),
        });
        break;
      case "9":
        setScores2({
          listening: Math.floor(data.c2b9PointsListening),
          reading: Math.floor(data.c2b9PointsReading),
          writing: Math.floor(data.c2b9PointsWriting),
          speaking: Math.floor(data.c2b9PointsSpeaking),
        });
        break;
      case "10":
        setScores2({
          listening: Math.floor(data.c2b10PointsListening),
          reading: Math.floor(data.c2b10PointsReading),
          writing: Math.floor(data.c2b10PointsWriting),
          speaking: Math.floor(data.c2b10PointsSpeaking),
        });
        break;
      case "11":
        setScores2({
          listening: Math.floor(data.c2b11PointsListening),
          reading: Math.floor(data.c2b11PointsReading),
          writing: Math.floor(data.c2b11PointsWriting),
          speaking: Math.floor(data.c2b11PointsSpeaking),
        });
        break;
      case "12":
        setScores2({
          listening: Math.floor(data.c2b12PointsListening),
          reading: Math.floor(data.c2b12PointsReading),
          writing: Math.floor(data.c2b12PointsWriting),
          speaking: Math.floor(data.c2b12PointsSpeaking),
        });
        break;
      default:
        break;
    }
  };

  const [selectedCLB3, setSelectedCLB3] = useState("1");

  const handleCLBClick3 = (level) => {
    setSelectedCLB(level);

    switch (level) {
      case "1":
        setScores3({
          listening: Math.floor(data.c3b1PointsListening),
          reading: Math.floor(data.c3b1PointsReading),
          writing: Math.floor(data.c3b1PointsWriting),
          speaking: Math.floor(data.c3b1PointsSpeaking),
        });
        break;
      case "2":
        setScores3({
          listening: Math.floor(data.c3b2PointsListening),
          reading: Math.floor(data.c3b2PointsReading),
          writing: Math.floor(data.c3b2PointsWriting),
          speaking: Math.floor(data.c3b2PointsSpeaking),
        });
        break;
      case "3":
        setScores3({
          listening: Math.floor(data.c3b3PointsListening),
          reading: Math.floor(data.c3b3PointsReading),
          writing: Math.floor(data.c3b3PointsWriting),
          speaking: Math.floor(data.c3b3PointsSpeaking),
        });
        break;
      case "4":
        setScores3({
          listening: Math.floor(data.c3b4PointsListening),
          reading: Math.floor(data.c3b4PointsReading),
          writing: Math.floor(data.c3b4PointsWriting),
          speaking: Math.floor(data.c3b4PointsSpeaking),
        });
        break;
      case "5":
        setScores3({
          listening: Math.floor(data.c3b5PointsListening),
          reading: Math.floor(data.c3b5PointsReading),
          writing: Math.floor(data.c3b5PointsWriting),
          speaking: Math.floor(data.c3b5PointsSpeaking),
        });
        break;
      case "6":
        setScores3({
          listening: Math.floor(data.c3b6PointsListening),
          reading: Math.floor(data.c3b6PointsReading),
          writing: Math.floor(data.c3b6PointsWriting),
          speaking: Math.floor(data.c3b6PointsSpeaking),
        });
        break;
      case "7":
        setScores3({
          listening: Math.floor(data.c3b7PointsListening),
          reading: Math.floor(data.c3b7PointsReading),
          writing: Math.floor(data.c3b7PointsWriting),
          speaking: Math.floor(data.c3b7PointsSpeaking),
        });
        break;
      case "8":
        setScores3({
          listening: Math.floor(data.c3b8PointsListening),
          reading: Math.floor(data.c3b8PointsReading),
          writing: Math.floor(data.c3b8PointsWriting),
          speaking: Math.floor(data.c3b8PointsSpeaking),
        });
        break;
      case "9":
        setScores3({
          listening: Math.floor(data.c3b9PointsListening),
          reading: Math.floor(data.c3b9PointsReading),
          writing: Math.floor(data.c3b9PointsWriting),
          speaking: Math.floor(data.c3b9PointsSpeaking),
        });
        break;
      case "10":
        setScores3({
          listening: Math.floor(data.c3b10PointsListening),
          reading: Math.floor(data.c3b10PointsReading),
          writing: Math.floor(data.c3b10PointsWriting),
          speaking: Math.floor(data.c3b10PointsSpeaking),
        });
        break;
      case "11":
        setScores3({
          listening: Math.floor(data.c3b11PointsListening),
          reading: Math.floor(data.c3b11PointsReading),
          writing: Math.floor(data.c3b11PointsWriting),
          speaking: Math.floor(data.c3b11PointsSpeaking),
        });
        break;
      case "12":
        setScores3({
          listening: Math.floor(data.c3b12PointsListening),
          reading: Math.floor(data.c3b12PointsReading),
          writing: Math.floor(data.c3b12PointsWriting),
          speaking: Math.floor(data.c3b12PointsSpeaking),
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/clb-calculator")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        if (data && data[0]) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [selectedCLB, setSelectedCLB] = useState("CLB1");

  const handleCLBClick = (level) => {
    setSelectedCLB(level);

    switch (level) {
      case "CLB1":
        setScores({
          listening: Math.floor(data.c1b1PointsListening),
          reading: Math.floor(data.c1b1PointsReading),
          writing: Math.floor(data.c1b1PointsWriting),
          speaking: Math.floor(data.c1b1PointsSpeaking),
        });
        break;
      case "CLB2":
        setScores({
          listening: Math.floor(data.c1b2PointsListening),
          reading: Math.floor(data.c1b2PointsReading),
          writing: Math.floor(data.c1b2PointsWriting),
          speaking: Math.floor(data.c1b2PointsSpeaking),
        });
        break;
      case "CLB3":
        setScores({
          listening: Math.floor(data.c1b3PointsListening),
          reading: Math.floor(data.c1b3PointsReading),
          writing: Math.floor(data.c1b3PointsWriting),
          speaking: Math.floor(data.c1b3PointsSpeaking),
        });
        break;
      case "CLB4":
        setScores({
          listening: Math.floor(data.c1b4PointsListening),
          reading: Math.floor(data.c1b4PointsReading),
          writing: Math.floor(data.c1b4PointsWriting),
          speaking: Math.floor(data.c1b4PointsSpeaking),
        });
        break;
      case "CLB5":
        setScores({
          listening: Math.floor(data.c1b5PointsListening),
          reading: Math.floor(data.c1b5PointsReading),
          writing: Math.floor(data.c1b5PointsWriting),
          speaking: Math.floor(data.c1b5PointsSpeaking),
        });
        break;
      case "CLB6":
        setScores({
          listening: Math.floor(data.c1b6PointsListening),
          reading: Math.floor(data.c1b6PointsReading),
          writing: Math.floor(data.c1b6PointsWriting),
          speaking: Math.floor(data.c1b6PointsSpeaking),
        });
        break;
      case "CLB7":
        setScores({
          listening: Math.floor(data.c1b7PointsListening),
          reading: Math.floor(data.c1b7PointsReading),
          writing: Math.floor(data.c1b7PointsWriting),
          speaking: Math.floor(data.c1b7PointsSpeaking),
        });
        break;
      case "CLB8":
        setScores({
          listening: Math.floor(data.c1b8PointsListening),
          reading: Math.floor(data.c1b8PointsReading),
          writing: Math.floor(data.c1b8PointsWriting),
          speaking: Math.floor(data.c1b8PointsSpeaking),
        });
        break;
      case "CLB9":
        setScores({
          listening: Math.floor(data.c1b9PointsListening),
          reading: Math.floor(data.c1b9PointsReading),
          writing: Math.floor(data.c1b9PointsWriting),
          speaking: Math.floor(data.c1b9PointsSpeaking),
        });
        break;
      case "CLB10":
        setScores({
          listening: Math.floor(data.c1b10PointsListening),
          reading: Math.floor(data.c1b10PointsReading),
          writing: Math.floor(data.c1b10PointsWriting),
          speaking: Math.floor(data.c1b10PointsSpeaking),
        });
        break;
      case "CLB11":
        setScores({
          listening: Math.floor(data.c1b11PointsListening),
          reading: Math.floor(data.c1b11PointsReading),
          writing: Math.floor(data.c1b11PointsWriting),
          speaking: Math.floor(data.c1b11PointsSpeaking),
        });
        break;
      case "CLB12":
        setScores({
          listening: Math.floor(data.c1b12PointsListening),
          reading: Math.floor(data.c1b12PointsReading),
          writing: Math.floor(data.c1b12PointsWriting),
          speaking: Math.floor(data.c1b12PointsSpeaking),
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
            {data && <h1>{data?.heading}</h1>}
            {data && <h4>{data?.description}</h4>}
          </div>
        </div>
      </div>

      <div className={styles.calculatorButtonsParent}>
        {data && <h1>{data?.subHeading}</h1>}
        <div className={styles.calculatorButtonsDiv}>
          <div className={styles.calculatorButtons}>
            <button onClick={() => setSelected(1)}>{data?.c1}</button>
          </div>

          <div className={styles.calculatorButtons}>
            <button onClick={() => setSelected(2)}>{data?.c2}</button>
          </div>
          <div className={styles.calculatorButtons}>
            <button onClick={() => setSelected(3)}>{data?.c3}</button>
          </div>
        </div>
      </div>

      {selected == 1 ? (
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB1" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB1")}
            >
              CLB1
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB2" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB2")}
            >
              CLB2
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB3" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB3")}
            >
              CLB3
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB4" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB4")}
            >
              CLB4
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB5" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB5")}
            >
              CLB5
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB6" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB6")}
            >
              CLB6
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB7" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB7")}
            >
              CLB7
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB8" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB8")}
            >
              CLB8
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB9" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB9")}
            >
              CLB9
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB10" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB10")}
            >
              CLB10
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB11" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick("CLB11")}
            >
              CLB11
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB === "CLB12" ? styles.selectedBox : ""
              }`}
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
      ) : null}

      {selected == 2 ? (
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "1" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("1")}
            >
              {data?.c2b1}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "2" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("2")}
            >
              {data?.c2b2}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "3" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("3")}
            >
              {data?.c2b3}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "4" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("4")}
            >
              {data?.c2b4}
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "5" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("5")}
            >
              {data?.c2b5}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "6" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("6")}
            >
              {data?.c2b6}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "7" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("7")}
            >
              {data?.c2b7}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "8" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("8")}
            >
              {data?.c2b8}
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "9" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("9")}
            >
              {data?.c2b9}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "10" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("10")}
            >
              {data?.c2b10}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "11" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("11")}
            >
              {data?.c2b11}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB2 === "12" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick2("12")}
            >
              {data?.c2b12}
            </div>
          </div>

          <div className={styles.scoreContainer}>
            <div className={styles.score}>
              <h5>{scores2.listening}</h5>
              <br />
              <p>Listening</p>
            </div>
            <div className={styles.score}>
              <h5>{scores2.reading}</h5>
              <br />
              <p>Reading</p>
            </div>
            <div className={styles.score}>
              <h5>{scores2.writing}</h5>
              <br />
              <p>Writing</p>
            </div>
            <div className={styles.score}>
              <h5>{scores2.speaking}</h5>
              <br />
              <p>Speaking</p>
            </div>
          </div>
        </div>
      ) : null}

      {selected == 3 ? (
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "1" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("1")}
            >
              {data?.c3b1}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "2" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("2")}
            >
              {data?.c3b2}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "3" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("3")}
            >
              {data?.c3b3}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "4" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("4")}
            >
              {data?.c3b4}
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "5" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("5")}
            >
              {data?.c3b5}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "6" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("6")}
            >
              {data?.c3b6}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "7" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("7")}
            >
              {data?.c3b7}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "8" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("8")}
            >
              {data?.c3b8}
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "9" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("9")}
            >
              {data?.c3b9}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "10" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("10")}
            >
              {data?.c3b10}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "11" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("11")}
            >
              {data?.c3b11}
            </div>
            <div
              className={`${styles.box} ${
                selectedCLB3 === "12" ? styles.selectedBox : ""
              }`}
              onClick={() => handleCLBClick3("12")}
            >
              {data?.c3b12}
            </div>
          </div>

          <div className={styles.scoreContainer}>
            <div className={styles.score}>
              <h5>{scores3.listening}</h5>
              <br />
              <p>Listening</p>
            </div>
            <div className={styles.score}>
              <h5>{scores3.reading}</h5>
              <br />
              <p>Reading</p>
            </div>
            <div className={styles.score}>
              <h5>{scores3.writing}</h5>
              <br />
              <p>Writing</p>
            </div>
            <div className={styles.score}>
              <h5>{scores3.speaking}</h5>
              <br />
              <p>Speaking</p>
            </div>
          </div>
        </div>
      ) : null}

      <Footer1 />
    </>
  );
};

export default CLBILETSCalculator;
