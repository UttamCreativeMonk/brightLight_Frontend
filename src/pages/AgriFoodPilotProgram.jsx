import React, { useState } from "react";
import styles from "../styles/AgriFoodPilotProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";


const AgriFoodPilotProgram = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNOC, setShowNOC] = useState("");

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

  return (
    <>
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
        <header className={styles.header} id="about-program">
          <h1>Agri-Food Pilot Program</h1>
        </header>

        <section className={styles.intro}>
          <p>
            The Agri-Food Pilot is strategically designed to address labor
            shortages, particularly in critical areas like meat processing and
            mushroom production, within Canada's agri-food sector, while also
            supporting the nation's ambitious export objectives. As a
            cornerstone of Canada's economic growth, the agriculture and
            agri-food industry sustains approximately one-in-eight jobs across
            the country.
          </p>
          <p>
            This initiative aims to assist the agri-food sector in recruiting
            full-time, non-seasonal foreign workers essential for filling
            expanding labor gaps. By offering a pathway to permanent residency
            after an initial two-year term on a temporary work permit, the pilot
            program seeks to attract and retain skilled workers, eliminating the
            need for repetitive work permit renewals.
          </p>
          <p>
            In each calendar year, a maximum of 2,750 principal applicants,
            along with their accompanying family members, will be considered for
            processing under this pilot program.
          </p>
        </section>

        <section className={styles.criteria} id="eligibility">
          <h2>Eligibility Criteria for Agri-Food Immigration Pilot</h2>
          <p>
            To be eligible for Canada’s Agri-Food Immigration Pilot, foreign
            workers need to meet specific criteria:
          </p>

          <h3>1. Qualifying Work Experience</h3>
          <p>
            Candidates must possess at least one year of Canadian work
            experience, totaling a minimum of 1,560 hours within the past three
            years. This experience should meet the following criteria:
          </p>
          <ul>
            <li>Non-seasonal</li>
            <li>In an eligible occupation within a qualifying industry</li>
            <li>
              Obtained through either the Temporary Foreign Worker Program
              (supported by an LMIA with a minimum 12-month duration) or an Open
              Work Permit for applicants classified as vulnerable workers.
            </li>
          </ul>
          <p>
            Canada announced on May 8, 2023, that it would now consider work
            experience gained under an open work permit for vulnerable workers,
            broadening the eligibility criteria.
          </p>

          <h3>2. Qualifying Job Offer</h3>
          <p>
            Applicants must secure a qualifying job offer. The job offer must
            meet these criteria:
          </p>
          <ul>
            <li>Full-time (minimum 30 paid hours per week)</li>
            <li>
              Non-seasonal (consistent and regularly scheduled paid employment
              throughout the year)
            </li>
            <li>Permanent (no predetermined end date)</li>
            <li>Located in Canada, excluding Quebec</li>
          </ul>

          <h3>3. Minimum Language Requirements</h3>
          <p>
            Achieve a minimum Canadian Language Benchmark (CLB) of Level 4 on an
            approved language test in either English or French.
          </p>

          <h3>4. Minimum Education Requirements</h3>
          <p>
            Depending on whether you are residing in Canada or outside of
            Canada, you must meet the following educational requirements:
          </p>
          <ul>
            <li>
              If residing in Canada: Meet either the educational requirement or
              the job offer requirement.
            </li>
            <li>
              If residing outside of Canada: Meet both the educational
              requirement and the job offer.
            </li>
            <li>
              Educational requirement entails having at least one of the
              following:
              <ul>
                <li>A Canadian high school diploma, or</li>
                <li>
                  An Educational Credential Assessment (ECA) report from a
                  designated organization or professional body.
                </li>
              </ul>
            </li>
          </ul>

          <h3>5. Settlement Funds Requirement</h3>
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

          <h3>Eligible Industries and NOC Codes</h3>
          <div className={styles.nocSection}>
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

            {showNOC === "meatProcessing" && (
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
                    <td>Meat cutters and fishmongers – retail and wholesale</td>
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
                      Specialized livestock workers and farm machinery operators
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
            )}

            {showNOC === "greenhouse" && (
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
                      Specialized livestock workers and farm machinery operators
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
            )}

            {showNOC === "animalProduction" && (
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
                      Specialized livestock workers and farm machinery operators
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
            )}
          </div>
        </section>

        <section className={styles.application} id="how-to-apply">
          <h2>How to Apply for Canada’s Agri-Food Immigration Pilot</h2>
          <ul>
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

        <section className={styles.contact}>
          <h2>Still Not Sure?</h2>
          <p>
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
          <a href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"><button  className={styles.book_button} id="book-appointment">Book Appointment</button></a>
        </section>

        <section className={styles.testimonials} id="why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>See what our clients have to say:</p>
        </section>
      </div>
      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="faqs">
        <FAQ/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>

      <Footer1/>
    </>
  );
};

export default AgriFoodPilotProgram;
