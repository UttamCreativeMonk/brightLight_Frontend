import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BusinessVisitorVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const BusinessVisitorVisa = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData, setPData] = useState([]);

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
    fetch("https://brightlight-node.onrender.com/buisinessVisitorVisaMeta")
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
    fetch("https://brightlight-node.onrender.com/buisinessVisitorVisa")
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

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  // Example usage
  const fetchedValue = pData?.e3;
  const strongText = extractStrongText(fetchedValue);
  const remainingText = extractRemainingText(fetchedValue);

  const fetchedValue1 = pData?.ActivitiesSubPara;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.e4;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.e5;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

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
              {/* <p onClick={() => scrollToSection("activities")}>Activities</p> */}
              {/* <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              {/* <p onClick={() => scrollToSection("event-codes")}>Event Codes</p> */}
              <p onClick={() => scrollToSection("essential-documents")}>
                Essential Documents
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
          {pData?.buisinessVisitorVisaaHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.buisinessVisitorVisaSubHead}</h2>
          <p>{pData?.buisinessVisitorVisaPara}</p>
        </section>

        <section
          className={`${styles.activities} ${styles.section}`}
          id="activities"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.ActivitiesHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>{pData?.a1}</li>
            <li>{pData?.a2}</li>
            <li>{pData?.a3}</li>
            <li>{pData?.a4}</li>
            <li>{pData?.a5}</li>
            <li>{pData?.a6}</li>
            <li>{pData?.a7}</li>
          </ul>
          <h4>{pData?.ActivitiesSubHead}</h4>
          <ul>
            <li>
              <p><strong>{strongText1}</strong>{remainingText1}</p>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.EligibilityHeading}</h2>
          <h4>{pData?.EligibilityPara}</h4>
          <p>{pData?.EligLiHead}</p>
          <ul className={styles.eligibilityList}>
            <li>{pData?.e1}</li>
            <li>{pData?.e2}</li>
            <li><strong>{strongText}</strong> {" "} {remainingText}</li>
            <li><strong>{strongText2}</strong> {" "} {remainingText2}</li>
            <li>
            <strong>{strongText3}</strong> {" "} {remainingText3}
              <ul>
                <li>{pData?.e5SubLi1}</li>
                <li>{pData?.e5SubLi2}</li>
                <li>{pData?.e5SubLi3}</li>
                <li>{pData?.e5SubLi4}</li>
              </ul>
            </li>
          </ul>
          <p>{pData?.EligLastPara}</p>
        </section>

        <section
          className={`${styles.eventCode} ${styles.section}`}
          id="event-codes"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>{pData?.EventCodeHeading}</h2>
          <li style={{ marginLeft: "40px" }}>
            If you require a business visitor visa for Canada and your meeting,
            event, or conference is registered with Immigration, Refugees and
            Citizenship Canada (IRCC), your organizer will provide an event
            code.
          </li>
          <li style={{ marginLeft: "40px", marginTop: "20px" }}>
            Include this event code on your visa application form to indicate
            your participation in a registered event.
          </li>
        </section>

        <section className={styles.documents}>
          <h2 className={styles.subheading}>{pData?.EssenDocuHeading}</h2>
          <p>{pData?.EssenDocuPara}</p>
          <ul>
            <li>{pData?.ed1}</li>
            <li>{pData?.ed2}</li>
            <li></li>
            <li>{pData?.ed4}</li>
            <li>{pData?.ed5}</li>
            <li>{pData?.ed6}</li>
            <li>{pData?.ed7}</li>
            <li>{pData?.ed8}</li>
            <li>{pData?.ed9}</li>
          </ul>
        </section>

        <section
          className={`${styles.support} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p>{pData?.s1}</p>
          <p>{pData?.s2}</p>
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

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul style={{ marginLeft: "40px" }}>
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

export default BusinessVisitorVisa;
