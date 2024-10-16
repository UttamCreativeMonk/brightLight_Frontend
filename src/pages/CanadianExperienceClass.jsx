import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CanadianExperienceClass.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const CanadianExperienceClass = () => {
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
    fetch("https://brightlight-node.onrender.com/canadianExperienceClassMeta")
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
              <p onClick={() => scrollToSection("express-entry")}>
                Express Entry
              </p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Canadian Experience Class (CEC)
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            The Canadian Experience Class (CEC) is a permanent residency
            immigration program designed for skilled foreign workers who have
            gained Canadian work experience. It is one of the fastest and most
            popular pathways to Canadian permanent residency, with processing
            times typically taking 3-4 months.
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Canadian Experience Class (CEC)
          </h2>
          <p>
            To be eligible for the CEC, you must meet the following
            requirements:{" "}
          </p>
          <ul>
            <li>
              Have at least one year of paid skilled work experience in Canada.
              This means you must have worked in a job that is categorized as
              skilled in the National Occupational Classification (NOC). You
              must also have worked for at least 1,560 hours (30 hours per week
              for 52 weeks) over a 12-month period.
            </li>
            <li>
              Have gained your work experience while authorized to work in
              Canada. You must have been legally permitted to work in Canada
              while you were employed.
            </li>
            <li>
              You cannot count the work experience that you gained while you
              were a visitor or student.
            </li>
            <li>
              Have performed the main duties of your job and have been able to
              perform most of the duties listed in the lead statement of the
              occupational description for your job.
            </li>
            <li>
              A valid language test score for English or French is required,
              depending on the occupation.
            </li>
            <li>
              You should meet the minimum Canadian Experience Class
              Comprehensive Ranking System (CRS) score in the Express Entry
              system
            </li>
          </ul>
        </section>

        <section
          lassName={`${styles.expressEntry} ${styles.section}`}
          id="express-entry"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry FSWP Draws History
          </h2>
          <p>
            For the latest updates on Express Entry draws,{" "}
            <Link to="/previous-draw-history" className={styles.link}>
              click here
            </Link>
            .
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            How to Apply for the Canadian Experience Class (CEC) Program
          </h2>
          <ol>
            <li>
              Create an Express Entry profile and submit your information,
              including your work experience, language skills, and education. Or
              even better and stress-free solution, let us handle your case for
              you.{" "}
              <Link
                to="https://book.brightlightimmigration.ca/calendar-page"
                className={styles.link}
              >
                Click here
              </Link>{" "}
            </li>
            <li>
              Next, receive an invitation to apply from IRCC. Note that only the
              highest-ranked candidates receive an invitation to apply for
              permanent residence
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

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            Common Reasons for Refusals of Canadian Experience Class (CEC)
            Program
          </h2>
          <ul>
            <li>
              Your application is incomplete and has inaccurate information.
            </li>
            <li>
              You did not include the essential paperwork, like work experience
              letters, language test results, and your passport.
            </li>
            <li>
              Your profile may not be strong enough if it doesn't meet the
              minimum requirements for factors like age, education, work
              experience, language skills, and job offer.
            </li>
            <li>
              If you have any criminal convictions or health conditions that
              could make you inadmissible to Canada, check your admissibility
              status with the Canadian government to avoid any surprises. Or let
              us handle it for you.{" "}
              <Link
                to="https://book.brightlightimmigration.ca/calendar-page"
                className={styles.link}
              >
                Click here
              </Link>
              .
            </li>
            <li>You are a refugee claimant in Canada.</li>
            <li>
              Gained your work experience in Canada without temporary resident
              status
            </li>
            <li>You are working in Canada without authorization</li>
          </ul>
        </section>

        <section
          className={`${styles.support} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
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
          ref={(el) => (sectionsRef.current[7] = el)}
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

export default CanadianExperienceClass;
