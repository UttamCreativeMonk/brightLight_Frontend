import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BcPnp.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const BcPnp = () => {
  let [metaData, setMetaData] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    fetch("https://brightlight-node.onrender.com/bp-meta")
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
              : " Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
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
        <h1
          className={`${styles.title} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          British Columbia Provincial Nominee Program (BC PNP)
        </h1>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          British Columbia (BC) is a beautiful province in Canada with stunning
          scenery, exciting cities, and lots of job opportunities. If you want
          to move to BC, the BC Provincial Nominee Program (BCPNP) can help you
          make it happen.
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          The British Columbia Provincial Nominee Program (BC PNP) is an
          economic immigration program that allows British Columbia to select
          skilled workers, business people, and international graduates who will
          contribute to the province's economy. If you are nominated by BC PNP,
          you and your family can apply to IRCC for permanent residence in
          Canada.
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          There are five streams under British Columbia Provincial Nominee
          Program (BC PNP):
        </h2>
        <div
          className={`${styles.streams} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <a href="/skilled-worker-stream" className={styles.button}>
            BC Skilled Worker Stream
          </a>
          <a href="/health-authority-stream" className={styles.button}>
            BC Healthcare Professional Stream
          </a>
          <a href="/international-graduate-program" className={styles.button}>
            BC International Graduate Stream
          </a>
          <a
            href="/international-post-graduate-program"
            className={styles.button}
          >
            BC International Post-Graduate Stream
          </a>
          <a href="/entry-level-semi-skilled" className={styles.button}>
            BC Entry Level and Semi-Skilled Worker Stream
          </a>
          <a href="/pnp" className={styles.button}>
            Priority Occupations
          </a>
        </div>
        <p>
          Note: BCPNP issues targeted invitations to apply for select
          occupations called priority occupations
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          Eligibility criteria for British Columbia Provincial Nominee Program
          (BC PNP)
        </h2>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          Candidate’s Criteria
        </h3>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          Please review the eligibility criteria for each stream, as it varies
          from one stream to another.
        </p>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          Eligibility Criteria for Employer Supporting BCPNP Application
        </h3>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <li className={styles.listItem}>
            Employer Eligibility Criteria:
            <ul>
              <li>
                Employer must be established in BC with a physical presence.
              </li>
              <li>
                Business structures accepted:
                <ul>
                  <li>
                    Incorporated in B.C. or extra-provincially registered.
                  </li>
                  <li>
                    Registered as a general, limited, or limited liability
                    partnership in B.C.
                  </li>
                </ul>
              </li>
              <li>
                Accepts applications from public sector or non-profit
                organizations in B.C., including:
                <ul>
                  <li>Health authorities and agencies</li>
                  <li>Public post-secondary education institutions</li>
                  <li>Public school districts</li>
                  <li>
                    Accredited private non-profit post-secondary institutions
                  </li>
                  <li>Research institutions supported by government</li>
                  <li>Government organizations and agencies</li>
                  <li>Registered non-profit groups</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            Operational Requirements:
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                Must have a valid municipal business licence.
              </li>
              <li className={styles.nestedListItem}>
                Must have operated in B.C. for at least one year (two years for
                BC Entry Level and Semi-Skilled Worker Stream).
              </li>
              <li className={styles.nestedListItem}>
                Minimum employee requirements:
                <ul className={styles.nestedList}>
                  <li className={styles.nestedListItem}>
                    Metro Vancouver: 5 full-time employees.
                  </li>
                  <li className={styles.nestedListItem}>
                    Outside Metro Vancouver: 3 full-time employees.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            Compliance and Legal Considerations:
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                Application may be refused if employer or owner/director:
                <ul className={styles.nestedList}>
                  <li className={styles.nestedListItem}>
                    Received penalties or fines within past two years.
                  </li>
                  <li className={styles.nestedListItem}>
                    Under investigation or charged with criminal offence related
                    to immigration or business operation.
                  </li>
                </ul>
              </li>
              <li className={styles.nestedListItem}>
                Genuine recruitment efforts must be demonstrated.
              </li>
            </ul>
            <li className={styles.nestedListItem}>
              <> Disqualifications:</>
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>
                  Employers involved in certain businesses (e.g., pornographic
                  products, employment agencies).
                </li>
                <li className={styles.nestedListItem}>
                  Businesses bringing BC PNP or BC government into disrepute.
                </li>
              </ul>
            </li>
            <li className={styles.nestedListItem}>
              Company Ownership Restrictions:
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>
                  Applicant and family members must not have held more than 10%
                  ownership in the BC company in past 5 years.
                </li>
                <li>
                  Family members include spouse, parents, siblings, children,
                  and others.
                </li>
              </ul>
            </li>
            <li className={styles.nestedListItem}>
              Discretionary Consideration:
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>
                  BC PNP may consider applications not meeting minimum
                  requirements based on various factors like business structure,
                  length of operation, and employee count.
                </li>
              </ul>
            </li>
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          How to Apply for BCPNP?
        </h2>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>
            Create an online profile and provide information about your skills,
            experience, education, and work experience. Or, for a stress-free
            solution,
            <a href="/contact-us" className={styles.link}>
              let us handle your case for you
            </a>
            .
          </li>
          <li className={styles.listItem}>
            Submit an expression of interest (EOI) in the program and rank your
            choices of streams.
          </li>
          <li className={styles.listItem}>
            Complete and submit a detailed application package, including all
            the relevant and supporting documents.
          </li>
          <li className={styles.listItem}>
            Once your application is approved, you will be nominated by B.C. and
            can apply for permanent residence to IRCC.
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          Common Reasons for Refusals in BCPNP
        </h2>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing13"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <li className={styles.listItem}>You shared incorrect information.</li>
          <li className={styles.listItem}>
            You couldn’t meet the minimum qualifications for BC PNP including
            having the required skills, experience, education, and language
            proficiency.
          </li>
          <li className={styles.listItem}>Your occupation is not in demand.</li>
          <li className={styles.listItem}>
            You couldn’t demonstrate your family ties to that particular
            province.
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          Still Not Sure?
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing16"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
          If you have received a refusal for any of the reasons mentioned above,
          do not worry. With over a decade of experience, we specialize in
          previously refused cases. We have got approvals for clients who had
          multiple previous refusals. We achieve this with a tailored approach
          to your specific case, addressing each concern that the officer has
          listed in previous refusals. We use case law and find similar cases to
          your circumstances that had positive results, and we use them as
          precedents in cases we work on. This is why we have a high success
          rate.
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing18"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your visa.{" "}
        </p>
        <button
          className={styles.button1}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[90] = el)}
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

export default BcPnp;
