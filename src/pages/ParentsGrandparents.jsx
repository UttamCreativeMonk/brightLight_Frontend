import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ParentsGrandparents.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const ParentsGrandparents = () => {
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
    fetch("https://brightlight-node.onrender.com/parentsGrandParMeta")
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
    fetch("https://brightlight-node.onrender.com/ParentsGrandparents")
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
         {pData?.ParGrHeading}
        </h1>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
         {pData?.ParGrPara1}
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          {pData?.ParGrPara2}
        </p>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading} id="eligibility">
          {pData?.EligibilityHeading1}
          </h2>
          {/* <ul className={styles.list} >
            <li>
              You can sponsor your parents and grandparents, related by blood or
              adoption. This includes your mother, father, step-parents, and
              grandparents. However, you cannot sponsor your parents' or
              grandparents' siblings, unless they are dependent children.
            </li>
          </ul> */}
          <p>
             {pData?.EligibilityPara}
          </p>
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading2}
          </h2>
          <h4>
          {pData?.EligibilitySubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.e1}</li>
            <li>{pData?.e2}</li>
            <li>{pData?.e3}</li>
            <li>{pData?.e4}</li>
            <li>{pData?.e5}</li>
            <li>{pData?.e6}</li>
          </ul>

          <h3 style={{ marginBottom: "20px" }}>
            Income required for the 3 tax years before the date you apply (if
            you’re applying for the 2024 intake)
          </h3>

          <table className={styles.occupationTable}>
            <thead>
              <tr>
                <th>Family size</th>
                <th>2023</th>
                <th>2022</th>
                <th>2021</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 People</td>
                <td>$44,530</td>
                <td>$43,082</td>
                <td>$32,898</td>
              </tr>
              <tr>
                <td>3 People</td>
                <td>$54,743</td>
                <td>$52,965</td>
                <td>$40,444</td>
              </tr>
              <tr>
                <td>4 People</td>
                <td>$66,466</td>
                <td>$64,306</td>
                <td>$49,106</td>
              </tr>
              <tr>
                <td>5 People</td>
                <td>$75,384</td>
                <td>$72,935</td>
                <td>$55,694</td>
              </tr>
              <tr>
                <td>6 People</td>
                <td>$85,020</td>
                <td>$82,259</td>
                <td>$62,814</td>
              </tr>
              <tr>
                <td>7 People</td>
                <td>$94,658</td>
                <td>$91,582</td>
                <td>$69,934</td>
              </tr>
              <tr>
                <td>If more than 7 people, for each additional person, add:</td>
                <td>$9,636</td>
                <td>$9,324</td>
                <td>$7,120</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
          {pData?.HowApplyHeading}
          </h2>
          <h4>
          {pData?.HowApplySubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading} id="refusal-reasons">
          {pData?.RefusalHeading}
          </h2>
          <h4>
          {pData?.RefusalSubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.r1}</li>
            <li>{pData?.r2}</li>
            <li>{pData?.r3}</li>
            <li>{pData?.r4}</li>
            <li>{pData?.r5}</li>
          </ul>
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
            className={styles.button}
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
          {pData?.StillNotHeading}
          </h2>
          <p className={styles.paragraph}>
          {pData?.s1}
          </p>
          <p className={styles.paragraph}>
          {pData?.s2}
          </p>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className={styles.button}
          >
            Contact Us
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
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

export default ParentsGrandparents;
