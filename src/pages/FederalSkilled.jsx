import React, { useState } from "react";
import styles from "../styles/FederalSkilled.module.css";

const FederalSkilled = () => {
  const [languagePoints, setLanguagePoints] = useState(0);
  const [educationPoints, setEducationPoints] = useState(0);
  const [agePoints, setAgePoints] = useState(0);
  const [clb5Points, setClb5Points] = useState(0);
  const [employmentPoints, setEmploymentPoints] = useState(0);
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [adaptabilityPoints, setAdaptabilityPoints] = useState(0);

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    let points = 0;

    if (value === "clb9") points = 24;
    else if (value === "clb8") points = 22;
    else if (value === "clb7") points = 20;
    else if (value === "belowClb7") points = 0;

    setLanguagePoints(points);
  };

  const handleEducationChange = (e) => {
    const educationValue = e.target.value;

    switch (educationValue) {
      case "doctoral":
        setEducationPoints(25);
        break;
      case "masters":
        setEducationPoints(23);
        break;
      case "twoOrMore":
        setEducationPoints(22);
        break;
      case "threeYearProgram":
        setEducationPoints(21);
        break;
      case "twoYearProgram":
        setEducationPoints(19);
        break;
      case "oneYearProgram":
        setEducationPoints(15);
        break;
      case "highSchool":
        setEducationPoints(5);
        break;
      default:
        setEducationPoints(0);
        break;
    }
  };

  const handleAgeChange = (e) => {
    const ageValue = e.target.value;

    switch (ageValue) {
      case "lessThan18":
        setAgePoints(0);
        break;
      case "18-35":
        setAgePoints(12);
        break;
      case "36-47":
        setAgePoints(11);
        break;
      case "48-50":
        setAgePoints(10);
        break;
      case "51Plus":
        setAgePoints(0);
        break;
      default:
        setAgePoints(0);
        break;
    }
  };

  const handleClb5Change = (e) => {
    const value = e.target.value;
    const points = value === "yes" ? 4 : 1;
    setClb5Points(points);
  };

  const handleEmploymentChange = (e) => {
    const value = e.target.value;
    const points = value === "yes" ? 10 : 0; // Assuming 10 points for arranged employment
    setEmploymentPoints(points);
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    let points = 0;

    switch (value) {
      case "1Year":
        points = 9;
        break;
      case "2-3Years":
        points = 11;
        break;
      case "4-5Years":
        points = 13;
        break;
      case "6Years":
        points = 15;
        break;
      default:
        points = 0;
        break;
    }

    setExperiencePoints(points);
  };

  const handleAdaptabilityChange = (e) => {
    const value = e.target.value;
    let points = 0;

    switch (value) {
      case "spouseLanguage":
        points = 5;
        break;
      case "yourStudy":
        points = 5;
        break;
      case "spouseStudy":
        points = 5;
        break;
      case "yourWork":
        points = 5;
        break;
      case "spouseWork":
        points = 5;
        break;
      case "arrangedEmployment":
        points = 10;
        break;
      case "relativesInCanada":
        points = 5;
        break;
      default:
        points = 0;
        break;
    }

    setAdaptabilityPoints(points);
  };

  const totalPoints =
    languagePoints +
    educationPoints +
    agePoints +
    clb5Points +
    employmentPoints +
    experiencePoints +
    adaptabilityPoints;

  return (
    <>
      <div className={styles.bannerParent}>
        <div className={styles.bannerHeading}>
          <h1>Federal Skilled Worker Program Calculator</h1>
          <p>
            To immigrate to Canada as a Federal Skilled Worker (FSW) under the
            Express Entry Program, you are required to achieve a minimum score
            of 67 points out of 100 points. If score is less than 67 points -
            you do not qualify for federal skilled worker program. The points
            are awarded for different factors also known as six selection
            factors.
          </p>
          <p>
            Points are calculated based on the information provided by the
            client. Can X Immigration & Consulting Inc. does not hold any
            responsibility form getting an ITA from IRCC.
          </p>
        </div>
      </div>


      <div className={styles.containerParent}>
      <div className={styles.firstSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>1</div>
            <p></p> <h3>First Official Language (Max. 24 Points)</h3>
          </div>
          {/* First Official Language (Max. 24 Points) */}
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.subHeader}>
            <h4>Speaking (CLB Level)</h4>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="speaking"
                value="clb9"
                onChange={handleLanguageChange}
              />{" "}
              CLB 9 and Higher
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="speaking"
                value="clb8"
                onChange={handleLanguageChange}
              />{" "}
              CLB 8
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="speaking"
                value="clb7"
                onChange={handleLanguageChange}
              />{" "}
              CLB 7
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="speaking"
                value="belowClb7"
                onChange={handleLanguageChange}
              />{" "}
              Below CLB 7
            </label>
          </div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.subHeader}>
            <h4>Listening (CLB Level)</h4>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="listening"
                value="clb9"
                onChange={handleLanguageChange}
              />{" "}
              CLB 9 and Higher
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="listening"
                value="clb8"
                onChange={handleLanguageChange}
              />{" "}
              CLB 8
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="listening"
                value="clb7"
                onChange={handleLanguageChange}
              />{" "}
              CLB 7
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="listening"
                value="belowClb7"
                onChange={handleLanguageChange}
              />{" "}
              Below CLB 7
            </label>
          </div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.subHeader}>
            <h4>Reading (CLB Level)</h4>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="reading"
                value="clb9"
                onChange={handleLanguageChange}
              />{" "}
              CLB 9 and Higher
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="reading"
                value="clb8"
                onChange={handleLanguageChange}
              />{" "}
              CLB 8
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="reading"
                value="clb7"
                onChange={handleLanguageChange}
              />{" "}
              CLB 7
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="reading"
                value="belowClb7"
                onChange={handleLanguageChange}
              />{" "}
              Below CLB 7
            </label>
          </div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.subHeader}>
            <h4>Writing (CLB Level)</h4>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="writing"
                value="clb9"
                onChange={handleLanguageChange}
              />{" "}
              CLB 9 and Higher
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="writing"
                value="clb8"
                onChange={handleLanguageChange}
              />{" "}
              CLB 8
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="writing"
                value="clb7"
                onChange={handleLanguageChange}
              />{" "}
              CLB 7
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="writing"
                value="belowClb7"
                onChange={handleLanguageChange}
              />{" "}
              Below CLB 7
            </label>
          </div>
        </div>
        {/* 
        <div className={styles.points}>
          Points <input type="text" value={languagePoints} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>2</div>
            <p></p> <h3>Do you have at least CLB 5 in all abilities?</h3>
          </div>
          {/* 2. Do you have at least CLB 5 in all abilities? */}
        </div>
        <div className={styles.radioGroup3}>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="clb5"
                value="yes"
                onChange={handleClb5Change}
              />{" "}
              Yes (4 points)
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="clb5"
                value="no"
                onChange={handleClb5Change}
              />{" "}
              No (1 point)
            </label>
          </div>
        </div>
        {/* <div className={styles.points}>
          Points <input type="text" value={clb5Points} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>3</div>
            <p></p>
          </div>
          <h4>Highest level of Education (Max. 25 Points)</h4>
        </div>
        <div className={styles.radioGroup2}>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="doctoral"
                onChange={handleEducationChange}
              />{" "}
              University Degree at the Doctoral (PhD) level or equal
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="masters"
                onChange={handleEducationChange}
              />{" "}
              University Degree at the master's level or equal or University
              level entry-to-practice professional degree (or equal)
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="twoOrMore"
                onChange={handleEducationChange}
              />{" "}
              Two or more Canadian post-secondary degrees or diplomas or equal
              (at least one must be for a program of at least 3 years)
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="threeYearProgram"
                onChange={handleEducationChange}
              />{" "}
              Canadian post-secondary degree or diploma for a program of three
              years or longer, or equal
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="twoYearProgram"
                onChange={handleEducationChange}
              />{" "}
              Canadian post-secondary degree or diploma for a program of two
              years or longer, or equal
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="oneYearProgram"
                onChange={handleEducationChange}
              />{" "}
              Canadian post-secondary degree or diploma for a program of one
              year or longer, or equal
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="education"
                value="highSchool"
                onChange={handleEducationChange}
              />{" "}
              Canadian High School diploma, or equal
            </label>
          </div>
        </div>
        {/* <div className={styles.points}>
          Points <input type="text" value={educationPoints} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>4</div>
            <p></p>
          </div>
          <h4> Age (Max. 12 Points)</h4>
        </div>
        <select className={styles.dropdown} onChange={handleAgeChange}>
          <option value="lessThan18">Less than 18 years</option>
          <option value="18-35">18 - 35 years</option>
          <option value="36-47">36 - 47 years</option>
          <option value="48-50">48 - 50 years</option>
          <option value="51Plus">51 years or older</option>
        </select>
        {/* <div className={styles.points}>
          Points <input type="text" value={agePoints} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>5</div>
            <p></p>
          </div>
          <h4>Arranged Employment in Canada (Max. 10 Points)</h4>
        </div>
        <div className={styles.radioGroup3}>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="employment"
                value="yes"
                onChange={handleEmploymentChange}
              />{" "}
              Yes (10 points)
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="employment"
                value="no"
                onChange={handleEmploymentChange}
              />{" "}
              No (0 points)
            </label>
          </div>
        </div>
        {/* <div className={styles.points}>
          Points <input type="text" value={employmentPoints} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>6</div>
            <p></p>
          </div>
          <h4> Work Experience (Max. 15 Points)</h4>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="1Year"
                onChange={handleExperienceChange}
              />{" "}
              1 Year (9 points)
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="2-3Years"
                onChange={handleExperienceChange}
              />{" "}
              2-3 Years (11 points)
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="4-5Years"
                onChange={handleExperienceChange}
              />{" "}
              4-5 Years (13 points)
            </label>
          </div>
          <div className={styles.radioItem}>
            <label>
              <input
                type="radio"
                name="experience"
                value="6Years"
                onChange={handleExperienceChange}
              />{" "}
              6 Years or More (15 points)
            </label>
          </div>
        </div>
        {/* <div className={styles.points}>
          Points <input type="text" value={experiencePoints} readOnly />
        </div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLineParent}>
            <div>7</div>
            <p></p>
          </div>
          <h4> Adaptability (Max. 10 Points)</h4>
        </div>
        <div className={styles.radioGroup2}>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="spouseLanguage"
                onChange={handleAdaptabilityChange}
              />{" "}
              Your accompanying spouse/common-law partner's language level
              (minimum CLB 4) - 5 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="yourStudy"
                onChange={handleAdaptabilityChange}
              />{" "}
              Your previous study in Canada (at least 2 academic years of
              full-time study) - 5 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="spouseStudy"
                onChange={handleAdaptabilityChange}
              />{" "}
              Your spouse/common-law partner's previous study in Canada (at
              least 2 academic years of full-time study) - 5 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="yourWork"
                onChange={handleAdaptabilityChange}
              />{" "}
              Your past work experience in Canada (at least one year in NOC 0,
              A, B) - 5 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="spouseWork"
                onChange={handleAdaptabilityChange}
              />{" "}
              Your spouse/common-law partner's previous work experience in
              Canada (at least one year in NOC 0, A, B) - 5 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="arrangedEmployment"
                onChange={handleAdaptabilityChange}
              />{" "}
              Arranged Employment in Canada - 10 Points
            </label>
          </div>
          <div className={styles.radioItem2}>
            <label>
              <input
                type="radio"
                name="adaptability"
                value="relativesInCanada"
                onChange={handleAdaptabilityChange}
              />{" "}
              Relatives in Canada (parent/grandparent, brother/sister,
              aunt/uncle, or niece/nephew) - 5 Points
            </label>
          </div>
        </div>
        {/* <div className={styles.points}>
          Points <input type="text" value={adaptabilityPoints} readOnly />
        </div> */}
      </div>
      </div>

      <div className={styles.pointsSection}> 
      <div className={styles.pointContainer}>
        <div className={styles.header}><h2>Total Points under fedral Skilled Worker Program</h2></div>
        <div className={styles.points}>
            <h1>
            {totalPoints}
            </h1>
          
        </div>
      </div>

      </div>
{/* // */}
      </div>
    </>
  );
};

export default FederalSkilled;