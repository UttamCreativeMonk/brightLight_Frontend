import React, { useState } from "react";
import styles from "../styles/SkilledWorkerStream.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const SkilledWorkerStream = () => {
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
          <h1>
            British Columbia Provincial Nominee Program (BC PNP) Skilled Worker
            Stream
          </h1>
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer_requirements")}>Employer Requirements</p>
              <p onClick={() => scrollToSection("bcnp_calculator")}>BCNP Calculator</p>
              <p onClick={() => scrollToSection("process")}>Process</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faq")}>Faq</p>
              <p onClick={() => scrollToSection("blog")}>Blog</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
     

        <section className={styles.section} id="benefits">
          <h2>Benefits of BC Skilled Worker Stream</h2>
          <ul>
            <li>
              Nomination Priority: Successful candidates nominated through the
              BC Skilled Worker stream receive an invitation to apply for
              Canadian permanent residence.
            </li>
            <li>
              No Express Entry Profile Required: Unlike other immigration
              streams, applicants for this stream do not need an Express Entry
              profile to be eligible.
            </li>
            <li>
              Accelerated Processing: While Express Entry is not mandatory,
              candidates with an active profile may choose to apply through the
              Express Entry system for faster processing.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="eligibility">
          <h2>Eligibility Requirements for the BC Skilled Worker Stream</h2>
          <ol>
            <li>
              <strong>Job Offer Acceptance:</strong>
              <ul>
                <li>
                  You must have accepted an indeterminate (with no defined end
                  date), full-time job offer from a B.C. employer.
                </li>
                <li>
                  The job offer must fall under NOC (National Occupational
                  Classification) Skill Levels 0, 1, 2, or 3.
                </li>
              </ul>
            </li>
            <li>
              <strong>Qualifications and Experience:</strong>
              <ul>
                <li>
                  You should be qualified to perform the duties of the job.
                </li>
                <li>
                  A minimum of two years of full-time (or full-time equivalent)
                  work experience at NOC Skill Levels 0, 1, 2, or 3 is required.
                </li>
              </ul>
            </li>
            <li>
              <strong>Language Proficiency:</strong>
              <ul>
                <li>
                  Meet the minimum language requirements in either English or
                  French.
                </li>
              </ul>
            </li>
            <li>
              <strong>Wage Offer:</strong>
              <ul>
                <li>
                  Your wage offer should align with B.C. wage rates for the
                  specific occupation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Financial Capability:</strong>
              <ul>
                <li>
                  Demonstrate that you can support yourself and your dependents
                  during your stay in British Columbia.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className={styles.section} >
          <h2>Express Entry Consideration</h2>
          <p>
            While an Express Entry profile is not mandatory, candidates who meet
            the eligibility criteria for the BC Skilled Worker stream and have
            an active Express Entry profile may choose to apply through Express
            Entry for accelerated processing.
          </p>
        </section>

        <section className={styles.section} id="employer_requirements">
          <h2>Employer Requirements for BC PNP Skilled Worker Stream</h2>
          <ol>
            <li>
              <strong>Establishment in B.C.:</strong>
              <ul>
                <li>
                  Your business must be established within the province of
                  British Columbia.
                </li>
              </ul>
            </li>
            <li>
              <strong>Domestic Labor Market Recruitment:</strong>
              <ul>
                <li>
                  Comply with domestic labor market recruitment requirements to
                  ensure fair opportunities for local workers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Job Offer:</strong>
              <ul>
                <li>
                  Offer full-time, permanent employment to eligible candidates.
                </li>
                <li>
                  Note that certain categories, such as BC PNP Tech occupations,
                  university professors, lecturers, and post-doctoral fellows
                  working for a public university in B.C., do not require a
                  permanent job offer.
                </li>
              </ul>
            </li>
            <li>
              <strong>Wage Alignment:</strong>
              <ul>
                <li>
                  The wage you offer should be in line with industry standards
                  for the specific occupation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Documentation and Forms:</strong>
              <ul>
                <li>Provide a signed job offer to candidates.</li>
                <li>
                  Complete and sign the employer declaration form as part of the
                  application process.
                </li>
                <li>Submit supporting documents related to your business.</li>
              </ul>
            </li>
            <li>
              <strong>Compliance with Laws and Regulations:</strong>
              <ul>
                <li>
                  Adhere to all relevant laws and regulations governing
                  employment and business practices.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className={styles.section} id="bcnp_calculator">
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate your BCPNP score
          </button>
        </section>

        <section className={styles.section} id="process">
          <h2>Application Process for BC Skilled Worker Stream</h2>
          <ol>
            <li>
              <strong>Expression of Interest (EOI) System:</strong>
              <ul>
                <li>
                  Candidates meeting minimum requirements register a profile on
                  BC’s online immigration portal.
                </li>
                <li>
                  Specify whether applying via Express Entry or Skills
                  Immigration system.
                </li>
              </ul>
            </li>
            <li>
              <strong>Profile Assessment and Ranking:</strong>
              <ul>
                <li>
                  Submitted profiles are scored and ranked using the BC Skills
                  Immigration Ranking System.
                </li>
                <li>
                  Highest-ranking candidates receive invitations to apply during
                  periodic intakes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Invitation to Apply (ITA):</strong>
              <ul>
                <li>
                  Invited candidates must submit a complete application within
                  30 days.
                </li>
                <li>Application fee: $1475 CAD per applicant.</li>
              </ul>
            </li>
            <li>
              <strong>Provincial Nomination and Work Permit:</strong>
              <ul>
                <li>
                  If approved, candidates receive a provincial nomination for
                  permanent residence.
                </li>
                <li>
                  Request a letter of support for a temporary work permit to
                  start working in Canada during processing.
                </li>
              </ul>
            </li>
            <li>
              <strong>Express Entry Applicants:</strong>
              <ul>
                <li>
                  If applying through Express Entry, receive a nomination
                  notification on IRCC account.
                </li>
                <li>
                  Accepting the nomination boosts Comprehensive Ranking System
                  (CRS) score by 600 points.
                </li>
                <li>
                  Virtually guarantees an Invitation to Apply (ITA) for
                  permanent residence.
                </li>
                <li>
                  Submit official application within the designated timeframe
                  (usually processed within six months).
                </li>
              </ul>
            </li>
            <li>
              <strong>Skills Immigration Applicants:</strong>
              <ul>
                <li>If applying through regular Skills Immigration system:</li>
                <li>Prepare a paper-based application.</li>
                <li>
                  Submit it by mail to the appropriate application centre.
                </li>
                <li>
                  Generally processed within 18 months for permanent residence.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Still not sure?</h2>
          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            BCPNP Skilled Worker Stream. Our approval rate for these programs is
            near to 100%. We achieve this with a tailored approach to your
            specific case. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your PR. Start your
            process now.
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/appointment")}
          >
            Book Appointment
          </button>
        </section>

        <section className={styles.section} id="why-choose-us">
          <h2>Why Choose Us</h2>
          <p>
            Our personalized approach, extensive experience, and high success
            rate make us the ideal choice for navigating the BC PNP Skilled
            Worker Stream. Learn more about why Brightlight Immigration stands
            out in helping you achieve your Canadian immigration goals.
          </p>
        </section>
      </div>

      <Footer1/>
    </>
  );
};

export default SkilledWorkerStream;