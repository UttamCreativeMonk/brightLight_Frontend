import React, { useState } from "react";
import styles from "../styles/HealthAuthoritiesStream.module.css";
import { Link } from "react-router-dom";

const HealthAuthorityStream = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <Navbar1 /> */}
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>
                Eligibility
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.container}>
        <h1 className={styles.title} id="about-program">
          British Columbia Health Authority Stream
        </h1>
        <p className={styles.description}>
          The British Columbia Health Authority Stream is one of the specialized immigration streams within the British Columbia Provincial Nominee Program (BCPNP), operated by the province of British Columbia. This stream aims to attract skilled immigrants who can contribute significantly to the healthcare infrastructure in BC.
        </p>
        <p className={styles.description}>
          Note: This stream is different from healthcare priority occupations applying under BCPNP Skilled Worker or International Graduate streams.
        </p>

        <h2 className={styles.subtitle} id="benefits">
          Benefits of British Columbia Health Authority Stream
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Job Offer: The job offer can fall under any NOC tier, ranging from 0 to 5. It does not have to be a high-skilled occupation or related to healthcare.</li>
          <li className={styles.listItem}>No Draws: The BC Health Authority stream operates without draws. All you need to do is meet the eligibility criteria for this program.</li>
          <li className={styles.listItem}>Nomination Priority: Successful candidates nominated through the BC Health Authority Program receive an invitation to apply for Canadian permanent residence.</li>
          <li className={styles.listItem}>No Express Entry Profile Required: Unlike other immigration streams, applicants for this program do not need an Express Entry profile to be eligible.</li>
          <li className={styles.listItem}>Accelerated Processing: While Express Entry is not mandatory, candidates with an active profile may choose to apply through the Express Entry system for faster processing.</li>
        </ul>

        <h2 className={styles.subtitle} id="eligibility">
          Eligibility for the British Columbia Health Authority Stream
        </h2>
        <h3 className={styles.subheading}>1. Job Offer</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Hold an indeterminate (no defined end date), full-time job offer in ANY occupation from one of B.C. public health authorities listed below:
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>Provincial Health Services Authority</li>
              <li className={styles.nestedListItem}>First Nations Health Authority</li>
              <li className={styles.nestedListItem}>Fraser Health</li>
              <li className={styles.nestedListItem}>Interior Health</li>
              <li className={styles.nestedListItem}>Island Health</li>
              <li className={styles.nestedListItem}>Northern Health</li>
              <li className={styles.nestedListItem}>Vancouver Coastal Health</li>
              <li className={styles.nestedListItem}>Providence Health Care</li>
            </ul>
          </li>
          <li className={styles.listItem}>Alternatively, possess a letter from a health authority or midwife practice group confirming your role as a physician, nurse practitioner, or midwife in British Columbia.</li>
        </ul>

        <h3 className={styles.subheading}>2. Education and Qualifications</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Satisfy the education, training, experience, and qualification criteria specified by the public health authority.</li>
        </ul>

        <h3 className={styles.subheading}>3. Health Authority Support</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>The health authority must provide recommendation and support your application.</li>
        </ul>

        <h3 className={styles.subheading}>4. Language</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>If the Job Offer's NOC code is of TEER Category 0 or 1, you do not need language results to be eligible (BCPNP can still ask you to pass a language test at their own discretion).</li>
          <li className={styles.listItem}>If the Job Offer's NOC code is of TEER Category 2, 3, 4 or 5, you will need to have a Canadian Language Benchmark (CLB) score of at least 4 to be eligible.</li>
        </ul>

        <h3 className={styles.subheading}>5. Financial Capability</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Demonstrate that you can support yourself and your dependents during your stay in British Columbia.</li>
        </ul>

        <h2 className={styles.subtitle} id="how-to-apply">
          How to Apply for BC Health Authority Stream?
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>The BC Health Authority stream accepts new applications at any time.</li>
          <li className={styles.listItem}>Specify whether you are applying through the Express Entry system or non-Express Entry system.</li>
          <li className={styles.listItem}>Provide resume, job description, recommendation letter, and BC PNP Employer Declaration Form from one of the health authorities.</li>
          <li className={styles.listItem}>Upon approval, candidates receive a provincial nomination for permanent residence from BC.</li>
          <li className={styles.listItem}>Candidates can also request a work permit support letter if their work permit is expiring or if they do not have a work permit at all. This allows them to work in Canada while their permanent residence application is processed.</li>
          <li className={styles.listItem}>If applying through Express Entry, candidates receive a nomination notification on their IRCC online account. Accepting the nomination boosts their Comprehensive Ranking System (CRS) score by 600 points, and hence guarantees an Invitation to Apply (ITA) for permanent residence.</li>
          <li className={styles.listItem}>If applying through the non-Express Entry system, candidates must prepare a paper-based application and submit it online.</li>
        </ul>

        <h2 className={styles.subtitle} id="book-appointment">
          Still Not Sure?
        </h2>
        <p className={styles.description}>
          Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Health Authority Program. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
        </p>
        <p className={styles.description}>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.
        </p>
        <Link to="/book-appointment" className={styles.button}>Book Appointment</Link>

        <a href="/bcpnp-calculator" className={styles.button}>Calculate Your BCPNP Score</a>
      </div>
    </>
  );
};

export default HealthAuthorityStream;
