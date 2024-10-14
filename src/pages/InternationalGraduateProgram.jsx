import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InternationalGraduateProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const InternationalGraduateProgram = () => {
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
    fetch("https://brightlight-node.onrender.com/igp-meta")
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
              <p onClick={() => scrollToSection("bcnp-calculator")}>
                BCPNP Calculator
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("why_choose_us")}>
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
        <section
          className={`${styles.header} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[21] = el)}
        >
          <h2 style={{textAlign: "center"}}> 
            British Columbia Provincial Nominee Program International Graduate
            stream
          </h2>
          <p style={{textAlign: "center"}}>
            The British Columbia International Graduate stream is one of the
            immigration pathways offered within the British Columbia Provincial
            Nominee Program (BC PNP). Operated by the province of British
            Columbia, the BC PNP aims to nominate skilled immigrants for
            permanent residence in Canada. The BC International Graduate stream
            prioritizes candidates who have completed post-secondary education
            in Canada and have received an offer for skilled employment.
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>Benefits of BCPNP International Graduate Stream</h2>
          <ul>
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
          <h2>First you must be eligible with BCPNP Skilled Worker Program</h2>
          <ul className={styles.subheadingLink}>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                  >
                    Federal Skilled Worker Program (FSW)
                  </button>
                  This program is ideal for tech workers who have the necessary
                  work experience, education, and language ability.
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  Like the FSW program, the CEC is also suitable for tech
                  workers who have gained Canadian work experience.
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-trades-program")
                    }
                  >
                    Federal Skilled Trades Program (FSTP)
                  </button>
                  If you&#39;re a trades worker, this program is designed for
                  you. It requires proof of relevant work experience, education,
                  and language proficiency.
                </li>
              </ul>
          <h4>Eligibility Criteria for International Graduate Stream</h4>
          <div className={styles.criteria}>
            <h3>1. Job Offer</h3>
            <ul>
              <li>
                You must hold an indeterminate, full-time job offer from an
                eligible BC employer.
              </li>
              <li>
                The job offer should fall under NOC TEER Categories 1, 2, or 3.
              </li>
              <li>
                If the job offer is in an eligible tech occupation or falls
                under NOC 41200 (university professors and lecturers), it does
                not need to be indeterminate.
              </li>
              <li>
                The wage must be at market rate and comparable to similar roles
                in BC.
              </li>
              <li>
                Additional qualification requirements may apply based on the NOC
                code of the job offer.
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>2. Education</h3>
            <ul>
              <li>
                You need a degree, diploma, or certificate from an eligible
                Canadian post-secondary institution.
              </li>
              <li>
                The degree or diploma program completion date should be within
                the last three years from the date on your official transcript.
              </li>
              <li>
                Undergraduate or graduate degrees must be from authorized
                institutions that can grant degrees.
              </li>
              <li>
                Diplomas and certificates must be from public post-secondary
                institutions in Canada (private institutions are not eligible).
              </li>
              <li>
                Language training and programs shorter than 8 months (excluding
                internships and co-op terms) do not qualify.
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>3. Language Proficiency</h3>
            <ul>
              <li>
                If the job offer’s NOC code is TEER Category 1, language results
                are not mandatory for eligibility (although BCPNP may still
                request a language test).
              </li>
              <li>
                For TEER Categories 2 or 3, you need a Canadian Language
                Benchmark (CLB) score of at least 4.
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>4. Minimum Income Requirements</h3>
            <ul>
              <li>
                You must demonstrate that your gross annual wage in the job
                offer meets minimum income requirements.
              </li>
              <li>
                These requirements vary based on your location of residence in
                BC and the number of dependents.
              </li>
            </ul>
          </div>
          <p>
            Remember that meeting these eligibility criteria does not guarantee
            an invitation to apply; invitations are based on threshold scores
            during draws. If your score meets or exceeds the threshold, you’ll
            receive an invitation to apply from the BCPNP.
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="employer_requirements"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Requirements for the Express Entry Category</h2>
          <p>
            To be eligible for the International Graduates (IG) stream, you must
            qualify under one of the three federal programs. To understand the
            eligibility criteria for these programs, click on either the:
          </p>
          <ul style={{marginLeft: "40px"}}>
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
          id="testing1"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Employer’s Eligibility Requirements</h2>
          <p>
            As a British Columbia employer participating in the BC Skilled
            Worker program, ensure you:
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>Established in B.C.</li>
            <li>Comply with domestic labor market recruitment.</li>
            <li>At least 1 year in operation in BC.</li>
            <li>
              Minimum full-time employees: Metro Vancouver (5), Outside Metro
              Vancouver (3).
            </li>
            <li>Offer full-time, permanent employment.</li>
            <li>Align wages with industry standards.</li>
            <li>Submit required documentation and forms.</li>
            <li>Adhere to all relevant laws and regulations.</li>
          </ul>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="bcnp-calculator"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate your BCPNP score
          </button>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>
            Application Process for British Columbia Provincial Nominee Program
            International Graduate Stream application
          </h2>
          <ol>
            <li>
              <strong>Expression of Interest (EOI) System</strong>
              <ul>
                <li>
                  The British Columbia International Graduate stream operates on
                  an Expression of Interest (EOI) system.
                </li>
                <li>
                  Candidates who meet the minimum stream requirements can
                  register a profile using the BC’s online immigration portal.
                </li>
              </ul>
            </li>
            <li>
              <strong>Profile Registration:</strong>
              <ul>
                <li>
                  Candidates must indicate on their BC profile whether they are
                  applying through:
                  <ul>
                    <li>The accelerated Express Entry system, or</li>
                    <li>
                      The regular non- Express Entry Skills Immigration system.
                    </li>
                  </ul>
                </li>
                <li>
                  Once the profile has been submitted, candidates will be
                  assigned a score and ranked against one another using the BC
                  Skills Immigration Ranking System.
                </li>
              </ul>
            </li>
            <li>
              <strong>Invitation to Apply (ITA):</strong>
              <ul>
                <li>
                  The highest ranking candidates will be invited to apply to the
                  stream in one of the stream’s periodic intakes.
                </li>
                <li>
                  Candidates must submit a complete application to the stream
                  within 30 days from when they receive the invitation to apply.
                </li>
              </ul>
            </li>
            <li>
              <strong>Application Fee:</strong>
              <ul>
                <li>
                  The BC International Graduate stream charges a $1,475 CAD
                  application fee per applicant.
                </li>
              </ul>
            </li>
            <li>
              <strong>Provincial Nomination:</strong>
              <ul>
                <li>
                  If the application is approved, the candidate will be issued
                  a provincial nomination for permanent residence from BC.
                </li>
                <li>
                  Candidates can also request to receive a letter of support for
                  a temporary work permit, allowing them to begin working in
                  Canada while their application for permanent residence is
                  processed.
                </li>
                <li>
                  Applying for a work permit with a letter of support from a
                  province represents a separate application to IRCC.
                </li>
              </ul>
            </li>
            <li>
              <strong>Express Entry Stream:</strong>
              <ul>
                <li>
                  If the applicant indicated on their BC profile that they were
                  applying to the BC Skilled Worker stream through Express
                  Entry, they will receive a notification of nomination on their
                  IRCC online account.
                </li>
                <li>
                  After accepting the provincial nomination, the
                  applicant’s Comprehensive Ranking System (CRS) score will
                  increase by 600 points, virtually guaranteeing they will
                  receive an Invitation to Apply (ITA) for permanent residence
                  in the next Express Entry draw.
                </li>
                <li>
                  After receiving an ITA, the applicant must prepare and submit
                  an official application for Canadian permanent residence
                  within the designated timeframe. Applications for permanent
                  residence submitted through Express Entry are generally
                  processed within six months.
                </li>
              </ul>
            </li>
            <li>
              <strong>Regular Skills Immigration System:</strong>
              <ul>
                <li>
                  If the applicant indicated on their BC profile that they were
                  applying to the BC International Graduate stream through
                  the regular Skills Immigration system, the applicant has six
                  months to submit an official application for permanent
                  residence online.
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Still Not Sure?</h2>
          <p>
            Contact Brightlight Immigration to assess your profile and start
            your journey towards Canadian permanent residence. With a high
            approval rate and a tailored approach, we handle BCPNP International
            Graduate Stream cases with expertise.
          </p>
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
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
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

export default InternationalGraduateProgram;
