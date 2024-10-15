import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TransportOccupationTargetedDraw.module.css";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const TransportOccupationTargetedDraw = () => {
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
                {" "}
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("transport-eligibility")}>
                Transport Eligibility
              </p>
              <p onClick={() => scrollToSection("transport_occupations")}>
                Transport Occupations
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment{" "}
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                {" "}
                Why Choose Us?{" "}
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials{" "}
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
          Category-Based Express Entry Selection Draws: Transport Occupations
        </h1>

        <div className={styles.introduction}>
          <p>
            The Transport Occupations category encompasses a range of vital
            roles essential for the smooth functioning of the transport sector.
            These roles include aircraft assemblers, transport truck drivers,
            railway traffic controllers, marine traffic regulators, air traffic
            controllers, pilots, aircraft mechanics, railway carmen/women, and
            transportation managers.
          </p>
        </div>

        <div
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
            First You Must Be Eligible with Express Entry
          </h2>
          <p>
            Before you can participate in a STEM-specific draw through
            Canada&#39;s Express Entry system, you need to be eligible.
            Here&#39;s how you can get started:
          </p>
          <ol>
            <li>
              Join the Express Entry Pool: The first step towards becoming a
              candidate for a transport-specific draw is to get into the Express
              Entry pool.
            </li>
            <li>
              Choose Your Program: There are three programs you can be eligible
              for to join the Express Entry pool:
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
            </li>
          </ol>
          <p>
            Remember, each program has its own set of eligibility requirements.
            So, make sure to review these carefully and ensure you meet all the
            necessary criteria before applying.
          </p>
        </div>

        <div
          className={`${styles.transportEligibility} ${styles.section}`}
          id="transport-eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            Eligibility Criteria for Transport Occupations Category
          </h2>
          <p>
            Once you have met eligibility for one of the Express Entry programs,
            now you need to meet eligibility for Transport specific criteria:
          </p>
          <ul>
            <li>
              Within the last 3 years, you have at least 6 months of full-time,
              continuous work experience (or an equivalent amount of part-time
              work experience) in a single eligible transport occupation. This
              experience can be gained either in Canada or abroad.
            </li>
            <li>A valid Express Entry profile.</li>
          </ul>
          {/* <p>
            Here is the list of eligible NOCs:{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              className={styles.link}
            >
              Eligible NOCs List
            </a>
          </p> */}
        </div>

        <div
          className={`${styles.tableContainer} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>Eligible Transport Occupations</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Occupations</th>
                <th>2021 NOC Code</th>
                <th>2021 TEER Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aircraft assemblers and aircraft assembly inspectors</td>
                <td>93200</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Transport truck drivers</td>
                <td>73300</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  Railway traffic controllers and marine traffic regulators
                </td>
                <td>72604</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Engineer officers, water transport</td>
                <td>72603</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Deck officers, water transport</td>
                <td>72602</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Air traffic controllers and related occupations</td>
                <td>72601</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Air pilots, flight engineers and flying instructors</td>
                <td>72600</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Aircraft mechanics and aircraft inspectors</td>
                <td>72404</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Railway carmen/women</td>
                <td>72403</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Managers in transportation</td>
                <td>70020</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className={`${styles.drawHistory} ${styles.section}`}
          id="transport_occupations"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry Transport Draws History
          </h2>
          <p>
            The first-ever Express Entry draw for Transport occupation workers
            was held in September 2023. Express Entry draw #264 saw a CRS score
            of 435 and invited 1000 candidates eligible for category-based
            selection in Transport occupations.
          </p>
          {/* <a href="" className={styles.button}></a> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </div>
      
        <div
          className={`${styles.contact} ${styles.section}`}
          id="testing3"
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
          {/* <a href="/contact" className={styles.button}></a> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>

        {/* <div
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Here is where you can describe why clients should choose your
            services over others. Highlight your unique selling points, such as
            personalized service, high success rates, and expert knowledge.
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
        </div> */}

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

export default TransportOccupationTargetedDraw;
