import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PrioritiesProgram.module.css";
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
        <section
          className={`${styles.header} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
          <h3 style={{textAlign: "center" , color: "#e8c47c",}}>
            British Columbia Provincial Nominee Program Targeted Draws for
            Program Priorities Occupations
          </h3>
          <p style={{ marginTop: "20px", marginBottom: "50px", textAlign: "center" }}>
            British Columbia has a significant demand in essential sectors of
            the care economy, including healthcare, childcare, and veterinary
            care, as well as in the construction and technology sectors
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
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

        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
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

        <section
          className={`${styles.section} ${styles.section}`}
          id="Priority_Occupation_List"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h3>Priority Occupations List</h3>

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing1"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h4>Childcare Professionals</h4>
            <p className={styles.sectionPara}>
          Individuals with a job offer in the occupation of 42202 Early Childhood Educators and Assistants may be eligible for targeted invitations to apply.
          </p>
          <p className={styles.sectionPara}>
          For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:
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
                  <td>Early Childhood Educators and Assistants</td>
                  <td>42202</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h4>Construction</h4>
            <p style={{ marginBottom: "20px" }}>
              Individuals working in the construction sector can take advantage
              of targeted invitations to apply by meeting the following
              requirements:
            </p>
            <ol style={{ marginBottom: "20px", lineHeight: "1.5" }}>
              <li>
                The job offer must be for an indeterminate, full-time
                position within one of the priority construction occupations.
              </li>
              <li>
                You must hold a valid trade certificate issued by, or have an
                apprenticeship registered with SkilledTradesBC.
              </li>
              <li>
                Your trade certificate must align with the specific job you’ve
                been offered.
              </li>
              <li>
                Remember that meeting these eligibility criteria does not
                guarantee an invitation to apply; invitations are based on
                threshold scores during draws. If your score meets or exceeds
                the threshold, you’ll receive an invitation to apply from the
                BCPNP.
              </li>
            </ol>
            <p style={{ marginBottom: "40px" }}>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
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
            <ul>
              <li>
                Individuals who are direct employees of a provincial health
                authority or are physicians, nurse practitioners, or
                midwives with the endorsement of a provincial health authority
                can directly submit an application through the Health Authority
                stream.
              </li>
              <li>
                For those not employed by a health authority (and therefore need
                to register through an alternative stream), targeted invitations
                to apply may be available if they have a job offer in one of the
                following occupations.
              </li>
              <li>
                Remember that meeting these eligibility criteria does not
                guarantee an invitation to apply; invitations are based on
                threshold scores during draws. If your score meets or exceeds
                the threshold, you’ll receive an invitation to apply from the
                BCPNP.
              </li>
            </ul>
            <p>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
            </p>
            <table
              className={`${styles.table} ${styles.section}`}
              id="testing3"
              ref={(el) => (sectionsRef.current[5] = el)}
            >
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
            <p style={{ marginBottom: "20px" }}>
              The British Columbia Provincial Nominee Program (BC PNP) provides
              a pathway to permanent residence for skilled workers in specific,
              high-demand technology occupations. To cater to the unique
              requirements of B.C.&#39;s thriving technology sector, priority
              technology occupations do not necessitate a permanent job offer.
            </p>
            <p>
              For individuals working in the technology sector, the following
              criteria must be met to qualify for targeted invitations to apply:
            </p>
            <ol>
              <li>
                The job offer should fall within one of the priority technology
                occupations.
              </li>
              <li>
                The job offer must have a minimum duration of one year (365
                days).
              </li>
              <li>
                At the time of application, there should be at least 120
                calendar days remaining on the job offer.
              </li>
              <li>
                Remember that meeting these eligibility criteria does not
                guarantee an invitation to apply; invitations are based on
                threshold scores during draws. If your score meets or exceeds
                the threshold, you’ll receive an invitation to apply from the
                BCPNP.
              </li>
            </ol>
            <p>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
            </p>
            <table
              className={`${styles.table} ${styles.section}`}
              id="testing4"
              ref={(el) => (sectionsRef.current[6] = el)}
            >
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

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing5"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <h4>Veterinary Care</h4>
            <p style={{ marginBottom: "20px" }}>
              Veterinary Care Workers with job offers in one of the following
              occupations may benefit from targeted invitations to apply.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Remember that meeting these eligibility criteria does not
              guarantee an invitation to apply; invitations are based on
              threshold scores during draws. If your score meets or exceeds the
              threshold, you’ll receive an invitation to apply from the BCPNP.
            </p>
            <p style={{ marginBottom: "20px" }}>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
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
          <button
              className={styles.button}
              onClick={() => (window.location.href = "/bcpnp-calculator")}
            >
              Calculate your BCPNP score
            </button>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="BCPNP_Calculator"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h3 style={{marginBottom: "20px"}}>
            Application Procedure for British Columbia Priorities Program:
          </h3>
          <ol>
            <li>
              Register online on the BCPNP website and submit your BCPNP
              profile:
              <ul>
                <li>
                  Begin by choosing the appropriate program, which typically
                  aligns with BC&#39;s Skills Immigration programs, such as the
                  BC Skilled Worker or BC International Graduate programs.
                </li>
                <li>
                  Ensure eligibility by verifying that you meet the National
                  Occupation Classification (NOC) code requirements for one of
                  the in-demand occupations, categorized into streams like
                  Childcare, Healthcare, Construction, Technology, and
                  Veterinary-care.
                </li>
                <li>
                  Once confirmed eligible, initiate the application process by
                  registering a profile with BCPNP Online.
                </li>
              </ul>
            </li>
            <li>
              Check your score:
              <ul>
                <li>
                  Upon registration, applicants should assess their score based
                  on the provided criteria.
                </li>
              </ul>
            </li>
            <li>
              Improve your score if necessary:
              <ul>
                <li>
                  If your score falls below the cutoff set by the last draw
                  conducted by BCPNP for your occupation, take steps to enhance
                  your score to increase your chances of receiving an invitation
                  to apply (ITA).
                </li>
              </ul>
            </li>
            <li>
              Receive an Invitation to Apply (ITA):
              <ul>
                <li>
                  If you meet or exceed the cutoff score from the last draw
                  conducted by BCPNP for your occupation, you will receive an
                  ITA to proceed with your application.
                </li>
              </ul>
            </li>
            <li>
              Prepare and submit your BCPNP application within 30 days:
              <ul>
                <li>
                  Upon receiving an ITA, applicants must diligently prepare and
                  submit their BCPNP application within the specified timeframe
                  of 30 days.
                </li>
              </ul>
            </li>
          </ol>



          <h3 style={{ marginTop: "50px" }}>Still Not Sure ?</h3>
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
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
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

export default PrioritiesProgram;
