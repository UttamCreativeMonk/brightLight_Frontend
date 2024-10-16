import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/StemTargetedDraw.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const StemTargetedDraw = () => {
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
    fetch("https://brightlight-node.onrender.com/stemTargetedDrawMeta")
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
              <p onClick={() => scrollToSection("eligiblity")}>Eligiblity</p>
              <p onClick={() => scrollToSection("stem-eligiblity")}>
                Stem Eligiblity
              </p>
              <p onClick={() => scrollToSection("stem-noc-codes")}>
                Stem Noc Codes
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
        <h1 className={styles.heading}>
          Category-Based Express Entry Selection Draws: STEM (Science,
          Technology, Engineering, Math) Occupations
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <p>
            Canada's Express Entry system is not just a general immigration
            tool, but also a strategic resource for targeting specific sectors
            of the economy. Occasionally, Canada conducts Science, Technology,
            Engineering, and Math (STEM)-specific draws through the Express
            Entry system. These draws specifically target candidates who have
            work experience in eligible STEM occupations.
          </p>
          <p>
            If you're part of the STEM workforce and are considering immigrating
            to Canada, these specialized draws could be a significant
            opportunity for you. Stay tuned for more updates on these
            STEM-specific Express Entry draws and make your move to Canada a
            successful one.
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligiblity"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            First You Must Be Eligible with Express Entry
          </h2>
          <p>
            Before you can participate in a STEM-specific draw through Canada's
            Express Entry system, you need to be eligible. Here's how you can
            get started:
          </p>
          <ol style={{ marginLeft: "40px" }}>
            <li>
              Join the Express Entry Pool: The first step towards becoming a
              candidate for a STEM-specific draw is to get into the Express
              Entry pool.
            </li>
            <li>
              Choose Your Program: There are three programs you can be eligible
              for to join the Express Entry pool:
              <ul
                className={styles.subheadingLink}
                style={{ marginTop: "20px" }}
              >
                <li style={{ textAlign: "center", marginBottom: "30px" }}>
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
                <li style={{ textAlign: "center", marginBottom: "30px" }}>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  Similar to the FSW program, the CEC is also suitable for tech
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
                  If you're a trades worker, this program is designed for you.
                  It requires proof of relevant work experience, education, and
                  language proficiency.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Remember, each program has its own set of eligibility requirements.
            So, make sure to review these carefully and ensure you meet all the
            necessary criteria before applying.
          </p>
          <h2>Important things to keep in mind:</h2>
          <p>
            When it comes to the Federal Skilled Worker Program (FSW) BACKLINK
            and the Canadian Experience Class (CEC) BACKLINK - the two programs
            most relevant to tech workers - you&#39;ll need at least one year of
            continuous work experience in a &quot;skilled&quot; occupation.
            These occupations are classified under 0, 1, 2, and 3 of Canada’s
            Training Education Experience Responsibilities (TEER) categories.
          </p>
          <p>Here are a couple of important points to remember:</p>
          <ul style={{ marginLeft: "40px" }} className={styles.leftList}>
            <li>
              You can accumulate this work experience over two years in
              part-time roles, as long as it adds up to 1,560 hours, which is
              equivalent to one year of full-time work.
            </li>
            <li>
              The CEC program requires at least one year of skilled work
              experience in Canada. On the other hand, the FSW program doesn't
              require any Canadian work experience.
            </li>
          </ul>
          <p>
            The reason we&#39;re stressing that you need to be eligible for
            Express Entry is to make it clear that having six months of work
            experience in a STEM occupation isn&#39;t enough to qualify for
            Express Entry. You need to meet the work experience requirements for
            at least one of the programs first. If you have one year of work
            experience in an eligible STEM occupation and meet the other
            requirements of the CEC or the FSW, then you may be invited in a
            STEM-specific draw.
          </p>
        </section>

        <section
          className={`${styles.stemEligibility} ${styles.section}`}
          id="stem-eligiblity"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for STEM (Science, Technology, Engineering,
            Math) Occupations
          </h2>
          <p>
            To be Eligible in Science, Technology, Engineering, and Math (STEM)
            occupations category you must meet the following eligibility
            criteria:
          </p>
          <ul>
            <li>A valid university degree in a STEM field.</li>
            <li>
              Within the last 3 years, you have at least 6 months of full-time,
              continuous work experience (or an equivalent amount of part-time
              work experience) in a single eligible STEM occupation.
            </li>
            <li>A valid Express Entry profile.</li>
          </ul>
        </section>

        <section
          className={`${styles.stemEligibility} ${styles.section}`}
          id="stem-eligiblity"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry STEM draws history
          </h2>
          <p>
            The first ever Express Entry draw for STEM workers was just
            held. Express Entry draw 254 saw a CRS score of 486 and invited 500
            candidates eligible for category-based selection in science,
            technology, mathematics, and engineering (STEM) occupations.
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section>

        <section
          className={`${styles.stemNocCodes} ${styles.section}`}
          id="stem-noc-codes"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>STEM Eligible NOC Codes</h2>
          {/* <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              NOC Codes
            </a>
          </p> */}

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Occupation</th>
                <th>2021 NOC Code</th>
                <th>TEER Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Architects</td>
                <td>21200</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Architecture and science managers</td>
                <td>20011</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Business systems specialists</td>
                <td>21221</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Civil Engineers</td>
                <td>21300</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Computer and information systems managers</td>
                <td>20012</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  Computer engineers (except software engineers and designers)
                </td>
                <td>21311</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Computer systems developers and programmers</td>
                <td>21230</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Cybersecurity specialists</td>
                <td>21220</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Data scientists</td>
                <td>21211</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Database analysts and data administrators</td>
                <td>21223</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Electrical and electronics engineers</td>
                <td>21310</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Engineering managers</td>
                <td>20010</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Industrial and manufacturing engineers</td>
                <td>21321</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Information systems specialists</td>
                <td>21222</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Land surveyors</td>
                <td>21203</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Landscape Architects</td>
                <td>21201</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Mathematicians, statisticians and actuaries</td>
                <td>21210</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Metallurgical and materials engineers</td>
                <td>21322</td>
                <td>1</td>
              </tr>
              <tr>
                <td>
                  Natural and applied science policy researchers, consultants
                  and program officers
                </td>
                <td>41400</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Software developers and programmers</td>
                <td>21232</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Software engineers and designers</td>
                <td>21231</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Urban and land use planners</td>
                <td>21202</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Web designers</td>
                <td>21233</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Web developers and programmers</td>
                <td>21234</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* <section
          className={`${styles.drawHistory} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry STEM Draws History
          </h2>
          <p>
            The first-ever Express Entry draw for STEM workers was just held.
            Express Entry draw #254 saw a CRS score of 486 and invited 500
            candidates eligible for category-based selection in science,
            technology, mathematics, and engineering (STEM) occupations.
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section> */}

        <section
          className={`${styles.contact} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs is
            nearly 100%. We achieve this with a tailored approach to your
            specific case. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your PR. Start your
            process now.
          </p>
          {/* <Link to="/contact-us" className={styles.button}>
           
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </button>
        </section>

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Brightlight Immigration offers personalized services to maximize
            your chances of success. Our experienced team provides dedicated
            support throughout the immigration process, ensuring a smooth and
            efficient experience.
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section> */}

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
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
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

export default StemTargetedDraw;
