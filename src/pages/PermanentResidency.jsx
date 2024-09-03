import React, { useState } from 'react';
import styles from "../styles/PermanentResidency.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import studyVisaImg from "../assets/graduatedStudent.png";
import OurProcess from "../sections/OurProcess";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

let PermanentResidency = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div className={styles.bannerHeading}>
            <h1>Permanent Residency</h1>
            <p>
              Canada welcomes thousands of skilled individuals from around the
              world every year. With a thriving economy, high living standards,
              and better opportunities, it's no wonder so many aspire to call it
              home.
            </p>
          </div>

          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p>About the program</p>
              <p>Eligibility</p>
              <p>Advantages of Express Entry</p>
              <p>Refusal Reason</p>
              <p>Draw History</p>
              <p>Appointment</p>
              <p>Why Choose us</p>
              <p>Testimonials</p>
              <p>FAQs</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>
            The Canadian Permanent Residency (PR) Program, managed by
            Immigration, Refugees and Citizenship Canada (IRCC), allows foreign
            nationals to obtain permanent resident status in Canada. This status
            gives you the right to live, work, and study in Canada indefinitely,
            with the same rights and freedoms as Canadian citizens (except
            voting and running for office).
          </p>

          <p>
            There are different PR programs available, each with its own
            eligibility requirements and application process. For over a decade,
            we have successfully processed thousands of PR applications
            successfully. We will provide you all the information you need to
            explore your options and help you select the best one for you.
          </p>
        </div>

        <div className={styles.canadianImg}>
          <img src={ServiceImg} alt="err" />
        </div>
      </div>

      <div className={styles.pathwayParent}>
        <div className={styles.pathway}>
          <div className={styles.pathwayHeading}>
            <h1>Pathway's to becoming a PR</h1>
          </div>

          <div className={styles.pathwayCardsParent}>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="" />
              <h2>Express Entry</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="" />
              <h2>Pilot Program</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="" />
              <h2>PNP</h2>
            </div>
            <div className={styles.pathwayCards}>
              <img src={studyVisaImg} alt="" />
              <h2>RNIP</h2>
            </div>
          </div>
        </div>
      </div>

      <OurProcess />

      <Footer1/>
    </>
  );
};

export default PermanentResidency;
