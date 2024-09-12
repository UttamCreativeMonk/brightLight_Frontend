import React, { useState } from "react";
import styles from "../styles/PrioritiesProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const PrioritiesProgram = () => {
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
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <header className={styles.header}>
            <h1>British Columbia Provincial Nominee Program (BC PNP)</h1>
            <h2>Targeted Draws for Program Priorities Occupations</h2>
          </header>

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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>
                Eligibility Criteria
              </p>
              <p onClick={() => scrollToSection("Priority_Occupation_List")}>
                Priority Occupation List
              </p>
              <p onClick={() => scrollToSection("BCPNP_Calculator")}>
                BCPNP Calculator
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("Testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("FAQs")}>FAQs</p>
              <p onClick={() => scrollToSection("Blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section} id="benefits">
          <h3>Benefits of Priority Occupations List</h3>
          <ul>
            <li>
              The draws held in these Priority Occupations are generally
              targeted occupations, and the cut-off is much lower than the
              non-priority occupation.
            </li>
            <li>
              Priority Program candidates receive additional rounds of
              invitations to apply on a weekly basis.
            </li>
            <li>
              PNP applications are processed at an expedited rate for Priority
              Program applicants.
            </li>
            <li>
              Some employers can access Priority Program “concierge services” to
              facilitate the hiring of foreign nationals.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="eligibility">
          <h3>Eligibility Criteria for BCPNP Targeted Draws</h3>
          <ol>
            <li>
              You must fulfill the eligibility requirements for one of the
              following BCPNP streams:
              <ul>
                <li>
                  <a href="/skilled-worker" className={styles.link}>
                    BCPNP Skilled Worker
                  </a>
                </li>
                <li>
                  <a href="/international-graduate" className={styles.link}>
                    BCPNP International Graduate
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Additionally, you must satisfy the eligibility criteria specific
              to your BCPNP Program Priorities Occupations.
            </li>
          </ol>
        </section>

        <section className={styles.section} id="Priority_Occupation_List">
          <h3>Priority Occupations List</h3>

          <div className={styles.occupationList}>
            <h4>Childcare Professionals</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Occupation</th>
                  <th>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Early Childhood Educators and Assistants</td>
                  <td>42202</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4>Construction</h4>
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
                    Landscape and Horticulture Technicians and Specialists
                  </td>
                  <td>22114</td>
                </tr>
                <tr>
                  <td>Sheet Metal Workers</td>
                  <td>72102</td>
                </tr>
                <tr>
                  <td>Boilermakers</td>
                  <td>72103</td>
                </tr>
                <tr>
                  <td>
                    Structural Metal and Platework Fabricators and Fitters
                  </td>
                  <td>72104</td>
                </tr>
                <tr>
                  <td>Ironworkers</td>
                  <td>72105</td>
                </tr>
                <tr>
                  <td>Welders and Related Machine Operators</td>
                  <td>72106</td>
                </tr>
                <tr>
                  <td>Electricians (Except Industrial and Power System)</td>
                  <td>72200</td>
                </tr>
                <tr>
                  <td>Industrial Electricians</td>
                  <td>72201</td>
                </tr>
                <tr>
                  <td>Plumbers</td>
                  <td>72300</td>
                </tr>
                <tr>
                  <td>
                    Steamfitters, Pipefitters and Sprinkler System Installers
                  </td>
                  <td>72301</td>
                </tr>
                <tr>
                  <td>Gas Fitters</td>
                  <td>72302</td>
                </tr>
                <tr>
                  <td>Carpenters</td>
                  <td>72310</td>
                </tr>
                <tr>
                  <td>Cabinetmakers</td>
                  <td>72311</td>
                </tr>
                <tr>
                  <td>Bricklayers</td>
                  <td>72320</td>
                </tr>
                <tr>
                  <td>Construction Millwrights and Industrial Mechanics</td>
                  <td>72400</td>
                </tr>
                <tr>
                  <td>Heavy-Duty Equipment Mechanics</td>
                  <td>72401</td>
                </tr>
                <tr>
                  <td>Heating, Refrigeration and Air Conditioning Mechanics</td>
                  <td>72402</td>
                </tr>
                <tr>
                  <td>Crane Operators</td>
                  <td>72500</td>
                </tr>
                <tr>
                  <td>Concrete Finishers</td>
                  <td>73100</td>
                </tr>
                <tr>
                  <td>Tilesetters</td>
                  <td>73101</td>
                </tr>
                <tr>
                  <td>
                    Plasterers, Drywall Installers and Finishers and Lathers
                  </td>
                  <td>73102</td>
                </tr>
                <tr>
                  <td>Roofers and Shinglers</td>
                  <td>73110</td>
                </tr>
                <tr>
                  <td>Glaziers</td>
                  <td>73111</td>
                </tr>
                <tr>
                  <td>Painters and Decorators (Except Interior Decorators)</td>
                  <td>73112</td>
                </tr>
                <tr>
                  <td>Floor Covering Installers</td>
                  <td>73113</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4>Healthcare Professionals</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Occupation</th>
                  <th>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Managers in Health Care</td>
                  <td>30010</td>
                </tr>
                <tr>
                  <td>Specialists in Clinical and Laboratory Medicine</td>
                  <td>31100</td>
                </tr>
                <tr>
                  <td>Specialists in Surgery</td>
                  <td>31101</td>
                </tr>
                <tr>
                  <td>General Practitioners and Family Physicians</td>
                  <td>31102</td>
                </tr>
                <tr>
                  <td>Dentists</td>
                  <td>31110</td>
                </tr>
                <tr>
                  <td>Audiologists and Speech-Language Pathologists</td>
                  <td>31112</td>
                </tr>
                <tr>
                  <td>Pharmacists</td>
                  <td>31120</td>
                </tr>
                <tr>
                  <td>Dietitians and Nutritionists</td>
                  <td>31121</td>
                </tr>
                <tr>
                  <td>Psychologists</td>
                  <td>31200</td>
                </tr>
                <tr>
                  <td>Chiropractors</td>
                  <td>31201</td>
                </tr>
                <tr>
                  <td>Physiotherapists</td>
                  <td>31202</td>
                </tr>
                <tr>
                  <td>Occupational Therapists</td>
                  <td>31203</td>
                </tr>
                <tr>
                  <td>
                    Kinesiologists and Other Professional Occupations in Therapy
                    and Assessment
                  </td>
                  <td>31204</td>
                </tr>
                <tr>
                  <td>
                    Other Professional Occupations in Health Diagnosing and
                    Treating
                  </td>
                  <td>31209</td>
                </tr>
                <tr>
                  <td>Nursing Coordinators and Supervisors</td>
                  <td>31300</td>
                </tr>
                <tr>
                  <td>Registered Nurses and Registered Psychiatric Nurses</td>
                  <td>31301</td>
                </tr>
                <tr>
                  <td>Nurse Practitioners</td>
                  <td>31302</td>
                </tr>
                <tr>
                  <td>
                    Physician Assistants, Midwives and Allied Health
                    Professionals
                  </td>
                  <td>31303</td>
                </tr>
                <tr>
                  <td>Licensed Practical Nurses</td>
                  <td>32101</td>
                </tr>
                <tr>
                  <td>Paramedical Occupations</td>
                  <td>32102</td>
                </tr>
                <tr>
                  <td>
                    Respiratory Therapists, Clinical Perfusionists and
                    Cardiopulmonary Technologists
                  </td>
                  <td>32103</td>
                </tr>
                <tr>
                  <td>Medical Radiation Technologists</td>
                  <td>32104</td>
                </tr>
                <tr>
                  <td>Medical Laboratory Technologists</td>
                  <td>32105</td>
                </tr>
                <tr>
                  <td>Medical Laboratory Technicians</td>
                  <td>32106</td>
                </tr>
                <tr>
                  <td>Opticians</td>
                  <td>32110</td>
                </tr>
                <tr>
                  <td>Dental Hygienists and Dental Therapists</td>
                  <td>32111</td>
                </tr>
                <tr>
                  <td>Dental Assistants</td>
                  <td>32112</td>
                </tr>
                <tr>
                  <td>Other Technical Occupations in Health Care</td>
                  <td>32119</td>
                </tr>
                <tr>
                  <td>Veterinarians</td>
                  <td>31103</td>
                </tr>
                <tr>
                  <td>Veterinary Technologists and Technicians</td>
                  <td>32120</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4>Technology Sector Opportunities</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Occupation</th>
                  <th>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Telecommunication Carriers Managers</td>
                  <td>10030</td>
                </tr>
                <tr>
                  <td>Information Systems Managers</td>
                  <td>10031</td>
                </tr>
                <tr>
                  <td>Computer and Information Systems Managers</td>
                  <td>10032</td>
                </tr>
                <tr>
                  <td>Software Engineers and Designers</td>
                  <td>21701</td>
                </tr>
                <tr>
                  <td>Computer Programmers and Interactive Media Developers</td>
                  <td>21702</td>
                </tr>
                <tr>
                  <td>Web Designers and Developers</td>
                  <td>21703</td>
                </tr>
                <tr>
                  <td>Database Analysts and Data Administrators</td>
                  <td>21704</td>
                </tr>
                <tr>
                  <td>Network Specialists</td>
                  <td>21705</td>
                </tr>
                <tr>
                  <td>Computer Network Technicians</td>
                  <td>22801</td>
                </tr>
                <tr>
                  <td>Network Operators</td>
                  <td>22802</td>
                </tr>
                <tr>
                  <td>Computer Support Workers</td>
                  <td>22803</td>
                </tr>
                <tr>
                  <td>Security Analysts</td>
                  <td>22804</td>
                </tr>
                <tr>
                  <td>Systems Analysts</td>
                  <td>22805</td>
                </tr>
                <tr>
                  <td>Other Information Technology Occupations</td>
                  <td>22809</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4>Veterinary Care</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Occupation</th>
                  <th>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Veterinarians</td>
                  <td>31103</td>
                </tr>
                <tr>
                  <td>Veterinary Technologists and Technicians</td>
                  <td>32120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.callToAction} id="BCPNP_Calculator">
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate your BCPNP score
          </button>
          <h3>Application Procedure for British Columbia Priorities Program</h3>
          <ol>
            <li>
              Register online on the BCPNP website and submit your BCPNP
              profile.
            </li>
            <li>Check your score.</li>
            <li>Improve your score if necessary.</li>
            <li>Receive an Invitation to Apply (ITA).</li>
            <li>Prepare and submit your BCPNP application within 30 days.</li>
          </ol>
          <p>
            Still not sure? Contact Brightlight Immigration today to assess your
            profile and embark on a transformative journey towards achieving
            your Canadian dream.
          </p>
          <button
            id="book-appointment"
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQ />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default PrioritiesProgram;
