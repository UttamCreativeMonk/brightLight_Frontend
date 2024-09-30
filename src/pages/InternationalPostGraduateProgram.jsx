import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InternationalPostGraduateProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";



const InternationalPostGraduateProgram = () => {
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

  useEffect(()=>{
    fetch("https://brightlight-node.onrender.com/ipg-meta")
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
  },[])


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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <header className={styles.header}>
          <h1>
            British Columbia Provincial Nominee Program - BC PNP International
            Post-Graduate (IPG) Stream
          </h1>
        </header>
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer_requirements")}>Employer Requirements</p>
              <p onClick={() => scrollToSection("how-to-apply")}> How to Apply? </p>
              <p onClick={() => scrollToSection("book-appointment")}> Book Appointment </p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials </p>
              <p onClick={() => scrollToSection("faq")}>Faq</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={`${styles.section} ${styles.section}`} id="benefits" ref={(el) => sectionsRef.current[0] = el}>
          <h2  >Benefits of BCPNP International Post-Graduate Stream</h2>
          <ul>
            <li>
              No Job Offer Required: Candidates do not need a job offer to
              apply.
            </li>
            <li>
              Nomination Priority: Successful candidates receive an invitation
              to apply for Canadian permanent residence.
            </li>
            <li>
              No Express Entry Profile Required: No need for an Express Entry
              profile.
            </li>
            <li>
              Accelerated Processing: Option to apply through Express Entry for
              faster processing.
            </li>
          </ul>
        </section>
        <section className={`${styles.section} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[1] = el}>
          <h2>Eligibility Criteria for International Post-Graduate Stream</h2>
          <div className={styles.criteria}>
            <h3>1. Educational Qualifications</h3>
            <ul>
              <li>
                Must hold a master’s or doctoral (PhD) degree obtained within
                the past three years.
              </li>
              <li>
                Degree must be from an eligible program at a post-secondary
                institution in British Columbia.
              </li>
              <li>
                Doctoral degrees are accepted from any field of study at a
                public BC institution.
              </li>
              <li>
                Master’s degrees must be in natural, applied, or health sciences
                fields.
              </li>
              <li>Distance education programs are not eligible.</li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>2. Intent to Live and Work in British Columbia</h3>
            <ul>
              <li>Demonstrate commitment to residing and working in BC.</li>
              <li>
                Evidence includes previous or current residence, connections
                through work or study, community involvement, financial
                capacity, and plans for legal authorization to work.
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>3. Connection to British Columbia</h3>
            <ul>
              <li>
                Completed a degree from BC’s eligible institutions and programs.
              </li>
              <li>
                Expected to continue residing in BC post-graduation; exceptions
                may be considered in specific circumstances.
              </li>
            </ul>
          </div>
        </section>
        <section className={`${styles.section} ${styles.section}`} id="testing1" ref={(el) => sectionsRef.current[2] = el} >
          <h2>Requirements for the Express Entry Category</h2>
          <p>
            To be eligible, you must qualify under one of the federal programs.
            Click below for more details:
          </p>
          <ul>
            <li>
              <a href="/federal-skilled-worker-program">
                Federal Skilled Worker (FSW)
              </a>
            </li>
            <li>
              <a href="/federal-skilled-trades-program">
                Federal Skilled Trades (FST)
              </a>
            </li>
            <li>
              <a href="/canadian-experience-class">
                Canadian Experience Class (CEC)
              </a>
            </li>
          </ul>
        </section>
        <section className={`${styles.section} ${styles.section}`} id="employer_requirements" ref={(el) => sectionsRef.current[3] = el}>
          <h2>Employer Requirements</h2>
          <p>
            No job offer from an employer is required to apply to this stream.
          </p>
        </section>
        <section  className={`${styles.section} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[4] = el} >
          <h2>Application Procedure</h2>
          <ol  className={styles.sectionLi}>
            <li>
              <strong>Eligibility and Application Submission:</strong> The
              stream is open for applications at any time. Submit an application
              through BC’s online immigration portal and specify the application
              system (Express Entry or Skills Immigration). The application fee
              is $1,475 CAD per applicant.
            </li>
            <li>
              <strong>Approval and Provincial Nomination:</strong> If approved,
              receive a provincial nomination for permanent residence and
              request a letter of support for a temporary work permit if needed.
            </li>
            <li>
              <strong>Express Entry Applicants:</strong> Receive a nomination
              notification on IRCC account, increasing CRS score by 600 points.
              An ITA for permanent residence is almost guaranteed in the next
              Express Entry draw. Submit the official application within the
              designated timeframe.
            </li>
            <li>
              <strong>Skills Immigration Applicants:</strong> Have six months to
              submit an online application for permanent residence if applying
              through the regular Skills Immigration system.
            </li>
          </ol>
        </section>
        <section className={`${styles.section} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[5] = el}>
          <h2>Still Not Sure?</h2>
          <p>
            Contact Brightlight Immigration to assess your profile and start
            your journey towards Canadian permanent residence. With a high
            approval rate and a tailored approach, we handle BCPNP International
            Post-Graduate Stream cases with expertise.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href = "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }  id="book-appointment"
          >
            Book Appointment
          </button>
        </section>
        <section  className={`${styles.section} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[6] = el}>
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
      </div>

      <div id="faqs">
        <FAQ/>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
      <Footer1/>
    </>
  );
};

export default InternationalPostGraduateProgram;
