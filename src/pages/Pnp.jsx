import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Pnp.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Pnp = () => {
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
    fetch("https://brightlight-node.onrender.com/pNPMeta")
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
    fetch("https://brightlight-node.onrender.com/pnp-page")
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          className={`${styles.heading1} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {pData?.Heading}
        </h1>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {pData?.Description1}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
           {pData?.Description2}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
           {pData?.Description3}
        </p>
        <h2 className={styles.heading2}>
        {pData?.bcpnpHeading}
        </h2>
        <button
          style={{ marginTop: "10px", marginBottom: "60px" }}
          className={`${styles.button1} ${styles.section}`}
          id="testing16"
          ref={(el) => (sectionsRef.current[16] = el)}
          onClick={() => (window.location.href = "/bc-pnp")}
        >
          BCPNP
        </button>

        <h2
          className={`${styles.heading2} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          Are you eligible for the Provincial Nominee Program (PNP)? Let's find
          out.
        </h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <li className={styles.listItem}>
            You must be between 18 and 67 years old and have a high school
            diploma or equivalent, or post-secondary education that is relevant
            to the job you intend to work in Canada.
          </li>
          <li className={styles.listItem}>
            You must prove your proficiency in English or French, as required by
            the province you are applying to.
          </li>
          <li className={styles.listItem}>
            You should have the skills and experience required for the job you
            intend to work in Canada.
          </li>
          <li className={styles.listItem}>
            If you are applying through an Express Entry-linked PNP, you should
            also meet the eligibility criteria for the Express Entry program you
            are applying under (Federal Skilled Worker Program, Federal Skilled
            Trades Program, or Canadian Experience Class).
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          Additional Eligibility Requirements for Specific PNP Programs
        </h3>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          In addition to the general eligibility requirements, each province has
          its own set of eligibility criteria for specific PNP programs. These
          criteria may include:
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <li className={styles.listItem}>
            Your experience in an occupation that is in-demand in the province
            or territory.
          </li>
          <li className={styles.listItem}>
            Have a job offer from a Canadian employer in the province or
            territory.
          </li>
          <li className={styles.listItem}>
            Show your family connections if you have family members living in
            the province or territory.
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[28] = el)}
        >
          {pData?.ApplyHeading}
        </h3>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[49] = el)}
        >
          <li className={styles.listItem}>
          {pData?.ApplyList1}{" "}
            <a href="/pnp" className={styles.link}>
              Click here
            </a>
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList2}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList3}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList4}
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
           {pData?.RefusalHeading}
        </h3>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>{pData?.RefusalList1}</li>
          <li className={styles.listItem}>{pData?.RefusalList2}</li>
          <li className={styles.listItem}>{pData?.RefusalList3}</li>
          <li className={styles.listItem}>{pData?.RefusalList4}</li>
        </ul>

        <h3 className={styles.heading3} >
        {pData?.StillNotSureHeading}
        </h3>
        <p
          style={{marginTop: "20px", marginBottom: "-20px"}}
          className={`${styles.paragraph} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          {pData?.StillNotSurePara1}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing11"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
           {pData?.StillNotSurePara2}
        </p>
        <button
          id="book-appointment"
          className={styles.button}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[39] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px" }}>
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

export default Pnp;
