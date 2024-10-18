import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Cby.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Cby = () => {
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
    fetch("https://brightlight-node.onrender.com/cbyMeta")
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
    fetch("https://brightlight-node.onrender.com/cby")
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
         {pData?.heading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.description1}
          </p>
          <p>
          {pData?.description2}
          </p>
        </section>

        <section
          style={{ marginTop: "70px" }}
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
            <li>  {pData?.b6}</li>
            <li>
            {pData?.b7}
            </li>
            <li>
            {pData?.b8}
            </li>
          </ul>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.eligCritHeading}
          </h2>
          <p>
          {pData?.eligCritSubHead}
          </p>

          <h3 style={{ marginTop: "70px" }}>
          {pData?.eligReqHeading}
          </h3>

          {/* <h4>Applications Submitted Before March 19, 2024</h4> */}
          <div>
            <h4>{pData?.eligApplSubmHead1}</h4>
            <p style={{ marginTop: "-10px" }}>
            {pData?.eligApplSubmPara}
            </p>
            <ul
              style={{ marginTop: "30px", marginLeft: "40px" }}
              className={styles.list}
            >
              <li className={styles.listItem}>
              {pData?.as1}
              </li>
              <li className={styles.listItem}>
              {pData?.as2}
                <ul className={styles.subList}>
                  <li>
                    {" "}
                    {pData?.as2Sub1}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub2}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub3}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub4}
                  </li>
                </ul>
              </li>
            </ul>
            <p style={{ marginTop: "30px", fontWeight: "600" }}>
            {pData?.InternStuNotEligHeading}{" "}
            </p>
            <ul
              style={{
                marginTop: "10px",
                marginLeft: "40px",
                marginBottom: "40px",
              }}
              className={styles.list}
            >
              <li className={styles.listItem}>
              {pData?.isne1}
              </li>
              <li className={styles.listItem}>
              {pData?.isne2}
              </li>
              <li className={styles.listItem}>
              {pData?.isne3}
              </li>
            </ul>

            <h4>{pData?.eligApplSubmPara2}</h4>
            <p>
            {pData?.eligApplSubmPara2}
            </p>
            <ul style={{marginLeft: "40px"}} className={styles.list}>
              <li className={styles.listItem}>
              {pData?.as31}
              </li>
              <p>{pData?.as3Oor}</p>
              <p>
              {pData?.as32}
              </p>
              <li>
              {pData?.as4}
              </li>

              <li
                style={{ listStyle: "none", marginTop: "40px" }}
                className={styles.listItem}
              >
                <strong>Graduate programs</strong> are defined as follows:
                <ul className={styles.subList}>
                  <li>
                  {pData?.GradProgPara}
                  </li>
                </ul>
                <p style={{ listStyle: "none", marginTop: "40px" }}>
                  <strong>Professional degree programs</strong> are identified
                  under the following:
                </p>
                <ul
                  style={{
                    marginLeft: "40px",
                    marginTop: "10px",
                    marginBottom: "40px",
                  }}
                  className={styles.subList}
                >
                  <li>{pData?.pdp1}</li>
                  <li> {pData?.pdp2}</li>
                  <li> {pData?.pdp3}</li>
                  <li> {pData?.pdp4}</li>
                  <li> {pData?.pdp5}</li>
                  <li>{pData?.pdp6}</li>
                  <li>{pData?.pdp7}</li>
                  <li> {pData?.pdp8}</li>
                  <li> {pData?.pdp9}</li>
                </ul>
              </li>
            </ul>
            <p style={{ fontWeight: "600" }}>
              The international student is not eligible to apply if:
            </p>
            <ul style={{marginLeft: "40px"}}>
              <li>Not enrolled while residing in Canada.</li>
              <li>Enrolled in part-time studies.</li>
              <li>
                Not enrolled in a private post-secondary program/institution
                other than those listed
              </li>
            </ul>
          </div>
          <h3 className={styles.subheading} style={{ marginTop: "70px" }}>
            Eligibility Requirements for Accompanying Spouse or Common-law
            Partner
          </h3>
          <p>Your family member must meet following requirements:</p>
          <ol style={{marginLeft: "40px"}}>
            <li style={{ marginBottom: "10px" }}>
              <strong> General Eligibility:</strong> The applicant must meet
              general work permit criteria, including police and medical
              clearances, and not be inadmissible to Canada.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong> Relationship:</strong> A genuine relationship between the
              applicant and the study permit holder is required.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong> Proof of Spousal Relationship:</strong> Evidence must
              demonstrate the applicant's genuine status as the spouse or
              common-law partner of a valid study permit holder.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong> Additional Documentation:</strong> Supplementary proof is
              necessary to satisfy IRCC that the relationship was not primarily
              for status acquisition or is not genuine.
            </li>
            <li>
              <strong> Applicants in Canada:</strong> They must possess valid
              temporary resident status, have applied for an extension before
              its expiry (maintained status), or be eligible for restoration of
              status as a visitor, worker, or student. They must also be
              eligible to apply for a work permit from within Canada.
            </li>
          </ol>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[99] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.WhenToApplyHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.wa1}
            </li>
            <li>
            {pData?.wa2}
            </li>
            <li>
            {pData?.wa3}
            </li>
          </ul>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowToApply}
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
            <li>{pData?.ha4}</li>
            <li>
            {pData?.ha5}
            </li>
            <li>{pData?.ha6}</li>
          </ol>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.RefusalHeading}</h2>
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
          </ul>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.assistance} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.NeedAssisHeading}</h2>
          <p>
          {pData?.r1}
    <Link to="/contact-us">contact us</Link>.
    
          </p>
        </section>

        {/* <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el}>
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
          <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
        </section> */}
        <section
          style={{ marginTop: "70px" }}
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

export default Cby;
