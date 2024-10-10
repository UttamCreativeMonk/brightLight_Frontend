import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CommonLawPartnerTemporary.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const CommonLawPartnerTemporary = () => {
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Open Work Permit for Spouse or Common-law Partner of a Temporary
          Foreign Worker
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            The spouses or common-law partners of authorized workers coming to
            Canada or working in Canada may apply for an open work permit
            without having an offer of employment.
          </p>
          <p>They are usually classified into the following two categories:</p>
          <ul>
            <li>
              Family members of foreign nationals authorized to work in
              high-skilled occupations (TEER 0, 1, 2, or 3) – [C41 and C46]
            </li>
            <li>
              Family members of foreign nationals authorized to work in
              low-skilled occupations (TEER 4 or 5) – [C47 and C48]
            </li>
          </ul>
          <p>
            Both the applicant and their spouse must fulfill their respective
            sets of requirements to reunite and work in Canada.
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            Benefits of Open Work Permit for Spouse or Common-law Partner of a
            Temporary Foreign Worker
          </h2>
          <ul>
            <li>
              It enables your spouse or common-law partner to accompany you to
              Canada and reside with you.
            </li>
            <li>
              It permits your spouse or common-law partner to work, alleviating
              financial strain on you.
            </li>
            <li>
              It provides your spouse or common-law partner with the opportunity
              to gain Canadian work experience.
            </li>
            <li>
              Through the Canadian work experience gained, they may become
              eligible for permanent residency programs.
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
            <li>
              Your dependent child (yours or your spouse's), or the dependent
              child of a dependent child (your grandchild or your spouse's
              grandchild) can also qualify for an open work permit.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Applying for Open Work Permit of Spouse or
            Common-law Partner of a Temporary Foreign Worker
          </h2>
          <p>
            The requirements for the principal applicant or temporary foreign
            worker differ for both categories. However, the requirements are the
            same for the accompanying spouse or common-law partner.
          </p>

          <h3>1. For High-Skilled Occupations (TEER 0, 1, 2, or 3)</h3>
          <ul className={styles.requirementsList}>
            <h2>Requirements and Descriptions</h2>
            <li>
              <strong>Valid Work Authorization</strong>
              <ul className={styles.subList}>
                <li>A valid work permit, subject to certain exceptions.</li>
                <li>
                  An approved work permit that has not yet been issued
                  (indicated by a port of entry letter of introduction).
                </li>
                <li>Authorization to work without a permit.</li>
              </ul>
            </li>
            <li>
              <strong>Work Permit Validity</strong>
              <p>
                Your work permit or authorized work status must be valid for at
                least six months beyond the date you submit your family member's
                open work permit application.
              </p>
            </li>
            <li>
              <strong>High-Skilled Occupation</strong>
              <p>
                Must be employed or have a confirmed offer of employment in a
                high-skilled occupation (TEER 0, 1, 2, or 3).
              </p>
            </li>
            <li>
              <strong>Canadian Residence</strong>
              <p>
                Must be living in Canada or have plans to move to Canada to
                work.
              </p>
            </li>
            <li>
              <strong>Not Eligible Currently</strong>
              <ul className={styles.subList}>
                <li>
                  Made a refugee claim referred to the Immigration and Refugee
                  Board.
                </li>
                <li>Subject to an unenforceable removal order.</li>
                <li>
                  International student working in a co-op program without a
                  work permit.
                </li>
                <li>
                  International student working off-campus without a work
                  permit.
                </li>
                <li>
                  Applied for a post-graduation work permit (PGWP) but have not
                  yet received a positive decision.
                </li>
                <li>Holds a spousal open work permit.</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.validWorkLiHead}>2. For Low-Skilled Occupations (TEER 4 or 5)</h3>
          <ul className={styles.requirementsList}>
            <li>
              <strong >Valid Work Authorization</strong>
              <p>Must possess one of the following:</p>
              <ul className={styles.subList}>
                <li>A valid work permit, subject to certain exceptions.</li>
                <li>
                  An approved work permit that has not yet been issued
                  (indicated by a port of entry letter of introduction).
                </li>
                <li>Authorization to work without a permit.</li>
              </ul>
            </li>
            <li>
              <strong>Work Permit Validity</strong>
              <p>
                Your work permit or authorized work status must be valid for at
                least six months beyond the date you submit your family member's
                open work permit application.
              </p>
            </li>
            <li>
              <strong>Low-Skilled Occupation</strong>
              <p>
                Must be employed or have a confirmed offer of employment in a
                low-skilled occupation (TEER 4 or 5).
              </p>
            </li>
            <li>
              <strong>Wages</strong>
              <p>
                If employed in a low-skilled occupation, your wage rate must be
                at or above the median hourly wages set by the province or
                territory of your location of work.
              </p>
            </li>
            <li>
              <strong>Canadian Residence</strong>
              <p>
                Must be living in Canada or have plans to move to Canada to
                work.
              </p>
            </li>
            <li>
              <strong>
                If Work Permit Holder is Under the Agri-Food Pilot
              </strong>
              <p>
                Must hold a labour market impact assessment (LMIA)-based work
                permit in the agriculture or low-wage stream of the Agri-Food
                Pilot and must have received an acknowledgment of receipt (AOR)
                letter from IRCC confirming that your application for permanent
                residence is complete.
              </p>
            </li>
            <li>
              <strong>Not Eligible Currently</strong>
              <ul className={styles.subList}>
                <li>
                  Holds a work permit under the low-wage stream of the Temporary
                  Foreign Worker Program.
                </li>
                <li>
                  Holds a work permit under the Seasonal Agricultural Worker
                  Program.
                </li>
                <li>
                  Holds a work permit under the agricultural stream of the
                  Temporary Foreign Worker Program.
                </li>
                <li>
                  Made a refugee claim referred to the Immigration and Refugee
                  Board.
                </li>
                <li>Subject to an unenforceable removal order.</li>
                <li>International student in a co-op program.</li>
                <li>
                  International student working off-campus without a work
                  permit.
                </li>
                <li>
                  Applying for a Post-Graduation Work Permit (PGWP) and haven't
                  received a positive decision on your application yet.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <h2>Family Member Requirements for Open Work Permits:</h2>
          <p className={styles.testPara}>Your family member must meet 3 requirements:</p>
          <ul>
            <li>
              <strong>General Eligibility:</strong> They must meet the general
              work permit eligibility criteria such as police clearances,
              medical clearance and not inadmissible to Canada.
            </li>
            <li>
              <strong>Relationship:</strong> You must be in a genuine
              relationship with each other.
            </li>
            <li>
              <strong>Temporary Residency:</strong> If in Canada, they must have
              valid temporary resident status, have applied to extend their
              status before it expired (maintained status), or be eligible for
              restoration of their status as a visitor, worker, or student.
            </li>
          </ul>
        </section>
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
            How to apply for Open Work Permit of Spouse or Common-law Partner of
            a Temporary Foreign Worker?
          </h2>
          <ol>
            <li>
              Identify the principal applicant’s occupation in TEER category 0,
              1, 2, 3, 4, or 5 of the National Occupation Classification system.
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
              certificates if applying from outside Canada.
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

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            Common reasons for refusal of Open Work permit of Spouse or
            Common-law Partner of a Temporary Foreign Worker
          </h2>
          <ul>
            <li>
              Lack of documentation verifying the National Occupational
              Classification (NOC) of the principal applicant.
            </li>
            <li>
              Inadequate evidence demonstrating the genuineness of the
              relationship.
            </li>
            <li>
              The principal applicant is employed in a low-skill occupation
              under the low-wage stream of LMIA.
            </li>
            <li>
              The principal applicant's work permit is nearing expiration, and
              there has been no application filed to extend their stay.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Need Assistance?</h2>
          <p>
            If you need help with your application or have questions, feel free
            to
            <Link className={styles.contactUS} to="/contact-us">
              contact us
            </Link>
            . Our team at Brightlight Immigration is here to assist you every
            step of the way.
          </p>
        </section>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
          <button
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
      </div>{" "}
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

export default CommonLawPartnerTemporary;
