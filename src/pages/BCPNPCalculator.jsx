import React, { useState } from "react";
import styles from "../styles/BCPNPCalculator.module.css";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const BCPNPCalculator = () => {
  const [points, setPoints] = useState(0);
  const [canadaExperiencePoints, setCanadaExperiencePoints] = useState(0);
  const [currentJobPoints, setCurrentJobPoints] = useState(0);
  const [educationPoints, setEducationPoints] = useState(0);
  const [bcEducationPoints, setBcEducationPoints] = useState(0);
  const [canadaEducationPoints, setCanadaEducationPoints] = useState(0);
  const [occupationPoints, setOccupationPoints] = useState(0);
  const [languagePoints, setLanguagePoints] = useState(0);
  const [languageProficiencyPoints, setLanguageProficiencyPoints] = useState(0);
  const [hourlyWagePoints, setHourlyWagePoints] = useState(0);
  const [employmentAreaPoints, setEmploymentAreaPoints] = useState(0);
  const [languageProficiencyRegionPoints, setLanguageProficiencyRegionPoints] =
    useState(0);

  // Handles the first section's experience change
  const handleExperienceChange = (e) => {
    const experienceValue = e.target.value;

    switch (experienceValue) {
      case "5+":
        setPoints(15);
        break;
      case "4-5":
        setPoints(12);
        break;
      case "3-4":
        setPoints(9);
        break;
      case "2-3":
        setPoints(6);
        break;
      case "1-2":
        setPoints(3);
        break;
      case "<1":
        setPoints(1);
        break;
      case "0":
        setPoints(0);
        break;
      default:
        setPoints(0);
        break;
    }
  };

  // Handles the second section's Canada experience change
  const handleCanadaExperienceChange = (e) => {
    const canadaExperienceValue = e.target.value;

    if (canadaExperienceValue === "yes") {
      setCanadaExperiencePoints(6); // Mimic the case '2-3'
    } else {
      setCanadaExperiencePoints(0); // Mimic the case '0'
    }
  };

  // Handles the third section's current job change
  const handleCurrentJobChange = (e) => {
    const currentJobValue = e.target.value;

    if (currentJobValue === "yes") {
      setCurrentJobPoints(4);
    } else {
      setCurrentJobPoints(1);
    }
  };

  // Handles the fourth section's education level change
  const handleEducationChange = (e) => {
    const educationValue = e.target.value;

    switch (educationValue) {
      case "doctoral":
        setEducationPoints(20);
        break;
      case "masters":
        setEducationPoints(18);
        break;
      case "postGradCert":
        setEducationPoints(16);
        break;
      case "bachelors":
        setEducationPoints(14);
        break;
      case "associate":
        setEducationPoints(12);
        break;
      case "diplomaCert":
        setEducationPoints(10);
        break;
      case "secondarySchool":
        setEducationPoints(5);
        break;
      default:
        setEducationPoints(0);
        break;
    }
  };

  // Handles the Post-Secondary Education Completed in B.C. change
  const handleBcEducationChange = (e) => {
    const bcEducationValue = e.target.value;

    if (bcEducationValue === "yes") {
      setBcEducationPoints(3);
    } else {
      setBcEducationPoints(0);
    }
  };

  // Handles the Post-Secondary Education Completed in Canada (Outside B.C.) change
  const handleCanadaEducationChange = (e) => {
    const canadaEducationValue = e.target.value;

    if (canadaEducationValue === "yes") {
      setCanadaEducationPoints(5);
    } else {
      setCanadaEducationPoints(0);
    }
  };

  // Handles the working in specific occupations change
  const handleOccupationChange = (e) => {
    const occupationValue = e.target.value;

    if (occupationValue === "yes") {
      setOccupationPoints(6);
    } else {
      setOccupationPoints(3);
    }
  };

  // Handles the Language Points change
  const handleLanguageChange = (e) => {
    const languageValue = e.target.value;

    switch (languageValue) {
      case "10+":
        setLanguagePoints(20);
        break;
      case "9":
        setLanguagePoints(18);
        break;
      case "8":
        setLanguagePoints(16);
        break;
      case "7":
        setLanguagePoints(14);
        break;
      case "6":
        setLanguagePoints(12);
        break;
      case "5":
        setLanguagePoints(10);
        break;
      case "4":
        setLanguagePoints(8);
        break;
      case "lessThan4":
        setLanguagePoints(5);
        break;
      case "noTest":
        setLanguagePoints(0);
        break;
      default:
        setLanguagePoints(0);
        break;
    }
  };

  // Handles the Language Proficiency change
  const handleLanguageProficiencyChange = (e) => {
    const languageProficiencyValue = e.target.value;

    if (languageProficiencyValue === "yes") {
      setLanguageProficiencyPoints(5);
    } else {
      setLanguageProficiencyPoints(3);
    }
  };

  // Handles the Hourly Wage change
  const handleHourlyWageChange = (e) => {
    const wageValue = parseFloat(e.target.value);

    if (wageValue >= 30) {
      setHourlyWagePoints(8);
    } else {
      setHourlyWagePoints(4);
    }
  };

  // Handles the Area of Employment change
  const handleEmploymentAreaChange = (e) => {
    const areaValue = e.target.value;

    switch (areaValue) {
      case "area1":
        setEmploymentAreaPoints(10);
        break;
      case "area2":
        setEmploymentAreaPoints(7);
        break;
      case "area3":
        setEmploymentAreaPoints(5);
        break;
      default:
        setEmploymentAreaPoints(0);
        break;
    }
  };

  // Handles the Language Proficiency Region change
  const handleLanguageProficiencyRegionChange = (e) => {
    const proficiencyRegionValue = e.target.value;

    switch (proficiencyRegionValue) {
      case "regionalExperience":
        setLanguageProficiencyRegionPoints(5);
        break;
      case "regionalAlumni":
        setLanguageProficiencyRegionPoints(7);
        break;
      case "notApplicable":
        setLanguageProficiencyRegionPoints(3);
        break;
      default:
        setLanguageProficiencyRegionPoints(0);
        break;
    }
  };

  return (
    <>
    <Navbar1/>
      {/* Section 1: Work Experience in B.C. Job Offer */}
      <div className={styles.bannerParent}>
        <div className={styles.bannerHeading}>
          <h1>B.C PNP Calculator 2024</h1>
          <p>
            Points are calculated based on job offer, work experience, language
            ability, and education.
          </p>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.firstSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>1</div>
                <p></p>{" "}
              </div>
              <h5>
                Directly Related Work Experience in the Occupation of B.C. Job
                Offer:
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="5+"
                    onChange={handleExperienceChange}
                  />{" "}
                  5 or more years
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="4-5"
                    onChange={handleExperienceChange}
                  />{" "}
                  At least 4 but less than 5 years
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="3-4"
                    onChange={handleExperienceChange}
                  />{" "}
                  At least 3 but less than 4 years
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="2-3"
                    onChange={handleExperienceChange}
                  />{" "}
                  At least 2 but less than 3 years
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="1-2"
                    onChange={handleExperienceChange}
                  />{" "}
                  At least 1 but less than 2 years
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="<1"
                    onChange={handleExperienceChange}
                  />{" "}
                  Less than a year
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="0"
                    onChange={handleExperienceChange}
                  />{" "}
                  No Experience
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={points} readOnly /> */}
            </div>
          </div>

          {/* Section 2: At Least 1 Year of Directly Related Experience in Canada */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>2</div>
                <p></p>{" "}
              </div>
              <h4> ADDITIONAL POINTS FOR WORK EXPERIENCE</h4>
              <h5>
                {" "}
                At least 1 year of directly related experience in Canada?
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="canadaExperience"
                    value="yes"
                    onChange={handleCanadaExperienceChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="canadaExperience"
                    value="no"
                    onChange={handleCanadaExperienceChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={canadaExperiencePoints} readOnly /> */}
            </div>
          </div>

          {/* Section 3: Currently Working Full-Time in B.C. */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>3</div>
                <p></p>{" "}
              </div>
              <h5>
                {" "}
                Currently working full-time in B.C. for the employer in the
                occupation identified in the BC PNP registration?
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="currentJob"
                    value="yes"
                    onChange={handleCurrentJobChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="currentJob"
                    value="no"
                    onChange={handleCurrentJobChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={currentJobPoints} readOnly /> */}
            </div>
          </div>

          {/* Section 4: Education Level */}
          <div className={styles.container}>
            <div className={styles.headerLineParent}>
              {" "}
              <div>4</div>
              <p></p>{" "}
            </div>
            <div className={styles.header}>
              <h5>Choose your Education Level</h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="doctoral"
                    onChange={handleEducationChange}
                  />{" "}
                  Doctoral Degree
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="masters"
                    onChange={handleEducationChange}
                  />{" "}
                  Master's Degree
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="postGradCert"
                    onChange={handleEducationChange}
                  />{" "}
                  Post Graduation Certificate or Diploma
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="bachelors"
                    onChange={handleEducationChange}
                  />{" "}
                  Bachelor's Degree
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="associate"
                    onChange={handleEducationChange}
                  />{" "}
                  Associate Degree
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="diplomaCert"
                    onChange={handleEducationChange}
                  />{" "}
                  Post-Secondary Diploma/Certificate (Trades or Non-Trades)
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="education"
                    value="secondarySchool"
                    onChange={handleEducationChange}
                  />{" "}
                  Secondary School (High School) or less
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={educationPoints} readOnly /> */}
            </div>
          </div>

          {/* Section 5: Post-Secondary Education Completed in B.C. */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>5</div>
                <p></p>{" "}
              </div>
              <h4>ADDITIONAL POINT FOR EDUCATION IN B.C. OR CANADA</h4>
              <h5>Post-Secondary Education Completed in B.C.?</h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="bcEducation"
                    value="yes"
                    onChange={handleBcEducationChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="bcEducation"
                    value="no"
                    onChange={handleBcEducationChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={bcEducationPoints} readOnly /> */}
            </div>
          </div>

          {/* Section 6: Post-Secondary Education Completed in Canada (Outside B.C.) */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>6</div>
                <p></p>{" "}
              </div>
              <h4>ADDITIONAL POINT FOR EDUCATION IN B.C. OR CANADA</h4>
              <h5>
                {" "}
                Post-Secondary Education Completed in Canada (Outside B.C.)?
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="canadaEducation"
                    value="yes"
                    onChange={handleCanadaEducationChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="canadaEducation"
                    value="no"
                    onChange={handleCanadaEducationChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={canadaEducationPoints} readOnly /> */}
            </div>
          </div>

          {/* Section 7: Are you working in one of the following occupations? */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>7</div>
                <p></p>{" "}
              </div>
              <h4>ADDITIONAL POINT FOR PROFFESIONAL DESIGNATION IN B.C.</h4>
              <h5>Are you working in one of the following occupations?</h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="occupation"
                    value="yes"
                    onChange={handleOccupationChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="occupation"
                    value="no"
                    onChange={handleOccupationChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={occupationPoints} readOnly /> */}
            </div>
            <h5>
              Any Trade (Valid trade certificate issued by Skilled TradesBC or
              trades apprentices registered with Skilled Trades BC)
            </h5>
            <p>NOC 33100 (Dental Assistants)</p>
            <p>NOC 32111 (Dental Hygienists)</p>
            <p>NOC 32112 (Dental Technicians)</p>
            <p>NOC 32110 (Denturists)</p>
            <p>NOC 42202 (Early Childhood Educators)</p>
            <p>NOC 33102 (Health Care Aide)</p>
            <p>NOC 32124 (Pharmacy Technicians)</p>
            <p>NOC 32101 (Practical Nurses)</p>
            <p>
              NOC 32200 (Traditional Chinese medicine practitioners and
              acupuncturists)
            </p>
            <p>NOC 32104 (Veterinary technicians)</p>
          </div>

          {/* Section 8: Language Points */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>8</div>
                <p></p>{" "}
              </div>
              <h5> Language Points (Canadian Language Benchmark Level):</h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="10+"
                    onChange={handleLanguageChange}
                  />{" "}
                  10+
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="9"
                    onChange={handleLanguageChange}
                  />{" "}
                  9
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="8"
                    onChange={handleLanguageChange}
                  />{" "}
                  8
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="7"
                    onChange={handleLanguageChange}
                  />{" "}
                  7
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="6"
                    onChange={handleLanguageChange}
                  />{" "}
                  6
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="5"
                    onChange={handleLanguageChange}
                  />{" "}
                  5
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="4"
                    onChange={handleLanguageChange}
                  />{" "}
                  4
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="lessThan4"
                    onChange={handleLanguageChange}
                  />{" "}
                  Less than 4
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="noTest"
                    onChange={handleLanguageChange}
                  />{" "}
                  No Test
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={languagePoints} readOnly /> */}
            </div>
          </div>

          {/* Section 9: Language Proficiency in both English and French */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>9</div>
                <p></p>{" "}
              </div>
              <h4>ADDITIONAL POINT FOR LANGUAGE PROFICIENCY</h4>
              <h5>
                Language Proficiency in both English and French (CLB 4 or higher
                in each of 4 competencies on both tests)
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="languageProficiency"
                    value="yes"
                    onChange={handleLanguageProficiencyChange}
                  />{" "}
                  Yes
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="languageProficiency"
                    value="no"
                    onChange={handleLanguageProficiencyChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            {/* <div className={styles.points}>
              Points <input type="text" value={languageProficiencyPoints} readOnly />
            </div> */}
          </div>

          {/* Section 10: Hourly Wage of the B.C. Job Offer */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>10</div>
                <p></p>{" "}
              </div>
              <h5>
                Hourly Wage of the B.C. Job Offer: ${" "}
                <input
                  type="number"
                  placeholder="Enter wage"
                  onChange={handleHourlyWageChange}
                />
              </h5>
            </div>

            <div className={styles.points}>
              {/* Points <input type="text" value={hourlyWagePoints} readOnly /> */}
            </div>
          </div>

          {/* Section 11: Area of Employment within B.C. */}
          <div className={styles.container}>
            <div className={styles.headerLineParent}>
              {" "}
              <div>11</div>
              <p></p>{" "}
            </div>
            <div className={styles.header}>
              <h5>Area of Employment within B.C.</h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="employmentArea"
                    value="area1"
                    onChange={handleEmploymentAreaChange}
                  />{" "}
                  Area 1: Metro Vancouver Regional District
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="employmentArea"
                    value="area2"
                    onChange={handleEmploymentAreaChange}
                  />{" "}
                  Area 2: Squamish, Abbotsford, Agassiz, Mission, and Chilliwack
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="employmentArea"
                    value="area3"
                    onChange={handleEmploymentAreaChange}
                  />{" "}
                  Area 3: Areas of B.C. not included in Area 1 or 2
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points <input type="text" value={employmentAreaPoints} readOnly /> */}
            </div>
          </div>

          {/* Section 12: Language Proficiency Region */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerLineParent}>
                {" "}
                <div>12</div>
                <p></p>{" "}
              </div>
              <h5>
                Language Proficiency in both English and French (CLB 4 or higher
                in each of 4 competencies on both tests)
              </h5>
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="languageProficiencyRegion"
                    value="regionalExperience"
                    onChange={handleLanguageProficiencyRegionChange}
                  />{" "}
                  Regional Experience
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="languageProficiencyRegion"
                    value="regionalAlumni"
                    onChange={handleLanguageProficiencyRegionChange}
                  />{" "}
                  Regional Alumni
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="languageProficiencyRegion"
                    value="notApplicable"
                    onChange={handleLanguageProficiencyRegionChange}
                  />{" "}
                  Not Applicable
                </label>
              </div>
            </div>
            <div className={styles.points}>
              {/* Points
              <input
                type="text"
                value={languageProficiencyRegionPoints}
                readOnly
              /> */}
            </div>
          </div>
        </div>

        {/* Total Points */}
        <div className={styles.pointsSection}>
          <div className={styles.pointContainer}>
            <div className={styles.header}>
              {" "}
              <h2>Total Points under B.C PNP</h2>
            </div>
            <div className={styles.points}>
              <h1>
                {points +
                  canadaExperiencePoints +
                  currentJobPoints +
                  educationPoints +
                  bcEducationPoints +
                  canadaEducationPoints +
                  occupationPoints +
                  languagePoints +
                  languageProficiencyPoints +
                  hourlyWagePoints +
                  employmentAreaPoints +
                  languageProficiencyRegionPoints}
              </h1>
            </div>
          </div>
        </div>
        {/* // */}
      </div>
      <Footer/>
    </>
  );
};

export default BCPNPCalculator;
