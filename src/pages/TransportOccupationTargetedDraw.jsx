import React, { useState } from "react";
import styles from "../styles/TransportOccupationTargetedDraw.module.css";
import { Link } from "react-router-dom";


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

  return (
    <>
      {/* <Navbar1 /> */}
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
              <p onClick={() => scrollToSection("about-program")}> About the Program </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("transport-eligibility")}>Transport Eligibility</p>
              <p onClick={() => scrollToSection("transport_occupations")}>Transport Occupations</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment </p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us? </p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.container}>
      <h1 className={styles.heading} id="about-program">Category-Based Express Entry Selection Draws: Transport Occupations</h1>

      <div className={styles.introduction}>
        <p>
          The Transport Occupations category encompasses a range of vital roles essential for the smooth functioning of the transport sector. These roles include aircraft assemblers, transport truck drivers, railway traffic controllers, marine traffic regulators, air traffic controllers, pilots, aircraft mechanics, railway carmen/women, and transportation managers.
        </p>
      </div>

      <div className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>First You Must Be Eligible with Express Entry</h2>
        <ol>
          <li>Join the Express Entry Pool: The first step towards becoming a candidate for a transport-specific draw is to get into the Express Entry pool.</li>
          <li>Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:
            <ul>
              <li><a href="/federal-skilled-worker-program" className={styles.button}>Federal Skilled Worker Program (FSWP)</a></li>
              <li><a href="/canadian-experience-class" className={styles.button}>Canadian Experience Class (CEC)</a></li>
              <li><a href="/federal-skilled-transports-program" className={styles.button}>Federal Skilled Transports Program (FSTP)</a></li>
            </ul>
          </li>
        </ol>
        <p>
          Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.
        </p>
      </div>

      <div className={styles.transportEligibility} id="transport-eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria for Transport Occupations Category</h2>
        <ul>
          <li>Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible transport occupation. This experience can be gained either in Canada or abroad.</li>
          <li>A valid Express Entry profile.</li>
        </ul>
        <p>Here is the list of eligible NOCs: <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html" className={styles.link}>Eligible NOCs List</a></p>
      </div>

      <div className={styles.tableContainer}>
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
              <td>Railway traffic controllers and marine traffic regulators</td>
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

      <div className={styles.drawHistory} id="transport_occupations">
        <h2 className={styles.subheading}>Express Entry Transport Draws History</h2>
        <p>The first-ever Express Entry draw for Transport occupation workers was held in September 2023. Express Entry draw #264 saw a CRS score of 435 and invited 1000 candidates eligible for category-based selection in Transport occupations.</p>
        <a href="/previous-draw-history" className={styles.button}>View Previous Draw History</a>
      </div>

      <div className={styles.contact}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.</p>
        <a href="/contact" className={styles.button}>Contact Us</a>
      </div>

      <div className={styles.whyChooseUs}>
        <h2 className={styles.subheading}>Why Choose Us</h2>
        <p>Here is where you can describe why clients should choose your services over others. Highlight your unique selling points, such as personalized service, high success rates, and expert knowledge.</p>
      </div>

      <div className={styles.testimonials}>
        <h2 className={styles.subheading}>Client Testimonials</h2>
        <div className={styles.videoTestimonials}>
          <p>Video testimonials and written testimonials. (Option to hide any of them should be available in backend)</p>
        </div>
        <div className={styles.writtenTestimonials}>
          <p>Written testimonials from previous clients. (Option to hide any of them should be available in backend)</p>
        </div>
      </div>
    </div>


    </>
  );
};

export default TransportOccupationTargetedDraw;
