import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/StudentVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const StudentVisa = () => {
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
    fetch("https://brightlight-node.onrender.com/study-meta")
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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("pathways")}>Pathways</p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Student Visa
        </h1>
        <p className={styles.description}>
          Canada ranks as one of the top choices worldwide for students. Its
          uniqueness lies not only in offering opportunities for academic
          pursuit but also in inviting exploration of its diverse cultures and
          the enjoyment of a safe, high-quality life. With its comprehensive
          healthcare system and stunning natural landscapes, this destination
          becomes an attractive prospect for pursuing your academic aspirations.
          Whether your passion lies in STEM (Science, Technology, Engineering,
          Math) fields, healthcare, humanities, social sciences, or creative
          pursuits, Canada's diverse educational system has something to offer
          everyone. As a student in Canada, you have the privilege of learning
          at some of the world's top-rated universities and colleges.
        </p>

        <section
          className={`${styles.pathways} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading} id="pathways">
            Pathways to Study Abroad
          </h2>
          <div className={styles.pathwayContainer}>
            <a href="/outside-canada">
              <div className={styles.pathway}>
                <h3 className={styles.pathwayTitle}>Outside Canada</h3>
                <p className={styles.pathwayDescription}>
                  Explore study options and visa requirements for students
                  planning to study in Canada from abroad.
                </p>
              </div>
            </a>
            <a href="/inside-canada">
              <div className={styles.pathway}>
                <h3 className={styles.pathwayTitle}>Inside Canada</h3>
                <p className={styles.pathwayDescription}>
                  Discover the options available for students already in Canada
                  or planning to transfer from one institution to another.
                </p>
              </div>
            </a>
            <a href="/study-permit-minors">
              <div className={styles.pathway}>
                <h3 className={styles.pathwayTitle}>Study Permit for Minor</h3>
                <p className={styles.pathwayDescription}>
                  Learn about the specific requirements and process for
                  obtaining a study permit for minors.
                </p>
              </div>
            </a>
          </div>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2
            style={{ textAlign: "left" }}
            className={styles.subheading}
            id="how-to-apply"
          >
            Start Your Journey
          </h2>
          <p
            style={{ textAlign: "left", marginBottom: "20px" }}
            className={styles.callToActionText}
          >
            Ready to take the next step in your educational journey? Whether
            you’re planning to study from abroad or already in Canada, our
            expert team can guide you through the process and ensure you meet
            all the requirements for a successful student visa application.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book a Consultation
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2 style={{ textAlign: "left" }}>Why Choose Us?</h2>
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

export default StudentVisa;
