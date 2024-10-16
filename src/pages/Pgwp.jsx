import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Pgwp.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

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
          <h1>Canada’s Post-Graduate Work Permit (PGWP)</h1>
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
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>Valuable Canadian Work Experience:</strong> Enhance your
              career prospects and increase your chances of obtaining permanent
              residency in Canada.
            </li>
            <li>
              <strong>Professional Networking:</strong> Build your network and
              explore new career opportunities that can help you establish
              yourself in the Canadian job market.
            </li>
            <li>
              <strong>Career Exploration:</strong> Explore different career
              options and find a job that aligns with your skills and interests.
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
              <strong>Graduation from a Qualifying DLI:</strong> Be a foreign
              national who has graduated from a qualifying DLI and qualifying
              program.
            </li>
            <li>
              <strong>No Previous PGWP:</strong> Must never have held a PGWP
              before.
            </li>
            <li>
              <strong>Study Authorization:</strong> Had authorization to study
              in Canada that expired in the 180 days immediately preceding the
              PGWP application.
            </li>
            <li>
              <strong>Program Duration:</strong> Must have completed a full-time
              program of at least eight months, leading to a diploma,
              certificate, or degree.
            </li>
            <li>
              <strong>Full-Time Status:</strong> Maintained full-time student
              status throughout the program of study.
            </li>
            <li>
              <strong>Passing Grades:</strong> Achieved a minimum passing grade
              in courses.
            </li>
            <li>
              <strong>Clean Record:</strong> No criminal convictions.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>How to Apply for Post-Graduate Work Permit (PGWP)</h2>
          <p>
            Meet the eligibility criteria? Here’s how you can apply for PGWP:
          </p>
          <p>You can apply for a PGWP from inside or outside Canada.</p>
          <p>Here’s what you will need to provide when you apply for a PGWP</p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              <strong>Application Location:</strong> You can apply for a PGWP
              from inside or outside Canada.
            </li>
            <li>
              <strong>Required Documents:</strong>
              <ul style={{ marginTop: "10px", marginLeft: "40px" }}>
                <li>A copy of your study permit.</li>
                <li>
                  A copy of your final academic transcripts OR a letter from
                  your school confirming your graduation.
                </li>
                <li>A copy of your passport.</li>
              </ul>
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
              Not completing a full-time program of at least eight months at a
              qualifying DLI.
            </li>
            <li>
              Studying part-time during any period other than the final
              semester.
            </li>
            <li>
              Study permit expired before graduation without applying for an
              extension or restoration of status.
            </li>
          </ul>
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

export default Pgwp;
