import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/VisitorToStudent.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";

const VisitorToStudent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

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
    fetch("https://brightlight-node.onrender.com/visitorToStudentMeta")
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
    fetch("https://brightlight-node.onrender.com/visitorToStudent")
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
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          {pData?.visitorToStudentHeading}
        </h1>
        <p className={styles.intro}>
        {pData?.visitorToStudentPara}
        </p>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            Benefits of Changing Your Status from Visitor to Student
          </h2>
          <h4>
            The Visitor to Student Permit Program offers several benefits for
            international students, including:
          </h4>
          <ol style={{ marginLeft: "40px" }} className={styles.benefitsList}>
            <li style={{ marginBottom: "10px" }}>
            A Guaranteed Investment Certificate (GIC) is not required to apply for a Study Permit when you apply from inside Canada.

            </li>
            <li style={{ marginBottom: "10px" }}>
            You do not need to pay a 1-year fee to college or university, upfront.
            </li>
            <li style={{ marginBottom: "10px" }}>
            While you study, you are allowed to work up to 24 hours per week, starting September, 2024.
            </li>
            <li style={{ marginBottom: "10px" }}>
            Every 2 semesters, you are allowed to take a scheduled break for one semester. During this time, there are no restrictions on your work hours.
            </li>
            <li style={{ marginBottom: "10px" }}>
            If you decide to stay in Canada after completing your studies, you may be eligible for a post-graduate work permit, which can give you valuable work experience and enhance your chances of obtaining permanent residency.
            </li>
            <li style={{ marginBottom: "10px" }}>
            You can continue your studies without having to return to your home country.
            </li>
            <li style={{ marginBottom: "10px" }}>
            You can avoid the hassle and expense of traveling back and forth between Canada and your home country.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <ul style={{ marginLeft: "40px" }} className={styles.eligibilityList}>
            <li>
            {pData?.e1}
            </li>
            <li> {pData?.e2}</li>
            <li>
            {pData?.e3}
            </li>
            <li>
            You have a valid Provincial Attestation Letter or PAL.
            </li>
            <li>You have sufficient funds to support yourself while you study in Canada. This means you have enough money to cover your tuition, living expenses, and return transportation.</li>
            <li>
            You have no criminal record.
            </li>
          </ul>
          <p className={styles.eligibilityAdditional}>
          {pData?.EligibilityListHead}
          </p>
          <ul className={styles.eligibilityAdditionalList}>
            <li>you’re a Ukrainian national or family member of a Ukrainian national</li>
            <li>
            you have a valid study or work permit
            </li>
            <li>
            your spouse, common-law partner or parent has a valid study or work permit
            </li>
            <li>
            you’re a minor child in primary or secondary school
            </li>
            <li>you’re an exchange student or visiting student</li>
            <li>
            you completed a short-term course or study program required to be accepted at a DLI
            </li>
            <li>
            you or your spouse, common-law partner or dependent child has a temporary resident permit (TRP) valid for 6 months or more
            </li>
            <li>
            you’re being sponsored to immigrate and you already applied for permanent residence (if you’re eligible)
            </li>
            <li>
            you or your spouse, common-law partner or dependent child are subject to an unenforceable removal order
            </li>
            <li>you’re the spouse, common-law partner or dependent child of:</li>
            <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
         
            <li>an athlete on a team based in Canada</li>
            <li>a member of the media</li>
            <li>a member of the clergy</li>
            <li>military personnel on duty in Canada or</li>
            <li>an accredited foreign representative</li>
            </ul>
            <li>you’re a refugee claimant in Canada or a family member of a refugee claimant in Canada</li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowtoApplyHeading}
          </h2>
          <p className={styles.processDescription}>
          {pData?.HowtoApplySubHead}
          </p>
          <ol className={styles.processList}>
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
            <li>{pData?.ha6}</li>
          </ol>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="pgwp-requirements"
          ref={(el) => (sectionsRef.current[26] = el)}
        >
          <h2 className={styles.subheading}>
          If you submit your study permit application on or after November 1, 2024 
          </h2>
          <h4>NOTE: Changes were Announced to the Post Graduate Work Permit (PGWP) Eligibility - September 18, 2024</h4>
          <p>
            If you submit your study permit application on or after November 1, 2024, you must also meet the new requirements that apply to your situation to be eligible to apply for a PGWP.
          </p>
          
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>If you Graduated from a University Bachelor’s degree, Master’s Degree or Doctoral Degree Program:</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>Language requirement: </strong>You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.</li>
            <li><strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement. <a href="#field-study"> Field of study Requirement </a></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>If you Graduated from Any Other University Program:</strong> </li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 7 in English or NCLC 7 in French in all 4 language areas.</li>
            <li><strong>Field of study requirement:</strong> You must graduate in an eligible field of study.<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li> <strong>If you graduated from a College Program or Any Other Program Not listed Above:</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li><strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 5 in English or NCLC 5 in French in all 4 language areas.</li>
            <li> <strong>Field of study requirement:</strong> You must graduate in an eligible field of study. <a href="#field-study"> Field of study Requirement </a></li>
            </ul>
          </ul>
          <button id="field-study"
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/clb-ilets-calculator")
            }
          >
           CLB CALCULATOR
          </button>

          <h3>Field of Study Requirement</h3>
          <p style={{ marginTop:"20px" , marginBottom:"20px"}}>
          If your study program has a field of study requirement, you must graduate from a program linked to certain occupations in long-term shortage. The fields of study are divided into 5 broad categories:
          </p>
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
            <li>Agriculture and Agri-food</li>
            <li>Healthcare</li>
            <li>Science, Technology, Engineering and Mathematics (STEM)</li>
            <li>Trade</li>
            <li>Transport</li>
          </ul>

          {/* <h4>Select Field of Study:</h4>
          <select className={styles.dropdown}>
            <option value="">Select a field</option>
            <option value="agriculture">Agriculture and Agri-food</option>
            <option value="healthcare">Healthcare</option>
            <option value="stem">Science, Technology, Engineering and Mathematics (STEM)</option>
            <option value="trade">Trade</option>
            <option value="transport">Transport</option>
          </select> */}

             <FieldOfStudyTable/>

          <h2>Important Points to Remember:</h2>
          <ul>
            <li>To apply for a study permit as a visitor in Canada, you must submit your completion letter for the prerequisite program along with your letter of acceptance. 
            </li>
            <li>Ensure that your acceptance letter clearly states that the program is a prerequisite for admission.
            </li>
            <li>If the post-secondary school you wish to attend is not on the DLI List, you cannot apply for a study permit.
            </li>
            <li>September 18, 2024. Make sure you are choosing a course that is eligible. {" "}<a href="/pgwp">PGWP</a>(eligibility applying after November 1, 2024)
            </li>
            <li>During the prerequisite program, you're not eligible to work off-campus. However, once you've completed the prerequisite and commenced your main program, you can work off-campus.</li>
          </ul>
        </section>


        <section
          className={`${styles.refusals} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul className={styles.refusalList}>
          <li>
          {pData?.RefusalSubHead}
            </li>
            <li>{pData?.r1}</li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
            <li>
            {pData?.r4}
            </li>
            <li>
            {pData?.r5}
            </li>
            <li>
            {pData?.r6}
            </li>
            <li>
            {pData?.r7}
            </li>
            <li>
            {pData?.r8}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p className={styles.callToActionText}>
          {pData?.s1}
          </p>
          <p className={styles.callToActionText}>
          {pData?.s2}
          </p>
          <a
            id="book-appointment"
            href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
            className={styles.button}
          >
            Book Appointment
          </a>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ textAlign: "left", marginLeft: "40px" }}>
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

export default VisitorToStudent;
