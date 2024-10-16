import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkPermit.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const OpenWorkPermit = () => {
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
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>Open Work Permit</h1>
              <p>
                A Canadian Open Work Permit is a temporary document that allows
                foreign nationals to work in Canada without being tied to a
                specific employer. This type of permit offers flexibility and
                opens up a wide range of job opportunities for eligible
                individuals.
              </p>
            </header>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="categories"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>Categories Under Open Work Permit</h2>
            <div className={styles.categories}>
              <Link to="/pgwp" className={styles.button}>
                Post-Graduate Work Permit (PGWP)
              </Link>
              <Link
                to="/bridging-open-work-permit-lp"
                className={styles.button}
              >
                Bridging Open Work Permit (BOWP)
              </Link>
              <Link to="/spousal-open-work-permit" className={styles.button}>
                Spousal Open Work Permit (SOWP)
              </Link>
              <Link to="/open-work-vulnerable-lp" className={styles.button}>
                Open Work Permit for Vulnerable Workers
              </Link>
              <Link
                to="/francophone-mobility-program"
                className={styles.button}
              >
                Francophone Mobility Work Permit
              </Link>
            </div>
          </section>

          

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>Here’s How We Can Help You</h2>
            <p>
              Our process is designed to assist you from start to finish,
              ensuring you have the support you need to obtain your Open Work
              Permit. We follow a structured approach that includes:
            </p>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                Initial Consultation: Understanding your needs and eligibility.
              </li>
              <li>
                Document Preparation: Assisting with gathering and preparing
                necessary documents.
              </li>
              <li>
                Application Submission: Filing your application accurately and
                on time.
              </li>
              <li>
                Follow-Up: Monitoring the progress of your application and
                addressing any issues.
              </li>
              <li>
                Support Throughout: Providing guidance and support throughout
                the entire process.
              </li>
            </ul>
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
            <ul>
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

export default OpenWorkPermit;
