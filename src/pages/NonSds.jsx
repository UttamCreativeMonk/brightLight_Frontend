import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NonSds.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const NonSds = () => {
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("language-chart")}>
                Language Chart
              </p>
              <p onClick={() => scrollToSection("spousal-permit")}>
                Spousal Permit{" "}
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment{" "}
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
        <h1
          c
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Non-Student Direct Stream (Non-SDS) / General Student Visa
        </h1>

        <section className={styles.intro}>
          <p>
            While the Student Direct Stream (SDS) program offers a streamlined
            application process for select countries, the Non-SDS Canada Student
            Visa program extends this opportunity to students from all corners
            of the globe.
          </p>
          <p>
            The Non-SDS or General Student Visa is an option for international
            students who do not meet the eligibility requirements for the
            Student Direct Stream (SDS) program. The SDS program offers a
            streamlined visa application process with faster processing times
            for certain eligible students from India and Brazil. Non-SDS
            applicants, on the other hand, must undergo a more comprehensive
            application process, which may take longer to process.
          </p>
          <p>
            While Non-SDS or General Student Visa offers greater flexibility in
            terms of nationality and program selection, it also entails a
            lengthier application process and more stringent documentation
            requirements. Let&#39;s look into the pros and cons of this visa to
            help you make an informed decision.
          </p>
        </section>

        <section
          className={`${styles.prosCons} ${styles.section}`}
          id="pros-cons"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>Pros and Cons</h2>
          <div className={styles.grid}>
            <div className={styles.pros}>
              <h3>Pros:</h3>
              <ul>
                <li>No specific nationality requirements</li>
                <li>Allows students from all countries to apply.</li>
                <li>More flexibility in choosing a DLI.</li>
                <li>No language score requirements for certain programs</li>
              </ul>
            </div>
            <div className={styles.cons}>
              <h3>Cons:</h3>
              <ul>
                <li>Longer application process</li>
                <li>Processing times can be unpredictable.</li>
                <li>Higher funds are required.</li>
                <li>More strict documentation requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>Eligibility for Non-SDS Program</h2>
          <ul>
            <li>
              You need to have a valid offer of admission from a designated
              learning institution (DLI) in Canada.
            </li>
            <li>
              Hold a <b>provincial attestation letter (PAL)</b> from the
              province or territory where you plan to study.
            </li>
            <li>
              Demonstrate adequate English language proficiency, typically with
              an IELTS score of 6.0 for undergraduate studies and 6.5 for
              postgraduate studies. See Chart Below for Other Accepted Language
              tests and its requirements.
            </li>
            <li>
              Show sufficient funds to support yourself during your studies in
              Canada. This may include personal savings, parental support, or
              external scholarships.
            </li>
            <li>
              Also, you should meet all other Canadian immigration requirements,
              such as criminal background checks and medical exams.
            </li>
          </ul>

          <div
            className={`${styles.languageChart} ${styles.section}`}
            id="language-chart"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h3>Minimum Language Test Scores Required:</h3>
            <table>
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
                  <td>Score of at least 7 for French*</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "50px" }}>
              Check what CLB score you need to achieve to meet CLB criteria.
            </h2>

            <button
              className={styles.button}
              onClick={() => (window.location.href = "/bcpnp-calculator")}
            >
              Start your process now
            </button>
          </div>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Application Process (how to apply)
          </h2>
          <p>
            The application process for a Non-SDS Canada or General Student Visa
            involves you submitting your complete application package to the
            Canadian government. This package should typically include:
          </p>
          <ul>
            <li>Your completed application forms.</li>
            <li>Your passport or travel document.</li>
            <li>Proof of identity.</li>
            <li>
              Hold a <b>Provincial attestation letter (PAL)</b> from the
              province or territory where you plan to study.
            </li>
            <li>Proof of funds. (See Chart Below)</li>
            <li>Your letter of acceptance from a DLI.</li>
            <li>English language proficiency test results.</li>
            <li>Medical exam results.</li>
            <li>
              Police certificates from your home country and any other country
              you have lived in for more than six months.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.proofOfFunds} ${styles.section}`}
          id="proof-of-funds"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            Proof of Funds Chart updated as per new guidelines Jan 2024
          </h2>
          <table>
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
          <table>
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
          <table>
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
        </section>

        <h3 style={{ marginBottom: "20px" }}>
          I am an international student. Is my spouse, common law partner,
          eligible for an Open Work Permit?
        </h3>
        <p>
          As of March 19, 2024, to be eligible to apply for a Spousal Open Work
          Permit as an international student, you must be enrolled in one of the
          following programs:
        </p>

        <section
          className={`${styles.spousalPermit} ${styles.section}`}
          id="spousal-permit"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <ul>
            <li style={{ listStyle: "none" }}>
              <strong>Graduate Programs:</strong>
              <ul>
                <li>
                  Graduate programs encompass master’s and doctorate degrees
                  granted by universities or polytechnic institutions.
                </li>
              </ul>
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Professional Degree Programs:</strong>
              <li
                style={{
                  listStyle: "disc",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Professional degree programs include the following:
              </li>
              <ul style={{ marginLeft: "40px" }}>
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

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
            Don’t forget to avoid these common Non-SDS or General Student Visa
            refusal reasons and increase your chances of approval.
          </h2>
          <ul>
            <li>
              Your application is incomplete, and you did not share all the
              required documentation.
            </li>
            <li>
              You do not have enough money to support yourself during your stay
              in the country.
            </li>
            <li>Your health condition poses a risk to public health.</li>
            <li>You submitted fraudulent documents in your application.</li>
            <li>
              You may have violated the terms of your previous visa, such as
              overstaying or working illegally.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.bookAppointment} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>In Case,</h2>
          <p>
            If you have faced a refusal for any of the reasons mentioned above,
            don&#39;t worry. With over 10 years of experience, we specialize in
            handling previously refused cases. We have successfully secured
            approval for students who have had multiple refusals, long gaps in
            education, and are of mature age.
          </p>
          <p>
            We achieve this by tailoring our approach to your specific case and
            addressing each concern raised by the officer in previous refusals.
            Using case law, we identify similar cases with positive outcomes and
            apply them as precedents in the cases we handle. This is why we have
            a high success rate, with over 90% approval in such cases. At
            Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa. Start your
            process now.
          </p>

          <button
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

export default NonSds;
