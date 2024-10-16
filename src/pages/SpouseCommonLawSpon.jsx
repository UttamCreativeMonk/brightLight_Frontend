import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SpouseCommonLawSpon.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const SpouseCommonLawSpon = () => {
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
    fetch("https://brightlight-node.onrender.com/spouseCommLawSponMeta")
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
              <p onClick={() => scrollToSection("3-pathways")}>3 Pathways</p>
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
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          Spouse and Common-Law Partner Sponsorship Program
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            The Canadian government understands the importance of bringing loved
            ones together, and its Family reunification and sponsorship program
            plays a vital role in reuniting spouses, and common-law partners
            with their families in Canada.
          </p>
          <p>
            As a Canadian citizen or permanent resident , you may be eligible to
            sponsor your spouse or common-law partner to become a permanent
            resident and build a life together in this vibrant nation. Whether
            you've met your partner abroad or have been separated by distance,
            Canada's Family Class sponsorship program offers a pathway to
            reunite with your loved ones and create a fulfilling future
            together. If you are eligible to sponsor your spouse or common-law
            partner, you will be responsible for their financial well-being for
            quite some time after they become permanent residents. This means
            that you will need to be able to provide them with basic needs. You
            will also need to be able to show that you can support yourself and
            your family financially.
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="3-pathways"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            3 main pathways for sponsoring a Spouse or Common-law Partner:
          </h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              <button style={{display: "flex", margin: "0"}} onClick={() => (window.location.href = "/")}>
                Spouse or Common-Law Partner IN CANADA{" "}
              </button>
            </li>
            <li>
              <button style={{display: "flex", margin: "0"}} onClick={() => (window.location.href = "/")}>
                Spouse or Common-Law Partner IN CANADA{" "}
              </button>
            </li>
            <li>
              <button style={{display: "flex", margin: "0"}} onClick={() => (window.location.href = "/")}>
                Spouse or Common-Law Partner IN CANADA{" "}
              </button>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility criteria for sponsoring your Spouse or Common-law
            Partner for Permanent Residence in Canada:
          </h2>
          <ul>
            <li>You must be a Canadian citizen or permanent resident. </li>
            <li>
              You must show that you have the financial means to support your
              spouse or partner financially after they arrive in Canada.
            </li>
            <li>
              You must provide evidence to prove that your relationship with
              your spouse or partner is genuine and that it meets the definition
              of a spousal or common-law partnership under Canadian immigration
              law.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            How to apply to sponsoring your Spouse or Common-law Partner?
          </h2>
          <ol>
            <li>
              You will need to submit a comprehensive application package to
              IRCC, including marriage certificates, proof of cohabitation (such
              as lease agreements, joint bank statements, or utility bills),
              photographs of you and your spouse or partner together, letters
              from friends and family testifying to your relationship, etc.
            </li>
            <li>
              IRCC will review your application to ensure you meet all
              eligibility requirements and assess the genuineness of your
              relationship.
            </li>
            <li>
              If your application is approved, your spouse or partner will
              receive an invitation to apply for permanent residence. Once they
              complete the application and meet all requirements, they will be
              granted permanent residency status.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            Common reasons for refusals of sponsoring a Spouse or Common-law
            Partner
          </h2>
          <h4>Missing or incomplete documentation.</h4>
          <ul>
            <li>
              IRCC is highly cautious against marriage of convenience
              arrangements, where a relationship is entered into primarily for
              immigration purposes. If IRCC suspects that this is the case, your
              application will be refused.
            </li>
            <li>
              You fail to show your ability to financially support yourself,
              your spouse, or your partner.
            </li>
            <li>
              If either you or your sponsored person has a criminal record, they
              may be inadmissible to Canada.
            </li>
          </ul>
        </section>

        

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>Still not sure?</h2>
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
          <p style={{ marginTop: "20px" }}>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process to obtaining your visa. Start your process now.
          </p>
          <button
            id="book-appointment"
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
          id="why-choose-u"
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

export default SpouseCommonLawSpon;
