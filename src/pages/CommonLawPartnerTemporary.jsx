import React, { useState } from "react";
import styles from "../styles/CommonLawPartnerTemporary.module.css";
import { Link } from "react-router-dom";

const CommonLawPartnerTemporary = () => {
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
      {/* <Navbar1 /> */}
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
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
      <h1 className={styles.heading}>Open Work Permit for Spouse or Common-law Partner of a Temporary Foreign Worker</h1>

      <section className={styles.introduction}>
        <p>The spouses or common-law partners of authorized workers coming to Canada or working in Canada may apply for an open work permit without having an offer of employment.</p>
        <p>They are usually classified into the following two categories:</p>
        <ul>
          <li>Family members of foreign nationals authorized to work in high-skilled occupations (TEER 0, 1, 2, or 3) – [C41 and C46]</li>
          <li>Family members of foreign nationals authorized to work in low-skilled occupations (TEER 4 or 5) – [C47 and C48]</li>
        </ul>
        <p>Both the applicant and their spouse must fulfill their respective sets of requirements to reunite and work in Canada.</p>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.subheading}>Benefits of Open Work Permit for Spouse or Common-law Partner of a Temporary Foreign Worker</h2>
        <ul>
          <li>It enables your spouse or common-law partner to accompany you to Canada and reside with you.</li>
          <li>It permits your spouse or common-law partner to work, alleviating financial strain on you.</li>
          <li>It provides your spouse or common-law partner with the opportunity to gain Canadian work experience.</li>
          <li>Through the Canadian work experience gained, they may become eligible for permanent residency programs.</li>
          <li>They have the flexibility to work for any employer and in any position.</li>
          <li>They can also establish their own business if desired.</li>
          <li>Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.</li>
          <li>Your dependent child (yours or your spouse's), or the dependent child of a dependent child (your grandchild or your spouse's grandchild) can also qualify for an open work permit.</li>
        </ul>
      </section>

      <section className={styles.eligibility}>
        <h2 className={styles.subheading}>Eligibility Criteria for Applying for Open Work Permit of Spouse or Common-law Partner of a Temporary Foreign Worker</h2>
        <p>The requirements for the principal applicant or temporary foreign worker differ for both categories. However, the requirements are the same for the accompanying spouse or common-law partner.</p>
        
        <h3>1. For High-Skilled Occupations (TEER 0, 1, 2, or 3)</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valid Work Authorization</td>
              <td>Must possess one of the following:
                <ul>
                  <li>A valid work permit, subject to certain exceptions.</li>
                  <li>An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).</li>
                  <li>Authorization to work without a permit.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Work Permit Validity</td>
              <td>Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.</td>
            </tr>
            <tr>
              <td>High-Skilled Occupation</td>
              <td>Must be employed or have a confirmed offer of employment in a high-skilled occupation (TEER 0, 1, 2, or 3).</td>
            </tr>
            <tr>
              <td>Canadian Residence</td>
              <td>Must be living in Canada or have plans to move to Canada to work.</td>
            </tr>
            <tr>
              <td>Not Eligible Currently</td>
              <td>
                <ul>
                  <li>Made a refugee claim referred to the Immigration and Refugee Board.</li>
                  <li>Subject to an unenforceable removal order.</li>
                  <li>International student working in a co-op program without a work permit.</li>
                  <li>International student working off-campus without a work permit.</li>
                  <li>Applied for a post-graduation work permit (PGWP) but have not yet received a positive decision.</li>
                  <li>Holds a spousal open work permit.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>2. For Low-Skilled Occupations (TEER 4 or 5)</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valid Work Authorization</td>
              <td>Must possess one of the following:
                <ul>
                  <li>A valid work permit, subject to certain exceptions.</li>
                  <li>An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).</li>
                  <li>Authorization to work without a permit.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Work Permit Validity</td>
              <td>Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.</td>
            </tr>
            <tr>
              <td>Low-Skilled Occupation</td>
              <td>Must be employed or have a confirmed offer of employment in a low-skilled occupation (TEER 4 or 5).</td>
            </tr>
            <tr>
              <td>Wages</td>
              <td>If employed in a low-skilled occupation, your wage rate must be at or above the median hourly wages set by the province or territory of your location of work.</td>
            </tr>
            <tr>
              <td>Canadian Residence</td>
              <td>Must be living in Canada or have plans to move to Canada to work.</td>
            </tr>
            <tr>
              <td>If Work Permit Holder is Under the Agri-Food Pilot</td>
              <td>Must hold a labour market impact assessment (LMIA)-based work permit in the agriculture or low-wage stream of the Agri-Food Pilot and must have received an acknowledgment of receipt (AOR) letter from IRCC confirming that your application for permanent residence is complete.</td>
            </tr>
            <tr>
              <td>Not Eligible Currently</td>
              <td>
                <ul>
                  <li>Holds a work permit under the low-wage stream of the Temporary Foreign Worker Program.</li>
                  <li>Holds a work permit under the Seasonal Agricultural Worker Program.</li>
                  <li>Holds a work permit under the agricultural stream of the Temporary Foreign Worker Program.</li>
                  <li>Made a refugee claim referred to the Immigration and Refugee Board.</li>
                  <li>Subject to an unenforceable removal order.</li>
                  <li>International student in a co-op program.</li>
                  <li>International student working off-campus without a work permit.</li>
                  <li>Applying for a Post-Graduation Work Permit (PGWP) and haven't received a positive decision on your application yet.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.applicationProcess}>
        <h2 className={styles.subheading}>How to Apply</h2>
        <ol>
          <li>Identify the principal applicant’s occupation in TEER category 0, 1, 2, 3, 4, or 5 of the National Occupation Classification system.</li>
          <li>Gather documents to prove the above-mentioned eligibility criteria.</li>
          <li>Gather documents to prove that your relationship is genuine.</li>
          <li>You might be required to get a medical exam and police clearance certificates if applying from outside Canada.</li>
          <li>Submit a complete application to IRCC.</li>
          <li>After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.</li>
          <li>Wait for IRCC to process your application.</li>
        </ol>
      </section>

      <section className={styles.refusalReasons}>
        <h2 className={styles.subheading}>Common Reasons for Refusal</h2>
        <ul>
          <li>Lack of documentation verifying the National Occupational Classification (NOC) of the principal applicant.</li>
          <li>Inadequate evidence demonstrating the genuineness of the relationship.</li>
          <li>The principal applicant is employed in a low-skill occupation under the low-wage stream of LMIA.</li>
          <li>The principal applicant's work permit is nearing expiration, and there has been no application filed to extend their stay.</li>
        </ul>
      </section>

      <section className={styles.assistance}>
        <h2 className={styles.subheading}>Need Assistance?</h2>
        <p>If you need help with your application or have questions, feel free to <Link to="/contact">contact us</Link>. Our team at Brightlight Immigration is here to assist you every step of the way.</p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2 className={styles.subheading}>Why Choose Us?</h2>
        <p>At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.</p>
        {/* Include testimonials and video testimonials here */}
        <div className={styles.testimonials}>
          <h3>Client Testimonials</h3>
          {/* Conditionally render testimonials based on backend settings */}
          <div className={styles.videoTestimonials}>
            {/* Video testimonials */}
          </div>
          <div className={styles.writtenTestimonials}>
            {/* Written testimonials */}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CommonLawPartnerTemporary;