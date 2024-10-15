import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/DependentChildren.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const DependentChildren = () => {
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
    fetch("https://brightlight-node.onrender.com/dependentChildMeta")
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
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Canada’s Dependent Children Sponsorship Program</h1>
          <p style={{ textAlign: "center" }}>
            The Dependent Child Program helps families stay together and gives
            your child the chance to go to good schools in Canada, grow up in a
            safe place, and be successful in the future.
          </p>
          <p style={{ textAlign: "center" }}>
            The Dependent Children Program allows Canadian citizens and
            permanent residents to bring their unmarried children under the age
            of 22 to Canada as permanent residents.
          </p>
        </header>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Eligibility requirements for the dependent child:</h2>
          <h4>
            The child must be under the age of 22 on the date the sponsorship
            application is submitted.
          </h4>
          {/* <h3 className={styles.marginTop}>For the Dependent Child:</h3> */}
          <ul style={{ marginLeft: "40px" }}>
            <li>
              The child must be a biological or adopted child of a Canadian
              citizen or permanent resident sponsoring them.
            </li>
            <li>
              The child must be unmarried and not in a common-law relationship
              on the date the sponsorship application is submitted and
              throughout the sponsorship process.
            </li>
          </ul>
          <h2 className={styles.marginTop}>
            Eligibility requirements for the sponsor:
          </h2>
          <ul>
            <li>
              You must have an annual income that meets the Canadian income
              requirements for sponsorship.
            </li>
            <li>
              You should have sufficient funds and assets to support your child.
            </li>
            <li>
              You must have adequate accommodation for your child to live.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>How to apply for the Dependent Children Sponsorship Program?</h2>
          <ol>
            <li>
              Collect and submit a variety of documents to support your
              application, such as proof of identity, proof of relationship with
              your child, financial documentation, and accommodation details.
            </li>
            <li>
              You and your child must attend biometrics appointments at
              designated Service Canada locations to provide fingerprints and
              photographs for processing.
            </li>
            <li>
              If the application is approved, your child will be issued a visa
              to travel to Canada.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>
            Common reasons for refusals of Canada’s Dependent Children
            Sponsorship Program:
          </h2>
          <ul>
            <li>
              Fails to meet the eligibility criteria for the DC Program, such as
              being a Canadian citizen or permanent resident, having the
              financial means to support the sponsored child, or having a clean
              criminal record.
            </li>
            <li>
              Your child is not under the age of 22 or is married or in a
              common-law relationship.
            </li>
            <li>
              You or your child may have provided false or misleading
              information on their application.
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

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
          ref={(el) => (sectionsRef.current[9] = el)}
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

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Still Not Sure?</h2>
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
            application process to obtaining your visa.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Start your process now
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

export default DependentChildren;
