import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkCanadaLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const OpenWorkCanadaLP = () => {
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
    fetch("https://brightlight-node.onrender.com/openWorkDependentChildMeta")
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("age-chart")}>Age Chart</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          <h1>
            Open Work Permit for Dependent Child of Foreign Worker in Canada
          </h1>
          <p>
            IRCC now allows your dependent children of Temporary Foreign Workers
            (TFWs) to obtain work permits without the need for an LMIA or job
            offer, under LMIA exemption codes C46 and C48.
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Open Work Permit for Dependent Child</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>Financial Independence:</strong> Enables your dependent
              child to work and earn income, supporting their expenses or saving
              for education.
            </li>
            <li>
              <strong>Professional Development:</strong> Provides opportunities
              for skill enhancement and career growth.
            </li>
            <li>
              <strong>Integration:</strong> Helps your dependent child integrate
              into Canadian society and understand Canadian workplace dynamics.
            </li>
            <li>
              <strong>Contribution to Household Income:</strong> Additional
              income can reduce financial strain and improve the family's
              standard of living.
            </li>
            <li>
              <strong>Networking Opportunities:</strong> Allows your child to
              build professional networks beneficial for their future career.
            </li>
            <li>
              <strong>Pathway to Permanent Residency:</strong> Canadian work
              experience may make your child eligible for permanent residency in
              the future.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>
            Eligibility criteria for Open work permit for Dependent child of
            foreign worker in Canada:
          </h2>
          <p>
            There are 3 main groups of eligible family members as classified
            below:{" "}
          </p>
          <h3>
            1. Foreign Nationals in High-Skilled Occupations (TEER 0, 1, 2, or
            3)
          </h3>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
              <strong>Valid Work Authorization:</strong> You must possess one of
              the following:
              <ul className={styles.subList}>
                <li>A valid work permit, subject to certain exceptions*.</li>
                <li>
                  An approved work permit that has not yet been issued
                  (indicated by a port of entry letter of introduction).
                </li>
                <li>Authorization to work without a permit.</li>
              </ul>
            </li>
            <li>
              <strong>Work Permit Validity:</strong>Your work permit or
              authorized work status must be valid for at least six months
              beyond the date you submit your family member's open work permit
              application.
            </li>
            <li>
              <strong>High-Skilled Occupation:</strong>You must be employed or
              have a confirmed offer of employment in a high-skilled occupation,
              as defined by the National Occupation Classification system (TEER
              categories 0, 1, 2, or 3).
            </li>
            <li>
              <strong>Canadian Residence:</strong> You must be living in Canada
              or have plans to move to Canada to work.
            </li>
            <li>
              <strong>Not Eligible:</strong>
              <ul className={styles.subList}>
                <li>
                  You have made a refugee claim that has been referred to the
                  Immigration and Refugee Board.
                </li>
                <li>You are subject to an unenforceable removal order.</li>
                <li>
                  You are an international student working in a co-op program
                  without a work permit.
                </li>
                <li>
                  You are an international student working off-campus without a
                  work permit.
                </li>
                <li>
                  You have applied for a post-graduation work permit (PGWP) but
                  have not yet received a positive decision.
                </li>
                <li>You, yourself, hold a spousal open work permit.</li>
              </ul>
            </li>
          </ul>

          <h3>2. Foreign Nationals in Low-Skilled Occupations (TEER 4 or 5)</h3>
          <h4>
            You must meet the following four requirements to be eligible to
            apply for your child:
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
              <strong>Valid Work Authorization:</strong> You must possess one of
              the following:
              <ul className={styles.subList}>
                <li>A valid work permit, subject to certain exceptions*.</li>
                <li>
                  An approved work permit that has not yet been issued
                  (indicated by a port of entry letter of introduction).
                </li>
                <li>Authorization to work without a permit.</li>
              </ul>
            </li>
            <li>
              <strong>Work Permit Validity:</strong>Your work permit or
              authorized work status must be valid for at least six months
              beyond the date you submit your family member's open work permit
              application.
            </li>
            <li>
              <strong>Low-Skilled Occupation:</strong> You must be employed or
              have a confirmed offer of employment in a low-skilled occupation,
              as defined by the National Occupation Classification system (TEER
              categories 4 or 5).
            </li>
            <li>
              <strong>Canadian Residence:</strong> You must be living in Canada
              or have plans to move to Canada to work.
            </li>
            <li>
              <strong>
                If the work permit holder is under the Agri-Food Pilot:
              </strong>
              you must hold a labor market impact assessment (LMIA)-based work
              permit in the agriculture or low-wage stream of the Agri-Food
              Pilot and must have received an acknowledgment of receipt AOR
              letter from IRCC confirming that your application for permanent
              residence is complete.
            </li>
            <li>
              <strong>Not Eligible currently:</strong>
              <ul className={styles.subList}>
                <li>
                  You hold a work permit under the <strong>low-wage</strong>{" "}
                  stream of the Temporary Foreign Worker Program.
                </li>
                <li>
                  You hold a work permit under the Seasonal Agricultural Worker
                  Program.
                </li>
                <li>
                  You hold a work permit under the agricultural stream of the
                  Temporary Foreign Worker Program.
                </li>
                <li>
                  You have made a refugee claim referred to the Immigration and
                  Refugee Board.
                </li>
                <li>You are subject to an unenforceable removal order.</li>
                <li>You are an international student in a co-op program.</li>
                <li>
                  You are an international student working off-campus without a
                  work permit.
                </li>
                <li>
                  You are applying for a Post-Graduation Work Permit (PGWP) and
                  haven't received a positive decision on your application yet.
                </li>
              </ul>
            </li>
          </ul>

          <h3>
            3. Foreign Nationals Applying for Permanent Residence through
            Economic Immigration Program
          </h3>
          <h4>
            You must meet the following four requirements to be eligible to
            apply for your child:
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
              <strong>Valid Work Authorization:</strong> You must possess one of
              the following:
              <ul className={styles.subList}>
                <li>A valid work permit, subject to certain exceptions*.</li>
                <li>
                  An approved work permit (employer-specific or open under a
                  non-family category).
                </li>
              </ul>
            </li>
            <li>
              <strong>Work Permit Validity:</strong> Your work permit or
              authorized work status must be valid for at least six months
              beyond the date you submit your family member's open work permit
              application.
            </li>
            <li>
              <strong>Canadian Residence:</strong> You must be living in Canada
              or have plans to move to Canada to work.
            </li>
            <li>
              <strong>Permanent Residency in Process:</strong> Your work permit
              was issued or approved because you applied for an economic class
              permanent residence program.
            </li>
          </ul>

          <h3>Requirements for Your Dependent Child</h3>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>General Eligibility:</strong> Must meet general work
              permit criteria, including police and medical clearances.
            </li>
            <li>
              <strong>Relationship:</strong> Must be in a genuine relationship
              with the principal applicant.
            </li>
            <li>
              <strong>Temporary Residency:</strong> Must have valid temporary
              resident status or be eligible for restoration of status.
            </li>
            <li>
              <strong>Minimum Age to Work:</strong> Must be of legal working age
              as defined by the province/territory. See the chart below.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.ageChart} ${styles.section}`}
          id="age-chart"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Legal Minimum Age to Work by Province/Territory</h2>
          <table>
            <thead>
              <tr>
                <th>Province/Territory</th>
                <th>Minimum Legal Age to Work</th>
                <th>Exceptions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alberta</td>
                <td>13 years</td>
                <td>Children who are 12 or younger may do artistic work.</td>
              </tr>
              <tr>
                <td>British Columbia</td>
                <td>15 years</td>
                <td>
                  Children 12-14 may work with written consent from
                  parents/guardians.
                </td>
              </tr>
              <tr>
                <td>Manitoba</td>
                <td>13 years</td>
                <td>
                  Children 13-15 must complete a Young Worker Readiness
                  Certificate Course.
                </td>
              </tr>
              <tr>
                <td>New Brunswick</td>
                <td>16 years</td>
                <td>
                  Employers may apply for Authorization to employ children under
                  16.
                </td>
              </tr>
              <tr>
                <td>Newfoundland and Labrador</td>
                <td>16 years</td>
                <td>Some restrictions apply to children under 16.</td>
              </tr>
              <tr>
                <td>Nova Scotia</td>
                <td>16 years</td>
                <td>Children 14-15 may work in restaurants with conditions.</td>
              </tr>
              <tr>
                <td>Ontario</td>
                <td>14 years</td>
                <td>Minors may not work during school hours.</td>
              </tr>
              <tr>
                <td>Prince Edward Island</td>
                <td>16 years</td>
                <td>Many restrictions apply.</td>
              </tr>
              <tr>
                <td>Quebec</td>
                <td>No minimum age</td>
                <td>Children under 14 need parents’ or guardians’ consent.</td>
              </tr>
              <tr>
                <td>Saskatchewan</td>
                <td>16 years</td>
                <td>14-15 year olds need consent and must complete YWRCC.</td>
              </tr>
              <tr>
                <td>Northwest Territories</td>
                <td>No minimum age</td>
                <td>
                  Youths less than 17 need authorization for specific times and
                  industries.
                </td>
              </tr>
              <tr>
                <td>Nunavut</td>
                <td>No minimum age</td>
                <td>Hiring under 17 has many restrictions.</td>
              </tr>
              <tr>
                <td>Yukon</td>
                <td>No minimum age</td>
                <td>Many restrictions for youth workers.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>How to Apply</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
              Identify the principal applicant’s occupation in TEER category 0,
              1, 2, 3, 4, or 5.
            </li>
            <li>Gather documents to prove eligibility criteria.</li>
            <li>Gather documents to prove a genuine relationship.</li>
            <li>
              If applying from outside Canada, you might need a medical exam and
              police clearance certificates.
            </li>
            <li>Submit a complete application to IRCC.</li>
            <li>
              After receiving the Biometric Collection Instruction letter, make
              an appointment for biometrics within 30 days.
            </li>
            <li>Wait for IRCC to process your application.</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Common Reasons for Refusal</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              Lack of documentation verifying the NOC of the principal
              applicant.
            </li>
            <li>
              Inadequate evidence of the relationship between parent and child.
            </li>
            <li>
              Principal applicant is employed in a low-skill occupation and has
              not applied for PR.
            </li>
            <li>
              Principal applicant's work permit is expiring without an extension
              application.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can assist if you have a job offer. We have successfully obtained
            approvals for clients with previous refusals through a tailored
            approach, addressing each concern listed in refusals, and using case
            law as precedents. Contact us at Brightlight Immigration for expert
            assistance from start to finish.
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

export default OpenWorkCanadaLP;
