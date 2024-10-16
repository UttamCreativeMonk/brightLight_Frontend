import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SuperVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const SuperVisa = () => {
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
    fetch("https://brightlight-node.onrender.com/superVisaMeta")
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("income-table")}>Income Table</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
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
          Super Visa
        </h1>

        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
            The Super Visa is a temporary visa program offered to parents and
            grandparents of Canadian citizens or permanent residents.
          </p>
        </section>

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>Benefits of Super Visa</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              It allows them to visit their children or grandchildren in Canada
              for up to five continuous years from their first arrival, with no
              requirement to extend their status during this five-year stay.
            </li>
            <li>
              This is a multiple-entry visa option, granting multiple entries
              over up to 10 years or until the passport expires.
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for Super Visa
          </h2>
          <p>
            To meet the eligibility requirements for a Super Visa, you as the
            sponsor (child or grandchild in Canada) must:
          </p>
          <ul>
            <li>Be a Canadian citizen or permanent resident of Canada.</li>
            <li>
              Provide proof of your relationship with your parents or
              grandparents.
            </li>
            <li>
              Meet the income requirements set by the Government of Canada.
              Check the income requirement in the chart below:
            </li>
            <li>
              Provide proof that you have medical insurance for your
              parents/grandparents from a Canadian insurance company. The
              insurance must meet the following criteria:
              <ul className={styles.subList}> 
                <li>Valid for at least one year from the date of entry.</li>
                <li>Coverage of at least $100,000.</li>

              </ul>
              <li>
                  Proof that the medical insurance has been paid in full or that
                  monthly payments have been set up.
                </li>
            </li>
          </ul>

          <h3>Apart from these basic requirements</h3>
          <h4>There are some additional requirements that your parents/grandparents will need to meet:</h4>
          <ul>
            <li>
              Their Super Visa application must be submitted from outside
              Canada.
            </li>
            <li>They must pass the immigration medical exam to qualify.</li>
            <li>
              They must meet the requirement to pass a security and health
              eligibility check.
            </li>
            <li>
              If they are inadmissible to Canada, they do not qualify for this
              program.
            </li>
          </ul>
        </section>

        <section className={`${styles.incomeTable} ${styles.section}`} id="income-table" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>Super Visa Income Table</h2>
          <h4>
            Minimum necessary income requirements Updated as of June 3, 2024:
          </h4>
          <h4>Low Income Cut-Off (LICO):</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size of Family Unit</th>
                <th>Minimum Necessary Gross Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 person (your child or grandchild)</td>
                <td>$29,380</td>
              </tr>
              <tr>
                <td>2 persons</td>
                <td>$36,576</td>
              </tr>
              <tr>
                <td>3 persons</td>
                <td>$44,966</td>
              </tr>
              <tr>
                <td>4 persons</td>
                <td>$54,594</td>
              </tr>
              <tr>
                <td>5 persons</td>
                <td>$61,920</td>
              </tr>
              <tr>
                <td>6 persons</td>
                <td>$69,834</td>
              </tr>
              <tr>
                <td>7 or more</td>
                <td>$77,750</td>
              </tr>
              <tr>
                <td>More than 7 persons, for each additional person, add</td>
                <td>$7,916</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>How to Apply</h2>
          <h4>To start the application process, there are several forms and steps that you, as the applicant, will need to complete. The steps are as follows:</h4>
          <ol>
            <li>
              Check your income requirements to ensure you meet the latest
              standards.
            </li>
            <li>
              Obtain upfront medical clearance from a doctor authorized by IRCC.
            </li>
            <li>
              Secure medical insurance that complies with IRCC guidelines.
            </li>
            <li>
              Complete all required documents for the Super Visa application.
            </li>
            <li>Submit your Super Visa application.</li>
          </ol>
        </section>

        <section  className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>Common Reasons for Refusal</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              Sponsor does not have sufficient financial support based on family
              size. This is a common reason for refusal because you may have
              miscalculated your funds based on the income chart and family
              size.
            </li>
            <li>
              Immigration officer feels that your ties to your home country are
              not strong. This means you have not demonstrated strong
              connections to your home country, such as a job, family, and
              property.
            </li>
            <li>
              Immigration officer feels that you will not leave Canada at the
              end of your stay. This means the officer believes you have
              intentions to immigrate to Canada permanently.
            </li>
            <li>
              You have previous refusals from IRCC that have not been explained
              in the current application submission. This means you have prior
              applications that were denied and you have not provided a
              satisfactory explanation for those refusals.
            </li>
            <li>
              Your medical insurance coverage was inadequate according to the
              set requirements. This means the insurance policy you provided
              does not meet the minimum coverage standards required for Super
              Visa holders.
            </li>
            <li>
              Documents you provided were either incomplete or inaccurate. This
              means the documents you submitted were not complete or contained
              errors, which may lead to refusal and even misrepresentation
              charges.
            </li>
          </ul>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have got approvals for clients who
            had multiple previous refusals. We achieve this with a tailored
            approach to your specific case, addressing each concern that the
            officer has listed in previous refusals. We use case law and find
            similar cases to your circumstances that had positive results, and
            we use them as precedents in cases we work on. This is why we have a
            high success rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa. Start your
            process now.
          </p>
        </section>

        {/* <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el} >
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

export default SuperVisa;
