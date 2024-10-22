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
  let [pData,setPData]=useState([])

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

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/insideCanada")
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
          {pData?.InsideCanHeading}
        </h1>
        <p className={styles.intro}>
        {pData?.InsideCanPara1}
        </p>
        <p className={styles.intro}>
        {pData?.InsideCan2}
        </p>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>Benefits</h2>
          <ul style={{marginLeft: "40px"}} className={styles.benefitList}>
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
          {pData?.EligibilityHeading}
          </h2>
          <h4>
          {pData?.EligibilitySubHead1}
          </h4>
          <ul className={styles.eligibilityList}>
            <li>
            {pData?.e1}
            </li>
            <li>{pData?.e2}</li>
            <li>
            {pData?.e3}
            </li>
            <li>
            {pData?.e4}
            </li>
            <li>{pData?.e5}</li>
            <li style={{listStyle: "none"}}>
              <h4>
              {pData?.EligibilitySubHead2}
              </h4>
            </li>
            <ul>
              <li>{pData?.e6}</li>
              <li>
              {pData?.e7}
              </li>
              <li>
              {pData?.e8}
              </li>
              <li>
              {pData?.e9}
              </li>
              <li>{pData?.e10}</li>
              <li>{pData?.e11}</li>
              <li>
              {pData?.e12}
              </li>
              <li>
              {pData?.e13}
              </li>
            </ul>
          </ul>
          <p>
          {pData?.EligibilityNote}
          </p>
        </section>

        <section
          className={`${styles.applicationSteps} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowApplyHeading}
          </h2>
          <h4>
          {pData?.HowApplySubHead}
          </h4>
          <ol className={styles.stepList}>
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
          </ol>
        </section>

        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusals"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.RefusalHeading}</h2>
          <ul style={{marginLeft: "40px"}} className={styles.refusalList}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li> {pData?.r3}</li>
            <li> {pData?.r4}</li>
            <li>
            {pData?.r5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}> {pData?.StillNotHeading}</h2>
          <p className={styles.callToActionText}>
          {pData?.s1}
          </p>
          <p className={styles.callToActionText}>
          {pData?.s2}
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
          <ul style={{marginLeft: "40px"}}>
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
