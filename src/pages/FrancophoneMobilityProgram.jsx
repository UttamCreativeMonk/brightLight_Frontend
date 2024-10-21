import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FrancophoneMobilityProgram.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FrancophoneMobilityProgram = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([])


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
    fetch("https://brightlight-node.onrender.com/francophoneMobilityMeta")
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
    fetch("https://brightlight-node.onrender.com/francoMob")
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer-requirement")}>
                Employer Requirement
              </p>
              <p onClick={() => scrollToSection("work-permit-duration")}>
                Work Permit Duration
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>{pData?.FrancophoneHeading}</h1>
          <p>
          {pData?.FrancophonePara}
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.BenifitsHeading}</h2>
          <h4>
          {pData?.BenifitsSubHeading}
          </h4>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.BenifitsList1}
            </li>
            <li>
            {pData?.BenifitsList2}
            </li>
            <li>
            {pData?.BenifitsList3}
            </li>
            <li>
            {pData?.BenifitsList4}
            </li>
            <li>
            {pData?.BenifitsList5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2> {pData?.EligibilityHeading}</h2>
          <p>
          {pData?.EligibilitySubHead}
          </p>
          <ol
            style={{ marginLeft: "40px", marginTop: "20px", lineHeight: "2" }}
          >
            <li>
            {pData?.EmpReqList1}
            </li>
            <li>
            {pData?.EmpReqList2}
            </li>
            <li>
            {pData?.EligibilityList3}
            </li>
          </ol>
          <button
            onClick={() => (window.location.href = "/french-targeted-draw")}
            className={styles.tefButton}
          >
            French CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.employerRequirements} ${styles.section}`}
          id="employer-requirement"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.EmpReqHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li style={{ marginBottom: "10px" }}>
            {pData?.EmpReqList1}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.EmpReqList2}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.EmpReqList3}
            </li>
            <li>
            {pData?.EmpReqList4}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.workPermitDuration} ${styles.section}`}
          id="work-permit-duration"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>{pData?.WorkPerDurHeading}</h2>
          <p>
          {pData?.WorkPerDurSubHead}
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>
            {pData?.WorkPerDurList1}
            </li>
            <li>
            {pData?.WorkPerDurList2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.familyMembers} ${styles.section}`}
          id="family-members"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>
          {pData?.FamilyMemHeading}
          </h2>
          <p>
          {pData?.FamilyMemSubHead}
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            <li>
            {pData?.FamilyMemList1}
            </li>
            <li>
            {pData?.FamilyMemList2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2> {pData?.AppProHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
              <strong> {pData?.AppProSubHead1}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <li>
                {pData?.AppProSubHead1List1}
                </li>
                <li>
                {pData?.AppProSubHead1List2}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.AppProSubHead2}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <li>
                {pData?.AppProSubHead2List1}
                </li>
                <li>
                {pData?.AppProSubHead2List2}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.AppProSubHead3}</strong>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <li>
                {pData?.AppProSubHead3List1}
                </li>
                <li>
                  {" "}
                  {pData?.AppProSubHead3List2}
                </li>
                <li>
                {pData?.AppProSubHead3List3}
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.workPermitRenewals} ${styles.section}`}
          id="work-permit-renewals"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>{pData?.WorkPerRenHeading}</h2>
          <ul>
            <h4>
            {pData?.WorkPerRenSubHead}
            </h4>
            <li style={{marginLeft: "40px"}}>
            {pData?.WorkPerRenList}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2>{pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara1}
          </p>
          <p>
          {pData?.StillNotSurePara2}
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

export default FrancophoneMobilityProgram;
