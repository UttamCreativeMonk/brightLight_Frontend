import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AgricultureandAgriFoodOccu.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const AgricultureandAgriFoodOccu = () => {
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

    fetch("https://brightlight-node.onrender.com/agricultAndAgriFoodOccuMeta")
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
              {/* <p onClick={() => scrollToSection("benefits")}>Benefits</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("express-entry")}>
              Express Entry
              </p>
              <p onClick={() => scrollToSection("noc")}>
              Noc's
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
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>
                Category-Based Express Entry Selection Draws: Agriculture and
                agri-food occupations
              </h1>
            </header>

            <p className={styles.discription}>
              Exploring the Agriculture and Agri-Food Occupations Category
              offers access to abundant opportunities within Canada's thriving
              agricultural sector. Whether your skills lie in crop production,
              livestock farming, agricultural research, or any other agri-food
              occupation, this program paves the way for a rewarding career path
              in Canada.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2> First you must be eligible with Express Entry</h2>
            <p>
              Before you can participate in a STEM-specific draw through
              Canada's Express Entry system, you need to be eligible. Here's how
              you can get started:
            </p>
            <ul>
              <li>
                1. Join the Express Entry Pool: The first step towards becoming
                a candidate for a STEM-specific draw is to get into the Express
                Entry pool.
              </li>
              <li>
                2. Choose Your Program: There are three programs you can be
                eligible for to join the Express Entry pool:
                <ul className={styles.subList}>
                  <li>
                   <strong>  Federal Skilled Worker Program (FSW): </strong>This program is ideal
                    for tech workers who have the necessary work experience,
                    education, and language ability.
                    <button
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href =
                          "/federal-skilled-worker-program")
                      }
                    >
                      FSW
                    </button>
                  </li>
                  <li>
                   <strong> Canadian Experience Class (CEC):</strong> Similar to the FSW program,
                    the CEC is also suitable for tech workers who have gained
                    Canadian work experience.
                    <button
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href = "/canadian-experience-class")
                      }
                    >
                      CEC
                    </button>
                  </li>

                  <li>
                   <strong> Federal Skilled Agriculture and agri-food occupations s
                    Program (FSTP):</strong>  If you're a Agriculture and agri-food
                    occupations s worker, this program is designed for you. It
                    requires proof of relevant work experience, education, and
                    language proficiency.
                    <button
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href =
                          "/federal-skilled-trades-program")
                      }
                    >
                      FSTP
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Remember, each program has its own set of eligibility
              requirements. So, make sure to review these carefully and ensure
              you meet all the necessary criteria before applying.
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>
              Eligibility Criteria for Agriculture and Agri-Food Occupations
              Category
            </h2>
            <h4>
              Once you have met eligibility for one of the Express Entry
              programs, now you need to meet eligibility for Agriculture and
              agri-food occupations criteria:
            </h4>
            <ul className={styles.leftList}>
              <li>
                At least 6 months of full-time, continuous work experience (or
                an equivalent amount of part-time work experience) in an
                agriculture or agri-food occupation.
              </li>
              <li>A valid Express Entry profile.</li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="express-entry"
            ref={(el) => (sectionsRef.current[31] = el)}
          >
            <h2>
              Express Entry Agriculture and agri-food occupations draws history
            </h2>
            <button
              className={styles.button1}
              onClick={() => (window.location.href = "/previous-draw-history")}
            >
              Previous Draw
            </button>
            <p style={{marginTop: "20px"}}>
              The first ever Express Entry draw for Agriculture and agri-food
              occupations workers was held on September, 2023. Express Entry
              draw 267 saw a CRS score of 354 and invited 600 candidates
              eligible for category-based selection in Agriculture and agri-food
              occupations.
            </p>
          </section>

          <section
            className={`${styles.section}`}
            id="noc"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>Here is the list of eligible NOCs for Agriculture and agri-food occupations category:
            </h2>

            <table className={styles.occupationTable}>
              <thead>
                <tr>
                  <th>Occupations</th>
                  <th>2021 NOC Code</th>
                  <th>2021 TEER Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Contractors and supervisors, landscaping, grounds
                    maintenance and horticulture services
                  </td>
                  <td>82031</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Agricultural service contractors and farm supervisors</td>
                  <td>82030</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Butchers- retail and wholesale</td>
                  <td>63201</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </section>
{/* 
          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2>Still not sure?</h2>
            <p>
              Contact Brightlight Immigration today to assess your profile and
              embark on a transformative journey towards achieving your Canadian
              dream. With over a decade of experience, we specialize in handling
              Express Entry Programs. Our approval rate for these programs are
              near to 100%. We achieve this with a tailored approach to your
              specific case. We use case law and find similar cases to your
              circumstances that had positive results, and we use them as
              precedents in cases we work on. This is why we have a high success
              rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process all the way to obtaining your PR. Start your
              process now.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
          </section> */}

          <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
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
          <button
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

export default AgricultureandAgriFoodOccu;
