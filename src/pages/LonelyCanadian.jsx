import React, { useState } from "react";
import styles from "../styles/LonelyCanadian.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const LonelyCanadian = () => {
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
      <header className={styles.header}>
        <h1>Lonely Canadian Sponsoring Other Relatives: A Path to Family Reunification</h1>
        <p>Canada’s family sponsorship program prioritizes family reunification. If you wish to sponsor other family members who may be lonely or orphaned, certain conditions apply. Here’s what you need to know:</p>
      </header>

      <section className={styles.eligibility}>
        <h2>Eligibility Criteria to Sponsor Other Relatives as a Lonely Canadian</h2>
        <ul>
          <li>Minimum Necessary Income: The sponsor should have sufficient income.</li>
          <li>Age Requirement: Be at least 18 years old.</li>
          <li>Canadian Citizenship or Permanent Residency: The sponsor must be a Canadian citizen or permanent resident residing in Canada.</li>
          <li>Debt and Bankruptcy: Be free from debt or bankruptcy proceedings.</li>
          <li>Application Readiness: Prepared to submit the sponsorship application with all required forms and documents.</li>
          <li>Undertaking Obligations: Willing to accept the responsibilities of undertaking.</li>
          <li>No Removal Orders or Criminal Convictions: Free from any restrictions of removal orders and criminal convictions.</li>
        </ul>
      </section>

      <section className={styles.duration}>
        <h2>Duration of Undertaking</h2>
        <ul>
          <li>The undertaking to sponsor other relatives to Canada lasts for ten years.</li>
          <li>This period begins when your relative becomes a permanent resident of Canada.</li>
          <li>During this time, the relative will not have access to social assistance.</li>
          <li>If the sponsor receives any social assistance, they must repay the amount to the government.</li>
          <li>The undertaking also extends to the spouse or child of the sponsored relative.</li>
          <li>Social assistance for disabled individuals does not impact the sponsorship application.</li>
        </ul>
      </section>

      <section className={styles.bankruptcyCriminalSentences}>
        <h2>Bankruptcy and Criminal Sentences</h2>
        <ul>
          <li>Sponsoring other relatives is not allowed if the sponsor is filing for bankruptcy.</li>
          <li>Eligibility to sponsor is possible only after the discharge of bankruptcy.</li>
          <li>Similarly, a criminal conviction can disqualify the sponsor from sponsoring another relative.</li>
          <li>The severity of the crime determines most restrictions.</li>
          <li>However, eligibility may be regained if the sentence is over five years old and there is no past criminal record outside Canada during the same period.</li>
        </ul>
      </section>

      <section className={styles.sponsoringSiblings}>
        <h2>Sponsoring Siblings</h2>
        <p>Alternative options exist for sponsoring siblings:</p>
        <ul>
          <li>Siblings Below 18: You can sponsor a brother or sister below 18 years of age who has lost both parents.</li>
          <li>Lone Sponsor: Even if you are a lonely sponsor, you can sponsor a brother or sister who is over 18 years of age.</li>
        </ul>
        <p>A lonely sponsor does not have:</p>
        <ul>
          <li>Mother</li>
          <li>Father</li>
          <li>Child</li>
          <li>Spouse</li>
          <li>Common-law partner</li>
          <li>Conjugal partner</li>
          <li>Grandparents</li>
        </ul>
      </section>

      <section className={styles.alternatives}>
        <h2>Exploring Other Possibilities</h2>
        <p>Consider the following alternatives if you cannot sponsor a sibling over 18 years of age:</p>
        <ul>
          <li>Study in Canada: Apply for immigration through a study permit. <a href="/study-visa" className={styles.link}>Learn more about Study Visas</a></li>
          <li>Business Partnership: Successful business owners can secure a work permit if eligible.</li>
          <li>Express Entry: Permanent residents can leverage the Comprehensive Ranking System to receive an Invitation to Apply. <a href="/express-entry" className={styles.link}>Learn more about Express Entry</a></li>
        </ul>
      </section>

      <section className={styles.applicationProcess}>
        <h2>How to Apply for Sponsoring a Relative as a Lonely Canadian</h2>
        <h3>Step 1: Obtain the Application Package</h3>
        <ul>
          <li>Application Package Contents:
            <ul>
              <li>Instruction Guide: Read this guide before filling out the forms.</li>
              <li>Forms: Complete the necessary forms.</li>
              <li>Document Checklist: Ensure you include all required documents.</li>
              <li>Eligibility Check: Confirm your eligibility to sponsor a relative.</li>
            </ul>
          </li>
          <li>Application Submission:
            <ul>
              <li>Provide proof of income.</li>
              <li>Relatives must express their intent to support themselves.</li>
              <li>Agree in writing to support your relatives for a specified period (3 to 20 years).</li>
              <li>Include all dependent children of your relative (if any).</li>
              <li>Submit all documents listed in the document checklist.</li>
              <li>Missing information or documents can cause delays.</li>
            </ul>
          </li>
          <li>Truthfulness: All information in your application must be accurate. Be truthful about:
            <ul>
              <li>Your family members (include all in your application).</li>
              <li>Your marital status.</li>
              <li>Any changes in your circumstances.</li>
              <li>Sponsored individuals must also declare their close family members, who will undergo security, criminality, and medical checks. Failure to do so may affect future sponsorship.</li>
            </ul>
          </li>
        </ul>
        <h3>Step 2: Pay Application Fees</h3>
        <ul>
          <li>Biometrics Fee:
            <ul>
              <li>In most cases, pay the biometrics fee when submitting your application.</li>
              <li>This fee covers fingerprint collection and a digital photo.</li>
            </ul>
          </li>
          <li>Third-Party Fees:
            <ul>
              <li>Depending on your situation, you may need to pay third parties for:
                <ul>
                  <li>Medical exams.</li>
                  <li>Police certificates.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3>Step 3: Submit Your Application</h3>
        <p>Mail all application documents to the address provided in the instruction guide of your package.</p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us?</h2>
        <p>[Insert the "Why Choose Us" section content here]</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Clients Testimonials</h2>
        <div className={styles.videoTestimonials}>
          <h3>Video Testimonials</h3>
          {/* Insert video testimonials here */}
        </div>
        <div className={styles.writtenTestimonials}>
          <h3>Written Testimonials</h3>
          {/* Insert written testimonials here */}
        </div>
        <button className={styles.toggleButton}>Toggle Testimonials Visibility</button>
      </section>

      <section className={styles.faq}>
        <h2>FAQ Made Simple</h2>
        <dl>
          <dt>What is the lonely Canada pathway?</dt>
          <dd>Lonely Canadian allows citizens or permanent residents to sponsor extended family members for immigration. If the sponsored individual is married or has children, they can bring their immediate family along to Canada.</dd>

          <dt>Who is considered a Lonely Canadian Sponsor?</dt>
          <dd>A lonely sponsor does not have:
            <ul>
              <li>Mother</li>
              <li>Father</li>
              <li>Child</li>
              <li>Spouse</li>
              <li>Common-law partner</li>
              <li>Conjugal partner</li>
              <li>Grandparents</li>
            </ul>
          </dd>

          <dt>I filed for Bankruptcy. Can I still sponsor as a Lonely Canadian?</dt>
          <dd>If the sponsor is in the process of filing for bankruptcy or has already filed for bankruptcy, they are not permitted to sponsor other relatives. However, eligibility to sponsor becomes possible only after the discharge of bankruptcy.</dd>

          <dt>How long am I responsible for the person I sponsor as a Lonely Canadian?</dt>
          <dd>The commitment to sponsor other relatives to Canada extends over a period of ten years. This duration commences when your relative attains permanent residency in Canada. Throughout this time, the sponsored relative will not have access to social assistance. If the sponsor receives any social assistance during this period, they are obligated to repay the amount to the government. Additionally, the undertaking also encompasses the spouse or child of the sponsored relative. Importantly, social assistance for disabled individuals does not affect the sponsorship application.</dd>
        </dl>
      </section>

      <section className={styles.blogs}>
        <h2>Blogs</h2>
        {/* Insert links or summaries of relevant blog posts here */}
      </section>
    </div>

    </>
  );
};

export default LonelyCanadian;