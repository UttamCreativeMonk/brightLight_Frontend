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

  const [showNOC, setShowNOC] = useState("meatProcessing");



  // Create refs for each section
  const sectionsRef = useRef([]);

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
          <h1>Agri-Food Pilot Program</h1>
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
            The Agri-Food Pilot is strategically designed to address labor
            shortages, particularly in critical areas like meat processing and
            mushroom production, within Canada's agri-food sector, while also
            supporting the nation's ambitious export objectives. As a
            cornerstone of Canada's economic growth, the agriculture and
            agri-food industry sustains approximately one-in-eight jobs across
            the country.
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            This initiative aims to assist the agri-food sector in recruiting
            full-time, non-seasonal foreign workers essential for filling
            expanding labor gaps. By offering a pathway to permanent residency
            after an initial two-year term on a temporary work permit, the pilot
            program seeks to attract and retain skilled workers, eliminating the
            need for repetitive work permit renewals.
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            In each calendar year, a maximum of 2,750 principal applicants,
            along with their accompanying family members, will be considered for
            processing under this pilot program.
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
            ref={(el) => (sectionsRef.current[25] = el)}
          >
            Eligibility Criteria for Agri-Food Immigration Pilot
          </h2>
          <h4>Who Qualifies for Canada’s Agri-Food Immigration Pilot?</h4>
          <p>
            To be eligible for Canada’s Agri-Food Immigration Pilot, foreign
            workers need to meet specific criteria:
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
              <ol>
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
            2. Qualifying Job Offer
          </h3>
          <p>
            If you are living in Canada at the time of application, you have the
            option to fulfill either the job offer requirement or the
            educational requirement.
          </p>
          <p>
            However, if you are living outside of Canada when you apply, you
            must meet both the job offer and the educational requirement.
          </p>
          <p>
            The job offer you receive must be genuine and satisfy all of the
            following criteria:
          </p>
          <ul
            className={`${styles.section} ${styles.section}`}
            id="testing7"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <li>
              The job must be in an eligible occupation under one of the
              eligible industries.
            </li>
            <li>
              The job must be full-time, implying that you work a minimum of 30
              paid hours per week.
            </li>
            <li>
              The job must be non-seasonal, meaning you have consistent and
              regularly scheduled paid employment throughout the year.
            </li>
            <li>
              The job must be permanent, showing there is no predetermined end
              date.
            </li>
            <li>The job must be located in Canada, excluding Quebec.</li>
          </ul>
          <p>
            For positions that are unionized, the wage must be determined by the
            relevant collective agreement. For non-unionized positions, the wage
            must meet or exceed the prevailing (median) wage for the occupation
            listed on your job offer in the province of employment (or at the
            national level if no provincial rate is available).
          </p>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            3. Minimum Language Requirements
          </h3>
          <p>
            Achieve a minimum Canadian Language Benchmark (CLB) of Level 4 on an
            approved language test in either English or French.
          </p>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            4. Minimum Education Requirements
          </h3>
          <p>
            The education requirement for the agri-food pilot program depends on
            whether you are residing in Canada or outside of Canada when you
            apply:
          </p>
          <ul
            className={`${styles.fourthPoint} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <li>
              If you are residing in Canada:
              <ul>
                <li>
                  You may choose to meet either the educational requirement or
                  the job offer requirement.
                </li>
              </ul>
            </li>
            <li>
              If you are residing outside of Canada:
              <ul>
                <li>
                  You must meet both the educational requirement and the job
                  offer.
                </li>
              </ul>
            </li>
            <li>
              The educational requirement entails having at least one of the
              following:
              <ul>
                <li>A Canadian high school diploma, or</li>
                <li>
                  An Educational Credential Assessment (ECA) report from a
                  designated organization or professional body, demonstrating
                  the completion of a foreign credential at the secondary school
                  level or higher.
                </li>
              </ul>
            </li>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            5. Settlement Funds Requirement
          </h3>
          <p>
            Demonstrate sufficient funds to support yourself and your family
            upon settling in Canada. If you&#39;re already employed in Canada
            with a valid work permit, no proof of funds is necessary. For those
            not currently employed in Canada, specific settlement funds are
            required:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Number of family members</th>
                <th>Required funds (in CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 (single applicant)</td>
                <td>$13,757</td>
              </tr>
              <tr>
                <td>2</td>
                <td>$17,127</td>
              </tr>
              <tr>
                <td>3</td>
                <td>$21,055</td>
              </tr>
              <tr>
                <td>For each additional family member, add</td>
                <td>$3,706</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.application} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          <h2>How to Apply for Canada’s Agri-Food Immigration Pilot</h2>
          <ul
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[21] = el)}
          >
            <li>
              If you meet the program requirements listed above, then you can
              submit your application for permanent resident status directly to
              IRCC.
            </li>
            <li>
              Once you have completed your application, you will be required to
              submit the application in hard copy by mail.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.contact} ${styles.section}`}
          ref={(el) => (sectionsRef.current[22] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[23] = el)}
          >
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs is
            nearly 100%. We achieve this with a tailored approach to your
            specific case. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
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
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
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
