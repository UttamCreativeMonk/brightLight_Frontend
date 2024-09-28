import React, { useState } from "react";
import styles from "../styles/CanadianExperienceClass.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const CanadianExperienceClass = () => {
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
              <p onClick={() => scrollToSection("express-entry")}>
                Express Entry
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                {" "}
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                {" "}
                Refusal Reasons{" "}
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                {" "}
                Why Choose Us?{" "}
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                {" "}
                Testimonials{" "}
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading} id="about-program">
          Canadian Experience Class (CEC)
        </h1>

        <section className={styles.introduction}>
          <p>
            The Canadian Experience Class (CEC) is a permanent residency
            immigration program designed for skilled foreign workers who have
            gained Canadian work experience. It is one of the fastest and most
            popular pathways to Canadian permanent residency, with processing
            times typically taking 3-4 months.
          </p>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2 className={styles.subheading}>
            Eligibility Criteria for Canadian Experience Class (CEC)
          </h2>
          <ul>
            <li>
              At least one year of paid skilled work experience in Canada. This
              means your job must be categorized as skilled in the National
              Occupational Classification (NOC). You must have worked for at
              least 1,560 hours (30 hours per week for 52 weeks) over a 12-month
              period.
            </li>
            <li>
              Work experience must have been gained while authorized to work in
              Canada. Work experience gained while you were a visitor or student
              does not count.
            </li>
            <li>
              You must have performed the main duties of your job and been able
              to perform most of the duties listed in the lead statement of the
              occupational description for your job.
            </li>
            <li>
              A valid language test score for English or French is required,
              depending on the occupation.
            </li>
            <li>
              You should meet the minimum Canadian Experience Class
              Comprehensive Ranking System (CRS) score in the Express Entry
              system.
            </li>
          </ul>
        </section>

        <section className={styles.expressEntry} id="express-entry">
          <h2 className={styles.subheading}>
            Express Entry FSWP Draws History
          </h2>
          <p>
            For the latest updates on Express Entry draws,{" "}
            <Link to="/express-entry" className={styles.link}>
              click here
            </Link>
            .
          </p>
        </section>

        <section className={styles.applicationProcess} id="how-to-apply">
          <h2 className={styles.subheading}>
            How to Apply for the Canadian Experience Class (CEC) Program
          </h2>
          <ol>
            <li>
              Create an Express Entry profile and submit your information,
              including your work experience, language skills, and education.
              Alternatively, let us handle your case for you.{" "}
              <Link to="/book-appointment" className={styles.link}>
                Click here
              </Link>{" "}
              for a stress-free solution.
            </li>
            <li>
              Receive an invitation to apply (ITA) from IRCC. Note that only the
              highest-ranked candidates receive an ITA for permanent residence.
            </li>
            <li>
              Once you receive the ITA, submit your complete application,
              including supporting documents and fees, within 60 days.
            </li>
            <li>
              Wait for processing. IRCC will assess your application and decide
              whether to grant you permanent residence.
            </li>
          </ol>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
          <h2 className={styles.subheading}>
            Common Reasons for Refusals of Canadian Experience Class (CEC)
            Program
          </h2>
          <ul>
            <li>Incomplete application with inaccurate information.</li>
            <li>
              Failure to include essential paperwork, such as work experience
              letters, language test results, and your passport.
            </li>
            <li>
              Profile does not meet the minimum requirements for age, education,
              work experience, language skills, or job offer.
            </li>
            <li>
              Criminal convictions or health conditions that could make you
              inadmissible to Canada. Check your admissibility status with the
              Canadian government or let us handle it for you.{" "}
              <Link to="/book-appointment" className={styles.link}>
                Click here
              </Link>
              .
            </li>
            <li>
              Working in Canada without authorization or gaining work experience
              in Canada without temporary resident status.
            </li>
          </ul>
        </section>

        <section className={styles.support}>
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal or have doubts regarding your case
            and application, don't worry. With over a decade of experience, we
            specialize in handling Express Entry Programs. Our approval rate for
            these programs is nearly 100%, achieved through a tailored approach
            to your specific case and using similar successful cases as
            precedents.
          </p>
          <p>
            At Brightlight Immigration, our dedicated team of visa application
            specialists will assist you from the start of the application
            process all the way to obtaining your PR. Start your process now.
          </p>
          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>

        <section className={styles.whyChooseUs} id="why-choose-us">
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
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

export default CanadianExperienceClass;
