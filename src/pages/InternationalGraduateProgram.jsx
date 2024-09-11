import React, { useState } from "react";
import styles from "../styles/InternationalGraduateProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";


const InternationalGraduateProgram = () => {
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
      <Navbar1 />
      <div className={styles.bannerParent}>
      <header className={styles.header}>
        <h1>British Columbia Provincial Nominee Program - International Graduate Stream</h1>
      </header>
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer_requirements")}>Employer Requirements</p>
              <p onClick={() => scrollToSection("bcnp-calculator")}>BCPNP Calculator</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply</p>
              <p onClick={() => scrollToSection("why_choose_us")}> Why Choose Us?</p>
              <p onClick={() => scrollToSection("book-appointment")}> Book Appointment </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
     
      <section className={styles.section} id="benefits">
        <h2>Benefits of BCPNP International Graduate Stream</h2>
        <ul>
          <li>Nomination Priority: Successful candidates receive an invitation to apply for Canadian permanent residence.</li>
          <li>No Express Entry Profile Required: No need for an Express Entry profile.</li>
          <li>Accelerated Processing: Option to apply through Express Entry for faster processing.</li>
        </ul>
      </section>
      <section className={styles.section} id="eligibility">
        <h2>Eligibility Criteria for International Graduate Stream</h2>
        <div className={styles.criteria}>
          <h3>1. Job Offer</h3>
          <ul>
            <li>You must hold an indeterminate, full-time job offer from an eligible BC employer.</li>
            <li>The job offer should fall under NOC TEER Categories 1, 2, or 3.</li>
            <li>For eligible tech occupations or NOC 41200, it does not need to be indeterminate.</li>
            <li>The wage must be at market rate and comparable to similar roles in BC.</li>
            <li>Additional qualification requirements may apply based on the NOC code of the job offer.</li>
          </ul>
        </div>
        <div className={styles.criteria}>
          <h3>2. Education</h3>
          <ul>
            <li>You need a degree, diploma, or certificate from an eligible Canadian post-secondary institution.</li>
            <li>Completion date should be within the last three years.</li>
            <li>Degrees must be from authorized institutions, diplomas from public institutions.</li>
            <li>Language training or programs shorter than 8 months do not qualify.</li>
          </ul>
        </div>
        <div className={styles.criteria}>
          <h3>3. Language Proficiency</h3>
          <ul>
            <li>TEER Category 1: Language results not mandatory (BC PNP may request a test).</li>
            <li>TEER Categories 2 or 3: Canadian Language Benchmark (CLB) score of at least 4 required.</li>
          </ul>
        </div>
        <div className={styles.criteria}>
          <h3>4. Minimum Income Requirements</h3>
          <ul>
            <li>Gross annual wage must meet minimum income requirements based on location and dependents.</li>
          </ul>
        </div>
      </section>
      <section className={styles.section} id="employer_requirements">
        <h2>Requirements for the Express Entry Category</h2>
        <p>To be eligible, you must qualify under one of the federal programs. Click below for more details:</p>
        <ul>
          <li><a href="/federal-skilled-worker-program">Federal Skilled Worker (FSW)</a></li>
          <li><a href="/federal-skilled-trades-program">Federal Skilled Trades (FST)</a></li>
          <li><a href="/canadian-experience-class">Canadian Experience Class (CEC)</a></li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Employer’s Eligibility Requirements</h2>
        <ul>
          <li>Established in B.C.</li>
          <li>Comply with domestic labor market recruitment.</li>
          <li>At least 1 year in operation in BC.</li>
          <li>Minimum full-time employees: Metro Vancouver (5), Outside Metro Vancouver (3).</li>
          <li>Offer full-time, permanent employment.</li>
          <li>Align wages with industry standards.</li>
          <li>Submit required documentation and forms.</li>
          <li>Adhere to all relevant laws and regulations.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <button className={styles.button} onClick={() => window.location.href = '/bcpnp-calculator'}>
          Calculate your BCPNP score
        </button>
      </section>
      <section className={styles.section} id="process">
        <h2>Application Process</h2>
        <ol>
          <li><strong>Expression of Interest (EOI) System:</strong> Register a profile on BC’s immigration portal.</li>
          <li><strong>Profile Registration:</strong> Indicate if applying through Express Entry or regular Skills Immigration system.</li>
          <li><strong>Invitation to Apply (ITA):</strong> High-ranking candidates receive an ITA in periodic intakes.</li>
          <li><strong>Application Fee:</strong> $1,475 CAD per applicant.</li>
          <li><strong>Provincial Nomination:</strong> Issued if approved, including a letter of support for a temporary work permit if needed.</li>
          <li><strong>Express Entry Stream:</strong> Notification of nomination increases CRS score by 600 points.</li>
          <li><strong>Regular Skills Immigration System:</strong> Six months to submit an official application online.</li>
        </ol>
      </section>
      <section className={styles.section} id="book-appointment">
        <h2>Still Not Sure?</h2>
        <p>Contact Brightlight Immigration to assess your profile and start your journey towards Canadian permanent residence. With a high approval rate and a tailored approach, we handle BCPNP International Graduate Stream cases with expertise.</p>
        <button  className={styles.button} onClick={() => window.location.href = 'https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj'}>
          Book Appointment
        </button>
      </section>
    </div>
    <Footer1/>
    </>
  );
};

export default InternationalGraduateProgram;
