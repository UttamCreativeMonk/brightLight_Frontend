import React, { useState } from "react";
import styles from "../styles/BridgingOpenWorkPermitLP.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const BridgingOpenWorkPermitLP = () => {
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
        <h1>Bridging Open Work Permit</h1>
      </header>
      <section className={styles.intro}>
        <p>You can continue work in Canada while waiting for your permanent residency application (APR) to be approved. For this, you will have to apply for a bridging open work permit depending on the type of permanent residency application you have submitted. This type of work permit will “bridge” the gap between the expiry of your current work permit and the final decision on your permanent residency application.</p>
      </section>
      <section className={styles.benefits}>
        <h2>Benefits of Bridging Open Work Permit</h2>
        <ul>
          <li>No interruption in your employment while you wait for the results of your permanent residence application.</li>
          <li>The condition that you can apply for bridging open work permit only if your work permit is set to expire within four months has been removed.</li>
          <li>Your work permit will remain valid even if your permanent residency application has been rejected or refused.</li>
          <li>You can apply even if you are on maintained status or eligible for restoration.</li>
        </ul>
      </section>
      <section className={styles.eligibility}>
        <h2>Eligibility criteria for Bridging Open Work Permit:</h2>
        <p>To be eligible for a bridging open work permit (BOWP), you must:</p>
        <ul>
          <li>Currently be in Canada after being authorized to enter as a worker.</li>
          <li>Meet one of the following criteria at the time of submission:
            <ul>
              <li>Have valid temporary resident status and authorization to work as the holder of a valid work permit.</li>
              <li>Have maintained status and authorization to work as a result of submitting an application to renew your work permit.</li>
              <li>Be eligible to restore your temporary resident status.</li>
            </ul>
          </li>
          <li>Have submitted an APR as the principal applicant under one of the following classes or pilots:
            <ul>
              <li>Federal skilled worker class (FSWC)</li>
              <li>Canadian experience class (CEC)</li>
              <li>Federal skilled trades class (FSTC)</li>
              <li>Caring for children class or caring for people with high medical needs class (before June 18, 2019)</li>
              <li>Provincial Nominee Program (PNP) for applicants for whom there are no employer restrictions on nominations</li>
              <li>Agri-Food Pilot (AFP)</li>
              <li>Quebec skilled worker class (QSWC) with valid Certificat de sélection du Québec (CSQ) at the time of PR application submission.</li>
              <li>Home Childcare Provider Pilot (HCCPP) or Home Support Worker Pilot (HSWP), who have received a positive eligibility decision (approval in principle) on their application for permanent residence after completing their qualifying work experience.</li>
            </ul>
          </li>
          <li>Have completed one of the following APR stages depending on their class:
            <ul>
              <li>Electronic application for permanent residence (e-APR) submitted under Express Entry has passed the Completeness Check. This applies to the following classes:
                <ul>
                  <li>Federal skilled worker class (FSWC)</li>
                  <li>Canadian experience class (CEC)</li>
                  <li>Federal skilled trades class (FSTC)</li>
                  <li>Provincial Nominee Program (PNP), where the applicant is accepted through the provincial or territorial Express Entry stream.</li>
                </ul>
              </li>
              <li>Application for permanent residence APR under the Quebec skilled worker class (QSWC) has passed the Completeness Check.</li>
              <li>Receipt of a positive eligibility assessment on their non-Express Entry application for permanent residence submitted by mail or online under one of the following classes or pilots:
                <ul>
                  <li>Caring for children</li>
                  <li>Caring for people with high medical needs</li>
                  <li>Agri-Food Pilot (AFP)</li>
                  <li>PNP (where the applicant does not qualify for Express Entry)</li>
                  <li>Home Childcare Provider Pilot (HCCPP) or Home Support Worker Pilot (HSWP) after completing their qualifying work experience.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.application}>
        <h2>How to apply for Bridging Open Work Permit:</h2>
        <ol>
          <li>After your permanent residency application has been completed and submitted, gather documents to prove above-mentioned eligibility criteria for bridging open work permit, suitable for your class of permanent residency application.</li>
          <li>Pay IRCC fees for open work permit holders. You will be required to pay separate restoration fee if applying in the restoration period.</li>
          <li>Submit complete application to IRCC.</li>
          <li>Wait for IRCC to process your application.</li>
        </ol>
      </section>
      <section className={styles.advice}>
        <h2>Still not sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.</p>
      </section>
      <section className={styles.whyChooseUs}>
        <h2>Why choose us section</h2>
        {/* Content for "Why choose us" goes here */}
      </section>
      <section className={styles.testimonials}>
        <h2>Clients Testimonials</h2>
        <p>Video testimonials and written testimonials. (option to hide any of them should be there in backend)</p>
      </section>
      <section className={styles.faq}>
        <h2>FAQ made simple:</h2>
        <div className={styles.faqItem}>
          <h3>Can I work in any province on a bridging open work permit?</h3>
          <p>Yes, you can. However, if you are a PNP applicant, then you are restricted to work in the nomination province only.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How long is bridging open work permit valid for?</h3>
          <p>The duration for bridging open work permit for Quebec skilled worker class (QSWC) and Provincial Nominee Program (PNP) is usually 24 months. The duration of the bridging open work permit for other permanent residency categories remains 12 months. It cannot be issued beyond the validity of your passport.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Is it possible to change my closed work permit to bridging open work permit?</h3>
          <p>Yes, if you have submitted your permanent residency application, you can change your closed work permit to bridging open work permit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>When is the best time to apply to apply for bridging open work permit?</h3>
          <p>You can apply for bridging open work permit as soon as you submit your Express Entry application and receive the Acknowledgement of Receipt letter in the message section of IRCC MyPortal account.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Can my spouse and dependent children apply for bridging open worker permit as well?</h3>
          <p>They can apply for an open work permit, provided you qualify as a foreign national who has applied for permanent residence through an economic immigration program.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>My permanent residency application got refused, will IRCC cancel my bridging open work permit?</h3>
          <p>No, IRCC does not cancel your bridging open work permit if your permanent residency application was refused or rejected. You can continue to work on this bridging open work permit and submit new permanent residency application.</p>
        </div>
      </section>
      <section className={styles.blogs}>
        <h2>Blogs</h2>
        {/* Blog content goes here */}
      </section>
    </div>
         
    </>
  );
};

export default BridgingOpenWorkPermitLP;
