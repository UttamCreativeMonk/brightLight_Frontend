import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/DualIntentVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const DualIntentVisa = () => {
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

    fetch("https://brightlight-node.onrender.com/dualintentVisaMeta")
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
    fetch("https://brightlight-node.onrender.com/dualIntetVisa")
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
        {pData?.dualintentVisaHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            A Dual Intent Visa allows you to have two different reasons for
            visiting Canada. This means you can come to Canada temporarily with
            the option of considering permanent residence in the future or vice
            versa. Typically, these applications are made by individuals who
            already have a temporary resident visa and have either applied or
            are planning to apply for permanent resident status in Canada. This
            flexibility is what makes this visa type unique and called "Dual
            Intent."
          </p>
          <p>
          {pData?.dualintentVisaPara1}
          </p>
        </section>

        <section
          className={`${styles.scenarios} ${styles.section}`}
          id="scenarios"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.ComScenHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.c1}
            </li>
            <li>
            {pData?.c2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.keyConsiderations} ${styles.section}`}
          id="key-points"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.KeyHeading}</h2>
          <p>
          {pData?.k1}
          </p>

          <p>
          {pData?.k2}
          </p>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>{pData?.EligibilityHeading}</h2>
          <p>
          {pData?.EligPara}
          </p>
          <ul>
            <li>
            {pData?.e1}
            </li>
            <li>
            {pData?.e2}
            </li>
            <li>
              What connections do you have that will ensure your return to your
              home country after you visit Canada? Share concrete examples.
            </li>
            <li>
            {pData?.e3}
            </li>
            <li>
            {pData?.e4}
            </li>
            <li>
            {pData?.e5}
            </li>
            <li>
            {pData?.e6}
            </li>
          </ul>
          <p>
          {pData?.e6Para}
          </p>
          <h3>{pData?.eSubHead1}</h3>
          <ul>
            <li>
            {pData?.e7}
            </li>
            <li>
            {pData?.e8}
            </li>
            <li> {pData?.e9}</li>
            <li>
            {pData?.e10}
            </li>
            <li>
            {pData?.e11}
            </li>
          </ul>
          <h3> {pData?.eSubHead2}</h3>
          <ul>
            <li>
            {pData?.e12}
            </li>
            <li>
            {pData?.e13}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.RefusalHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
            <li>
            {pData?.r4}
            </li>
            <li>
            {pData?.r5}
            </li>
          </ul>
        </section>


        
        <section
          className={`${styles.support} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p>
          {pData?.s2}
          </p>
          <p>
          {pData?.s3}
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

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="whyChooseUs"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
            Why Choose Us?
          </h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
        </section> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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

export default DualIntentVisa;
