import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LowWageLmia.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const LowWageLmia = () => {
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
    fetch("https://brightlight-node.onrender.com/lowWageLmiaMeta")
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
              <p onClick={() => scrollToSection("noc")}>NOC</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("differences")}>Differences</p>
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
          <h1>Low-wage/High-wage LMIA</h1>
        </header>
        <section className={styles.intro}>
          <p>
            Low-wage/High-wage LMIAs are used by the employer to fill the
            immediate labor shortage in their business. Whether to apply for
            low-wage or high-wage LMIA, you must understand the following three
            key aspects related to wages in Canada.
          </p>
          <ol
            style={{
              marginTop: "0px",
              marginLeft: "40px",
              marginBottom: "30px",
            }}
          >
            <li>National Occupation Classification Code</li>
            <li>Prevailing median wage</li>
            <li>Provincial median wage</li>
          </ol>
        </section>
        <section
          className={`${styles.noc} ${styles.section}`}
          id="noc"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>1. National Occupation Classification NOC Code:</h2>
          <p>
            The National Occupational Classification is a database developed by
            the Government of Canada categorizing all types of possible
            occupations in the Canadian labor market according to their skill
            level.
          </p>
        </section>
        <section
          className={`${styles.prevailingWage} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>2. Prevailing Median Wage</h2>
          <p>
            Government of Canada’s official Job Bank website lists the
            prevailing median wage, for each NOC TEER Code, which is specific to
            the NOC code and location of work being offered by the Canadian
            employer. One of the most important LMIA requirements is to match
            this wage with what the employer will offer to their foreign worker.
          </p>
        </section>
        <section
          className={`${styles.provincialWage} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>3. Provincial Median Wage</h2>
          <p>
            Employment and Social Development Canada (ESDC) department updates
            the Median hourly wages for each province and territory every year
            in April. This median hourly wage is called the
            Provincial/territorial Median Hourly Wage.
          </p>
          <table className={styles.wageTable}>
            <thead>
              <tr>
                <th>Province/territory</th>
                <th>Median hourly wages as of April 2, 2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alberta</td>
                <td>$29.50</td>
              </tr>
              <tr>
                <td>British Columbia</td>
                <td>$28.85</td>
              </tr>
              <tr>
                <td>Manitoba</td>
                <td>$25.00</td>
              </tr>
              <tr>
                <td>New Brunswick</td>
                <td>$24.04</td>
              </tr>
              <tr>
                <td>Newfoundland and Labrador</td>
                <td>$26.00</td>
              </tr>
              <tr>
                <td>Northwest Territories</td>
                <td>$39.24</td>
              </tr>
              <tr>
                <td>Nova Scotia</td>
                <td>$24.00</td>
              </tr>
              <tr>
                <td>Nunavut</td>
                <td>$35.00</td>
              </tr>
              <tr>
                <td>Ontario</td>
                <td>$28.39</td>
              </tr>
              <tr>
                <td>Prince Edward Island</td>
                <td>$24.00</td>
              </tr>
              <tr>
                <td>Quebec</td>
                <td>$27.47</td>
              </tr>
              <tr>
                <td>Saskatchewan</td>
                <td>$27.00</td>
              </tr>
              <tr>
                <td>Yukon</td>
                <td>$36.00</td>
              </tr>
            </tbody>
          </table>
          <p>
            See the latest median hourly wages at:{" "}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada Employment and Social Development
            </a>
          </p>
        </section>
        <section
          className={`${styles.highWageLMIA} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>High-wage LMIA</h2>
          <p>
            This LMIA is for occupations that pay an hourly wage equal to or
            exceeding the Provincial/territorial Median Hourly Wage. It can be
            of any NOC TEER Code. There is no cap on how many foreign workers an
            employer can hire on high-wage LMIA. However, a transition plan must
            be submitted to satisfy that the employer will continue to hire
            Canadians/PR.
          </p>
        </section>
        <section
          className={`${styles.lowWageLMIA} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Low-wage LMIA</h2>
          <p>
            This LMIA is for occupations that pay an hourly wage that is below
            the Provincial/territorial Median Hourly Wage. It can be of any NOC
            TEER Code. There is a cap on how many foreign workers an employer
            can hire on low-wage LMIAs.
          </p>
        </section>
        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Benefits of Low-wage/High-wage LMIA:</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              The employer can apply for low-wage/high-wage LMIA to immediately
              meet the labor shortage.
            </li>
            <li>
              Even the employers whose incorporation is fairly new (less than
              one year in operation), can apply for one of these types of LMIA,
              provided they can justify that the business is actively providing
              goods or services and they can meet the financial obligation
              related to hiring and paying the foreign worker.
            </li>
            <li>
              The employer can hire anyone qualified for the job from anywhere
              in the world or within Canada.
            </li>
            <li>
              The employer can apply for an unnamed LMIA and then add the name
              of the finalized workers to the LMIA later on after the LMIA is
              approved.
            </li>
          </ul>
        </section>
        <section
          className={`${styles.applicationSteps} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>How to Apply for Low-wage/High-wage LMIA:</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
              Have an initial assessment performed by us to verify if the
              employer is eligible to apply for LMIA for a specific position and
              how many positions are allowed.
            </li>
            <li>
              We will provide you with a checklist of documents and information
              required to start the initial process.
            </li>
            <li>
              Perform recruitment efforts as per ESDC program requirements for
              each LMIA type. Job advertisement postings (All advertisements
              must be active for 4 weeks before submission). Your LMIA job
              posting must include the following information:
              <ul
                style={{
                  marginTop: "20px",
                  marginLeft: "40px",
                  marginBottom: "30px",
                }}
              >
                <li>Company name and business address</li>
                <li>Job title</li>
                <li>
                  Job duties (if advertising for multiple vacancies, specify
                  duties for each). Do not just copy/paste duties from the NOC
                  occupation classification.
                </li>
                <li>Employment terms (e.g., permanent, project-based)</li>
                <li>Language requirements</li>
                <li>
                  Wage details (including any raises, performance pay, or
                  bonuses): A wage range can be provided, but the minimum wage
                  must meet prevailing standards
                </li>
                <li>Benefits offered (if applicable)</li>
                <li>Work location(s) (local area, city, or town)</li>
                <li>Number of positions</li>
                <li>
                  Contact details of the employer: email address, fax number, or
                  mailing address
                </li>
                <li>
                  Skill requirements (including education and work experience)
                </li>
              </ul>
            </li>
            <li>Screen and interview local candidates.</li>
            <li>
              Prepare and submit an LMIA application to the Service Canada ESDS
              department. Pay the fees when requested, within 2 business days.
            </li>
            <li>
              Wait for LMIA processing time, which can range from 30 to 90
              business days. If the Service Canada officer has any questions or
              concerns or requires any further information, the employer might
              be contacted for an interview.
            </li>
            <li>
              Once LMIA is received, the employer can add or remove the name of
              the foreign worker.
            </li>
          </ol>
        </section>
        <section
          className={`${styles.differences} ${styles.section}`}
          id="differences"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2>Differences Between High-Wage and Low-Wage Positions</h2>
          <table className={styles.differencesTable}>
            <thead>
              <tr>
                <th>Position Type</th>
                <th>High-Wage Position</th>
                <th>Low-Wage Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wage Offered</td>
                <td>
                  At or above the provincial/territorial median hourly wage
                </td>
                <td>Below the provincial/territorial median hourly wage</td>
              </tr>
              <tr>
                <td>LMIA Stream</td>
                <td>High-wage stream LMIA application</td>
                <td>Low-wage stream LMIA application</td>
              </tr>
              <tr>
                <td>Median Hourly Wage</td>
                <td>
                  Ontario: $28.39 per hour (or above)
                  <br />
                  British Columbia: $28.85
                </td>
                <td>Below $27.50 as of May 31, 2023</td>
              </tr>
              <tr>
                <td>Application Requirements</td>
                <td>
                  Maybe more stringent in terms of recruitment efforts.
                  <br />
                  May have different or additional requirements for
                  transportation, housing, and healthcare of workers.
                  <br />
                  Generally aimed at skilled positions.
                </td>
                <td>
                  Typically less stringent recruitment requirements.
                  <br />
                  May involve caps on the number of TFWs or restrictions based
                  on the sector or region.
                  <br />
                  Generally aimed at lower-skilled, lower-paid positions.
                </td>
              </tr>
              <tr>
                <td>Intended Use</td>
                <td>
                  For filling short-term skills and labor shortages when no
                  Canadians or permanent residents are available for skilled
                  positions.
                </td>
                <td>
                  For jobs that do not require high levels of skills and
                  training and where there is a shortage of available Canadian
                  workers.
                </td>
              </tr>
              <tr>
                <td>Program Requirements</td>
                <td>
                  Must comply with high-wage position requirements from
                  Employment and Social Development Canada, which may involve
                  minimum recruitment efforts, providing certain benefits, etc.
                </td>
                <td>
                  Must comply with low-wage position requirements from
                  Employment and Social Development Canada, which may include
                  different standards for recruitment, housing, and other
                  factors.
                </td>
              </tr>
              <tr>
                <td>Duration of Employment Allowed</td>
                <td>
                  Up to 3 years as of April 4, 2022, and potentially longer in
                  exceptional circumstances with adequate rationale.
                </td>
                <td>
                  Typically shorter durations, align with the lower skill level
                  and pay rate of the position.
                </td>
              </tr>
              <tr>
                <td>Impact on the Canadian Labour Market</td>
                <td>
                  An LMIA will determine if hiring a TFW will have a positive or
                  negative impact on the Canadian labor market.
                </td>
                <td>
                  An LMIA will determine if hiring a TFW will have a positive or
                  negative impact on the Canadian labor market.
                </td>
              </tr>
              <tr>
                <td>Transition Period</td>
                <td>
                  Employers may experience a change in classification due to
                  updated median wages and need to adjust their applications
                  accordingly.
                </td>
                <td>
                  Employers may experience a change in classification due to
                  updated median wages and need to adjust their applications
                  accordingly.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>
            Common Reasons for Refusal of High-Wage and Low-Wage Positions:
          </h2>
          <h4>
            Over the years, Service Canada officers have become very strict
            about the employers meeting the requirements of the program.
          </h4>
          <h4>Please see below the common reasons for refusals:</h4>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              Failure to perform or document minimum recruitment requirements.
            </li>
            <li>
              Failure to use the Job Match service, i.e., invite applicant
              profiles in the job bank according to their rating.
            </li>
            <li>Using the wrong methods of recruitment</li>
            <li>
              Failure to keep at least 1 of the 3 recruitment activities to seek
              qualified Canadians and permanent residents ongoing until the date
              a positive or negative LMIA has been issued.
            </li>
            <li>
              Listing wage rate less than median wage rate mentioned on Job Bank
              for that specific NOC.
            </li>
            <li>
              The job requirements mentioned in the job postings and LMIA
              application are way too high than the Employment Requirements
              mentioned on the NOC website.
            </li>
            <li>
              Provided false, misleading, or inaccurate information in the LMIA
              application.
            </li>
            <li>
              Have been found non-compliant as a result of an employer
              compliance review.
            </li>
            <li>
              Have been banned from the Temporary Foreign Worker Program because
              non-compliance was discovered during an inspection.
            </li>
            <li>
              Are in default of payment of an administrative monetary penalty.
            </li>
            <li>
              Regularly offer services in the sex industry (striptease, erotic
              dance, escort services, or erotic massage)
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <h2>Still not sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can certainly assist you if you have a job offer. We have
            obtained approvals for clients who had multiple previous refusals.
            We achieve this with a tailored approach to your specific case,
            addressing each concern that the officer has listed in previous
            refusals. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p style={{ marginTop: "20px" }}>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process to obtaining your visa. Start your process now.
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
          ref={(el) => (sectionsRef.current[65] = el)}
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

export default LowWageLmia;
