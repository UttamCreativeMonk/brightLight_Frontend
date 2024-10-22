import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Orphan.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Orphan = () => {
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
    fetch("https://brightlight-node.onrender.com/orphanMeta")
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
    fetch("https://brightlight-node.onrender.com/orphan")
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
        {pData?.orphanHeading}
        </h1>
        <p style={{ textAlign: "center" }} className={styles.description}>
         {pData?.orphanPara1}
        </p>
        <p style={{ textAlign: "center" }} className={styles.description}>
        {pData?.orphanPara2}
        </p>
        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading} id="eligibility">
          {pData?.EligibilityHeading}
          </h2>
          <ul style={{marginLeft: "40px"}} className={styles.list}>
            <li>
              You must be a Canadian citizen or permanent resident who has lived
              in Canada for at least one year.
            </li>
            <li>You must be at least 18 years old.</li>
            <li>
              Show you can financially support the orphan, covering basics like
              housing, food, clothes, and education.
            </li>
            <li>
              If you, as a sponsor, are not presently living in Canada, then you
              must relocate back into Canada by the time the adopted child
              attains permanent residency.
            </li>
            <li>Have a safe place for the orphan, with a separate bedroom.</li>
            <li>
              You should have a good character and a clean criminal record. You
              must not have been convicted of any serious crimes or have a
              record of child abuse or neglect.
            </li>
            <li>
              Have a close relationship like being a grandparent, aunt, uncle,
              sibling, or other relative to the orphan.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.WhoEligHeading}
          </h2>
          <ul style={{marginLeft: "40px"}} className={styles.list}>
            <li>You are under 18 years of age.</li>
            <li>You do not possess Canadian citizenship presently.</li>
            <li>You are unmarried and not in a common-law partnership.</li>
            <li>
              At the time of applying, 1 or more of your parents must be a
              Canadian citizen.
            </li>
            <li>
              You are ineligible if the sponsoring parent was born outside
              Canada to a Canadian citizen or if the sponsoring parent acquired
              Canadian citizenship through adoption-related provisions.
            </li>
          </ul>
          <h4
            style={{
              marginTop: "30px",
              marginBottom: "20px",
            }}
            className={styles.paragraph}
          >
          {pData?.WhoEligSubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "-10px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>Have been in the best interests of the child;</li>
            <li>
              Have created a genuine relationship between parent and child;
            </li>
            <li>
              Have been in accordance with the laws of the place where the
              adoption took place and the laws of the country of residence of
              the adopting citizen;
            </li>
            <li>
              Not have occurred in a manner that circumvented the legal
              requirements for international adoptions;
            </li>
            <li>
              Not have been entered into primarily for the purpose of acquiring
              a status or privilege in relation to immigration or citizenship.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
          {pData?.HowApplyHeading}
          </h2>
          <ul style={{marginLeft: "40px"}} className={styles.list}>
            <li>
            {pData?.ha1}
            </li>
            <li>
            {pData?.ha2}
            </li>
            <li>
            {pData?.ha3}
            </li>
            <li>
            {pData?.ha4}
            </li>
            <li>
            {pData?.ha5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="refusal-reasons">
          {pData?.RefusalHeading}
          </h2>
          <p>
          {pData?.RefusalSubHead}
          </p>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
          {pData?.StillNotHeading}
          </h2>
          <p className={styles.paragraph}>
          {pData?.s1}
          </p>
          <p className={styles.paragraph}>
          {pData?.s2}
          </p>
          <button
            className={styles.button}
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
          id="why-choose-u"
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

export default Orphan;
