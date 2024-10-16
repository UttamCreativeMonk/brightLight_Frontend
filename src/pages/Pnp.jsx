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
          Provincial Nominee Program
        </h1>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          While the federal Express Entry system remains a popular pathway to
          Canadian permanent residence, the Provincial Nominee Program (PNP)
          offers a unique and often faster track for individuals interested in
          settling in a specific province or territory.
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          Unlike the federal Express Entry, which considers applicants based on
          a standardized set of criteria, PNPs provide a more personalized
          approach to selecting immigrants. Each province and territory has its
          own set of PNP streams, each tailored to meet their specific needs.
          This flexibility allows skilled workers, entrepreneurs, and investors
          to find a PNP stream that aligns with their qualifications and
          aspirations.
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          The PNP's diverse streams cater to a wide range of skills and
          experiences. For skilled workers, various streams prioritize
          professionals with specific occupations, such as healthcare workers,
          engineers, and IT experts. Entrepreneurs can explore PNP streams that
          support business creation and investment opportunities. And for those
          seeking a more direct path to Canadian residency, the PNP offers
          streams for international graduates and individuals with family ties
          to Canada.
        </p>
        <h2 className={styles.heading2}>
          BC Provincial Nominee Program (BC PNP)
        </h2>
        <button
          style={{marginTop: "10px", marginBottom: "60px"}}
          className={`${styles.button1} ${styles.section}`}
          id="testing16"
          ref={(el) => (sectionsRef.current[16] = el)}
          onClick={() => (window.location.href = "/bc-pnp")}
        >
          Learn More
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
          style={{marginTop: "20px", marginBottom: "60px"}}
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
          style={{marginLeft: "40px", marginTop: "20px", marginBottom: "60px"}}
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
          How to apply for PNP?
        </h3>
        <ul
          style={{marginTop: "20px", marginBottom: "60px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[49] = el)}
        >
          <li className={styles.listItem}>
            Firstly, choose the province or territory you are interested in
            living in. Each province and territory has its own set of PNP
            programs and eligibility criteria, so it is important to research
            your options carefully. Or, for a stress free solution, let us
            handle your case for you.{" "}
            <a href="/pnp" className={styles.link}>
              Click here
            </a>
          </li>
          <li className={styles.listItem}>
            Submit all of the required documents for that particular province.
          </li>
          <li className={styles.listItem}>
            You may be required to attend an interview as part of your
            application process.
          </li>
          <li className={styles.listItem}>
            If your application is successful, the province or territory will
            nominate you for permanent residence.
          </li>
        </ul>
       
        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          Common reasons for refusals for PNP
        </h3>
        <ul
          style={{marginTop: "20px", marginBottom: "60px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>You shared incorrect information.</li>
          <li className={styles.listItem}>
            You couldn’t meet the minimum qualifications for the PNP program you
            are applying to including having the required skills, experience,
            education, and language proficiency.
          </li>
          <li className={styles.listItem}>Your occupation is not in demand.</li>
          <li className={styles.listItem}>
            You couldn’t demonstrate your family ties to that particular
            province.
          </li>
        </ul>

        {/* <h3 className={styles.heading3} id="why-choose-us">
          Still not sure?
        </h3>
        <p
          style={{marginTop: "20px", marginBottom: "-20px"}}
          className={`${styles.paragraph} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          If you have received a refusal for any of the reasons mentioned above,
          do not worry. With over a decade of experience, we specialize in
          previously refused cases. We have got approvals for clients who had
          multiple previous refusals. We achieve this with a tailored approach
          to your specific case, addressing each concern that the officer has
          listed in previous refusals. We use case law and find similar cases to
          your circumstances that had positive results, and we use them as
          precedents in cases we work on. This is why we have a high success
          rate.
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing11"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your visa. Start your
          process now.
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
        </button> */}

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
