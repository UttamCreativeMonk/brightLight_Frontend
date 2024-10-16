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
        id="eligibility"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h2 className={styles.sectionTitle}>
          Eligibility for Permanent Residency Renewal
        </h2>
        <ul style={{marginLeft: "40px"}} className={styles.sectionContent}>
          <li>You should be a permanent resident of Canada.</li>
          <li>
            You have lived in Canada for at least 2 years out of the last 5
            years.
          </li>
          <li>
            You can apply for renewal up to 90 days before your current PR card
            expires.
          </li>
          <li>
            You shouldn’t be under an active removal order by a Canadian
            immigration judge.
          </li>
          <li>
            If you have already become a Canadian citizen, you do not need to
            renew your PR card.
          </li>
        </ul>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="how-to-apply"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2 className={styles.sectionTitle}>
          How to Apply for Permanent Residency Renewal
        </h2>
        <p className={styles.sectionContent}>
          Renewing your PR card is a straightforward process that can be done
          online through the Government of Canada's website or by mail. You will
          need to fill out the necessary forms, provide supporting documents,
          and pay the applicable fees. However, this is a golden ticket for you
          and you shouldn’t risk it if you are not sure about it. Let us take
          care of this for you and get your renewal at the earliest.
        </p>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="refusal-reason"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2 className={styles.sectionTitle}>
          Reasons for Refusal of Permanent Residency Renewal
        </h2>
        <ul style={{marginLeft: "40px"}} className={styles.sectionContent}>
          <li>You did not complete two years out of the last five years.</li>
          <li>
            You are not physically present in Canada when you apply for renewal.
          </li>
          <li>
            You got convicted of an offense related to the misuse of a PR card.
          </li>
          <li>
            You gave false or misleading information on your PR card renewal
            application.
          </li>
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
