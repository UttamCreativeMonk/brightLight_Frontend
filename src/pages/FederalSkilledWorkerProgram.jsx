import React, { useState } from "react";
import styles from "../styles/FederalSkilledWorkerProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const FederalSkilledWorkerProgram = () => {
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("process")}>Process</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment{" "}
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                {" "}
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                {" "}
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading} id="about-program">
          Federal Skilled Worker Program (FSWP)
        </h1>

        <section className={styles.introduction}>
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

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>
            Eligibility Criteria for Federal Skilled Worker Program (FSWP)
          </h2>
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

          <Link to="/federal-skilled" className={styles.button}>
            FSWP Calculator
          </Link>
        </section>

        <section className={styles.expressEntry}>
          <h2 className={styles.subheading}>
            Express Entry Federal Skilled Worker Program (FSWP) Draws History
          </h2>
          <p>
            For the latest updates on Express Entry draws,{" "}
            <Link to="/express-entry" className={styles.link}>
              click here
            </Link>
            .
          </p>
        </section>

        <section className={styles.applicationProcess} id="Process">
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
              Submit a complete application for permanent residency within 60
              days of receiving the ITA.
            </li>
            <li>
              Provide additional documentation and undergo medical examinations
              as required. Your application will be processed, and a decision
              will be made.
            </li>
          </ol>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
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

        <section className={styles.support}>
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
          <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>
            Book Appointment
          </Link>
        </section>

        <section className={styles.whyChooseUs} id="why-choose-us">
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
          <div className={styles.testimonials}>
            <h3>Client Testimonials</h3>
            <div className={styles.videoTestimonials}>
              {/* Video testimonials */}
            </div>
            <div className={styles.writtenTestimonials}>
              {/* Written testimonials */}
            </div>
          </div>
        </section>
      </div>
      <Footer1 />
    </>
  );
};

export default FederalSkilledWorkerProgram;
