import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PilotPrograms.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const PilotPrograms = () => {
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
    fetch("https://brightlight-node.onrender.com/pilotProgramMeta")
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
              <p onClick={() => scrollToSection("pilot-program")}>
                Pilot Program
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
          Canada’s Pilot Programs
        </h1>

        <div className={styles.introduction}>
          <p>
            The diverse economy of Canada offers various opportunities to
            advance your career in fields such as agriculture and more.
          </p>
          <p>
            Canada's Pilot Programs are temporary immigration programs designed
            to address the specific needs of certain Canadian regions or
            communities. These programs aim to attract skilled, semi-skilled,
            and unskilled workers to fill labor shortages in various sectors and
            contribute to the economic growth and development of those areas.
            Many times, these programs become permanent, providing more PR
            opportunities.
          </p>
        </div>

        <div
          className={`${styles.pilotPrograms} ${styles.section}`}
          id="pilot-program"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            Here is one of the Pilot Programs
          </h2>
          <ul>
            <li>
              <a href="/agri-food-pilot-program" className={styles.button}>
                Agri-Food Pilot
              </a>
            </li>
            {/* You can add more pilot programs here in a similar format */}
          </ul>
        </div>

        {/* <div
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[2] = el)}>
          <h2 className={styles.subheading} id="why-choose-us">
            Why Choose Us
          </h2>
          <p>
            At Brightlight Immigration, we provide expert guidance through
            Canada’s various immigration programs, including Pilot Programs. Our
            team of experienced consultants is dedicated to helping you navigate
            the complexities of immigration, ensuring that you have the best
            chance of success. We tailor our services to meet your unique needs
            and provide a high level of personalized support throughout the
            application process.
          </p>
          <p>
            Our success rate speaks for itself, with a near-perfect approval
            rate for our clients. By choosing us, you benefit from our extensive
            knowledge, commitment to your case, and proven track record. Let us
            help you make your Canadian immigration journey a smooth and
            successful one.
          </p>

          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </button>
        </div> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px", listStyle: "disc" }}>
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
          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </button>
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

export default PilotPrograms;
