import React from "react";
import styles from "../styles/HomePage.module.css";
import Rcic from "../assets/rcic.png";
import Cicc from "../assets/cicc.png";

let HomePage = () => {
  const cards = [
    { title: "Permanent Residence", icon: "🏡" },
    { title: "BCPNP", icon: "👨‍✈️" },
    { title: "Visitor Visa", icon: "🛂" },
    { title: "Study Visa", icon: "🎓" },
    { title: "Family Sponsorship", icon: "👨‍👩‍👧", active: true },
    { title: "Work Permit", icon: "👷‍♂️" },
    { title: "PFL", icon: "📄" },
  ];
  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>
              Feeling{" "}
              <span className={styles.bannerBlueHeading}>Overwhelmed?</span>{" "}
            </h1>
            <h1>
              Just Received a{" "}
              <span className={styles.bannerBlueHeading}>Refusal?</span>
            </h1>
            <h2>WE'VE HELPED MANY OVERCOME THEM</h2>
          </div>
          <div className={styles.bannerCardParent}>
            <div className={styles.cardContainer}>
              {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.icon}>{card.icon}</div>
                  <div className={styles.title}>{card.title}</div>
                </div>
              ))}
            </div>
          </div>
          <button className={styles.bookButton17} role="button">More Services</button>
        </div>
      </div>



      <div className={styles.memberParent}>
        <div className={styles.memberMain}>
            <div className={styles.memberCardParent}>
                <div className={styles.memberCard}>
                    <p>Member of</p>
                    <div className={styles.memberCardImg}><img src={Rcic} alt="err" /></div>
                </div>

                <div className={styles.memberCard}>
                    <p>Member of</p>
                    <div className={styles.memberCardImg}><img src={Rcic} alt="err" /></div>
                </div>

                <div className={styles.memberCard}>
                    <p>Accepted by</p>
                    <div className={styles.memberCardImg}><img src={Cicc} alt="err" /></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
