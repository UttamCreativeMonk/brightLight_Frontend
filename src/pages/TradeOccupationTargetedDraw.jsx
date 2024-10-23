import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TradeOccupationTargetedDraw.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const TradeOccupationTargetedDraw = () => {
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
    fetch("https://brightlight-node.onrender.com/temporaryResidentPermMeta")
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
    fetch("https://brightlight-node.onrender.com/tradeOccupationTargetedDraw")
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
              <p onClick={() => scrollToSection("eligible")}>Eligible</p>
              <p onClick={() => scrollToSection("trade-occupations-category")}>
                Trade Occupations Category
              </p>
              <p
                onClick={() =>
                  scrollToSection("criteria-trade-occupations-category")
                }
              >
                Criteria Trade Occupation
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
          {pData?.tradeOccupationTargDrawHeading}
        </h1>

        <div
          className={`${styles.introduction} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.tradeOccupationTargDrawPara}
          </p>
        </div>

        <div
          className={`${styles.eligibility} ${styles.section}`}
          id="eligible"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityFirstHeading}
          </h2>
          <p>
          {pData?.EligFirstSubHead}
          </p>
          <ol
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <li>
            {pData?.EligPara1}
            </li>
            <li>
            {pData?.EligPara2}
              <ul className={styles.subheadingLink}>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                  >
                    Federal Skilled Worker Program (FSW)
                  </button>
                  {pData?.EligPara2Li1}
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  {pData?.EligPara2Li2}
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-trades-program")
                    }
                  >
                    Federal Skilled Trades Program (FSTP)
                  </button>
                  {pData?.EligPara2Li3}
                </li>
              </ul>
            </li>
          </ol>
          <p>
          {pData?.EligPara3}
          </p>
        </div>

        <div
          className={`${styles.tradeEligibility} ${styles.section}`}
          id="trade-occupations-category"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
           {pData?.EligCritHeading}
          </h2>
          <p>{pData?.EligCritSubHead}</p>
          <ul>
            <li>
            {pData?.ec1}
            </li>
            <li>
            {pData?.ec2}
            </li>
            <li>{pData?.ec3}</li>
          </ul>
          <p>
            Here is the list of eligible NOCs:{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              className={styles.link}
            >
              Eligible NOCs List
            </a>
          </p>
        </div>

        <div
          className={`${styles.tableContainer} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2
            className={styles.subheading}
            id="criteria-trade-occupations-category"
          >
             {pData?.EligTradeOccuTableHeading}
          </h2>
          <table
            className={`${styles.table} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <thead>
              <tr>
                <th>  {pData?.etoT1h1}</th>
                <th> {pData?.etoT2h2}</th>
                <th>{pData?.etoT3h3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>  {pData?.etoT1Li1}</td>
                <td> {pData?.etoT2Li1}</td>
                <td>{pData?.etoT3Li1}</td>
              </tr>
              <tr>
                <td>  {pData?.etoT1Li2}</td>
                <td>{pData?.etoT2Li2}</td>
                <td>{pData?.etoT3Li2}</td>
              </tr>
              <tr>
                <td>{pData?.etoT1Li3}</td>
                <td>{pData?.etoT2Li3}</td>
                <td>{pData?.etoT3Li3}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li4}</td>
                <td>{pData?.etoT2Li4}</td>
                <td>{pData?.etoT3Li4}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li5}</td>
                <td>{pData?.etoT2Li5}</td>
                <td>{pData?.etoT3Li5}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li6}</td>
                <td>{pData?.etoT2Li6}</td>
                <td>{pData?.etoT3Li6}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li7}</td>
                <td>{pData?.etoT2Li7}</td>
                <td>{pData?.etoT3Li7}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li8}</td>
                <td>{pData?.etoT2Li8}</td>
                <td>{pData?.etoT3Li8}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li9}</td>
                <td>{pData?.etoT2Li9}</td>
                <td>{pData?.etoT3Li9}</td>
              </tr>
              <tr>
                <td> {pData?.etoT1Li10}</td>
                <td>{pData?.etoT2Li10}</td>
                <td>{pData?.etoT3Li10}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className={`${styles.drawHistory} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.ExpressEntryHeading}
          </h2>
          <p>
          {pData?.ExpressEntryPara}
          </p>

          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </div>

        <div
          className={`${styles.contact} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p>
          {pData?.s2}
          </p>

          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </button>
        </div>

        {/* <div
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Here is where you can describe why clients should choose your
            services over others. Highlight your unique selling points, such as
            personalized service, high success rates, and expert knowledge.
          </p>
        </div> */}

      <section
      
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}>
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
      <button
          className={styles.Bookbutton}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
        
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

export default TradeOccupationTargetedDraw;
