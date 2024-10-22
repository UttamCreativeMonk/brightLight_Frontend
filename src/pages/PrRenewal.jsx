import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PrRenewal.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let PrRenewal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  const [data, setData] = useState({});
  let [pData,setPData]=useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/prRenewalMeta")
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
    fetch("https://brightlight-node.onrender.com/pr-renewal")
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-the-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reason")}>
                Refusal Reason
              </p>
              <p onClick={() => scrollToSection("appointment")}>
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

      <div
        className={`${styles.section} ${styles.section}`}
        id="about-the-program"
        ref={(el) => (sectionsRef.current[100] = el)}
      >
        <h2 style={{ textAlign: "center" ,   color: "#e8c47c" }} className={styles.sectionTitle}>
          Permanent Residency Renewal
        </h2>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Your PR card is proof that you have the right to live and study, just
          like a Canadian citizen. but, like taking care of something valuable,
          your PR card needs attention to keep working well. Renewing it ensures
          you can keep being a permanent resident and enjoy all the wonderful
          things Canada has to offer.
        </p>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Your PR card is your proof of status and allows you to re-enter Canada
          after traveling abroad. Most new PR cards are valid for 5 years and
          they are supposed to be renewed before they expire or within 90 days
          of their expiry date. However, you don't have to keep renewing it
          forever. After 5 years of being a Canadian PR, you can apply for
          Canadian citizenship. This means you will get a Canadian passport, and
          you will be able to vote in all Canadian elections. Check our{" "}
          <a style={{ color: "dodgerblue" }} href="/citizenship">
            Citizenship
          </a>{" "}
          page to look for your eligibility.
        </p>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="eligibility"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.EligibleHeading}
        </h2>
        <ul style={{ marginLeft: "40px" }} className={styles.sectionContent}>
          <li>{pData?.e1}</li>
          <li>{pData?.e2}</li>
          <li>{pData?.e3}</li>
          <li>{pData?.e4}</li>
          <li>{pData?.e5}</li>
        </ul>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="how-to-apply"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.HowApplyHeading}
        </h2>
        <p className={styles.sectionContent}>
        {pData?.HowApplyPara}
        </p>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="refusal-reason"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.RefusalHeading}
        </h2>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          Don’t forget to avoid these common PR Renewal refusal reasons and
          increase your chances of approval.
        </p>
        <ul style={{ marginLeft: "40px" }} className={styles.sectionContent}>
          <li>{pData?.r1}</li>
          <li>{pData?.r2}</li>
          <li>{pData?.r3}</li>
          <li>{pData?.r4}</li>
        </ul>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="appointment"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2 className={styles.sectionTitle}>Still not sure?</h2>
        <p className={styles.sectionContent}>
          If you have received a refusal for any of the reasons mentioned above,
          do not worry. With over a decade of experience, we specialize in
          previously refused cases. We have got approvals for clients who had
          multiple previous refusals. We achieve this with a tailored approach
          to your specific case, addressing each concern that the officer has
          listed in previous refusals. This is why we have a high success rate.
        </p>
        <p style={{ marginTop: "20px" }}>
          {" "}
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your visa. Start your PR
          Card renewal process now.
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
      </div>

      <section
        className={`${styles.section} ${styles.section}`}
        id="why-choose-us"
        ref={(el) => (sectionsRef.current[9] = el)}
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
            <strong>Comprehensive Support:</strong> Assistance from the start of
            the application process to obtaining your PR.
          </li>
        </ul>
      </section>
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
export default PrRenewal;
