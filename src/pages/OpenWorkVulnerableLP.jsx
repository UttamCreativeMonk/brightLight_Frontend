import React, { useState } from "react";
import styles from "../styles/OpenWorkVulnerableLP.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const OpenWorkVulnerableLP = () => {
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
              <p onClick={() => scrollToSection("evidence")}>Evidence</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("consultation")}>Consultation</p>
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
          <h1>Open Work Permit for Vulnerable Workers</h1>
          <p>
            Every employer in Canada is entitled to a safe and healthy work
            environment. Those being exploited at their workplaces can acquire
            an open work permit for vulnerable workers.
          </p>
        </header>

        <section className={styles.benefits} id="benifits">
          <h2>Benefits of Open Work Permit for Vulnerable Workers</h2>
          <ul>
            <li>
              <strong>Flexibility:</strong> Work with nearly any employer across
              Canada.
            </li>
            <li>
              <strong>Remedy for Abusive Environments:</strong> Provides a way
              to flee an abusive work environment and seek another job.
            </li>
            <li>
              <strong>No Application Fee:</strong> There is no fee for applying.
            </li>
            <li>
              <strong>Temporary Permit:</strong> Allows enough time to secure
              alternative employment and apply for a new work permit.
            </li>
          </ul>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2>Eligibility for Open Work Permit for Vulnerable Workers</h2>
          <ul>
            <li>
              You are inside Canada and hold a specific employer's work permit,
              such as a Labour Market Impact Assessment (LMIA)-based work permit
              or under the Seasonal Agricultural Worker Program.
            </li>
            <li>You are facing or at risk of job-related abuse in Canada.</li>
          </ul>
          <h3>How IRCC Defines Abuse</h3>
          <p>
            Any behavior that scares, controls, or isolates you could be
            considered abuse. Abuse can be:
          </p>
          <ul>
            <li>Physical abuse, including assault and forcible confinement</li>
            <li>Sexual abuse, including sexual contact without consent</li>
            <li>Psychological abuse, including threats and intimidation</li>
            <li>Financial abuse, including fraud and extortion</li>
            <li>
              Reprisals, such as disciplinary measures, demotions, dismissals,
              or threats of such actions
            </li>
          </ul>
        </section>

        <section className={styles.evidence} id="evidence">
          <h2>Types of Evidence</h2>
          <p>
            You should include as much evidence as possible with your
            application. Examples of evidence include:
          </p>
          <ul>
            <li>
              Letter, statement, or report from an abuse support organization,
              medical doctor, or health care professional
            </li>
            <li>Sworn statement (affidavit) from yourself</li>
            <li>
              Copy of an official report to an enforcement agency (e.g., police
              or Canada Border Services Agency)
            </li>
            <li>
              Official complaint to a provincial government enforcement agency
              (e.g., employment standards branch)
            </li>
            <li>Victim impact statement</li>
            <li>Email or text messages</li>
            <li>Pay stubs or bank statements</li>
            <li>Photos showing injuries or working conditions</li>
            <li>Witness testimony</li>
          </ul>
        </section>

        <section className={styles.applicationProcess} id="application-process">
          <h2>How to Apply</h2>
          <ol>
            <li>Collect extensive documents to provide evidence to IRCC.</li>
            <li>
              Draft a mandatory letter describing the abuse, along with a sworn
              statement by the applicant.
            </li>
            <li>
              Apply to IRCC and wait for processing, usually within a week.
            </li>
            <li>
              The IRCC officer may request additional documents or, in rare
              cases, interview the applicant.
            </li>
            <li>
              Once approved, IRCC sends a work permit by mail, which is valid
              for 1 year.
            </li>
          </ol>
        </section>

        <section className={styles.consultation} id="consultation">
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. While we don't provide jobs for LMIA,
            we can certainly assist you if you have a job offer. We have
            obtained approvals for clients who had multiple previous refusals.
            We achieve this with a tailored approach to your specific case,
            addressing each concern listed in previous refusals. We use case law
            and similar cases as precedents to achieve a high success rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process to obtaining your visa. Start your process now.
          </p>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Why Choose Us</h2>
          {/* Add content for "Why choose us" section */}
        </section>

        <section className={styles.testimonials}>
          <h2>Client Testimonials</h2>
          {/* Add video and written testimonials with options to hide/show */}
        </section>
      </div>

      <Footer1/>
    </>
  );
};

export default OpenWorkVulnerableLP;
