import React, { useState } from "react";
import styles from "../styles/CommonLawPartnerPermanent.module.css";
import { Link } from "react-router-dom";

const CommonLawPartnerPermanent = () => {
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
        <h1 className={styles.heading}>
          Open Work Permit for Spouse or Common-law Partner of a Permanent
          Resident/Canadian Citizen
        </h1>

        <section className={styles.introduction}>
          <p>
            The processing time for a PR application can be longer than usually
            expected. There are various reasons for this to happen. The common
            scenarios for application delays are applications stuck in
            background checks, requests for additional medical examinations,
            poor staffing at the country of citizenship, security clearance
            delays, etc. The good thing is you can apply for authorization to
            work while waiting for your permanent residency application to be
            processed.
          </p>
          <p>
            You can apply for this type of open work permit if you’ve applied
            for permanent residence under one of the following classes:
          </p>
          <ul>
            <li>
              The spouse or common-law partner in Canada class (SCLPC) as a
              spouse or common-law partner.
            </li>
            <li>
              The family class as a spouse, common-law, or conjugal partner
              (sponsored overseas).
            </li>
          </ul>
        </section>

        <section className={styles.benefits}>
          <h2 className={styles.subheading}>
            Benefits of Open Work Permit for Spouse or Common-law Partner of a
            Permanent Resident/Canadian Citizen
          </h2>
          <ul>
            <li>
              It permits your spouse or common-law partner to work, alleviating
              financial strain on you.
            </li>
            <li>
              It provides your spouse or common-law partner with the opportunity
              to gain Canadian work experience.
            </li>
            <li>
              They have the flexibility to work for any employer and in any
              position.
            </li>
            <li>They can also establish their own business if desired.</li>
            <li>
              Unlike visitors, they are allowed to stay in Canada for longer
              than six months, with multiple entries allowed.
            </li>
            <li>The dependent child can also accompany.</li>
          </ul>
        </section>

        <section className={styles.eligibility}>
          <h2 className={styles.subheading}>Eligibility Criteria</h2>
          <ol>
            <li>
              Both the sponsor and principal applicant must be in a genuine
              relationship with each other.
            </li>
            <li>
              Provide application fees receipt or Acknowledgement of Receipt
              (AOR) of your permanent residence application.
            </li>
            <li>
              Both the sponsor and principal applicant must be living together.
            </li>
            <li>
              If your spouse doesn’t have valid temporary resident status, they
              must wait until you’ve received your approval in principle letter.
            </li>
          </ol>
        </section>

        <section className={styles.applicationProcess}>
          <h2 className={styles.subheading}>How to Apply</h2>
          <ol>
            <li>
              Identify the principal applicant’s occupation in TEER category 0,
              1, 2, or 3 of the National Occupation Classification system.
            </li>
            <li>
              Gather documents to prove the above-mentioned eligibility
              criteria.
            </li>
            <li>
              Gather documents to prove that your relationship is genuine.
            </li>
            <li>
              You might be required to get a medical exam and police clearance
              certificates, if applying from outside Canada.
            </li>
            <li>Submit a complete application to IRCC.</li>
            <li>
              After receiving the Biometric Collection Instruction letter, make
              an appointment for biometrics within 30 days of receiving the
              letter.
            </li>
            <li>Wait for IRCC to process your application.</li>
          </ol>
        </section>

        <section className={styles.refusalReasons}>
          <h2 className={styles.subheading}>Common Reasons for Refusal</h2>
          <ul>
            <li>
              Lack of documentation verifying the National Occupational
              Classification (NOC) of the principal applicant.
            </li>
            <li>
              Inadequate evidence demonstrating the genuineness of the marriage.
            </li>
            <li>
              The principal applicant is employed in a low-skill occupation
              under the low wage stream of LMIA.
            </li>
            <li>
              The principal applicant's work permit is nearing expiration, and
              there has been no application filed to extend their stay.
            </li>
          </ul>
        </section>

        <section className={styles.assistance}>
          <h2 className={styles.subheading}>Need Assistance?</h2>
          <p>
            If you need help with your application or have received a refusal,
            our experienced team at Brightlight Immigration can assist you. We
            specialize in handling complex cases and offer tailored solutions to
            increase your chances of approval.
          </p>
          <Link to="/book-appointment" className={styles.button}>
            Book an Appointment
          </Link>
        </section>

        <section className={styles.whyChooseUs}>
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
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

export default CommonLawPartnerPermanent;