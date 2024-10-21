import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CommonLawPartnerTemporary.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const CommonLawPartnerTemporary = () => {
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
    fetch("https://brightlight-node.onrender.com/comLawPartTempMeta")
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
    fetch("https://brightlight-node.onrender.com/commonLawPartnerTemporary")
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
          Open Work Permit for Spouse or Common-law Partner of a Temporary
          Foreign Worker
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.comLawPartTempHeading}
          </p>
          <p> {pData?.comLawPartTempPara2}</p>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.comLawPartTempLi1}
            </li>
            <li style={{marginTop: "10px", marginBottom: "20px"}}>
            {pData?.comLawPartTempLi2}
            </li>
          </ol>
          <p>
          {pData?.comLawPartTempPara3}
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.BenifitHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.b1}
            </li>
            <li>
            {pData?.b2}
            </li>
            <li>
            {pData?.b3}
            </li>
            <li>
            {pData?.b4}
            </li>
            <li>
            {pData?.b5}
            </li>
            <li>{pData?.b6}</li>
            <li>
            {pData?.b7}
            </li>
            <li>
            {pData?.b8}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <p>
          {pData?.EligSubHead}
          </p>

          <h3>{pData?.e1h1}</h3>
          <ul className={styles.requirementsList}>
            <h2>{pData?.eh1}</h2>
            <li>
              <strong>{pData?.es1h1Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>{pData?.es1h1Li1}</li>
                <li>
                {pData?.es1h1Li2}
                </li>
                <li>{pData?.es1h1Li3}</li>
              </ul>
            </li>
            <li>
              <strong>{pData?.es1h2Lih}</strong>
              <p>
              {pData?.es1h2Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es1h3Lih}</strong>
              <p>
              {pData?.es1h3Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es1h4Lih}</strong>
              <p>
              {pData?.es1h4Li1}
              </p>
            </li>
            <table className={styles.wageTable}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th className={styles.headerProvince}>Province/Territory</th>
                  <th className={styles.headerWage}>
                    Median Hourly Wages (April 2, 2024)
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                <tr className={styles.rowAlberta}>
                  <td className={styles.cellProvince}>Alberta</td>
                  <td className={styles.cellWage}>$29.50</td>
                </tr>
                <tr className={styles.rowBC}>
                  <td className={styles.cellProvince}>British Columbia</td>
                  <td className={styles.cellWage}>$28.85</td>
                </tr>
                <tr className={styles.rowManitoba}>
                  <td className={styles.cellProvince}>Manitoba</td>
                  <td className={styles.cellWage}>$25.00</td>
                </tr>
                <tr className={styles.rowNB}>
                  <td className={styles.cellProvince}>New Brunswick</td>
                  <td className={styles.cellWage}>$24.04</td>
                </tr>
                <tr className={styles.rowNL}>
                  <td className={styles.cellProvince}>
                    Newfoundland and Labrador
                  </td>
                  <td className={styles.cellWage}>$26.00</td>
                </tr>
                <tr className={styles.rowNWT}>
                  <td className={styles.cellProvince}>Northwest Territories</td>
                  <td className={styles.cellWage}>$39.24</td>
                </tr>
                <tr className={styles.rowNS}>
                  <td className={styles.cellProvince}>Nova Scotia</td>
                  <td className={styles.cellWage}>$24.00</td>
                </tr>
                <tr className={styles.rowNunavut}>
                  <td className={styles.cellProvince}>Nunavut</td>
                  <td className={styles.cellWage}>$35.00</td>
                </tr>
                <tr className={styles.rowOntario}>
                  <td className={styles.cellProvince}>Ontario</td>
                  <td className={styles.cellWage}>$28.39</td>
                </tr>
                <tr className={styles.rowPEI}>
                  <td className={styles.cellProvince}>Prince Edward Island</td>
                  <td className={styles.cellWage}>$24.00</td>
                </tr>
                <tr className={styles.rowQuebec}>
                  <td className={styles.cellProvince}>Quebec</td>
                  <td className={styles.cellWage}>$27.47</td>
                </tr>
                <tr className={styles.rowSaskatchewan}>
                  <td className={styles.cellProvince}>Saskatchewan</td>
                  <td className={styles.cellWage}>$27.00</td>
                </tr>
                <tr className={styles.rowYukon}>
                  <td className={styles.cellProvince}>Yukon</td>
                  <td className={styles.cellWage}>$36.00</td>
                </tr>
              </tbody>
            </table>

            <li>
              <strong>{pData?.es1h5Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>
                {pData?.es1h5Li1}
                </li>
                <li>  {pData?.es1h5Li2}</li>
                <li>
                {pData?.es1h5Li3}
                </li>
                <li>
                {pData?.es1h5Li4}
                </li>
                <li>
                {pData?.es1h5Li5}
                </li>
                <li>{pData?.es1h5Li6}</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.validWorkLiHead}>
          {pData?.e2h2}
          </h3>
          <ul className={styles.requirementsList}>
            <li>
              <strong>{pData?.eh2}</strong>
              <p>{pData?.es2h6Lih}</p>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>{pData?.es2h6Li1}</li>
                <li>
                {pData?.es2h6Li2}
                </li>
                <li>  {pData?.es2h6Li3}</li>
              </ul>
            </li>
            <li>
              <strong>  {pData?.es2h8Lih}</strong>
              <p>
              {pData?.es2h7Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h8Lih}</strong>
              <p>
              {pData?.es2h8Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h9Lih}</strong>
              <p>
              {pData?.es2h9Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h10Lih}</strong>
              <p>
              {pData?.es2h10Li1}
              </p>
            </li>
            <li>
              <strong>
              {pData?.es2h11Ph}
              </strong>
              <p>
              {pData?.es2h11P1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h12Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>
                {pData?.es2h12Li1}
                </li>
                <li>
                {pData?.es2h12Li2}
                </li>
                <li>
                {pData?.es2h12Li3}
                </li>
                <li>
                {pData?.es2h12Li4}
                </li>
                <li>   {pData?.es2h12Li5}</li>
                <li>   {pData?.es2h12Li6}</li>
                <li>
                {pData?.es2h12Li7}
                </li>
                <li>
                {pData?.es2h12Li8}
                </li>
              </ul>
            </li>
          </ul>
        </section>
        
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <h2>{pData?.FamMembHeading}</h2>
          <p className={styles.testPara}>
          {pData?.FamMembSubHead}
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.FamMembSubLi1}
            </li>
            <li>
            {pData?.FamMembSubLi2}
            </li>
            <li>
            {pData?.FamMembSubLi3}
            </li>
          </ul>
        </section>
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
          {pData?.HowApplyHeading}
          </h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.ha1}
            </li>
            <li>
            {pData?.ha2}
            </li>
            <li>
            {pData?.ha3}
            </li>
            <li>
            {pData?.ha4}
            </li>
            <li>{pData?.ha5}</li>
            <li>
            {pData?.ha6}
            </li>
            <li>{pData?.ha7}</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
            <li>
            {pData?.r4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>   {pData?.NeedAssisHeading}</h2>
          <p>
          {pData?.NeedAssisPara} {" "}
            <Link className={styles.contactUS} to="/contact-us">
              contact us
            </Link> {" "}

          </p>
        </section>
{/* 
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>

        </section> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>
      </div>
      <div id="faqs">
        <FAQ />
      </div>{" "}
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

export default CommonLawPartnerTemporary;
