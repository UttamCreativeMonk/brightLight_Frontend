import React, { useState } from "react";
import styles from '../styles/InsideCanada.module.css';
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";


const InsideCanada = () => {
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
                <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
                <p onClick={() => scrollToSection("how-to-apply")}>
                  How to Apply?
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
      <h1 className={styles.heading} id="about-program">Study Permit: Inside Canada</h1>
      <p className={styles.intro}>
        While the standard procedure for obtaining a Canadian student visa is to apply from outside Canada, there are exceptions. You may be eligible to apply for a student visa while already residing in Canada or if you wish to change your college or program.
      </p>
      <p className={styles.intro}>
        The processing time for a student visa application from inside Canada can vary depending on individual circumstances. If you need to extend your stay, you can apply for an extension from inside Canada. For the most up-to-date processing times and information on your study permit extension, please contact our office at 604-503-3734.
      </p>

      <section className={styles.benefits} id="benifits">
        <h2 className={styles.subheading}>Benefits</h2>
        <ul className={styles.benefitList}>
          <li>No GIC Required</li>
          <li>No IELTS Required</li>
          <li>No PAL Letter Required</li>
          <li>Obtain Study Permit without leaving Canada</li>
          <li>Eligible to work 24 hours per week once Study Permit Approved <br />*starting September 2024</li>
          <li>Only pay 1 Semester fee to start the process</li>
          <li>3 Year Post Graduate Open Work Permit given once you finish 2-year study</li>
          <li>GAP between employment and education is acceptable</li>
          <li>People with previous refusals can apply with a high chance of getting approved</li>
          <li>Age no bar: People even in their late 50s have been approved</li>
          <li>Spouses and children can extend their stay</li>
          <li>Higher chance of approval</li>
        </ul>
      </section>

      <section className={styles.programs}>
        <h2 className={styles.subheading}>Programs to Consider</h2>
        <div className={styles.buttonContainer}>
          <a href="/visitor-to-student" className={styles.button}>Visitor to Student Status</a>
          <a href="/change-college-program" className={styles.button}>Change of College or Existing Program (DLI Change)</a>
        </div>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria for Student Visa - Inside Canada</h2>
        <ul className={styles.eligibilityList}>
          <li>You are already in Canada legally with valid status (study permit, work permit, or visitor record).</li>
          <li>You have completed a prerequisite course inside Canada.</li>
          <li>You are enrolled in a full-time program at a designated learning institution (DLI).</li>
          <li>You have sufficient funds to support yourself while studying in Canada.</li>
          <li>You have no criminal record.</li>
          <li>Additionally, you must meet at least one of the following conditions:</li>
          <ul>
            <li>Your work permit or study permit is still valid.</li>
            <li>You are the parent, spouse, or common-law partner of someone with a valid work or study permit.</li>
            <li>You are the parent, spouse, or common-law partner of someone with a valid Temporary Resident Permit with a validity of 6 months or more.</li>
            <li>You are a minor and your parents or guardian are planning to send you to primary or secondary school.</li>
            <li>You are an exchange student.</li>
            <li>You are a visiting student.</li>
            <li>You have sponsorship for immigration and your permanent residency profile is already in the pool.</li>
            <li>You are completing a short-term course aimed at making you eligible to be accepted at a designated learning institute.</li>
          </ul>
          <li>If none of the above applies, you must submit your study permit application as though you were outside Canada, but you will not need to physically leave the country. You will be required to apply for a Provincial Attestation Letter (PAL) in this situation.</li>
        </ul>
      </section>

      <section className={styles.applicationSteps} id="how-to-apply">
        <h2 className={styles.subheading}>How to Apply for a Study Permit from Inside Canada</h2>
        <ol className={styles.stepList}>
          <li>Contact Bright Light Immigration.</li>
          <li>Apply to a prerequisite course (Mandatory).</li>
          <li>Apply to a Public/Private College.</li>
          <li>Gather your documents and submit your application.</li>
          <li>Receive your Study Permit.</li>
        </ol>
      </section>

      <section className={styles.refusals} id="refusal-reasons">
        <h2 className={styles.subheading}>Common Reasons for Refusals</h2>
        <ul className={styles.refusalList}>
          <li>Lack of proof of funds to afford living and studying in Canada.</li>
          <li>Failure to demonstrate reasons for returning home after studies.</li>
          <li>Unclear study purpose and how it will benefit you.</li>
          <li>Failed to meet required language test scores.</li>
          <li>Not accepted into a recognized educational institution or submitting fraudulent documents.</li>
        </ul>
      </section>

      <section className={styles.callToAction} id="why-choose-us">
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p className={styles.callToActionText}>
          If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.
        </p>
        <p className={styles.callToActionText}>
          We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists ready to assist you from the start of the application process to obtaining your visa. Start your process now.
        </p>
        <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</a>
      </section>
    </div>

      <div id="faqs">
        <FAQ/>
      </div>
      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
    <Footer1/>
    </>
  );
};

export default InsideCanada;
