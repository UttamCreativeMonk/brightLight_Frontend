import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LonelyCanadian.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";


const LonelyCanadian = () => {
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
    fetch("https://brightlight-node.onrender.com/lonelyCanadianMeta")
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
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("duration")}>Duration</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("alternatives")}>
                Alternatives
              </p>
              <p onClick={() => scrollToSection("bankruptcy")}>How to Apply?</p>
              <p onClick={() => scrollToSection("sponsor-siblings")}>
                Refusal Reasons
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
            Lonely Canadian Sponsoring Other Relatives: A Path to Family
            Reunification
          </h1>
          <p>
            Canada’s family sponsorship program prioritizes family
            reunification. If you wish to sponsor other family members who may
            be lonely or orphaned, certain conditions apply. Here’s what you
            need to know:
          </p>
        </header>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>
            Eligibility Criteria to Sponsor Other Relatives as a Lonely Canadian
          </h2>
          <h4>
            To sponsor relatives such as nephews, nieces, uncles, and aunts, the
            sponsor must meet the following criteria:
          </h4>
          <ol
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              {" "}
              <strong>Minimum Necessary Income:</strong> The sponsor should have
              sufficient income.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Age Requirement:</strong> Be at least 18 years old.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Canadian Citizenship or Permanent Residency:</strong> The
              sponsor must be a Canadian citizen or permanent resident residing
              in Canada.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Debt and Bankruptcy:</strong> Be free from debt or
              bankruptcy proceedings.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Application Readiness:</strong> Prepared to submit the
              sponsorship application with all required forms and documents.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Undertaking Obligations:</strong> Willing to accept the
              responsibilities of undertaking.
            </li>
            <li>
              <strong>No Removal Orders or Criminal Convictions:</strong> Free
              from any restrictions of removal orders and criminal convictions.
            </li>
          </ol>
        </section>

        <section
          className={`${styles.duration} ${styles.section}`}
          id="duration"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Duration of Undertaking</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              The undertaking to sponsor other relatives to Canada lasts for ten
              years.
            </li>
            <li>
              This period begins when your relative becomes a permanent resident
              of Canada.
            </li>
            <li>
              During this time, the relative will not have access to social
              assistance.
            </li>
            <li>
              If the sponsor receives any social assistance, they must repay the
              amount to the government.
            </li>
            <li>
              The undertaking also extends to the spouse or child of the
              sponsored relative.
            </li>
            <li>
              Social assistance for disabled individuals does not impact the
              sponsorship application.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.bankruptcyCriminalSentences} ${styles.section}`}
          id="bankruptcy"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Bankruptcy and Criminal Sentences</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              Sponsoring other relatives is not allowed if the sponsor is filing
              for bankruptcy.
            </li>
            <li>
              Eligibility to sponsor is possible only after the discharge of
              bankruptcy.
            </li>
            <li>
              Similarly, a criminal conviction can disqualify the sponsor from
              sponsoring another relative.
            </li>
            <li>The severity of the crime determines most restrictions.</li>
            <li>
              However, eligibility may be regained if the sentence is over five
              years old and there is no past criminal record outside Canada
              during the same period.
            </li>
          </ul>
        </section>

        <section
          className={`${styles.sponsoringSiblings} ${styles.section}`}
          id="sponsor-siblings"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Sponsoring Siblings</h2>
          <ul>
            <li>
              <h4>Alternative options exist for sponsoring siblings:</h4>
            </li>
          </ul>

          <ul
            style={{
              listStyle: "circle",
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <li>
              Siblings Below 18: You can sponsor a brother or sister below 18
              years of age who has lost both parents.
            </li>
            <li>
              Lone Sponsor: Even if you are a lonely sponsor, you can sponsor a
              brother or sister who is over 18 years of age.
            </li>
          </ul>
          <ul>
            <li>
              <h4>A lonely sponsor does not have:</h4>
            </li>
          </ul>

          <ul
            style={{
              listStyle: "circle",
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li>Mother</li>
            <li>Father</li>
            <li>Child</li>
            <li>Spouse</li>
            <li>Common-law partner</li>
            <li>Conjugal partner</li>
            <li>Grandparents</li>
          </ul>
        </section>

        <section
          className={`${styles.alternatives} ${styles.section}`}
          id="alternatives"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>Exploring Other Possibilities</h2>
          <p>
            Consider the following alternatives if you cannot sponsor a sibling
            over 18 years of age:
          </p>
          <ol
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              Study in Canada: Apply for immigration through a study permit.{" "}
              <a href="/study-visa" className={styles.link}>
                Learn more about Study Visas
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              Business Partnership: Successful business owners can secure a work
              permit if eligible.
            </li>
            <li>
              Express Entry: Permanent residents can leverage the Comprehensive
              Ranking System to receive an Invitation to Apply.{" "}
              <a href="/express-entry" className={styles.link}>
                Learn more about Express Entry
              </a>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>How to Apply for Sponsoring a Relative as a Lonely Canadian</h2>
          <h3>Step 1: Obtain the Application Package</h3>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <h4>
              <strong>Application Package Contents:</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>
                  <strong>Instruction Guide:</strong> Read this guide before
                  filling out the forms.
                </li>
                <li>
                  <strong>Forms:</strong> Complete the necessary forms.
                </li>
                <li>
                  <strong>Document Checklist:</strong> Ensure you include all
                  required documents.
                </li>
                <li>
                  <strong>Eligibility Check:</strong> Confirm your eligibility
                  to sponsor a relative.
                </li>
              </ul>
            </li>
            <h4>
              <strong>Application Submission:</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>Provide proof of income.</li>
                <li>
                  Relatives must express their intent to support themselves.
                </li>
                <li>
                  Agree in writing to support your relatives for a specified
                  period (3 to 20 years).
                </li>
                <li>
                  Include all dependent children of your relative (if any).
                </li>
                <li>Submit all documents listed in the document checklist.</li>
                <li>Missing information or documents can cause delays.</li>
              </ul>
            </li>
            <h4>
              <strong>
                Truthfulness: All information in your application must be
                accurate. Be truthful about:
              </strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>Your family members (include all in your application).</li>
                <li>Your marital status.</li>
                <li>Any changes in your circumstances.</li>
                <li>
                  Sponsored individuals must also declare their close family
                  members, who will undergo security, criminality, and medical
                  checks. Failure to do so may affect future sponsorship.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Step 2: Pay Application Fees</h3>
          <ul>
            <h4>
              <strong>Biometrics Fee:</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>
                  In most cases, pay the biometrics fee when submitting your
                  application.
                </li>
                <li>
                  This fee covers fingerprint collection and a digital photo.
                </li>
              </ul>
            </li>
            <h4>
              <strong>Third-Party Fees:</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul>
                <li style={{ listStyle: "none" }}>
                  <p>
                    Depending on your situation, you may need to pay third
                    parties for:
                  </p>
                  <ul
                    style={{
                      marginLeft: "40px",
                      marginTop: "20px",
                      marginBottom: "60px",
                    }}
                  >
                    <li>Medical exams.</li>
                    <li>Police certificates.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>Step 3: Submit Your Application</h3>
          <p>
            Mail all application documents to the address provided in the
            instruction guide of your package.
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
          id="why-choose-u"
          ref={(el) => (sectionsRef.current[99] = el)}
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

export default LonelyCanadian;
