import React, { useState } from "react";
import styles from "../styles/Immigration.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Calculator from "../assets/calculator-Immigration.png";
import CalculatorWhite from "../assets/calculator-Immigration-white.png";
import Assessment from "../assets/assessment-immigration.png";
import AssessmentWhite from "../assets/assessment-immigration-white.png";
import Express from "../assets/express-immigration.png";
import ExpressWhite from "../assets/express-immigration-white.png";
import Sandclock from "../assets/sandclock-immigration.png";
import SandclockWhite from "../assets/sandclock-immigration-white.png";


let Immigration = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tools = [
    {
      img: Assessment,
      hoverImg: AssessmentWhite,
      title: "Free Assessment",
      description: "Book a Free Assessment with us to help you and your family members find eligibility in various Canadian immigration pathways. Book now!"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "FSWP Calculator",
      description: "Our online FSWP calculator helps you to check your eligibility under the Federal Skilled Worker (FSW) Program."
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "BCPNP Calculator",
      description: "Our online BCPNP calculator helps you to calculate your scores under various BCPNP pathways. Click here to check your BCPNP score today! CLB Calculator for IELTS"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for IELTS",
      description: "Our online IELTS CLB calculator helps you to calculate your CLB Level for your IELTS result. Click here to check your IELTS CLB today!"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for CELPIP",
      description: "Our online CELPIP calculator helps you to calculate your CLB Level for your CELPIP result. Click here to check your CELPIP CLB today!"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for French (TEF)",
      description: "Our online TEF CLB calculator helps you to calculate your French CLB Level for your TEF result. Click here to check your TEF CLB today!"
    },
    {
      img: Express,
      hoverImg: ExpressWhite,
      title: "Express Entry CRS Draw History",
      description: "Check all the Draw history for Express Entry, including latest Draws, Updated Regularly!"
    },
    {
      img: Sandclock,
      hoverImg: SandclockWhite,
      title: "Coming Soon",
      description: "Coming Soon"
    }
  ];

  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h3>Canada immigration Assessment Form</h3>
            <h1>Immigration Tools</h1>
            <p>
              These immigration tools will help you understand the immigration
              process and what you need to do obtain a Canadian visa.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          <div className={styles.cardParent}>
            {tools.map((tool, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === index ? tool.hoverImg : tool.img} alt={tool.title} />
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Immigration;
