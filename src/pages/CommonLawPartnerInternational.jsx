import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CommonLawPartnerInternational.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const CommonLawPartnerInternational = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/comLawPartnerInternMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/comLawPartnerIntern")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
          <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
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
                {" "}
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
            Open Work Permit for Spouse or Common-law Partner of an
            International Student
          </h1>
        </header>

        <section
          className={`${styles.intro} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            Canada allows spouses and common-law partners to accompany their
            partners who are international students. Over the years, IRCC has
            made drastic changes to this program, allowing only certain
            international students to invite their partners. It is crucial to
            understand the program eligibility before initiating your
            immigration process to avoid any long period of separation between
            you and your partner.
          </p>
          <p>
            Both the applicant and their spouse must fulfill their respective
            sets of requirements to reunite and work in Canada.
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>
            Benefits of Open Work Permit for Spouse or Common-law Partner of an
            International Student:
          </h2>
          <ul
            style={{ marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
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

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
            Eligibility criteria for Open Work Permit for Spouse or Common-law
            Partner of an International Student:
          </h2>
          <p>
            The requirements for principal applicant (international student)
            differ for both the categories (Before March 19, 2024, applicants
            and After March 19, 2024 applicants). However, the requirements are
            same for the accompanying spouse or common-law partner.
          </p>
        </section>
        {/* /// */}

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Eligibility Requirements of the international student:</h2>
          <h3>Applications submitted before March 19, 2024</h3>
          <p>
            For the international student to be eligible to apply for their
            partner under administrative code C42, they must meet all of the
            following requirements:
          </p>  
          <ul
            style={{ marginLeft: "40px", marginTop: "0px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <li>
              Proof that the international student is attending a designated
              learning institution (DLI)
            </li>
            <li>
              The international student must be actively studying full-time in a
              post-graduation work permit-eligible program at one of the
              following:{" "}
            </li>
            <ul style={{ marginLeft: "40px", marginTop: "0px",  listStyleType: "circle" }}>
              <li>
                A Canadian public post-secondary institution (college,
                trade/technical school, university, or CEGEP in Quebec).
              </li>
              <li>
                A private post-secondary institution in Quebec operating under
                the same rules as public institutions.
              </li>
              <li>
                A private or public secondary or post-secondary institution in
                Quebec offering qualifying programs of 900 hours or longer
                leading to a Diploma of Vocational Studies (DVS) or an
                Attestation of Vocational Specialization (AVS).
              </li>
              <li>
                A Canadian private institution authorized by provincial statute
                to confer degrees (e.g., bachelor’s, master’s, or doctorate) if
                the study permit holder is enrolled in a degree program
                authorized by the province.{" "}
              </li>
            </ul>
            <p><strong>The international student is not eligible to apply if: </strong></p>
            <ul style={{ marginLeft: "40px", marginTop: "0px" }}>
              <li>Not enrolled while residing in Canada.</li>
              <li>Enrolled in part-time studies.</li>
              <li>
                Enrollment in a private post-secondary program or institution
                not meeting specified eligibility criteria.
              </li>
            </ul>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            Applications submitted on or after March 19, 2024
          </h3>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
            For the international graduate to be eligible to apply for their
            partner under administrative code C42, they must meet all of the
            following requirements:
          </p>
          <ul  
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <li>
              hold a valid study permit AND must be physically residing in
              Canada while studying or be approved for a study permit, if
              applying as a family group outside of Canada AND provide proof
              that they plan to physically reside in Canada while studying
            </li>
            <li>
              be studying on a full-time basis in a graduate program (master’s
              and doctorate) in a university or polytechnic institution, or a
              professional degree-granting program in a university (e.g.,
              medicine, dentistry, law, etc.)
            </li>
            <p>Graduate programs are defined as follows:</p>
            <ul>
              <li>
                master’s and doctorate degrees granted by universities or
                polytechnic institutions
              </li>
            </ul>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            Professional degree programs are identified under the following:
          </h3>
          <ul
          style={{marginLeft: "40px", marginTop: "0px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            <li>Doctor of Dental Surgery (DDS, DMD)</li>
            <li>Bachelor of Law or Juris Doctor (LLB, JD, BCL)</li>
            <li>Doctor of Medicine (MD)</li>
            <li>Doctor of Optometry (OD)</li>
            <li>Pharmacy (PharmD, BS, BSc, BPharm)</li>
            <li>Doctor of Veterinary Medicine (DVM)</li>
            <li>Bachelor of Science in Nursing (BScN, BSN, BNSc)</li>
            <li>Bachelor of Education (BEd)</li>
            <li>Bachelor of Engineering (BEng, BE, BASc) only</li>
          </ul>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
           <strong> The international student is not eligible to apply if:{" "}</strong>
          </p>
          <ul
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            <li>Not enrolled while residing in Canada.</li>
            <li>Enrolled in part-time studies.</li>
            <li>
              Not enrolled in a private post-secondary program/institution other
              than those listed
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            Eligibilty Requirements for accompanying spouse or common-law
            partner:
          </h2>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[16] = el)}
          >
            Your family member must meet following requirements:
          </p>
          <ul
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
            <li>
              {" "}
              <strong>General Eligibility:</strong> The applicant must meet
              general work permit criteria, including police and medical
              clearances, and not be inadmissible to Canada.
            </li>
            <li>
              {" "}
              <strong>Relationship:</strong> A genuine relationship between the
              applicant and the study permit holder is required.
            </li>
            <li>
              {" "}
              <strong>Proof of Spousal Relationship:</strong>Evidence must
              demonstrate the applicant's genuine status as the spouse or
              common-law partner of a valid study permit holder.
            </li>
            <li>
              <strong> Additional Documentation: </strong>Supplementary proof is
              necessary to satisfy IRCC that the relationship was not primarily
              for status acquisition or is not genuine.
            </li>
            <li>
              <strong>Applicants in Canada:</strong> They must possess valid
              temporary resident status, have applied for an extension before
              its expiry (maintained status), or be eligible for restoration of
              status as a visitor, worker, or student. They must also be
              eligible to apply for a work permit from within Canada.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.application} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <h2>
            When to apply for Open Work Permit for Spouse or Common-law Partner
            of an International Student?
          </h2>
          <ol style={{marginLeft: "40px", marginTop: "10px"}}>
            <li>
              You can choose to apply together for a Study Permit and Spousal
              Open Work Permit before traveling to Canada. If the applications
              are approved, study and work permits will be issued upon arrival
              in Canada, allowing the spouse to begin working immediately.
            </li>
            <li>
              Foreign nationals exempt from the Temporary Resident Visa (TRV)
              requirement can apply for the Spousal Open Work Permit (SOWP) upon
              arrival in Canada, with immediate issuance upon approval by CBSA
              officer.
            </li>
            <li>
              Some spouses/common-law partners may enter Canada as visitors and
              apply for the work permit later. In such cases, the application
              can be submitted at any time, ensuring the visitor status remains
              valid during the application process.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[19] = el)}>
          <h2>
            How to apply for Open Work Permit for Spouse or Common-law Partner
            of an International Student?
          </h2>
          <ol className={styles.subList} style={{marginLeft: "40px", marginTop: "10px"}} >
            <li>
              Gather documents to prove above-mentioned eligibility criteria for
              internation student.
            </li>
            <li>Gather documents to prove the relationship is genuine.</li>
            <li>
              You might be required to get a medical exam and police clearance
              certificates, if applying from outside Canada.
            </li>
            <li>Submit complete application to IRCC</li>
            <li>
              After receiving, Biometric Collection Instruction letter, make an
              appointment for biometrics within 30 days of receiving the letter.
            </li>
            <li>Wait for IRCC to process your application.</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          <h2>
            Common reasongs for refusal of Open Work Permit for Spouse or
            Common-law Partner of an International Student:
          </h2>
          <ul style={{marginLeft: "40px", marginTop: "10px"}}>
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
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[90] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling Immigration applications with a high success rate.
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

export default CommonLawPartnerInternational;
