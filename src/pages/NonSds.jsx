import React, { useState } from "react";
import styles from '../styles/NonSds.module.css';
import { Link } from 'react-router-dom';

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
      <h1 className={styles.heading}>Non-Student Direct Stream (Non-SDS) / General Student Visa</h1>
      
      <section className={styles.intro}>
        <p>
          While the Student Direct Stream (SDS) program offers a streamlined application process for select countries, the Non-SDS Canada Student Visa program extends this opportunity to students from all corners of the globe.
          The Non-SDS or General Student Visa is an option for international students who do not meet the eligibility requirements for the Student Direct Stream (SDS) program. The SDS program offers a streamlined visa application process with faster processing times for certain eligible students from India and Brazil. Non-SDS applicants, on the other hand, must undergo a more comprehensive application process, which may take longer to process.
          While Non-SDS or General Student Visa offers greater flexibility in terms of nationality and program selection, it also entails a lengthier application process and more stringent documentation requirements. Let's look into the pros and cons of this visa to help you make an informed decision.
        </p>
      </section>

      <section className={styles.prosCons}>
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

      <section className={styles.eligibility}>
        <h2 className={styles.subheading}>Eligibility for Non-SDS Program</h2>
        <ul>
          <li>You need to have a valid offer of admission from a designated learning institution (DLI) in Canada.</li>
          <li>Hold a provincial attestation letter (PAL) from the province or territory where you plan to study.</li>
          <li>Demonstrate adequate English language proficiency, typically with an IELTS score of 6.0 for undergraduate studies and 6.5 for postgraduate studies. See Chart Below for Other Accepted Language tests and its requirements.</li>
          <li>Show sufficient funds to support yourself during your studies in Canada. This may include personal savings, parental support, or external scholarships.</li>
          <li>Meet all other Canadian immigration requirements, such as criminal background checks and medical exams.</li>
        </ul>

        <div className={styles.languageChart}>
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
          <Link to="/clb-calculator" className={styles.button}>Check CLB Score Requirements</Link>
        </div>
      </section>

      <section className={styles.applicationProcess}>
        <h2 className={styles.subheading}>Application Process</h2>
        <p>The application process for a Non-SDS Canada or General Student Visa involves you submitting your complete application package to the Canadian government. This package should typically include:</p>
        <ul>
          <li>Your completed application forms.</li>
          <li>Your passport or travel document.</li>
          <li>Proof of identity.</li>
          <li>Provincial attestation letter (PAL) from the province or territory where you plan to study.</li>
          <li>Proof of funds. (See Chart Below)</li>
          <li>Your letter of acceptance from a DLI.</li>
          <li>English language proficiency test results.</li>
          <li>Medical exam results.</li>
          <li>Police certificates from your home country and any other country you have lived in for more than six months.</li>
        </ul>
      </section>

      <section className={styles.proofOfFunds}>
        <h2 className={styles.subheading}>Proof of Funds Chart</h2>
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

      <section className={styles.spousalPermit}>
        <h2 className={styles.subheading}>Spousal Open Work Permit</h2>
        <p>As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs:</p>
        <ul>
          <li><strong>Graduate Programs:</strong> Graduate programs encompass master’s and doctorate degrees granted by universities or polytechnic institutions.</li>
          <li><strong>Professional Degree Programs:</strong>
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

      <section className={styles.refusalReasons}>
        <h2 className={styles.subheading}>Reasons for Refusal</h2>
        <ul>
          <li>Your application is incomplete, and you did not share all the required documentation.</li>
          <li>You do not have enough money to support yourself during your stay in the country.</li>
          <li>Your health condition poses a risk to public health.</li>
          <li>You submitted fraudulent documents in your application.</li>
          <li>You may have violated the terms of your previous visa, such as overstaying or working illegally.</li>
        </ul>
      </section>

      <section className={styles.bookAppointment}>
        <h2 className={styles.subheading}>Book an Appointment</h2>
        <p>
          If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.
          We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents in the cases we handle. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <Link to="/book-appointment" className={styles.button}>Book Appointment</Link>
      </section>
    </div>
    </>
  );
};

export default NonSds;