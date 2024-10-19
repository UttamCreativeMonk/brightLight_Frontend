import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkPermitForSpouseInland.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const OpenWorkPermitForSpouseInland = () => {
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
    fetch("https://brightlight-node.onrender.com/openWorkPerMeta")
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
          <header className={styles.header}>
            <h1>Open Work Permit</h1>
          </header>
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
              <p onClick={() => scrollToSection("benefits")}>Benfits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>
                Open Work Permit for Spouse or Common-law Partner of a Permanent
                Resident/Canadian Citizen
              </h1>
              <p>
                The processing time for a PR application can be longer than
                usually expected. There are various reasons for this to happen.
                The common scenarios for application delays are - applications
                stuck in background checks, requests for additional medical
                examinations, poor staffing at the country of citizenship,
                security clearance delays, etc. The good thing is you can apply
                for authorization to work while waiting for your permanent
                residency application to be processed.
              </p>

              <p
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                You can apply for this type of open work permit if you’ve
                applied for permanent residence under one of the following
                classes:
              </p>

              <ul style={{ marginLeft: "40px" }}>
                <li style={{ fontWeight: "600" }}>
                  the spouse or common-law partner in Canada class (SCLPC) as a
                  spouse or common-law partner
                </li>

                <li style={{ fontWeight: "600" }}>
                  the family class as a spouse, common-law or conjugal partner
                  (sponsored overseas)
                </li>
              </ul>
            </header>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>
              Benefits of Open Work Permit for Spouse or Common-law Partner of a
              Permanent Resident/Canadian Citizen:
            </h2>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                It permits your spouse or common-law partner to work,
                alleviating financial strain on you.
              </li>
              <li>
                It provides your spouse or common-law partner with the
                opportunity to gain Canadian work experience.
              </li>
              <li>
                They have the flexibility to work for any employer and in any
                position.
              </li>
              <li>They can also establish their own business if desired.</li>
              <li>
                Unlike visitors, they are allowed to stay in Canada for longer
                than six months, with multiple entries allowed.{" "}
              </li>
              <li>The dependent child can also accompany. </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>
              Eligibility criteria of Open Work Permit for Spouse or Common-law
              Partner of a Permanent Resident/Canadian Citizen:
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
                Both the sponsor and principal applicant must be in a genuine
                relationship with each other.
              </li>
              <li>
                Provide application fees receipt or Acknowledgement of Receipt
                (AOR) of your permanent residence application.
              </li>
              <li>
                Both the sponsor and principal applicant must be living
                together.
              </li>
              <li>
                If your spouse doesn’t have valid temporary resident status,
                they must wait until you’ve received your approval in principle
                letter.
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[25] = el)}
          >
            <h2>
              How to apply for an Open Work Permit for Spouse or Common-law
              Partner of a Permanent Resident/Canadian Citizen?
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
                Identify the principal applicant’s occupation in TEER category
                0, 1, 2 or 3 of the National Occupation Classification system.
              </li>
              <li>
                Gather documents to prove above-mentioned eligibility criteria.
              </li>
              <li>
                Gather documents to prove that your relationship is genuine
              </li>
              <li>
                You might be required to get a medical exam and police clearance
                certificates, if applying from outside Canada.
              </li>

              <li>Submit a complete application to IRCC.</li>

              <li>
                After receiving, Biometric Collection Instruction letter, make
                an appointment for biometrics within 30 days of receiving the
                letter.
              </li>
              <li>Wait for IRCC to process your application.</li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[35] = el)}
          >
            <h2>
              Common reasons for refusals of Open Work Permit for Spouse or
              Common-law Partner of a Permanent Resident/Canadiancitizen:
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
                Lack of documentation verifying the National Occupational
                Classification (NOC) of the principal applicant.
              </li>
              <li>
                Inadequate evidence demonstrating the genuineness of the
                marriage.
              </li>
              <li>
                The principal applicant is employed in a low skill occupation
                under the low wage stream of LMIA.
              </li>
              <li>
                The principal applicant's work permit is nearing expiration, and
                there has been no application filed to extend their stay.
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <h2>Why Choose Us?</h2>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                <strong>Experienced Team:</strong> Over a decade of experience
                in handling Immigration applications with a high success rate.
              </li>
              <li>
                <strong>Tailored Approach:</strong> Personalized services and
                strategies based on your specific case.
              </li>
              <li>
                <strong>High Success Rate:</strong> Proven track record using
                case law and precedents for positive results.
              </li>
              <li>
                <strong>Comprehensive Support:</strong> Assistance from the
                start of the application process to obtaining your PR.
              </li>
            </ul>
          </section>
        </main>
      </div>
      <OurProcess />

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

export default OpenWorkPermitForSpouseInland;
