import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InsideCanada.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const InsideCanada = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/insideCanadaMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionsRef = useRef([]);
  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add(styles.visible);
      } else {
        section.classList.remove(styles.visible);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
          <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Study Permit: Inside Canada
        </h1>
        <p className={styles.intro}>
          While the standard procedure for obtaining a Canadian student visa is
          to apply from outside Canada, there are exceptions. You may be
          eligible to apply for a student visa while already residing in Canada
          or if you wish to change your college or program.
        </p>
        <p className={styles.intro}>
          The processing time for a student visa application from inside Canada
          can vary depending on individual circumstances. If you need to extend
          your stay, you can apply for an extension from inside Canada. For the
          most up-to-date processing times and information on your study permit
          extension, please contact our office at 604-503-3734.
        </p>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>Benefits</h2>
          <ul className={styles.benefitList}>
            <li>No GIC Required</li>
            <li>No IELTS Required</li>
            <li>No PAL Letter Required</li>
            <li>Obtain Study Permit without leaving Canada</li>
            <li>
              Eligible to work 24 hours per week once Study Permit Approved
              <ul className={styles.subList}>
                <li>*starting September 2024</li>
              </ul>
            </li>
            <li>Only pay 1 Semester fee to start the process</li>
            <li>
              3 Year Post Graduate Open Work Permit given once you finish 2-year
              study
            </li>
            <li>GAP between employment and education is acceptable</li>
            <li>
              People with previous refusals can apply with a high chance of
              getting approved
            </li>
            <li>
              Age no bar: People even in their late 50s have been approved
            </li>
            <li>Spouses and children can extend their stay</li>
            <li>Higher chance of approval</li>
          </ul>
        </section>

        <section
          className={`${styles.programs} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>Programs to Consider</h2>
          <div className={styles.buttonContainer}>
            <a href="/visitor-to-student" className={styles.button}>
              Visitor to Student Status
            </a>
            <a href="/change-college-program" className={styles.button}>
              Change of College or Existing Program (DLI Change)
            </a>
          </div>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Student Visa - Inside Canada
          </h2>
          <h4>
            You can only apply for a student visa from inside Canada if you meet
            all of the following criteria:
          </h4>
          <ul className={styles.eligibilityList}>
            <li>
              You are already in Canada legally with valid status (study permit,
              work permit, or visitor record).
            </li>
            <li>You have completed a prerequisite course inside Canada.</li>
            <li>
              You are enrolled in a full-time program at a designated learning
              institution (DLI).
            </li>
            <li>
              You have sufficient funds to support yourself while studying in
              Canada.
            </li>
            <li>You have no criminal record.</li>
            <li>
              <h4>
                Additionally, you must meet at least one of the following
                conditions:
              </h4>
            </li>
            <ul>
              <li>Your work permit or study permit is still valid.</li>
              <li>
                You are the parent, spouse, or common-law partner of someone
                with a valid work or study permit.
              </li>
              <li>
                You are the parent, spouse, or common-law partner of someone
                with a valid Temporary Resident Permit with a validity of 6
                months or more.
              </li>
              <li>
                You are a minor and your parents or guardian are planning to
                send you to primary or secondary school.
              </li>
              <li>You are an exchange student.</li>
              <li>You are a visiting student.</li>
              <li>
                You have sponsorship for immigration and your permanent
                residency profile is already in the pool.
              </li>
              <li>
                You are completing a short-term course aimed at making you
                eligible to be accepted at a designated learning institute.
              </li>
            </ul>
          </ul>
          <p>
            If none of the above applies, you must submit your study permit
            application as though you were outside Canada, but you will not need
            to physically leave the country. You will be required to apply for a
            Provincial Attestation Letter (PAL) in this situation.
          </p>
        </section>

        <section
          className={`${styles.applicationSteps} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            How to Apply for a Study Permit from Inside Canada
          </h2>
          <h4>
            You will need to provide the same documents as you would if you were
            applying from outside Canada. This includes your passport, letter of
            acceptance from your DLI, proof of financial support, and police
            certificates. Here are 5 easy steps we help you follow to process
            your application.
          </h4>
          <ol className={styles.stepList}>
            <li>Contact Bright Light Immigration.</li>
            <li>Apply to a prerequisite course (Mandatory).</li>
            <li>Apply to a Public/Private College.</li>
            <li>Gather your documents and submit your application.</li>
            <li>Receive your Study Permit.</li>
          </ol>
        </section>

        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusals"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Common Reasons for Refusals</h2>
          <ul className={styles.refusalList}>
            <li>
              Lack of proof of funds to afford living and studying in Canada.
            </li>
            <li>
              Failure to demonstrate reasons for returning home after studies.
            </li>
            <li>Unclear study purpose and how it will benefit you.</li>
            <li>Failed to meet required language test scores.</li>
            <li>
              Not accepted into a recognized educational institution or
              submitting fraudulent documents.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p className={styles.callToActionText}>
            If you have faced a refusal for any of the reasons mentioned above,
            don't worry. With over 10 years of experience, we specialize in
            handling previously refused cases. We have successfully secured
            approval for students who have had multiple refusals, long gaps in
            education, and are of mature age.
          </p>
          <p className={styles.callToActionText}>
            We achieve this by tailoring our approach to your specific case and
            addressing each concern raised by the officer in previous refusals.
            Using case law, we identify similar cases with positive outcomes and
            apply them as precedents. This is why we have a high success rate,
            with over 90% approval in such cases. At Brightlight Immigration, we
            have a dedicated team of visa application specialists ready to
            assist you from the start of the application process to obtaining
            your visa. Start your process now.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Start your process now
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
            </li>
            <li>
              <strong>Tailored Approach:</strong> Personalized services and
              strategies based on your specific case.
            </li>
            <li>
              <strong>High Success Rate:</strong> Proven track record using case
              law and precedents for positive results.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Assistance from the start
              of the application process to obtaining your PR.
            </li>
          </ul>
        </section>
      </div>

      <div id="faqs">
        <FAQ />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default InsideCanada;
