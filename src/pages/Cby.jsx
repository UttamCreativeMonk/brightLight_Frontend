import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Cby.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const Cby = () => {
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
          Open Work Permit for Spouse or Common-law Partner of an International
          Student
        </h1>

        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
            Canada allows spouses and common-law partners to come to Canada and
            accompany their partners who are international students. Over the
            years, IRCC has made drastic changes to this program, allowing only
            certain international students to invite their partners. It is
            crucial to understand the program eligibility before initiating your
            immigration process to avoid any long period of separation between
            you and your partner.
          </p>
          <p>
            Both the applicant and their spouse must fulfill their respective
            sets of requirements to reunite and work in Canada.
          </p>
        </section>

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>
            Benefits of Open Work Permit for Spouse or Common-law Partner of an
            International Student
          </h2>
          <ul>
            <li>
              It enables your spouse or common-law partner to accompany you to
              Canada and reside with you.
            </li>
            <li>
              It permits your spouse or common-law partner to work, alleviating
              financial strain on you while you are in school full-time.
            </li>
            <li>
              It provides your spouse or common-law partner with the opportunity
              to gain Canadian work experience and enhance their skills.
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
              It also offers a chance to immerse oneself in Canadian society.
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for Open Work Permit for Spouse or Common-law
            Partner of an International Student
          </h2>
          <p>
            The requirements for the principal applicant (international student)
            differ for both the categories (Before March 19, 2024, applicants
            and After March 19, 2024 applicants). However, the requirements are
            the same for the accompanying spouse or common-law partner.
          </p>

          <h3>Eligibility Requirements of the International Student:</h3>

          {/* <h4>Applications Submitted Before March 19, 2024</h4> */}
          <div>
      <h4>Applications Submitted Before March 19, 2024</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>Proof of Enrollment:</strong> Must be attending a designated learning institution (DLI).
        </li>
        <li className={styles.listItem}>
          <strong>Full-Time Study:</strong> Must be actively studying full-time in a post-graduation work permit-eligible program at:
          <ul className={styles.subList}>
            <li> A Canadian public post-secondary institution (college, trade/technical school, university, or CEGEP in Quebec).</li>
            <li> A private post-secondary institution in Quebec operating under the same rules as public institutions.</li>
            <li> A private or public secondary or post-secondary institution in Quebec offering qualifying programs of 900 hours or longer leading to a Diploma of Vocational Studies (DVS) or an Attestation of Vocational Specialization (AVS).</li>
            <li> A Canadian private institution authorized by provincial statute to confer degrees (e.g., bachelor’s, master’s, or doctorate) if enrolled in a degree program authorized by the province.</li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <strong>Ineligibility:</strong>
          <ul className={styles.subList}>
            <li> Not enrolled while residing in Canada.</li>
            <li> Enrolled in part-time studies.</li>
            <li> Enrollment in a private post-secondary program or institution not meeting specified eligibility criteria.</li>
          </ul>
        </li>
      </ul>

      <h4>Applications Submitted On or After March 19, 2024</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>Valid Study Permit:</strong> Must hold a valid study permit AND be physically residing in Canada while studying or be approved for a study permit if applying as a family group outside of Canada AND provide proof that they plan to physically reside in Canada while studying.
        </li>
        <li className={styles.listItem}>
          <strong>Full-Time Study:</strong> Must be studying on a full-time basis in a graduate program (master’s and doctorate) in a university or polytechnic institution, or a professional degree-granting program in a university (e.g., medicine, dentistry, law, etc.).
        </li>
        <li className={styles.listItem}>
          <strong>Graduate and Professional Programs:</strong> Graduate programs include master’s and doctorate degrees. Professional degree programs include:
          <ul className={styles.subList}>
            <li> Doctor of Dental Surgery (DDS, DMD)</li>
            <li> Bachelor of Law or Juris Doctor (LLB, JD, BCL)</li>
            <li> Doctor of Medicine (MD)</li>
            <li> Doctor of Optometry (OD)</li>
            <li> Pharmacy (PharmD, BS, BSc, BPharm)</li>
            <li> Doctor of Veterinary Medicine (DVM)</li>
            <li> Bachelor of Science in Nursing (BScN, BSN, BNSc)</li>
            <li> Bachelor of Education (BEd)</li>
            <li> Bachelor of Engineering (BEng, BE, BASc) only</li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <strong>Ineligibility:</strong>
          <ul className={styles.subList}>
            <li> Not enrolled while residing in Canada.</li>
            <li> Enrolled in part-time studies.</li>
            <li> Not enrolled in a private post-secondary program/institution other than those listed.</li>
          </ul>
        </li>
      </ul>
    </div>
          <h3>
            Eligibility Requirements for Accompanying Spouse or Common-law
            Partner
          </h3>
          <ul>
            <li>
           <strong>   General Eligibility:</strong> The applicant must meet general work permit
              criteria, including police and medical clearances, and not be
              inadmissible to Canada.
            </li>
            <li>
           <strong>   Relationship:</strong> A genuine relationship between the applicant and the
              study permit holder is required.
            </li>
            <li>
           <strong>   Proof of Spousal Relationship:</strong> Evidence must demonstrate the
              applicant's genuine status as the spouse or common-law partner of
              a valid study permit holder.
            </li>
            <li>
            <strong>  Additional Documentation:</strong> Supplementary proof is necessary to
              satisfy IRCC that the relationship was not primarily for status
              acquisition or is not genuine.
            </li>
            <li>
             <strong> Applicants in Canada:</strong> They must possess valid temporary resident
              status, have applied for an extension before its expiry
              (maintained status), or be eligible for restoration of status as a
              visitor, worker, or student. They must also be eligible to apply
              for a work permit from within Canada.
            </li>
          </ul>
        </section>

        <section  className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>
            How to Apply for Open Work Permit for Spouse or Common-law Partner
            of an International Student
          </h2>
          <ol>
            <li>
              Gather documents to prove the above-mentioned eligibility criteria
              for the international student.
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

        <section className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>Common Reasons for Refusal</h2>
          <ul>
            <li>
              Lack of documentation verifying the enrollment status of the
              international student.
            </li>
            <li>
              Inadequate evidence demonstrating the genuineness of the marriage.
            </li>
            <li>
              The principal applicant's study permit is nearing expiration, and
              there has been no application filed to extend their stay.
            </li>
          </ul>
        </section>

        <section className={`${styles.assistance} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>Need Assistance?</h2>
          <p>
            If you need help with your application or have questions, feel free
            to <Link to="/contact-us">contact us</Link>. Our team at Brightlight
            Immigration is here to assist you every step of the way.
          </p>
        </section>

        {/* <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el}>
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
        </section> */}
                <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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

export default Cby;
