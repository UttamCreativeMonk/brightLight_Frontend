import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AdditionalDocument.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const AdditionalDocument = () => {
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
    fetch("https://brightlight-node.onrender.com/addDocMeta")
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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
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
        <header className={styles.header} id="about-program">
          <h1>Reply to Additional Document Request</h1>
        </header>
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <h2>Don’t Worry, We’re Here to Help!</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
                If you’re here, that means IRCC has already requested you to
                submit additional documents for your Canadian Immigration
                application. Don’t worry. This can happen at any stage of the
                application process, and the specific documents requested will
                vary depending on your case and program.
              </li>
              <li>
                We know these requests can be stressful. Especially if you’ve
                applied your application yourself. It's easy to forget something
                or accidentally upload the wrong document. No worries, though!
                We can help you out.
              </li>
              <li>
                If you already got that "Acknowledgement of Receipt" (AOR)
                letter with your application number and the Unique Client
                Identifier (UCI) – you can just use IRCC's online form to upload
                the right document.
              </li>
              <li>
                Make sure you know what they need and why. Follow their
                instructions to the letter, label your documents clearly, and
                get them uploaded in the right format. The faster you get that
                missing document submitted, the sooner things can keep moving
                along.
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="key-points"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>Key Points to Keep in Mind</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
                Submit the requested document ASAP. Failure to do so can
                negatively impact your application.
              </li>
              <li>
                Only submit requested documents. Don't include irrelevant
                information.
              </li>
              <li>
                The documents should be clear, legible, and translated if
                necessary.
              </li>
              <li>
                If you're unsure about any aspect of the process, let us handle
                your case for you.{" "}
                <a
                  id="book-appointment"
                  href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
                >
                  Click here
                </a>
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a Request for an additional document, do not
              worry. We can help you with your application. With over a decade
              of experience, we have guided many when it comes to providing
              additional documents.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your visa. Just reach out to us,
              and we'll handle the rest. You keep your focus on your Canadian
              ambition, and we'll focus on making it happen smoothly.
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
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <h2>Why Choose Us?</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
                <strong>Experienced Team:</strong> Over a decade of experience
                in handling Immigration applications with a high success rate.
              </li>
              <li>
                <strong>Tailored Approach:</strong> Personalized services and
                strategies based on your specific case.
              </li>
              <li>
                <strong>High Success Rate:</strong> Proven track record using
                case law and precedents for positive results.
              </li>
              <li>
                <strong>Comprehensive Support:</strong> Assistance from the
                start of the application process to obtaining your PR.
              </li>
            </ul>
          </section>
        </main>
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

export default AdditionalDocument;
