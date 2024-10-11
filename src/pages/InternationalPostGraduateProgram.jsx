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

  useEffect(() => {
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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer_requirements")}>
                Employer Requirements
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                {" "}
                How to Apply?{" "}
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment{" "}
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials{" "}
              </p>
              <p onClick={() => scrollToSection("faq")}>Faq</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
          <h2 className={styles.header}>
            British Columbia Provincial Nominee Program BC PNP International
            Post- Graduate (IPG) Stream
          </h2>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            The British Columbia International Post-Graduate stream is part of
            the British Columbia Provincial Nominee Program (BC PNP), which is
            administered by the province of British Columbia. This stream
            focuses on nominating immigrants who have recently graduated from an
            eligible British Columbia institution at the post-graduate level.
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>Benefits of BCPNP International Post-Graduate Stream</h2>
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
        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h4>First you must be eligible with BCPNP Skilled Worker Program</h4>
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
              <li>
                Applicants must demonstrate their commitment to residing and
                working in British Columbia.
              </li>
              <li>
                Evidence of this intent can include:
                <ul>
                  <li>Previous or current periods of residence in BC.</li>
                  <li>Connections to BC through work, study, or family.</li>
                  <li>
                    Actions taken to permanently settle in BC, such as job
                    search efforts or finding accommodation.
                  </li>
                  <li>Community involvement.</li>
                  <li>Financial capacity to support oneself in BC.</li>
                  <li>
                    A plan to obtain or maintain legal authorization to work in
                    BC.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>3. Connection to British Columbia</h3>
            <ul>
              <li>
                Candidates must have completed a master’s or doctorate degree
                from one of BC’s eligible institutions in one of BC’s eligible
                programs.
              </li>
            </ul>
          </div>
          <p style={{ marginBottom: "20px", marginTop: "30px" }}>
            Note: After graduating from an IPG eligible program, candidates are
            expected to continue residing in BC. Exceptions may be considered in
            extenuating circumstances where leaving BC was necessary after
            graduation.
          </p>
          <p>
            Remember that meeting these eligibility criteria does not guarantee
            an invitation to apply; invitations are based on threshold scores
            during draws. If your score meets or exceeds the threshold, you’ll
            receive an invitation to apply from the BCPNP.
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Requirements for the Express Entry Category</h2>
          <p>
            To be eligible for the International Graduates (IG) stream, you must
            qualify under one of the three federal programs. To understand the
            eligibility criteria for these programs, click on either the:
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
        <section
          className={`${styles.section} ${styles.section}`}
          id="employer_requirements"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Employer Requirements</h2>
          <p>
            You do not need a job offer from an employer to apply to this
            stream.
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
            Application Procedure for British Columbia Provincial Nominee
            Program BC PNP International Post-Graduate (IPG) Stream
          </h2>
          <ol className={styles.sectionLi}>
            <li>
              <strong>Eligibility and Application Submission:</strong>
              <ul>
                <li>The stream is open to new applications at any time.</li>
                <li>
                  Eligible candidates must submit an application through BC’s
                  online immigration portal.
                </li>
                <li>
                  Candidates must specify whether they are applying through the
                  accelerated Express Entry system or the regular Skills
                  Immigration system.
                </li>
                <li>
                  The BC International Post-Graduate stream charges a $1,475 CAD
                  application fee per applicant.
                </li>
              </ul>
            </li>
            <li>
              <strong>Approval and Provincial Nomination:</strong>
              <ul>
                <li>The stream is open to new applications at any time.</li>
                <li>
                  If the application is approved, the candidate receives a
                  provincial nomination for permanent residence from BC.
                </li>
                <li>
                  Candidates can also request a letter of support for a
                  temporary work permit. This allows them to work in Canada
                  while their permanent residence application is processed.
                </li>
                <li>
                  Applying for a work permit with provincial support represents
                  a separate application to IRCC.
                </li>
              </ul>
            </li>
            <li>
              <strong>Express Entry Applicants:</strong>
              <ul>
                <li>
                  If the applicant indicated Express Entry on their BC
                  application:
                  <ul>
                    <li>
                      They receive a nomination notification on their IRCC
                      online account.
                    </li>
                    <li>
                      Accepting the provincial nomination increases
                      their Comprehensive Ranking System (CRS) score by 600
                      points.
                    </li>
                    <li>
                      This virtually guarantees an Invitation to Apply (ITA) for
                      permanent residence in the next Express Entry draw.
                    </li>
                    <li>
                      After receiving an ITA, the applicant must submit an
                      official application for Canadian permanent residence
                      within the designated timeframe.
                    </li>
                    <li>
                      Express Entry applications are generally processed
                      within six months.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Skills Immigration Applicants:</strong>
              <ul>
                <li>
                  If the applicant indicated the regular non-Express Entry
                  Skills Immigration system on their BC profile, they have six
                  months to submit an online application for permanent
                  residence.
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
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
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
            id="book-appointment"
          >
            Book Appointment
          </button>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
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

export default InternationalPostGraduateProgram;
