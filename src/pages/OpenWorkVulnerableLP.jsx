import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkVulnerableLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const OpenWorkVulnerableLP = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

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
    fetch("https://brightlight-node.onrender.com/openWorkVulnerableMeta")
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

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/openWorkVulnerable")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPData(data[0]);
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("evidence")}>Evidence</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>{pData?.OpenWorkVulHeading}</h1>
          <p>
          {pData?.OpenWorkVulPara}
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.BenifitsHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.BenifitsList1}
            </li>
            <li>
            {pData?.BenifitsList2}
            </li>
            <li>
            {pData?.BenifitsList3}
            </li>
            <li>
            {pData?.BenifitsList4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.EligibilityHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.EligibilityList1}
            </li>
            <li>{pData?.EligibilityList2}</li>
          </ul>
          <h3>{pData?.HowIRCCHead}</h3>
          <p>
          {pData?.HowIRCCSubHead1}
          </p>
          <p>
          {pData?.HowIRCCSubHead2}
          </p>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li>{pData?.HowIRCCList1}</li>
            <li>{pData?.HowIRCCList2}</li>
            <li>{pData?.HowIRCCList3}</li>
            <li>{pData?.HowIRCCList4}</li>
            <li>{pData?.HowIRCCList5}</li>
          </ul>
        </section>

        <section
          className={`${styles.evidence} ${styles.section}`}
          id="evidence"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Types of Evidence</h2>
          <p>
          {pData?.TypesEvidenceHeading}
          </p>
          <p> {pData?.TypesEvidenceSubHead}</p>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li>
            {pData?.TypesEvidenceList1}
            </li>
            <li> {pData?.TypesEvidenceList2}</li>
            <li>
            {pData?.TypesEvidenceList3}
            </li>
            <li>
            {pData?.TypesEvidenceList4}
            </li>
            <li> {pData?.TypesEvidenceList5}</li>
            <li> {pData?.TypesEvidenceList6}</li>
            <li> {pData?.TypesEvidenceList7}</li>
            <li> {pData?.TypesEvidenceList8}</li>
            <li> {pData?.TypesEvidenceList9}</li>
          </ul>
          <p>
          {pData?.TypesEvidencePara}
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2> {pData?.HowApplyHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li> {pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
          </ol>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2> {pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara1}
          </p>
          <p style={{ marginTop: "20px" }}>
          {pData?.StillNotSurePara2}
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling Immigration applications with a high success rate.
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

export default OpenWorkVulnerableLP;
