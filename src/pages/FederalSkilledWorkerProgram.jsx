import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FederalSkilledWorkerProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FederalSkilledWorkerProgram = () => {
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

    fetch("https://brightlight-node.onrender.com/federalSkillWorkerProgMeta")
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("process")}>Process</p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Federal Skilled Worker Program (FSWP)
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            Elevate your career with Canada's FSWP, a pathway to skilled
            professionals.
          </p>
          <p>
            The Federal Skilled Worker Program (FSWP) is one of Canada's most
            popular immigration programs, designed to attract skilled workers
            from around the world who have the skills and experience to
            contribute to the Canadian economy. The program is managed through
            Express Entry, a streamlined system that allows eligible candidates
            to apply for Canadian permanent residency.
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Federal Skilled Worker Program (FSWP)
          </h2>
          <p>
            To meet the eligibility requirements for the Federal Skilled Worker
            Program FSWP, you must meet the following requirements:
          </p>
          <ul>
            <li>You must be between 18 and 45 years old.</li>
            <li>
              You must have at least one year of full-time post-secondary
              education or an equivalent qualification, assessed through an
              Educational Credential Assessment (ECA) for immigration purposes.
            </li>
            <li>
              A minimum level of approved language tests in English or French
              for writing, reading, listening, and speaking is essential.
            </li>
            <li>
              Must have at least 1 year of continuous work experience in a
              skilled occupation listed in NOC TEER categories 0, 1, 2, or 3.
              The work experience must be in the same type of job as the one you
              want to use for your immigration application.
            </li>
          </ul>

          <h3 className={styles.subheading} id="categories">
            TEER Categories and Examples of Jobs
          </h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>TEER</th>
                <th>Occupation Types</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TEER 0</td>
                <td>Management occupations</td>
                <td>
                  Advertising, marketing and public relations managers,
                  Financial managers
                </td>
              </tr>
              <tr>
                <td>TEER 1</td>
                <td>Occupations that usually require a university degree</td>
                <td>Financial advisors, Software engineers</td>
              </tr>
              <tr>
                <td>TEER 2</td>
                <td>
                  Occupations that usually require:
                  <ul>
                    <li>a college diploma</li>
                    <li>apprenticeship training of 2 or more years</li>
                    <li>supervisory occupations</li>
                  </ul>
                </td>
                <td>
                  Computer network and web technicians, Medical laboratory
                  technologists
                </td>
              </tr>
              <tr>
                <td>TEER 3</td>
                <td>
                  Occupations that usually require:
                  <ul>
                    <li>a college diploma</li>
                    <li>apprenticeship training of less than 2 years</li>
                    <li>more than 6 months of on-the-job training</li>
                  </ul>
                </td>
                <td>
                  Bakers, Dental assistants and dental laboratory assistants
                </td>
              </tr>
              <tr>
                <td>TEER 4</td>
                <td>
                  Occupations that usually require:
                  <ul>
                    <li>a high school diploma</li>
                    <li>several weeks of on-the-job training</li>
                  </ul>
                </td>
                <td>
                  Home child care providers, Retail salespersons and visual
                  merchandisers
                </td>
              </tr>
              <tr>
                <td>TEER 5</td>
                <td>
                  Occupations that usually need short-term work demonstration
                  and no formal education
                </td>
                <td>
                  Landscaping and grounds maintenance labourers, Delivery
                  service drivers and door-to-door distributors
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            You do not need a job offer to apply for the FSWP, but having a
            valid job offer from a Canadian employer may increase your chances
            of receiving an invitation to apply for permanent residency.
          </p>

          <section className={styles.expressEntry}>
            <h2 className={styles.subheading}>
              Assessment through a Federal Skilled Worker Program (FSWP)
              Calculator
            </h2>
            <p>
              Once you have met the minimum requirements for the FSWP, you will
              be assessed based on the Comprehensive Ranking System (CRS). The
              CRS is a points-based system that evaluates candidates on factors
              such as their age, education, language skills, work experience,
              and adaptability.
            </p>
            <button
              className={styles.button}
              onClick={() => (window.location.href = "/federal-skilled")}
            >
              FSWP Calculator
            </button>
          </section>
        </section>

        <section
          className={`${styles.expressEntry} ${styles.section}`}
          id="expressEntry"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry Federal Skilled Worker Program (FSWP) Draws History
          </h2>
          <p>
            For the latest updates on Express Entry draws,
            <Link to="/previous-draw-history" className={styles.link}>
              click here
            </Link>
            .
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="Process"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            How to Apply for Federal Skilled Worker Program (FSWP)
          </h2>
          <ol>
            <li>
              Create your profile on the Immigration, Refugees and Citizenship
              Canada (IRCC) website, or for a stress-free solution, let us
              handle your case for you.{" "}
              <Link
                to="https://book.brightlightimmigration.ca/calendar-page"
                className={styles.link}
              >
                Click here
              </Link>
              .
            </li>
            <li>
              Collect all required documentation to support your application,
              such as education certificates, language test results, work
              experience letters, and any other relevant documents.
            </li>
            <li>
              Place your profile in the Express Entry pool. Your CRS score will
              determine your position in the pool.
            </li>
            <li>
              You will receive an ITA if your CRS score is high enough and meets
              the requirements.
            </li>
            <li>
              A complete application for permanent residency submission will be
              required within 60 days of receiving the ITA.
            </li>
            <li>
              Provide additional documentation and undergo medical examinations
              as required. Your application will be processed, and a decision
              will be made.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>
            Common Reasons for Refusals of Federal Skilled Worker Program (FSWP)
          </h2>
          <ul>
            <li>
              You don’t have a Canadian high school diploma or equivalent,
              language proficiency in English or French, and skilled work
              experience in a NOC-listed occupation.
            </li>
            <li>
              Your Comprehensive Ranking System (CRS) score isn’t high enough.
            </li>
            <li>
              Criminal convictions, health issues, or security concerns may make
              you inadmissible. Exceptions and waivers may apply.
            </li>
            <li>
              You did not submit all the required documents and provided
              inaccurate information.
            </li>
            <li>
              You failed to provide sufficient proof of funds to support
              yourself or your family in Canada.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.support} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above or have doubts regarding your case and application, do not
            worry. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs is
            nearly 100%, achieved through a tailored approach to your specific
            case and using similar successful cases as precedents.
          </p>
          <p>
            At Brightlight Immigration, our dedicated team of visa application
            specialists will assist you from the start of the application
            process all the way to obtaining your PR. Start your process now.
          </p>
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

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
        </section> */}
        <section
          className={`${styles.section} ${styles.section}`}
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

export default FederalSkilledWorkerProgram;
