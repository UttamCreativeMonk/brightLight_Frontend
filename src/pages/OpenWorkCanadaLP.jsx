import React, { useState } from "react";
import styles from "../styles/OpenWorkCanadaLP.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const OpenWorkCanadaLP = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
     <Navbar1/>
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
              <p onClick={() => scrollToSection("application-process")}>Application Process</p>
              <p onClick={() => scrollToSection("consultation")}>Consultation</p>
              <p onClick={() => scrollToSection("application-process")}>Application Process</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("age-chart")}>Age Chart</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
        <h1>Open Work Permit for Dependent Child of Foreign Worker in Canada</h1>
        <p>IRCC now allows your dependent children of Temporary Foreign Workers (TFWs) to obtain work permits without the need for an LMIA or job offer, under LMIA exemption codes C46 and C48.</p>
      </header>

      <section className={styles.benefits} id="benifits">
        <h2>Benefits of Open Work Permit for Dependent Child</h2>
        <ul>
          <li><strong>Financial Independence:</strong> Enables your dependent child to work and earn income, supporting their expenses or saving for education.</li>
          <li><strong>Professional Development:</strong> Provides opportunities for skill enhancement and career growth.</li>
          <li><strong>Integration:</strong> Helps your dependent child integrate into Canadian society and understand Canadian workplace dynamics.</li>
          <li><strong>Contribution to Household Income:</strong> Additional income can reduce financial strain and improve the family's standard of living.</li>
          <li><strong>Networking Opportunities:</strong> Allows your child to build professional networks beneficial for their future career.</li>
          <li><strong>Pathway to Permanent Residency:</strong> Canadian work experience may make your child eligible for permanent residency in the future.</li>
        </ul>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2>Eligibility Criteria</h2>
        <p>There are three main groups of eligible family members:</p>
        <h3>1. Foreign Nationals in High-Skilled Occupations (TEER 0, 1, 2, or 3)</h3>
        <ul>
          <li><strong>Valid Work Authorization:</strong> Must have a valid work permit, an approved but not yet issued work permit, or authorization to work without a permit.</li>
          <li><strong>Work Permit Validity:</strong> Must be valid for at least six months beyond the application submission date.</li>
          <li><strong>High-Skilled Occupation:</strong> Must be employed or have a confirmed offer in a high-skilled occupation (TEER categories 0, 1, 2, or 3).</li>
          <li><strong>Canadian Residence:</strong> Must be living in Canada or planning to move to Canada.</li>
          <li><strong>Not Eligible:</strong> Certain conditions like refugee claims, unenforceable removal orders, etc.</li>
        </ul>

        <h3>2. Foreign Nationals in Low-Skilled Occupations (TEER 4 or 5)</h3>
        <ul>
          <li><strong>Valid Work Authorization:</strong> Same as above.</li>
          <li><strong>Work Permit Validity:</strong> Same as above.</li>
          <li><strong>Low-Skilled Occupation:</strong> Must be employed or have a confirmed offer in a low-skilled occupation (TEER categories 4 or 5).</li>
          <li><strong>Canadian Residence:</strong> Same as above.</li>
          <li><strong>Additional Requirements:</strong> If under the Agri-Food Pilot, must hold a specific LMIA-based work permit and have received an acknowledgment of receipt (AOR) letter from IRCC.</li>
          <li><strong>Not Eligible:</strong> Similar conditions as mentioned above.</li>
        </ul>

        <h3>3. Foreign Nationals Applying for Permanent Residence through Economic Immigration Program</h3>
        <ul>
          <li><strong>Valid Work Authorization:</strong> Must have a valid or approved work permit.</li>
          <li><strong>Work Permit Validity:</strong> Same as above.</li>
          <li><strong>Canadian Residence:</strong> Same as above.</li>
          <li><strong>Permanent Residency in Process:</strong> Must be in the process of applying for permanent residence through an economic immigration program.</li>
        </ul>

        <h3>Requirements for Your Dependent Child</h3>
        <ul>
          <li><strong>General Eligibility:</strong> Must meet general work permit criteria, including police and medical clearances.</li>
          <li><strong>Relationship:</strong> Must be in a genuine relationship with the principal applicant.</li>
          <li><strong>Temporary Residency:</strong> Must have valid temporary resident status or be eligible for restoration of status.</li>
          <li><strong>Minimum Age to Work:</strong> Must be of legal working age as defined by the province/territory. See the chart below.</li>
        </ul>
      </section>

      <section className={styles.ageChart} id="age-chart">
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
              <td>Children 12-14 may work with written consent from parents/guardians.</td>
            </tr>
            <tr>
              <td>Manitoba</td>
              <td>13 years</td>
              <td>Children 13-15 must complete a Young Worker Readiness Certificate Course.</td>
            </tr>
            <tr>
              <td>New Brunswick</td>
              <td>16 years</td>
              <td>Employers may apply for Authorization to employ children under 16.</td>
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
              <td>Youths less than 17 need authorization for specific times and industries.</td>
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

      <section className={styles.applicationProcess} id="application-process">
        <h2>How to Apply</h2>
        <ol>
          <li>Identify the principal applicant’s occupation in TEER category 0, 1, 2, 3, 4, or 5.</li>
          <li>Gather documents to prove eligibility criteria.</li>
          <li>Gather documents to prove a genuine relationship.</li>
          <li>If applying from outside Canada, you might need a medical exam and police clearance certificates.</li>
          <li>Submit a complete application to IRCC.</li>
          <li>After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days.</li>
          <li>Wait for IRCC to process your application.</li>
        </ol>
      </section>

      <section className={styles.refusalReasons} id="refusal-reasons">
        <h2>Common Reasons for Refusal</h2>
        <ul>
          <li>Lack of documentation verifying the NOC of the principal applicant.</li>
          <li>Inadequate evidence of the relationship between parent and child.</li>
          <li>Principal applicant is employed in a low-skill occupation and has not applied for PR.</li>
          <li>Principal applicant's work permit is expiring without an extension application.</li>
        </ul>
      </section>

      <section className={styles.consultation} id="consultation">
        <h2>Still Not Sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can assist if you have a job offer. We have successfully obtained approvals for clients with previous refusals through a tailored approach, addressing each concern listed in refusals, and using case law as precedents. Contact us at Brightlight Immigration for expert assistance from start to finish.</p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <p>[Content for why choose us]</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Clients Testimonials</h2>
        <div>
          <h3>Video Testimonials</h3>
          <p>[Video testimonials content with option to hide]</p>
        </div>
        <div>
          <h3>Written Testimonials</h3>
          <p>[Written testimonials content with option to hide]</p>
        </div>
      </section>
    </div>
    <Footer1/>
    </>
  );
};

export default OpenWorkCanadaLP;
