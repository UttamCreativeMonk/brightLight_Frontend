import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LowWageLmia.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const LowWageLmia = () => {
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
    fetch("https://brightlight-node.onrender.com/lowWageLmiaMeta")
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
    fetch("https://brightlight-node.onrender.com/lowWageLmia")
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
              <p onClick={() => scrollToSection("noc")}>NOC</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("differences")}>Differences</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
          <h1>Low-wage/High-wage LMIA</h1>
        </header>
        <section className={styles.intro}>
          <p>
            Low-wage/High-wage LMIAs are used by the employer to fill the
            immediate labor shortage in their business. Whether to apply for
            low-wage or high-wage LMIA, you must understand the following three
            key aspects related to wages in Canada.
          </p>
          <ol
            style={{
              marginTop: "0px",
              marginLeft: "40px",
              marginBottom: "30px",
            }}
          >
            <li>{pData?.LowWageSubHeadList1}</li>
            <li>{pData?.LowWageSubHeadList2}</li>
            <li>{pData?.LowWageSubHeadList3}</li>
          </ol>
        </section>
        <section
          className={`${styles.noc} ${styles.section}`}
          id="noc"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.NationalHeading}</h2>
          <p>
          {pData?.NationalPara}
          </p>
        </section>
        <section
          className={`${styles.prevailingWage} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.PrevailingHeading}</h2>
          <p>
          {pData?.PrevailingPara}
          </p>
        </section>
        <section
          className={`${styles.provincialWage} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.ProvincialHeading}</h2>
          <p>
          {pData?.ProvincialPara1}
          </p>
          <table className={styles.wageTable}>
            <thead>
              <tr>
                <th>{pData?.ProvTeriTableHeading}</th>
                <th>{pData?.MediHouTableHeading}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.ProvTeriTable1}</td>
                <td>{pData?.MediHouTable1}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable2}</td>
                <td>{pData?.MediHouTable2}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable3}</td>
                <td>{pData?.MediHouTable3}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable4}</td>
                <td>{pData?.MediHouTable4}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable5}</td>
                <td>{pData?.MediHouTable5}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable6}</td>
                <td>{pData?.MediHouTable6}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable7}</td>
                <td>{pData?.MediHouTable7}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable8}</td>
                <td>{pData?.MediHouTable8}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable9}</td>
                <td>{pData?.MediHouTable9}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable10}</td>
                <td>{pData?.MediHouTable10}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable11}</td>
                <td>{pData?.MediHouTable11}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable12}</td>
                <td>{pData?.MediHouTable12}</td>
              </tr>
              <tr>
                <td>{pData?.ProvTeriTable13}</td>
                <td>{pData?.MediHouTable13}</td>
              </tr>
            </tbody>
          </table>
          <p>
          {pData?.ProvincialPara2}{" "}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada Employment and Social Development
            </a>
          </p>
        </section>
        <section
          className={`${styles.highWageLMIA} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>{pData?.HighWageHeading}</h2>
          <p>
          {pData?.HighWagePara}
          </p>
        </section>
        <section
          className={`${styles.lowWageLMIA} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Low-wage LMIA</h2>
          <p>
            This LMIA is for occupations that pay an hourly wage that is below
            the Provincial/territorial Median Hourly Wage. It can be of any NOC
            TEER Code. There is a cap on how many foreign workers an employer
            can hire on low-wage LMIAs.
          </p>
        </section>
        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>{pData?.BenefitsHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.BenList1}
            </li>
            <li>
            {pData?.BenList2}
            </li>
            <li>
            {pData?.BenList3}
            </li>
            <li>
            {pData?.BenList4}
            </li>
          </ul>
        </section>
        <section
          className={`${styles.applicationSteps} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>{pData?.HowtoApplyHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.HowAppList1}
            </li>
            <li>
            {pData?.HowAppList2}
            </li>
            <li>
            {pData?.HowAppList3}
              <ul
                style={{
                  marginTop: "20px",
                  marginLeft: "40px",
                  marginBottom: "30px",
                }}
              >
                <li>{pData?.HowAppList3Sub1}</li>
                <li>{pData?.HowAppList3Sub2}</li>
                <li>{pData?.HowAppList3Sub3}</li>
                <li> {pData?.HowAppList3Sub4}</li>
                <li> {pData?.HowAppList3Sub5}</li>
                <li>{pData?.HowAppList3Sub6}</li>
                <li> {pData?.HowAppList3Sub7}</li>
                <li> {pData?.HowAppList3Sub8}</li>
                <li>{pData?.HowAppList3Sub9}</li>
                <li>{pData?.HowAppList3Sub10}</li>
                <li>{pData?.HowAppList3Sub11}</li>
              </ul>
            </li>
            <li>{pData?.HowAppList4}</li>
            <li>{pData?.HowAppList5}</li>
            <li>{pData?.HowAppList6}</li>
            <li>{pData?.HowAppList7}</li>
          </ol>
        </section>
        <section
          className={`${styles.differences} ${styles.section}`}
          id="differences"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2>{pData?.DifferencesHeading}</h2>
          <table className={styles.differencesTable}>
            <thead>
              <tr>
                <th>{pData?.DiffTableInnerHead1}</th>
                <th>{pData?.DiffTableInnerHead2}</th>
                <th>{pData?.DiffTableInnerHead3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.DiffTable1Inner1}</td>
                <td>
                {pData?.DiffTable2Inner1}
                </td>
                <td>{pData?.DiffTable3Inner1}</td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner2}</td>
                <td>{pData?.DiffTable2Inner2}</td>
                <td>{pData?.DiffTable3Inner2}</td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner3}</td>
                <td>
                {pData?.DiffTable2Inner3}
                  <br />
                  {/* British Columbia: $28.85 */}
                </td>
                <td>{pData?.DiffTable3Inner3}</td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner4}</td>
                <td>
                {pData?.DiffTable2Inner4}
                  <br />
                  May have different or additional requirements for
                  transportation, housing, and healthcare of workers.
                  <br />
                  Generally aimed at skilled positions.
                </td>
                <td>
                  Typically less stringent recruitment requirements.
                  <br />
                  May involve caps on the number of TFWs or restrictions based
                  on the sector or region.
                  <br />
                  Generally aimed at lower-skilled, lower-paid positions.
                </td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner5}</td>
                <td>
                {pData?.DiffTable2Inner5}
                </td>
                <td>
                {pData?.DiffTable3Inner5}
                </td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner6}</td>
                <td>
                {pData?.DiffTable2Inner6}
                </td>
                <td>
                {pData?.DiffTable3Inner6}
                </td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner7}</td>
                <td>
                {pData?.DiffTable2Inner7}
                </td>
                <td>
                {pData?.DiffTable3Inner7}
                </td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner8}</td>
                <td>
                {pData?.DiffTable2Inner8}
                </td>
                <td>
                {pData?.DiffTable3Inner8}
                </td>
              </tr>
              <tr>
                <td>{pData?.DiffTable1Inner9}</td>
                <td>
                {pData?.DiffTable2Inner9}
                </td>
                <td>
                {pData?.DiffTable3Inner9}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>
           {pData?.RefusalHeading}
          </h2>
          <h4>
            Over the years, Service Canada officers have become very strict
            about the employers meeting the requirements of the program.
          </h4>
          <h4>Please see below the common reasons for refusals:</h4>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>{pData?.r4}</li>
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
            <li>
            {pData?.r9}
            </li>
            <li>
            {pData?.r10}.
            </li>
            <li>
            {pData?.r11}
            </li>
            <li>
            {pData?.r12}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <h2> {pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara1}
          </p>
          <p style={{ marginTop: "20px" }}>
          {pData?.StillNotSurePara2}
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
          ref={(el) => (sectionsRef.current[65] = el)}
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

export default LowWageLmia;
