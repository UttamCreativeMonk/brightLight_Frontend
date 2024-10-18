import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AgriFoodPilotProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";


const AgriFoodPilotProgram = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([])

  const [showNOC, setShowNOC] = useState("meatProcessing");


  const toggleNOC = (category) => {
    setShowNOC(showNOC === category ? "" : category);
  };

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

    fetch("https://brightlight-node.onrender.com/agriFoodPilotProgMeta")
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
    fetch("https://brightlight-node.onrender.com/agiFoodPilotProgram")
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
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>{pData?.AgriFoodPilotHeading}</h1>
        </header>

        <section
          className={`${styles.intro} ${styles.section}`}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing1"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
           {pData?.AgriFoodPilotPara1}
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
        {pData?.AgriFoodPilotPara2}
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
        {pData?.AgriFoodPilotPara3}
          </p>
        </section>

        <section
          className={`${styles.criteria} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing25"
            ref={(el) => (sectionsRef.current[25] = el)}>
              {pData?.EligCritHeading}
          </h2>
          <h4>{pData?.EligCritSubHead1}</h4>
          <p>
          {pData?.EligCritPara1}
          </p>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            1. Qualifying Work Experience
          </h3>
          <p>
            Candidates must possess at least one year of Canadian work
            experience, totaling a minimum of 1,560 hours within the past three
            years. This experience should meet the following criteria:
          </p>
          <ul
          style={{marginLeft: "40px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing5"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <li>
              Non-seasonal: In an eligible occupation within a qualifying
              industry; and obtained through either the Temporary Foreign Worker
              Program (supported by an LMIA with a minimum 12-month duration) or
              Open Work Permit for applicants classifies as vulnerable workers.
            </li>

            <p>
              Canada announced on May 8, 2023, that it would now consider work
              experience gained under an open work permit for vulnerable
              workers, broadening the eligibility criteria.
            </p>

            <li>
              Qualifying Job Offer: Applicants must secure a qualifying job
              offer.
            </li>
            <li>
              Language and Educational Requirements: Candidates must meet or
              surpass minimum language and educational requirements.
            </li>
            <li>
              Settlement Funds: Applicants must demonstrate sufficient funds to
              settle in their chosen community.
            </li>
          </ul>

          <ul>
            <li>
              Valid Temporary Residence Status: Candidates must maintain valid
              temporary residence status. Note: Effective February 12, 2024,
              applicants residing in Canada during the application process must
              meet either the job offer or educational requirements, while those
              residing outside Eligible industries
            </li>
          </ul>

          <ul>
            <li>
              Eligible industries for the Agri-Food Immigration Pilot are:
              <ol style={{marginLeft: "40px"}}>
                <li>Meat product manufacturing (NAICS 3116)</li>
                <li>
                  Greenhouse, nursery and floriculture production, including
                  mushroom production (NAICS 1114)
                </li>
                <li>
                  Animal production, excluding aquaculture (NAICS 1121, 1122,
                  1123, 1124 or 1129)
                </li>
              </ol>
              <p>
                Industries are classified by the North American Industry
                Classification System (NAICS). You can see specific industry
                definitions by searching the industry codes below on the NAICS
                website. Canada must fulfill both.
              </p>
            </li>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            Eligible NOC Occupations
          </h3>
          <div className={styles.nocSection}>
            <div className={styles.nocSectionButtons}>
              <button
                onClick={() => toggleNOC("meatProcessing")}
                className={styles.nocButton}
              >
                Meat Product Manufacturing
              </button>
              <button
                onClick={() => toggleNOC("greenhouse")}
                className={styles.nocButton}
              >
                Greenhouse, Nursery and Floriculture Production
              </button>
              <button
                onClick={() => toggleNOC("animalProduction")}
                className={styles.nocButton}
              >
                Animal Production
              </button>
            </div>
            {showNOC === "meatProcessing" && (
              <>
                <p>
                  For meat product manufacturing (NAICS 3116), eligible jobs
                  are:
                </p>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Occupation</th>
                      <th>NOC Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Butchers – retail and wholesale</td>
                      <td>NOC 63201</td>
                    </tr>
                    <tr>
                      <td>
                        Meat cutters and fishmongers – retail and wholesale
                      </td>
                      <td>NOC 65202</td>
                    </tr>
                    <tr>
                      <td>
                        Industrial butchers and meat cutters, poultry preparers
                        and related workers
                      </td>
                      <td>NOC 94141</td>
                    </tr>
                    <tr>
                      <td>
                        Agricultural service contractors and farm supervisors
                      </td>
                      <td>NOC 82030</td>
                    </tr>
                    <tr>
                      <td>
                        Specialized livestock workers and farm machinery
                        operators
                      </td>
                      <td>NOC 84120</td>
                    </tr>
                    <tr>
                      <td>Livestock labourers</td>
                      <td>NOC 85100</td>
                    </tr>
                    <tr>
                      <td>Labourers in food and beverage processing</td>
                      <td>NOC 95106</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            {showNOC === "greenhouse" && (
              <>
                <p>
                  For greenhouse, nursery and floriculture production, including
                  mushroom production (NAICS 1114), eligible jobs are:
                </p>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Occupation</th>
                      <th>NOC Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Agricultural service contractors and farm supervisors
                      </td>
                      <td>NOC 82030</td>
                    </tr>
                    <tr>
                      <td>
                        Specialized livestock workers and farm machinery
                        operators
                      </td>
                      <td>NOC 84120</td>
                    </tr>
                    <tr>
                      <td>Livestock labourers</td>
                      <td>NOC 85100</td>
                    </tr>
                    <tr>
                      <td>Harvesting labourers</td>
                      <td>NOC 85101</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            {showNOC === "animalProduction" && (
              <>
                <p>
                  For animal production, excluding aquaculture (NAICS 1121,
                  1122, 1123, 1124 and 1129), eligible jobs are:
                </p>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Occupation</th>
                      <th>NOC Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Agricultural service contractors and farm supervisors
                      </td>
                      <td>NOC 82030</td>
                    </tr>
                    <tr>
                      <td>
                        Specialized livestock workers and farm machinery
                        operators
                      </td>
                      <td>NOC 84120</td>
                    </tr>
                    <tr>
                      <td>Livestock labourers</td>
                      <td>NOC 85100</td>
                    </tr>
                    <tr>
                      <td>Harvesting labourers</td>
                      <td>NOC 85101</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing6"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
          {pData?.EligCritPoH2}
          </h3>
          <p>
          {pData?.EligCritPoPara1}
          </p>
          <p>
          {pData?.EligCritPoPara2}
          </p>
          <p>
          {pData?.EligCritPoPara3}
          </p>
          <ul
          style={{marginLeft: "40px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing7"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <li>
            {pData?.EligCritPo2Li1}
            </li>
            <li>
            {pData?.EligCritPo2Li2}
            </li>
            <li>
            {pData?.EligCritPo2Li3}
            </li>
            <li>
            {pData?.EligCritPo2Li4}
            </li>
            <li> {pData?.EligCritPo2Li5}</li>
          </ul>
          <p>
          {pData?.EligCritPo2Para2}
          </p>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
           {pData?.EligCritPoH3}
          </h3>
          <p>
          {pData?.EligCritPo3Para}
          </p>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
             {pData?.EligCritPoH4}
          </h3>
          <p>
          {pData?.EligCritPo4Para}
          </p>
          <ul
          style={{marginLeft: "40px"}}
            className={`${styles.fourthPoint} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <li>
            {pData?.EligCritPo4Li1}
              <ul>
                <li>
                {pData?.EligCritPo4SubLi1}
                </li>
              </ul>
            </li>
            <li>
            {pData?.EligCritPo4Li2}
              <ul>
                <li>
                {pData?.EligCritPo2SubLi}
                </li>
              </ul>
            </li>
            <li>
            {pData?.EligCritPo4Li3}
              <ul>
                <li>{pData?.EligCritPo3SubLi1}</li>
                <li>
                {pData?.EligCritPo3SubLi2}
                </li>
              </ul>
            </li>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
           {pData?.EligCritPoH5}
          </h3>
          <p>
          {pData?.EligCritPo5Para}
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{pData?.EligCritPo5Head1}</th>
                <th>Required funds (in CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.EligCritPo5Head1Po1}</td>
                <td>{pData?.EligCritPo5Head2Po1}</td>
              </tr>
              <tr>
                <td>{pData?.EligCritPo5Head1Po2}</td>
                <td>{pData?.EligCritPo5Head2Po2}</td>
              </tr>
              <tr>
                <td>{pData?.EligCritPo5Head1Po3}</td>
                <td>{pData?.EligCritPo5Head2Po3}</td>
              </tr>
              <tr>
                <td>{pData?.EligCritPo5Head1Po4}</td>
                <td>{pData?.EligCritPo5Head2Po4}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.application} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          <h2>{pData?.HowToApplyHeading}</h2>
          <ul
          style={{marginLeft: "40px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[21] = el)}
          >
            <li>
            {pData?.ha1}
            </li>
            <li>
            {pData?.ha2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.contact} ${styles.section}`}
          ref={(el) => (sectionsRef.current[22] = el)}
        >
          <h2>{pData?.StillNotSureHeading}</h2>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[23] = el)}
          >
            {pData?.StillNotSurePara}
          </p>
          <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj">
            <button className={styles.book_button} id="book-appointment">
              Book Appointment
            </button>
          </a>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[50] = el)}
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
          <button className={styles.book_button} id="book-appointment"
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
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

export default AgriFoodPilotProgram;
