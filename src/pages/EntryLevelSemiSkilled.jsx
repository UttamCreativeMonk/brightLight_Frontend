import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/EntryLevelSemiSkilled.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const EntryLevelSemiSkilled = () => {
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
    fetch("https://brightlight-node.onrender.com/entryLevelSemiSkilledMeta")
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
          British Columbia Entry Level and Semi-Skilled Worker (ELSS) Stream
        </h1>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          The British Columbia Entry Level and Semi-Skilled Worker (ELSS) stream
          is part of the comprehensive British Columbia Provincial Nominee
          Program (BC PNP). Administered by the province of British Columbia,
          this program aims to facilitate the immigration journey for
          semi-skilled and entry level work experience.
        </p>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          Whether you’re a prospective immigrant seeking opportunities or an
          employer looking to hire skilled workers, the BC ELSS stream provides
          a pathway to contribute to the province’s vibrant workforce.
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="key-points"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          Benefits of BCPNP Entry Level and Semi-Skilled Worker (ELSS) Stream
        </h2>
        <ul
          style={{ marginLeft: "40px" }}
          className={`${styles.list} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
            <b>Nomination Priority:</b> Successful candidates nominated through
            the BCPNP – Entry Level and Semi-Skilled Program (ELSS) receive an
            invitation to apply for Canadian permanent residence.
          </li>
          <li className={styles.listItem}>
            <b>No Express Entry Profile Required:</b> Unlike other immigration
            streams, applicants for this program do not need an Express Entry
            profile to be eligible.
          </li>
          <li className={styles.listItem}>
            <b>No High-Skilled Job Offer Required:</b> You do not need to be
            employed or have a job offer in a high-skilled occupation.
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          Eligibility Criteria for the British Columbia BCPNP Entry Level and
          Semi-Skilled (ELSS) Program
        </h2>
        <p>
          The BCPNP Entry Level and Semi-Skilled (ELSS) Program encompasses five
          key eligibility categories, as outlined below:
        </p>
        <div
          className={`${styles.criteria} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h3 className={styles.subheading}>Job Offer</h3>
          <ul
            className={`${styles.list} ${styles.section}`}
            id="testing5"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <li className={styles.listItem}>
              Secure an indeterminate, full-time employment offer from an
              eligible BC employer.
            </li>
            <li className={styles.listItem}>
              The job offer must fall within an eligible National Occupational
              Classification (NOC) code, specifically TEER Category 4 or 5.
            </li>
            <li className={styles.listItem}>
              Location-specific variations apply:
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>
                  <strong> Northeast Development Region of BC:</strong> All NOC
                  4 or 5 occupations are eligible except for live-in caregivers
                  (NOC 44100).
                </li>
                <li className={styles.nestedListItem}>
                  <strong> Outside the Northeast Development Region:</strong>
                  Eligible occupations include:
                  <ul className={styles.nestedList}>
                    <li className={styles.nestedListItem}>
                      Travel and accommodation roles (e.g., hotel front desk
                      clerks, tour guides).
                    </li>
                    <li className={styles.nestedListItem}>
                      Food and beverage service positions (e.g., bartenders,
                      food servers).
                    </li>
                    <li className={styles.nestedListItem}>
                      Support occupations in accommodation and travel services.
                    </li>
                    <li className={styles.nestedListItem}>
                      Other service roles (e.g., dry cleaning, laundry).
                    </li>
                    <li className={styles.nestedListItem}>
                      Food processing positions (e.g., machine operators,
                      butchers).
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h3
            style={{ opacity: "1", transform: "translateX(0)" }}
            className={`${styles.subheading} ${styles.section}`}
            id="testing6"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
            Work Experience
          </h3>
          <ul style={{ marginLeft: "20px" }} className={styles.list}>
            <li className={styles.listItem}>
              Maintain full-time employment (averaging at least 30 hours per
              week year-round) with the BC employer supporting your BCPNP
              application.
            </li>
            <li className={styles.listItem}>
              Work in any ELSS-eligible occupation for at least 9 consecutive
              months before registering for the BCPNP.
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            Education
          </h3>
          <ul
            style={{ marginLeft: "20px" }}
            className={`${styles.list} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            <li className={styles.listItem}>
              Successfully complete secondary education (high school) within or
              outside Canada.
            </li>
            <li className={styles.listItem}>
              If the position requires certification, licensing, or
              registration, provide relevant documentation.
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            Language Proficiency
          </h3>
          <ul
            style={{ marginLeft: "20px" }}
            className={`${styles.list} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            <li className={styles.listItem}>
              Attain a Canadian Language Benchmark (CLB) score of at least 4 in
              English or French.
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
            Eligible ELSS Occupations
          </h3>
          <div
            className={`${styles.occupations} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            <h4
              className={styles.occupationTitle}
              id="testing14"
              ref={(el) => (sectionsRef.current[16] = el)}
            >
              Occupations in Travel and Accommodation
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>Hotel front desk clerks</td>
                  <td className={styles.tableCell}>64314</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing15"
              ref={(el) => (sectionsRef.current[8] = el)}
            >
              Tour and Recreational Guides and Casino Occupations
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>Tour and travel guides</td>
                  <td className={styles.tableCell}>64320</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Casino workers</td>
                  <td className={styles.tableCell}>64321</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Outdoor sport and recreational guides
                  </td>
                  <td className={styles.tableCell}>64322</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing17"
              ref={(el) => (sectionsRef.current[19] = el)}
            >
              Occupations in Food and Beverage Service
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                    Maîtres d’hotel and hosts/hostesses
                  </td>
                  <td className={styles.tableCell}>64300</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Bartenders</td>
                  <td className={styles.tableCell}>64301</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Food and beverage servers
                  </td>
                  <td className={styles.tableCell}>65200</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Food counter attendants, kitchen helpers and related support
                    occupations
                  </td>
                  <td className={styles.tableCell}>65201</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing19"
              ref={(el) => (sectionsRef.current[21] = el)}
            >
              Cleaners (Employed Directly by Hotels/Resorts)
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                    Support occupations in accommodation, travel and facilities
                    set-up services
                  </td>
                  <td className={styles.tableCell}>65210</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Light duty cleaners</td>
                  <td className={styles.tableCell}>65310</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Specialized cleaners</td>
                  <td className={styles.tableCell}>65311</td>
                </tr>

                <tr>
                  <td className={styles.tableCell}>
                    Janitors, caretakers and heavy-duty cleaners
                  </td>
                  <td className={styles.tableCell}>65312</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing21"
              ref={(el) => (sectionsRef.current[23] = el)}
            >
              Other Service Occupations (Employed Directly by Hotels/Resorts)
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                    Dry cleaning, laundry and related occupations
                  </td>
                  <td className={styles.tableCell}>65320</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Other service support occupations
                  </td>
                  <td className={styles.tableCell}>65329</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.occupationPara}>
              *For the purposes of the BC PNP, a resort is defined as an
              accommodation facility that is associated with recreational
              activities. These activities can include skiing, golfing, boating,
              fishing, biking, swimming, horseback riding, hiking, nature-based
              or interpretive tours, etc.
            </p>
            <h4
              className={styles.occupationTitle}
              id="testing23"
              ref={(el) => (sectionsRef.current[25] = el)}
            >
              Food Processing
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Occupation</th>
                  <th className={styles.tableHeader}>NOC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                    Process control and machine operators, food and beverage
                    processing
                  </td>
                  <td className={styles.tableCell}>94140</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Industrial butchers and meat cutters, poultry preparers and
                    related workers
                  </td>
                  <td className={styles.tableCell}>94141</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Fish and seafood plant workers
                  </td>
                  <td className={styles.tableCell}>94142</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Testers and graders, food and beverage processing
                  </td>
                  <td className={styles.tableCell}>94143</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Labourers in food and beverage processing
                  </td>
                  <td className={styles.tableCell}>95106</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate Your BCPNP Score
          </button>
        </div>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[27] = el)}
        >
          Application Process for British Columbia Entry Level and Semi-Skilled
          Worker Stream
        </h2>
        <p>
          The BCPNP Entry Level and Semi-Skilled Worker stream operates on an
          Expression of Interest (EOI) system. Let’s delve into the details:
        </p>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing25"
          ref={(el) => (sectionsRef.current[28] = el)}
        >
          <li className={styles.listItem}>
            {" "}
            <h3>Eligibility and Registration:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                Candidates who meet the minimum stream requirements can register
                a profile using BC’s online immigration portal.
              </li>
              <li className={styles.nestedListItem}>
                Once submitted, profiles are assessed, and candidates receive a
                score based on the BC Skills Immigration Ranking System.
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>Invitations and Application:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                The highest-ranking candidates are invited to apply to the
                stream during periodic intakes.
              </li>
              <li className={styles.nestedListItem}>
                Upon receiving an invitation, candidates must submit a complete
                application within 30 days.
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>Provincial Nomination and Work Permit:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                If the application is approved, the candidate receives a
                provincial nomination for permanent residence from BC.
              </li>
              <li className={styles.nestedListItem}>
                Candidates not already working for a BC employer can request a
                letter of support for a temporary work permit. This allows them
                to work in Canada while their permanent residence application is
                processed.
              </li>
              <li className={styles.nestedListItem}>
                Applying for a work permit with a province’s nomination letter
                is a separate application to IRCC.
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>Official Application for Permanent Residence:</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
                After receiving the provincial nomination, the applicant has six
                months to submit an official application for permanent
                residence.
              </li>
              <li className={styles.nestedListItem}>
                The applications are now submitted online.
              </li>
            </ul>
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="testing26"
          ref={(el) => (sectionsRef.current[29] = el)}
        >
          Still Not Sure?
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing27"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
          Contact Brightlight Immigration today to assess your profile and
          embark on a transformative journey towards achieving your Canadian
          dream. With over a decade of experience, we specialize in handling
          BCPNP Entry Level and Semi-Skilled (ELSS) Program. Our approval rate
          for these programs is nearly 100%. We achieve this with a tailored
          approach to your specific case. We use case law and find similar cases
          to your circumstances that had positive results, and we use them as
          precedents in cases we work on. This is why we have a high success
          rate.
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing28"
          ref={(el) => (sectionsRef.current[31] = el)}
        >
          At Brightlight Immigration, we have a dedicated team of visa
          application specialists who can assist you from the start of the
          application process all the way to obtaining your PR. Start your
          process now.
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

        {/* <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[32] = el)}
        >
          Why Choose Us?
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing29"
          ref={(el) => (sectionsRef.current[33] = el)}
        >
          At Brightlight Immigration, we offer:
        </p>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing30"
          ref={(el) => (sectionsRef.current[34] = el)}
        >
          <li className={styles.listItem}>
            Expertise: Over a decade of experience with high approval rates.
          </li>
          <li className={styles.listItem}>
            Personalized Service: Tailored approach to address each unique case.
          </li>
          <li className={styles.listItem}>
            Case Law Utilization: Leveraging precedents from similar cases.
          </li>
          <li className={styles.listItem}>
            Full Support: From initial application to final PR approval.{" "}
          </li>
        </ul> */}
        <section
          className={`${styles.section} ${styles.section}`}
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

export default EntryLevelSemiSkilled;
