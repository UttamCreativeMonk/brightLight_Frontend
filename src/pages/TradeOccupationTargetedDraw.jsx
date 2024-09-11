import React, { useState } from "react";
import styles from "../styles/TradeOccupationTargetedDraw.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";



const TradeOccupationTargetedDraw = () => {
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
              <p onClick={() => scrollToSection("about-program")}>About the Program </p>
              <p onClick={() => scrollToSection("eligible")}>Eligible</p>
              <p onClick={() => scrollToSection("trade-occupations-category")}>Trade Occupations Category</p>
              <p onClick={() => scrollToSection("criteria-trade-occupations-category")}>Criteria-Trade-Occupation</p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
      <h1 className={styles.heading} id="about-program">Category-Based Express Entry Selection Draws: Trade Occupations</h1>

      <div className={styles.introduction} >
        <p>
          Canada’s Express Entry system for Trades is tailored to meet the rising demand for skilled workers in various trade sectors. This streamlined system simplifies immigration, targeting skilled trades professionals directly. Through Express Entry, meticulous evaluation of international candidates' profiles occurs, emphasizing their trade expertise, work experience, and language proficiency. Exceptional candidates, demonstrating excellence in their trades with significant experience and language skills, receive Invitations to Apply (ITAs) for permanent residency. This process is central to Canada's strategy to strengthen its skilled trade workforce, demonstrating a dedicated commitment to improving its trade infrastructure.
        </p>
      </div>

      <div className={styles.eligibility} id="eligible">
        <h2 className={styles.subheading}>First You Must Be Eligible with Express Entry</h2>
        <ol>
          <li>Join the Express Entry Pool: The first step towards becoming a candidate for a trade-specific draw is to get into the Express Entry pool.</li>
          <li>Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:
            <ul>
              <li><a href="/federal-skilled-worker-program" className={styles.button}>Federal Skilled Worker Program (FSW)</a></li>
              <li><a href="/canadian-experience-class" className={styles.button}>Canadian Experience Class (CEC)</a></li>
              <li><a href="/federal-skilled-trades-program" className={styles.button}>Federal Skilled Trades Program (FSTP)</a></li>
            </ul>
          </li>
        </ol>
        <p>
          Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.
        </p>
      </div>

      <div className={styles.tradeEligibility} id="trade-occupations-category">
        <h2 className={styles.subheading}>Eligibility Criteria for Trade Occupations Category</h2>
        <ul>
          <li>You must have a Red Seal or other recognized trade certification.</li>
          <li>Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible trade occupation.</li>
          <li>A valid Express Entry profile.</li>
        </ul>
        <p>Here is the list of eligible NOCs: <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html" className={styles.link}>Eligible NOCs List</a></p>
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.subheading} id="criteria-trade-occupations-category">Eligible Trade Occupations</h2>
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
              <td>Carpenters</td>
              <td>72310</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Construction millwrights and industrial mechanics</td>
              <td>72400</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Contractors and supervisors, other construction trades, installers, repairers, and servicers</td>
              <td>72014</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Electricians (except industrial and power system)</td>
              <td>72200</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Elevator constructors and mechanics</td>
              <td>72406</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Heating, refrigeration, and air conditioning mechanics</td>
              <td>72402</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Machine fitters</td>
              <td>72405</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Plumbers</td>
              <td>72300</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Residential and commercial installers and servicers</td>
              <td>73200</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Welders and related machine operators</td>
              <td>72106</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.drawHistory}>
        <h2 className={styles.subheading}>Express Entry Trade Occupations Draw History</h2>
        <p>The first-ever Express Entry draw for Trade occupation workers was held in August 2023. Express Entry draw #261 saw a CRS score of 388 and invited 1500 candidates eligible for category-based selection in Trade occupations.</p>
        <a href="/previous-draw-history" className={styles.button}>View Previous Draw History</a>
      </div>

      <div className={styles.contact}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.</p>
        <a href="/contact-us" className={styles.button}>Contact Us</a>
      </div>

      <div className={styles.whyChooseUs} id="why-choose-us">
        <h2 className={styles.subheading}>Why Choose Us</h2>
        <p>Here is where you can describe why clients should choose your services over others. Highlight your unique selling points, such as personalized service, high success rates, and expert knowledge.</p>
      </div>

      <div className={styles.testimonials}>
        <h2 className={styles.subheading}>Client Testimonials</h2>
        <div className={styles.videoTestimonials}>
          <p>Video testimonials and written testimonials. (option to hide any of them should be there in backend)</p>
        </div>
        <div className={styles.writtenTestimonials}>
          <p>Written testimonials from previous clients. (option to hide any of them should be there in backend)</p>
        </div>
      </div>
    </div>
    <Footer1/>
    </>
  );
};

export default TradeOccupationTargetedDraw;
