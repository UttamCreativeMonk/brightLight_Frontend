import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/WorkPermit.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import OurProcess from "../sections/OurProcess";

let WorkPermit = () => {
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
    fetch("https://brightlight-node.onrender.com/work-meta")
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
        <header className={styles.header}>
          <h1>Work Permit</h1>
        </header>
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <p className={styles.discription}>
              Are you considering a rewarding career and professional growth in
              Canada? The Canadian Work Permit is your key to accessing these
              exciting professional opportunities.
            </p>
            <p className={styles.discription}>
              Canada is a top choice for people worldwide looking to advance
              their careers. To work in Canada, international workers need a
              temporary document called a work permit. This permit allows them
              to legally take on employment in the country, and it's available
              for a broad range of occupations, skill levels, and immigration
              statuses.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>Pathways to Get a Work Permit</h2>
            <div className={styles.pathways}>
              <div className={styles.pathway}>
                <h3>
                  <Link to="/open-work-permit">
                    <button>Open Work Permit</button>
                  </Link>
                </h3>
                <p>
                  An open work permit allows you to work for any employer in
                  Canada. Learn more about the eligibility criteria and
                  application process.
                </p>
              </div>
              <div className={styles.pathway}>
                <h3>
                  <Link to="/lmia-reviewed">
                    <button>
                      {" "}
                      Labour Market Impact Assessment (LMIA)-Based Work Permit
                    </button>
                  </Link>
                </h3>
                <p>
                  This permit is employer-specific and requires a positive LMIA.
                  Discover the steps involved in obtaining this permit.
                </p>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            <h2>Pathways to get a Work Permit</h2>
            <ul>
              <li>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = "/open-work-permit")}
                >
                  Open Work Permit
                </strong>
              </li>
              <li>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = "/lmia-reviewed")}
                >
                  Labour Market Impact Assessment (LMIA)based work permit
                </strong>
              </li>
              <li>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    (window.location.href = "/spousal-open-work-permit")
                  }
                >
                  Spousal Open Work Permit
                </strong>
              </li>
            </ul>
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

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>Here’s How We Can Help You</h2>
            {/* Embed the process section from the homepage here */}
            <p>
              Our experienced team can assist you throughout the work permit
              application process, ensuring that all requirements are met and
              your application stands the best chance of approval.
            </p>
            <button
              className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
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

export default WorkPermit;
