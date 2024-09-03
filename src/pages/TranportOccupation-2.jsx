import React, { useState } from 'react';
import styles from "../styles/TransportOccupation-2.module.css";
import LinkAncor from "../assets/link-arrows.png";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import PaginationTable from "../sections/PaginationTable";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";


let TransportOccupationTwo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
    <Navbar1/>
    <div className={styles.bannerParent}>
      <div className={styles.banner}>
        <div className={styles.bannerHeading}>
          <h1>Transport Occupations</h1>
          <h3>CATEGORY BASED DRAW</h3>
          <p>
            Exploring the Agriculture and Agri-Food Occupations Category
            offers access to abundant opportunities within Canada's thriving
            agricultural sector. Whether your skills lie in crop production,
            livestock farming, agricultural research, or any other Agri-food
            occupation, this program paves the way for a rewarding career path
            in Canada.
          </p>
        </div>

        <div
          className={`${styles.bannerHeadingRotateParent} ${
            isDropdownOpen ? styles.active : ''
          }`}
        >
          <div
            className={styles.bannerHeadingRotate}
            onClick={toggleDropdown}
          >
            <h3>QUICK ACCESS</h3>
          </div>
          <div className={styles.bannerHeadingRotatePara}>
            <p>About the program</p>
            <p>Eligibility</p>
            <p>NOC Codes</p>
            <p>Draw History</p>
            <p>Appointment</p>
            <p>Why Choose us</p>
            <p>Testimonials</p>
            <p>FAQs</p>
            <p>Blogs</p>
          </div>
        </div>
      </div>
    </div>

      <div className={styles.eligibleParent}>
        <div className={styles.eligibleMain}>
          <h1>First you must be eligible with Express Entry</h1>
          <h3>
            Before you can participate in a STEM-specific draw through Canada's
            Express Entry system, you need to be eligible. Here's how you can
            get started:
          </h3>
        </div>
        {/* // */}
        <div className={styles.chooseParent}>
          <div className={styles.chooseMain}>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
              <div className={styles.headerLineParent}>      
                <div className={styles.headingNumbers}>1</div>
                <p></p>
              </div>
                <div className={styles.stepContent}>
                  <p>
                    Join the Express Entry Pool: The first step towards becoming
                    a candidate for a STEM-specific draw is to get into the
                    Express Entry pool.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
              <div className={styles.headerLineParent}>      
                <div className={styles.headingNumbers}>2</div>
                <p></p>
              </div>
                <div className={styles.stepContent}>
                  <h2>Choose Your Program:</h2>
                  <p>
                    There are three programs you can be eligible for to join the
                    Express Entry pool:
                  </p>
                  <div className={styles.stepContentList}>
                    <ul>
                      <li>
                        <b>Federal Skilled Worker Program (FSW):</b> This
                        program is ideal for tech workers who have the necessary
                        work experience, education, and language ability.
                      </li>
                      <button className={styles.button17} role="button">View Program</button>
                      <li>
                        <b>Canadian Experience Class (CEC):</b>
                        Similar to the FSW program, the CEC is also suitable for
                        tech workers who have gained Canadian work experience.
                      </li>
                      <button className={styles.button17} role="button">View Program</button>
                      <li>
                        <b>
                          Federal Skilled Agriculture and agri-food occupations
                          s Program (FSTP):
                        </b>
                        If you're a Agriculture and agri-food occupations s
                        worker, this program is designed for you. It requires
                        proof of relevant work experience, education, and
                        language proficiency.
                      </li>
                      <button className={styles.button17} role="button">View Program</button>
                    </ul>
                  </div>
                  <h3>
                    Remember, each program has its own set of eligibility
                    requirements. So, make sure to review these carefully and
                    ensure you meet all the necessary criteria before applying.
                  </h3>
                </div>
              </div>
            </div>
            {/* // */}
          </div>
        </div>
        {/* // */} {/* // */}
      </div>


      <div className={styles.agricultureParent}>
        <div className={styles.agricultureMain}>
          <h1>
            Agriculture and agri-food occupations category eligibility criteria:
          </h1>
          <h2>
            Once you have met eligibility for one of the Express Entry programs,
            now you need to meet eligibility for Agriculture and agri-food
            occupations criteria:
          </h2>
          <div className={styles.agricultureList}>
            <ul>
              <li>
                At least 6 months of full-time, continuous work experience (or
                an equivalent amount of part-time work experience) in an
                agriculture or agri-food occupation.
              </li>
              <li>A valid Express Entry profile.</li>
            </ul>
          </div>
          <PaginationTable/>
        </div>
      </div>



      <div className={styles.theButtonAncorParentTwo}>
        <div className={styles.theButtonAncorTwo}>
          <a href="/">
          <button>
            Express Entry Agriculture and agri-food occupations draws history
            <span className={styles.theButtonSpanTwo}>
              <img src={LinkAncor} alt="err" />
            </span>
            </button>
          </a>
        </div>
      </div>


      <div className={styles.contactUpperParent}>
        <div className={styles.contactUpperMain}>
          <p>
            The first ever Express Entry draw for Agriculture and agri-food
            occupations workers was held on September, 2023. Express Entry draw
            267 saw a CRS score of 354 and invited 600 candidates eligible for
            category-based selection in Agriculture and agri-food occupations.
          </p>
        </div>
      </div>

      <div className={styles.contactParent}>
        <div className={styles.contactMain}>
          <h1>Contact</h1>

          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs are
            near to 100%. We achieve this with a tailored approach to your
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


          <button className={styles.bookButton17} role="button">Book an Appointment</button>
        </div>
      </div>


       <BestChoice/>
      <Testimonials/>
      <FAQ/> 

<Footer1/>
    </>
  );
};

export default TransportOccupationTwo;


