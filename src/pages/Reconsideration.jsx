import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Reconsideration.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Reconsideration = () => {
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
    fetch("https://brightlight-node.onrender.com/reconsiderationMeta")
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
    fetch("https://brightlight-node.onrender.com/reconsideration")
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
              <p
                onClick={() => scrollToSection("requests-for-reconsideration")}
              >
                Requests for reconsideration
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("eligibilty")}>Eligibilty</p>
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
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1>{pData?.ReconsiderationHeading}</h1>
          </header>
          <section
            className={`${styles.discription} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <p>
               {pData?.DonotWorryPara1}
            </p>
            <p> {pData?.DonotWorryPara2}</p>
            <p>
            {pData?.DonotWorryPara3}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="requests-for-reconsideration"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>
              Requests for reconsideration can be made for any type of Canadian
              immigration decision, including decisions on applications for:
            </h2>
            <ul style={{marginLeft: "40px"}}>
              <li>Permanent residence</li>
              <li>Temporary residence</li>
              <li>Citizenship</li>
              <li>Humanitarian and compassionate considerations</li>
            </ul>
            <p>
            {pData?.rrPara}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibilty"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>Eligibility for Reconsideration for Refusal Decision</h2>
            <p>
              <strong> 
              {pData?.EligibilitySubHeading}
              </strong>
            </p>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.er1}
              </li>
              <li>
              {pData?.er2}
              </li>
              <li>
              {pData?.er3}
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>{pData?.HowToApplyHeading}</h2>
            <p>
              <strong>
              {pData?.HowToApplySubHeading}
              </strong>
            </p>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.HowApplyL1}
              </li>
              <li>
              {pData?.HowApplyL2}
              </li>
              <li>
              {pData?.HowApplyL3}
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>{pData?.RefusalHeading}</h2>
            <p>
              {" "}
              <strong>
              {pData?.RefusalReasonSubHeading}
              </strong>
            </p>
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
              <li>
              {pData?.r6}
              </li>
              <li>
              {pData?.r7}
              </li>
            </ul>
            <span className={styles.bookButtonPara}>
              <button
                id="book-appointment"
                onClick={() =>
                  (window.location.href =
                    "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
                }
              >
                Book Appointment
              </button>
              {/* <a  href=""></a> */}
            </span>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2>{pData?.StillNotHeading}</h2>
            <p>
            {pData?.s1}
            </p>
            <p>
            {pData?.s2}
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

export default Reconsideration;
