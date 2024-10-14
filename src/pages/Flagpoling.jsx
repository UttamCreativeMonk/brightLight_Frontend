import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Flagpoling.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Flagpoling = () => {
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

    fetch("https://brightlight-node.onrender.com/flagpolingMeta")
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
              <p onClick={() => scrollToSection("tips")}>Tips</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
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
          Flagpoling
        </h1>
        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
            Flagpoling is a legal process of exiting Canada and re-entering the
            country without physically crossing into the USA to obtain, change,
            or extend a valid status in Canada. It is commonly used to obtain a
            new temporary residence status, such as renewing a study permit,
            applying for a work permit, or finalizing the permanent residency
            (PR) process.
          </p>
          <p>
            Typically, temporary resident visa holders have the option to apply
            through online or paper applications. However, these applications
            can take weeks or even months to process. Therefore, sometimes
            people choose to save time by going to the port of entry (aka
            border). This allows for quick processing, which can be helpful for
            people who need their application processed quickly.
          </p>
        </section>

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>Benefits of Flagpoling</h2>
          <ul>
            <li>
              Flagpoling is a time-saving alternative to applying for a work or
              study permit through online or paper applications, where
              processing times can take weeks or even months or longer than what
              is mentioned on the IRCC website.
            </li>
            <li>
              You do not need to gather extensive documentation, complete
              complex and lengthy forms, etc. Instead, candidates can present
              their passport and supporting documents directly to a Canada
              Border Services Agency (CBSA) officer, attend the interview, and
              obtain the new permit on the spot.
            </li>
            <li>
              Many times, CBSA officers follow a more humane approach than IRCC
              officers and consider humanitarian and compassionate grounds in
              approving the application.
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
            Eligibility Criteria for Flagpoling
          </h2>
          <h4>The eligibility criteria for flagpoling are as follows:</h4>
          <ul>
            <li>
              You must be currently holding a valid visitor, study, or work
              permit.
            </li>
            <li>
              If your current status has expired, you must have applied for an
              extension online and have proof of application submission and
              receipt.
            </li>
            <li>
              Do not attempt flagpoling if you are out of status or have applied
              for restoration of status.
            </li>
            <li>
              You meet the requirements of the new permit that you are
              requesting as per IRCC guidelines.
            </li>
            <li>
              It is recommended that you carry original documents with you at
              the time when the CBSA officer interviews you.
            </li>
          </ul>
        </section>

        <section className={`${styles.tips} ${styles.section}`} id="tips" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>Don’t Forget This Important Tip</h2>
          <p>
            While flagpoling can be a helpful tool when used under the right
            circumstances, it's important to approach it with careful
            preparation and the right documentation. We strongly advocate for
            thorough preparation to maximize the benefits of this process.
            However, it's crucial to remember that flagpoling also comes with
            inherent risks. Potential denial of entry at both US and Canadian
            borders could lead to forced removal from Canada back to your home
            country. Additionally, flagpoling typically involves a detailed
            interview with a US immigration officer or CBSA border officer.
          </p>
        </section>

        <section className={`${styles.assistance} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            To avoid these risks and ensure a smooth flagpoling experience, we
            highly recommend hiring representation from a Regulated Canadian
            Immigration Consultant (RCIC). An RCIC can not only guide you on the
            necessary documents for flagpoling but also effectively prepare you
            for the Port of Entry and border interviews conducted by immigration
            officers.
          </p>
          <p>
            Brightlight Immigration is available to represent you at any Point
            of Entry in the Lower Mainland, British Columbia. Our experienced
            consultants will ensure you have the necessary documentation,
            provide tailored guidance, and assist you in effectively
            communicating your case to immigration officers.
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

        <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            We offer expert advice and personalized service to make your
            flagpoling experience as smooth as possible. Our team of experienced
            professionals will guide you through the process and ensure that you
            are well-prepared for every step, from gathering documentation to
            handling interviews.
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

export default Flagpoling;
