import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FederalSkilledTradesProgram.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FederalSkilledTradesProgram = () => {
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

    fetch("https://brightlight-node.onrender.com/federalSkillTradesProgMeta")
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("express-entry")}>Express Entry</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
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
          Federal Skilled Trades Program (FSTP)
        </h1>

        <section  className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
            If you're a skilled tradesperson with a passion for building,
            fixing, or creating, Canada's Federal Skilled Trades Program (FSTP)
            can open doors to a rewarding career and a fulfilling new life in
            Canada.
          </p>
          <p>
            The Federal Skilled Trades Program (FSTP) is an immigration pathway
            for skilled tradespeople who want to become permanent residents of
            Canada. It is one of several streams under the Express Entry
            immigration system, designed to address labor shortages in Canada's
            skilled trades sector. Skilled tradespeople are in high demand
            across Canada in various industries, including construction,
            manufacturing, and healthcare.
          </p>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for Federal Skilled Trades Program (FSTP)
          </h2>
          <p>If you're a skilled tradesperson looking to immigrate to Canada, the Federal Skilled Trades Program (FSTP) could be a great option for you. To be eligible, you must meet the following requirements:
          </p>
          <ul>
            <li>
              Two years of paid full-time work experience (or an equal amount of
              part-time work experience) in a skilled trade within the last five
              years.
            </li>
            <li>
              Your work experience must be in one of the following categories:
              <ul className={styles.subList}>
                <li>
                  Major Group 72: Technical Trades and Transportation Officers
                  and Controllers
                  <ul className={styles.subList02}>
                    <li>Excluding Sub-Major Group 726: Transportation Officers and Controllers
                    </li>
                  </ul>
                </li>
                <li>Major Group 73: General Trades</li>
                <li>
                  Major Group 82: Supervisors in Natural Resources, Agriculture,
                  and Related Production
                </li>
                <li>
                  Major Group 83: Occupations in Natural Resources and Related
                  Production
                </li>
                <li>
                  Major Group 92: Processing, Manufacturing, and Utilities
                  Supervisors, and Utilities Operators and Controllers
                </li>
                <li>
                  Major Group 93: Central Control and Process Operators and
                  Aircraft Assembly Assemblers and Inspectors
                </li>
                <li>Minor Group 6320: Cooks, Butchers, and Bakers</li>
                <li>Unit Group 62200: Chefs</li>
              </ul>
            </li>
            <li>
              Have a valid job offer from a Canadian employer or be certified in
              your trade by a recognized Canadian body.
            </li>
            <li>
              Meet the language requirements for English or French, as set out
              by IRCC.
            </li>
            <li>
              Have the ability to financially support yourself or your
              dependents in Canada.
            </li>
            <li>
              Be admissible to Canada, meaning you do not have any criminal
              convictions or health issues that would prevent you from living in
              Canada.
            </li>
            <li>
              Plan to reside outside the province of Quebec because Quebec
              selects its skilled workers independently.
            </li>
          </ul>
        </section>

        <section className={`${styles.expressEntry} ${styles.section}`} id="express-entry" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Express Entry FSTP Draws History
          </h2>
          <p>
            For the latest updates on Express Entry draws,
            <Link to="/previous-draw-history" className={styles.link}>
              click here
            </Link>
            .
          </p>
        </section>

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[4] = el} >
          <h2 className={styles.subheading}>
            How to Apply for the Federal Skilled Trades Program (FSTP)
          </h2>
          <ol>
            <li>
              Create an Express Entry profile and submit it to Immigration,
              Refugees and Citizenship Canada (IRCC). For a stress-free
              solution, let us handle your case for you.{" "}
              <Link
                to="https://book.brightlightimmigration.ca/calendar-page"
                className={styles.link}
              >
                Click here
              </Link>
              .
            </li>
            <li>
            After that, you will receive an invitation to apply (ITA) from IRCC. Note that ITAs are issued to candidates who score high enough on the Comprehensive Ranking System (CRS), which is a points-based system that assesses candidates' eligibility for the program.{" "}
             {" "}
              <Link to="/Federal-Skilled" className={styles.link}>
                click here
              </Link>
              {" "}
              you can find a link to a FSWP Calculator.
            </li>
            <li>
              Submit a complete application, including supporting documents such
              as work experience certificates, language test results, and
              credentials.
            </li>
            <li>
              Provide biometrics, which includes fingerprints and a photo.
            </li>
            <li>Obtain a medical exam and undergo security screening.</li>
          </ol>
        </section>

        <section className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>
            Common Reasons for Refusals of the Federal Skilled Trades Program
            (FSTP)
          </h2>
          <ul>
            <li>
              Inadequate qualifications: You do not have the necessary skills,
              education, or experience to perform the job duties.
            </li>
            <li>
              Insufficient language proficiency: Your language skills do not
              meet the demands of the position.
            </li>
            <li>
              Inadequate finances: You cannot show sufficient funds to support
              yourself or your family during their stay in the country.
            </li>
            <li>
              Incomplete or inaccurate application: Your application is missing
              essential documents or contains errors.
            </li>
            <li>
              Weak ties to your home country: You did not prove to have a strong
              connection to your home country, such as property or family
              obligations.
            </li>
          </ul>
        </section>

        <section className={`${styles.support} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[6] = el}>
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
          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>
{/* 
        <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el}>
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
          ref={(el) => (sectionsRef.current[7] = el)}
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

export default FederalSkilledTradesProgram;
