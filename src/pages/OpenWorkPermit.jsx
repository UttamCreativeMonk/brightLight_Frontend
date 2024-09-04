import React, { useState } from "react";
import styles from "../styles/OpenWorkPermit.module.css";
import { Link } from 'react-router-dom';
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const OpenWorkPermit = () => {
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
  return(
    <>

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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.container}>
      <header className={styles.header}>
        <h1>Open Work Permit</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>What is an Open Work Permit?</h2>
          <p>A Canadian Open Work Permit is a temporary document that allows foreign nationals to work in Canada without being tied to a specific employer. This type of permit offers flexibility and opens up a wide range of job opportunities for eligible individuals.</p>
        </section>

        <section className={styles.section}>
          <h2>Categories Under Open Work Permit</h2>
          <div className={styles.categories}>
            <Link to="/open-work-permits/pgwp" className={styles.button}>Post-Graduate Work Permit (PGWP)</Link>
            <Link to="/open-work-permits/bowp" className={styles.button}>Bridging Open Work Permit (BOWP)</Link>
            <Link to="/tr-sowp" className={styles.button}>Spousal Open Work Permit (SOWP)</Link>
            <Link to="/open-work-permits/vulnerable-workers" className={styles.button}>Open Work Permit for Vulnerable Workers</Link>
            <Link to="/open-work-permits/francophone-mobility" className={styles.button}>Francophone Mobility Work Permit</Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Here’s How We Can Help You</h2>
          <p>Our process is designed to assist you from start to finish, ensuring you have the support you need to obtain your Open Work Permit. We follow a structured approach that includes:</p>
          <ul>
            <li>Initial Consultation: Understanding your needs and eligibility.</li>
            <li>Document Preparation: Assisting with gathering and preparing necessary documents.</li>
            <li>Application Submission: Filing your application accurately and on time.</li>
            <li>Follow-Up: Monitoring the progress of your application and addressing any issues.</li>
            <li>Support Throughout: Providing guidance and support throughout the entire process.</li>
          </ul>
        </section>
      </main>
    </div>

    </>
  
);
};

export default OpenWorkPermit;