import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Pgwp.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";

const Pgwp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

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
    fetch("https://brightlight-node.onrender.com/pathwaysForCaregiverMeta")
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
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
            Canada’s Post Graduate Work Permit (PGWP) – Updated October, 2024
          </h1>
          <p>
            If you are an international student who has graduated from a
            designated learning institution (DLI) in Canada, you may be eligible
            for a PGWP.
          </p>
          <p>
            The Post-Graduation Work Permit (PGWP) is a temporary work permit
            that allows international students who have graduated from a
            Canadian Designated Learning Institution (DLI) to work in Canada
            after they graduate for up to 3 years. The PGWP is a valuable
            opportunity for international students to gain valuable Canadian
            work experience, which can help them qualify for Canadian Permanent
            Residence.
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of a Post-Graduate Work Permit (PGWP)</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              You gain valuable Canadian work experience that can enhance your
              career prospects and increase your chances of obtaining permanent
              residency in Canada.
            </li>
            <li>
              It builds your professional network and you are open to new career
              opportunities that can help you establish yourself in the Canadian
              job market.
            </li>
            <li>
              The PGWP allows you to explore different career options and find a
              job that aligns with your skills and interests.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Eligibility Criteria for Post-Graduate Work Permit (PGWP)</h2>
          <p>Are you eligible for a PGWP? Let's find out.</p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              Be a foreign national who has graduated from a qualifying DLI and
              qualifying program
            </li>
            <li>Never held a PGWP work permit before.</li>
            <li>
              Had authorization to study in Canada that expired in the 180 days
              immediately preceding the PGWP application.
            </li>
            <li>
              Must have completed a full-time program of at least eight months,
              leading to a diploma, certificate, or degree.
            </li>
            <li>
              You must have maintained full-time student status throughout your
              program of study.
            </li>
            <li>Have a minimum passing grade in your courses.</li>
            <li>Don’t have any criminal convictions.</li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>
            Changes were Announced to the Post Graduate Work Permit (PGWP)
            Eligibility - September 18, 2024
          </h2>
          <p>
            <strong>What hasn’t changed</strong>
          </p>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "40px",
            }}
          >
            <li>
              To be eligible for a PGWP, you must continue to meet the{" "}
              <a
                style={{ color: "dodgerblue" }}
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"
              >
                general and physical location
              </a>{" "}
              eligibility requirements (even after November 1, 2024) and
              complete a study program at a{" "}
              <a
                style={{ color: "dodgerblue" }}
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
              >
                PGWP eligible designated learning institution
              </a>
              .
            </li>
          </ul>
          <p style={{ marginTop: "30px" }}>
            <strong>Flight School Eligibility:</strong>
          </p>
          <p>
            To be eligible for a PGWP as a Flight school graduate must meet the
            general and program specific requirements listed above, and one of
            the following:
          </p>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "40px",
            }}
          >
            <li>
              You completed a flight training course at a DLI training centre
              and now have a Canadian commercial pilot’s license{" "}
              <strong>or</strong>
            </li>
            <li>
              You have or are in the process of getting an instructor’s rating{" "}
              <strong>and</strong> a job offer as a flight instructor from a DLI
              flight training centre.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px", fontSize: "20px" }}>
            If you Submitted your Study Permit Application Before November 1,
            2024
          </h2>
          <p>
            If you submitted your{" "}
            <strong>study permit application before November 1, 2024</strong>{" "}
            and are applying for a PGWP on or after November 1, 2024, you must
            also meet the new requirement that applies to your situation.
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>
              If you graduated with a bachelor’s degree, master’s degree or
              doctoral degree from a university:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of
                  Canadian Language Benchmarks (CLB) 7 in English or Niveaux de
                  competence linguistique canadiens (NCLC) 7 in French in all 4
                  language areas.
                </li>
              </ul>
            </li>

            <li>
              If you graduated in any other university program:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of CLB
                  7 in English or NCLC 7 in French in all 4 language areas.
                </li>
              </ul>
            </li>

            <li>
              If you graduated from a college program or any other program not
              listed above:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of CLB
                  5 in English or NCLC 5 in French in all 4 language areas.
                </li>
              </ul>
            </li>
          </ul>

          <h2 style={{ marginTop: "50px", fontSize: "20px" }}>
            If you submit your study permit application on or after November 1,
            2024
          </h2>
          <p>
            If you submit{" "}
            <strong>
              your study permit application on or after November 1, 2024,
            </strong>{" "}
            you must also meet the new requirements that apply to your situation
            to be eligible to apply for a PGWP.
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>
              If you Graduated from a University Bachelor’s degree, Master’s
              Degree or Doctoral Degree Program:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of
                  Canadian Language Benchmarks (CLB) 7 in English or Niveaux de
                  competence linguistique canadiens (NCLC) 7 in French in all 4
                  language areas.
                </li>

                <li>
                  <strong>
                    <a href="#field-study">Field of study requirement:</a>
                  </strong>{" "}
                  All fields of study are eligible. There is no additional field
                  of study requirement.
                </li>
              </ul>
            </li>

            <li>
              If you Graduated from Any Other University Program:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of CLB
                  7 in English or NCLC 7 in French in all 4 language areas.
                </li>

                <li>
                  <strong>
                    <a href="#field-study">Field of study requirement:</a>
                  </strong>{" "}
                  You must graduate in an eligible field of study.
                </li>
              </ul>
            </li>

            <li>
              If you graduated from a College Program or Any Other Program Not
              listed Above:
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                }}
              >
                <li>
                  <strong>Language requirement:</strong> You must prove your
                  English or French language skills with a minimum level of CLB
                  5 in English or NCLC 5 in French in all 4 language areas.
                </li>

                <li>
                  <strong>
                    <a href="#field-study">Field of study requirement: </a>
                  </strong>{" "}
                  You must graduate in an eligible field of study.
                </li>
              </ul>
            </li>
          </ul>

          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="field-study"
          ref={(el) => (sectionsRef.current[244] = el)}
        >
          <h2>⁠Field of Study Requirement:</h2>
          <p>
            If your study program has a field of study requirement, you must
            graduate from a program linked to certain occupations in long-term
            shortage. The fields of study are divided into 5 broad categories:
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            <li>A copy of your study permit</li>
            <li>Agriculture and Agri-food</li>
            <li>Healthcare</li>
            <li>Science, Technology, Engineering and Mathematics (STEM)</li>
            <li>Trade</li>
            <li>Transport</li>
          </ul>
        </section>

        <FieldOfStudyTable />

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[24] = el)}
        >
          <h2>⁠How to apply for Post Graduate Work Permit (PGWP)?</h2>
          <p>
            Meet the eligibility criteria? Let's see how you can apply for PGWP.
          </p>
          <p style={{ marginTop: "20px", marginBottom: "10px" }}>
            You can apply for a PGWP from inside or outside Canada.
          </p>
          <p>Here’s what you will need to provide when you apply for a PGWP </p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            <li>A copy of your study permit</li>
            <li>
              A copy of your final academic transcripts OR a letter from your
              school confirming your graduation
            </li>
            <li>A copy of your passport</li>
            <li>
              Valid English or French language skills (IELTS, CELPIP, TEF, TCF)
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
            Common Reasons for Refusal of Post-Graduate Work Permit (PGWP)
          </h2>
          <h4>
            Don’t forget to avoid these common PGWP refusal reasons and increase
            your chances of approval.
          </h4>
          <ul style={{ marginLeft: "40px" }}>
            <li>Failure to meet the eligibility criteria set by IRCC.</li>
            <li>
              You haven’t completed a full-time program of at least eight months
              at a qualifying DLI.
            </li>
            <li>
              You are only permitted to study part-time during your final
              semester of study. If you have studied part-time at any other time
              during your program, your application will be refused.
            </li>
            <li>
              Your study permit expired before you graduated and you did not
              apply for an extension or restoration of status.
            </li>
          </ul>

          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have successfully obtained approvals
            for clients with multiple previous refusals through a tailored
            approach, addressing each concern listed in previous refusals and
            using case law as precedents. This high success rate is why our
            clients trust us.
          </p>
          <p>
            At Brightlight Immigration, our dedicated team of visa application
            specialists can assist you from start to finish. Start your process
            now!
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

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px" }}>
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

export default Pgwp;
