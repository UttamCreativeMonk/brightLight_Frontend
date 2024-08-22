import React from "react";
import styles from "../styles/FAQ_Blue.module.css";
import { ReactComponent as RightArrow } from "../assets/right-arrow-white.svg";
import { useState } from "react";

let FAQ_Blue = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let handleQuestionClick = (index) => {
    setActiveIndex(index);
  };
  let faqData = [
    {
      question: "1 lorem question here for the faq question data section",
      answer: "This is the answer for question 1",
    },
    {
      question: "2 lorem question here for the faq question data section",
      answer: "This is the answer for question 2",
    },
    {
      question: "3 lorem question here for the faq question data section",
      answer: "This is the answer for question 3",
    },
    {
      question: "4 lorem question here for the faq question data section",
      answer: "This is the answer for question 4",
    },
    {
      question: "5 lorem question here for the faq question data section",
      answer: "This is the answer for question 5",
    },
  ];
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqParentSection}>
        <div className={styles.faqQuestionSection}>
          <div className={styles.questionMarkSection}></div>
          <div className={styles.faqQuestionsParentSection}>
            <h1>FAQ's Made Simple</h1>
            <div className={styles.questions}>
              {faqData.map((item, index) => {
                return (
                  <div
                    onClick={() => handleQuestionClick(index)}
                    key={index}
                    className={`${styles.questionSection} ${
                      activeIndex == index ? styles.active : null
                    }`}
                  >
                    <p>{item.question}</p>
                    <RightArrow width={30} height={30} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.faqAnswersSection}>
          <p>{faqData[activeIndex].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ_Blue;