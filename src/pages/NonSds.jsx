import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NonSds.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";

const NonSds = () => {
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
    fetch("https://brightlight-node.onrender.com/nonSdsMeta")
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
    fetch("https://brightlight-node.onrender.com/nonSds")
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("language-chart")}>
                Language Chart
              </p>
              <p onClick={() => scrollToSection("spousal-permit")}>
                Spousal Permit{" "}
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment{" "}
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
          c
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.nonSdsHeading}
        </h1>

        <section className={styles.intro}>
          <p>
          {pData?.nonSdsPara1}
          </p>
          <p>
          {pData?.nonSdsPara2}
          </p>
          <p>
          {pData?.nonSdsPara3}
          </p>
        </section>

        <section
          className={`${styles.prosCons} ${styles.section}`}
          id="pros-cons"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>{pData?.ProsConsHeading}</h2>
          <div className={styles.grid}>
            <div className={styles.pros}>
              <h3>{pData?.ProsHeading}</h3>
              <ul style={{marginLeft: "40px"}}>
                <li>{pData?.ProsLi1}</li>
                <li>{pData?.ProsLi2}</li>
                <li>{pData?.ProsLi3}</li>
                <li>{pData?.ProsLi4}</li>
              </ul>
            </div>
            <div className={styles.cons}>
              <h3>{pData?.ConsHeading}</h3>
              <ul style={{marginLeft: "40px"}}>
                <li>{pData?.ConsLi1}</li>
                <li>{pData?.ConsLi2}</li>
                <li>{pData?.ConsLi3}</li>
                <li>{pData?.ConsLi4}</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.EligibilityHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.e1}
            </li>
            <li>
            {pData?.e2}
            </li>
            <li>
            {pData?.e3}
            </li>
            <li>
            {pData?.e4}
            </li>
            <li>
            {pData?.e4}
            </li>
          </ul>

          <div
            className={`${styles.languageChart} ${styles.section}`}
            id="language-chart"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h3>{pData?.eligibTabHeading}</h3>
            <table>
              <thead>
                <tr>
                  <th>{pData?.eligibTabEnglanTestHead1}</th>
                  <th>{pData?.eligibTabMinScReqSDSHead2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.eligibTab1Value1}</td>
                  <td>{pData?.eligibTab2Value1}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value2}</td>
                  <td>{pData?.eligibTab2Value2}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value3}</td>
                  <td>{pData?.eligibTab2Value3}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value4}</td>
                  <td>{pData?.eligibTab2Value4}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value5}</td>
                  <td>{pData?.eligibTab2Value5}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value6}</td>
                  <td>{pData?.eligibTab2Value6}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value7}</td>
                  <td>{pData?.eligibTab2Value7}</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "50px" }}>
            {pData?.CheckCLBHeading}
            </h2>

            <button
              className={styles.button}
              onClick={() => (window.location.href = "/clb-ilets-calculator")}
            >
              CLB Calculator
            </button>
          </div>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.AppProcesHeading}
          </h2>
          <p>
          {pData?.AppProcesSubHeading}
          </p>
          <ul>
            <li>{pData?.ap1}</li>
            <li>{pData?.ap2}</li>
            <li>{pData?.ap3}</li>
            <li>{pData?.ap4}</li>
            <li>{pData?.ap5}</li>
            <li>{pData?.ap6}</li>
            <li>{pData?.ap7}</li>
            <li>{pData?.ap8}</li>
            <li>{pData?.ap9}</li>
          </ul>
        </section>

        <section
          className={`${styles.proofOfFunds} ${styles.section}`}
          id="proof-of-funds"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.ProofFundHeading}
          </h2>
          <table>
            <thead>
              <tr>
                <th>{pData?.ProofFundTable1Head1}</th>
                <th>{pData?.ProofFundTable1Head2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.ProofFund1Table11}</td>
                <td>{pData?.ProofFund1Table21}</td>
              </tr>
              <tr>
                <td>{pData?.ProofFund1Table12}</td>
                <td>{pData?.ProofFund1Table22}</td>
              </tr>
              <tr>
                <td>{pData?.ProofFund1Table13}</td>
                <td>{pData?.ProofFund1Table23}</td>
              </tr>
              <tr>
                <td>{pData?.ProofFund1Table14}</td>
                <td>{pData?.ProofFund1Table24}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Family of 2</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuition Fees</td>
                <td>$20,000.00</td>
              </tr>
              <tr>
                <td>Living Expense</td>
                <td>$25,691.00</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>$4,000.00</td>
              </tr>
              <tr>
                <td>Minimum Funds Required</td>
                <td>$49,691.00</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Family of 4</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuition Fees</td>
                <td>$20,000.00</td>
              </tr>
              <tr>
                <td>Living Expense</td>
                <td>$38,346.00</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>$8,000.00</td>
              </tr>
              <tr>
                <td>Minimum Funds Required</td>
                <td>$66,346.00</td>
              </tr>
            </tbody>
          </table>

        </section>
        
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="pgwp-requirements"
          ref={(el) => (sectionsRef.current[26] = el)}
        >
          <h2 className={styles.subheading}>
          If you submit your study permit application on or after November 1, 2024 
          </h2>
          <h4>NOTE: Changes were Announced to the Post Graduate Work Permit (PGWP) Eligibility - September 18, 2024</h4>
          <p>
            If you submit your study permit application on or after November 1, 2024, you must also meet the new requirements that apply to your situation to be eligible to apply for a PGWP.
          </p>
          
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>If you Graduated from a University Bachelor’s degree, Master’s Degree or Doctoral Degree Program:</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>Language requirement: </strong> You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.
            </li>
            <li><strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement. <a href="#field-study"> Field of study Requirement </a></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>If you Graduated from Any Other University Program:</strong> </li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 7 in English or NCLC 7 in French in all 4 language areas.</li>
            <li><strong>Field of study requirement:</strong> You must graduate in an eligible field of study.<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li> <strong>If you graduated from a College Program or Any Other Program Not listed Above:</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li><strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 5 in English or NCLC 5 in French in all 4 language areas.</li>
            <li> <strong>Field of study requirement:</strong> You must graduate in an eligible field of study.<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>
          <button id="field-study"
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/clb-ilets-calculator")
            }
          >
           CLB CALCULATOR
          </button>

          <h3 >Field of Study Requirement</h3>
          <p style={{ marginTop:"20px" , marginBottom:"20px"}}>
          If your study program has a field of study requirement, you must graduate from a program linked to certain occupations in long-term shortage. The fields of study are divided into 5 broad categories:
          </p>
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
            <li>Agriculture and Agri-food</li>
            <li>Healthcare</li>
            <li>Science, Technology, Engineering and Mathematics (STEM)</li>
            <li>Trade</li>
            <li>Transport</li>
          </ul>

          {/* <h4 > Select Field of Study:</h4> */}
          {/* <select className={styles.dropdown}>
            <option value="">Select a field</option>
            <option value="agriculture">Agriculture and Agri-food</option>
            <option value="healthcare">Healthcare</option>
            <option value="stem">Science, Technology, Engineering and Mathematics (STEM)</option>
            <option value="trade">Trade</option>
            <option value="transport">Transport</option>
          </select> */}

         <FieldOfStudyTable/>
        </section>
        
        <h3 style={{ marginBottom: "20px" }}>
        {pData?.ProofFundTableOpenPermitHeading}
        </h3>
        <p>
        {pData?.ProofFundTableOpenPermitPara}
        </p>

        <section
          className={`${styles.spousalPermit} ${styles.section}`}
          id="spousal-permit"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <ul>
            <li style={{ listStyle: "none" }}>
              <strong>{pData?.GradProgHeading}</strong>
              <ul style={{marginLeft: "40px"}}>
                <li>
                {pData?.GradProgPara}
                </li>
              </ul>
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>{pData?.ProfDegProgHeading}</strong>
              <li
                style={{
                  listStyle: "disc",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
              >
              {pData?.ProfDegProgSubHead}
              </li>
              <ul style={{ marginLeft: "80px" }}>
                <li>{pData?.ProfDegProgList1}</li>
                <li>{pData?.ProfDegProgList2}</li>
                <li>{pData?.ProfDegProgList3}</li>
                <li>{pData?.ProfDegProgList4}</li>
                <li>{pData?.ProfDegProgList5}</li>
                <li>{pData?.ProfDegProgList6}</li>
                <li>{pData?.ProfDegProgList7}</li>
                <li>{pData?.ProfDegProgList8}</li>
                <li>{pData?.ProfDegProgList9}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>{pData?.r3}</li>
            <li>{pData?.r4}</li>
            <li>
            {pData?.r5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.bookAppointment} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>{pData?.InCaseHeading}</h2>
          <p>
          {pData?.inCase1}
          </p>
          <p>
          {pData?.inCase2}
          </p>

          <button
            className={styles.button}
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

export default NonSds;
