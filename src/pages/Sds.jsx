import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Sds.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const Sds = () => {
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("application-submission")}>Application Submission</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1  className={styles.heading} id="about-program"  >
          Student Direct Stream (SDS)
        </h1>

        <section className={`${styles.intro} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
            The Student Direct Stream (SDS) offers eligible international
            students from 14 countries an expedited pathway to obtain their
            Canadian study permit. A study permit grants you the authorization
            to stay in Canada for educational purposes. It contains essential
            information about you, including:
          </p>
          <ul>
            <li>The reason for your presence in Canada</li>
            <li>The level of your study program</li>
            <li>The duration of your study program</li>
            <li>
              Whether you can work on- or off-campus during your studies, along
              with any associated restrictions.
            </li>
          </ul>
          <p>
            Most study permit applications submitted through the SDS are
            processed within 20 calendar days, although some may take longer.
          </p>
        </section>

        <section className={`${styles.fasterProcessing} ${styles.section}`} id="faster-processing" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>
            How to Benefit from Faster Processing
          </h2>
          <p>To take advantage of quicker processing times, students must:</p>
          <ul>
            <li>
              Provide Biometrics: If required, submit your biometrics promptly.
            </li>
            <li>
              Meet Eligibility Requirements: Ensure you meet all eligibility
              criteria.
            </li>
          </ul>
          <p>
            <strong>Note:</strong> A study permit is not a visa and cannot be
            used for travel to or entry into Canada. Depending on your
            situation, you may also need to obtain a visitor visa or an
            electronic travel authorization (eTA).
          </p>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for the Student Direct Stream (SDS)
          </h2>
          <p>
            Legal residents of the following 14 countries may qualify for faster
            study permit processing through the SDS:
          </p>
          <table className={styles.countryTable}>
            <thead>
              <tr>
                <th>Eligible Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antigua and Barbuda</td>
              </tr>
              <tr>
                <td>Brazil</td>
              </tr>
              <tr>
                <td>China</td>
              </tr>
              <tr>
                <td>Colombia</td>
              </tr>
              <tr>
                <td>Costa Rica</td>
              </tr>
              <tr>
                <td>India</td>
              </tr>
              <tr>
                <td>Morocco</td>
              </tr>
              <tr>
                <td>Pakistan</td>
              </tr>
              <tr>
                <td>Peru</td>
              </tr>
              <tr>
                <td>St. Vincent and the Grenadines</td>
              </tr>
              <tr>
                <td>Senegal</td>
              </tr>
              <tr>
                <td>The Philippines</td>
              </tr>
              <tr>
                <td>Trinidad and Tobago</td>
              </tr>
              <tr>
                <td>Vietnam</td>
              </tr>
            </tbody>
          </table>
          <p>To be eligible, you must:</p>
          <ul>
            <li>
              Hold a provincial attestation letter (PAL) from the province or
              territory where you plan to study.
            </li>
            <li>
              Possess an acceptance letter from a post-secondary designated
              learning institution (DLI).
            </li>
            <li>Reside outside of Canada when applying.</li>
            <li>Provide proof of payment for first-year tuition.</li>
            <li>Hold a Guaranteed Investment Certificate (GIC) of C$20,635.</li>
            <li>
              Submit your most recent secondary or post-secondary transcripts.
            </li>
            <li>
              Demonstrate sufficient language proficiency through a recognized
              language test result (see Language Test Results below).
            </li>
          </ul>
          <p>
            Depending on your study location and personal circumstances, you may
            need to:
          </p>
          <ul>
            <li>
              Obtain a Certificat d’acceptation du Québec (CAQ) if planning to
              study in Quebec.
            </li>
            <li>Complete a medical exam (if applicable) before applying.</li>
            <li>Obtain a police certificate (if applicable).</li>
          </ul>

          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "/clb-ilets-calculator")
              }
            >
              Check CLB Score Requirements
            </button>
        </section>

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>
            How to Apply for Student Direct Stream (SDS)
          </h2>
          <p>
            If you’re considering applying for a study permit through the
            Student Direct Stream (SDS), here’s what you’ll need:
          </p>
          <ol>
            <li>
              <h3>Provincial Attestation Letters (PAL)</h3>
              <p>
                As of January 22, 2024, most students planning to study in
                Canada must provide a Provincial Attestation Letter (PAL)
                specific to their chosen study location. A PAL serves as an
                electronic certification, confirming a student’s eligibility to
                apply for a study permit within a province’s quota. Note:
                Master’s degree, doctoral degree, and K-12 students are exempt
                from the PAL requirement.
              </p>
            </li>
            <li>
              <h3>Proof of First-Year Tuition Payment</h3>
              <p>
                Students can demonstrate full payment of their first year’s
                tuition by including one of the following documents with their
                application:
              </p>
              <ul>
                <li>
                  A receipt from the Designated Learning Institution (DLI)
                </li>
                <li>An official letter from the DLI confirming payment</li>
                <li>A bank receipt indicating funds transferred to the DLI</li>
                <li>
                  Proof of funds in a repository account at the DLI for future
                  tuition payments
                </li>
              </ul>
            </li>
            <li>
              <h3>Proof of Funds Chart</h3>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>Single Applicant</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition Fees</td>
                    <td>$20,000.00</td>
                  </tr>
                  <tr>
                    <td>Living Expense</td>
                    <td>$20,636.00</td>
                  </tr>
                  <tr>
                    <td>Transportation</td>
                    <td>$2,000.00</td>
                  </tr>
                  <tr>
                    <td>Minimum Funds Required</td>
                    <td>$42,636.00</td>
                  </tr>
                </tbody>
              </table>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>Family of 2</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition Fees</td>
                    <td>$20,000.00</td>
                  </tr>
                  <tr>
                    <td>Living Expense</td>
                    <td>$25,691.00</td>
                  </tr>
                  <tr>
                    <td>Transportation</td>
                    <td>$4,000.00</td>
                  </tr>
                  <tr>
                    <td>Minimum Funds Required</td>
                    <td>$49,691.00</td>
                  </tr>
                </tbody>
              </table>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>Family of 4</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition Fees</td>
                    <td>$20,000.00</td>
                  </tr>
                  <tr>
                    <td>Living Expense</td>
                    <td>$38,346.00</td>
                  </tr>
                  <tr>
                    <td>Transportation</td>
                    <td>$8,000.00</td>
                  </tr>
                  <tr>
                    <td>Minimum Funds Required</td>
                    <td>$66,346.00</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <h3>Medical Exam</h3>
              <p>
                You may need to undergo a medical exam conducted by an
                Immigration, Refugees and Citizenship Canada (IRCC)-approved
                doctor if:
              </p>
              <ul>
                <li>
                  You have lived or traveled in certain countries or territories
                  for six months or longer in the year before coming to Canada.
                </li>
                <li>
                  You plan to study or work in fields related to health, primary
                  or secondary education, child care, or elder care.
                </li>
              </ul>
            </li>
            <li>
              <h3>Police Certificate</h3>
              <p>
                To determine whether you need to submit a police certificate,
                select your country of residence from the menu and refer to the
                specific visa office instructions.
              </p>
            </li>
            <li>
              <h3>Language Test Results</h3>
              <p>
                Include your language test results demonstrating proficiency in
                English or French. As of August 10, 2023, SDS applicants can
                submit English proficiency test results from four new providers:
              </p>
              <ul>
                <li>Canadian Academic English Language (CAEL)</li>
                <li>
                  Canadian English Language Proficiency Index Program (CELPIP
                  General)
                </li>
                <li>Pearson Test of English – Academic (PTE Academic)</li>
                <li>Test of English as a Foreign Language (TOEFL iBT)</li>
              </ul>
              <p>Minimum language test scores required:</p>
              <table className={styles.languageTable}>
                <thead>
                  <tr>
                    <th>English Language Test</th>
                    <th>Minimum Score Required for SDS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IELTS Academic (Grade 12)</td>
                    <td>Overall 6.0 - 5.5 acceptable in one of the modules</td>
                  </tr>
                  <tr>
                    <td>IELTS Academic (Graduation)</td>
                    <td>Overall 6.5 - no less than 6 in any of the modules</td>
                  </tr>
                  <tr>
                    <td>CELPIP General</td>
                    <td>7 in each module</td>
                  </tr>
                  <tr>
                    <td>PTE Academic</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>TOEFL iBT</td>
                    <td>83</td>
                  </tr>
                  <tr>
                    <td>CAEL</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>NIVEAUX DE compétence linguistique canadiens</td>
                    <td>score of at least 7 for French*</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </section>

        <section  className={`${styles.family} ${styles.section}`} id="family" ref={(el) => sectionsRef.current[0] = el}>
          <h2 className={styles.subheading}>
            Bringing Spouses, Common-Law Partners, and Dependent Children
          </h2>
          <p>
            If your spouse, common-law partner, or dependent children plan to
            accompany you to Canada, they may also qualify for faster processing
            of the following:
          </p>
          <ul>
            <li>Visitor Visa</li>
            <li>Work Permit</li>
            <li>Study Permit</li>
          </ul>
          <p>
            To benefit from expedited processing, their completed applications
            must be submitted alongside yours. When applying, select the option
            indicating that you have family members accompanying you to Canada.
          </p>
          <p>
            <strong>
              Is my spouse or common law partner eligible for an Open Work
              Permit?
            </strong>{" "}
            As of March 19, 2024, to be eligible to apply for a Spousal Open
            Work Permit as an international student, you must be enrolled in one
            of the following programs:
          </p>
          <ul>
            <li>
              <strong>Graduate Programs:</strong> Master’s and doctorate degrees
              granted by universities or polytechnic institutions.
            </li>
            <li>
              <strong>Professional Degree Programs:</strong>
              <ul>
                <li>Doctor of Dental Surgery (DDS, DMD)</li>
                <li>Bachelor of Law or Juris Doctor (LLB, JD, BCL)</li>
                <li>Doctor of Medicine (MD)</li>
                <li>Doctor of Optometry (OD)</li>
                <li>Pharmacy (PharmD, BS, BSc, BPharm)</li>
                <li>Doctor of Veterinary Medicine (DVM)</li>
                <li>Bachelor of Science in Nursing (BScN, BSN, BNSc)</li>
                <li>Bachelor of Education (BEd)</li>
                <li>Bachelor of Engineering (BEng, BE, BASc) (only)</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={`${styles.exclusions} ${styles.section}`} id="exclusion" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>
            Who Isn’t Eligible for the Student Direct Stream (SDS)?
          </h2>
          <ul>
            <li>
              If you reside anywhere other than the 14 countries listed above
              (even if you’re a citizen of those countries), you must apply
              through the regular study permit process.
            </li>
            <li>
              If you live in a different country (even if you’re a citizen of
              the 14 eligible countries) or don’t meet the eligibility criteria
              for faster processing, you may still be eligible for a study
              permit through the standard application process.
            </li>
          </ul>
        </section>

        <section className={`${styles.applicationSubmission} ${styles.section}`} id="application-submission" ref={(el) => sectionsRef.current[6] = el} >
          <h2 className={styles.subheading}>Submitting Your Application</h2>
          <p>
            Students applying through the Student Direct Stream can only apply
            online; there’s no paper application process. To complete your
            application, follow these steps:
          </p>
          <ol>
            <li>Review the instruction guide to fill out the forms.</li>
            <li>Create electronic copies of your documents.</li>
            <li>Pay the application fee using a credit or debit card.</li>
          </ol>
          <h3>Paying for Your Biometrics</h3>
          <p>
            Most students need to provide biometrics and should pay the fee
            along with their online application. If you require assistance with
            biometrics or passport submission, visit a visa application centre
            (VAC).
          </p>
          <h3>After You Apply</h3>
          <p>
            Book an appointment to provide your biometrics after submitting your
            study permit application through the Student Direct Stream. You’ll
            receive an instruction letter detailing where and how to provide
            your biometrics within 30 days. Bring this letter and your valid
            passport to your appointment. If you didn’t pay the biometrics fee
            during application, you’ll receive a reminder letter. The visa
            office won’t process your application until you’ve provided
            biometrics.
          </p>
          <h3>Processing Time</h3>
          <p>
            The visa office typically processes most applications within 20
            calendar days after receiving biometrics from eligible applicants.
            If your application doesn’t meet the eligibility criteria for the
            Student Direct Stream, it will be reviewed as a regular study permit
            application, without faster processing.
          </p>
          <h3>Application Refusal</h3>
          <p>
            If your application is refused, you’ll receive a letter explaining
            the decision. For any questions, reach out directly to the visa
            office.
          </p>
        </section>

        <section  className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[7] = el}>
          <h2 className={styles.subheading}>Reasons for Refusal</h2>
          <ul>
            <li>Insufficient Identity or travel history documents</li>
            <li>Not having an intention of coming back to your home country</li>
            <li>You failed to submit a Letter of Acceptance</li>
            <li>Lack of academic performance & low language test scores</li>
            <li>Financially unstable</li>
            <li>Unclear purpose of your visit</li>
            <li>Biometric Rejections</li>
            <li>Family Relations in Canada</li>
            <li>Hiring an Unauthorized Immigration Consultant</li>
            <li>
              Choice of study program that does not match with past
              qualifications and experience
            </li>
          </ul>
          <p>
            Still not sure? If you have faced a refusal for any of the reasons
            mentioned above, don't worry. With over 10 years of experience, we
            specialize in handling previously refused cases. We have
            successfully secured approval for students who have had multiple
            refusals, long gaps in education, and are of mature age. We achieve
            this by tailoring our approach to your specific case and addressing
            each concern raised by the officer in previous refusals. Using case
            law, we identify similar cases with positive outcomes and apply them
            as precedents in the cases we handle. This is why we have a high
            success rate, with over 90% approval in such cases. At Brightlight
            Immigration, we have a dedicated team of visa application
            specialists who can assist you from the start of the application
            process all the way to obtaining your visa. Start your process now.
          </p>

          <button
            className={styles.button}
            id="book-appointment"
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

export default Sds;
