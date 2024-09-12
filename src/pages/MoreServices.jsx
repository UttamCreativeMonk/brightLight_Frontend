import React, { useState } from "react";
import styles from "../styles/MoreServices.module.css";
import Navbar1 from "../components/Navbar1";
import homeLocationImg from "../assets/homeLocation.png";
import graduatedStudentImg from "../assets/graduatedStudent.png";
import parentsImg from "../assets/parents.png";
import workPermitImg from "../assets/workPermit.png";
import Footer1 from "../components/Footer1";

  let MoreServices = () => {
    const [selectedHeading, setSelectedHeading] = useState("Permanent Residency");
    const [openDropdown, setOpenDropdown] = useState(null);

  const sections = {
    "Permanent Residency": {
      text: " Canada welcomes thousands of skilled individuals from around the world every year. With a thriving economy, high living standards, and better opportunities, it's no wonder so many aspire to call it  home.",
      image: homeLocationImg,
      subcategories: ["FSWP", "FSTP", "CEC", "Category based"],
      dropdowns: {
        "Pilot Program": "The diverse economy of Canada offers various opportunities to advance your career in fields such as agriculture and more.",
        PNP: "While the federal Express Entry system remains a popular pathway toCanadian permanent residence, the Provincial Nominee Program (PNP) offers a unique and often faster track for individuals interested in  settling in a specific province or territory.",
        RNIP:"The Rural and Northern Immigration Pilot (RNIP) is revolutionizing the way economic immigration benefits smaller communities acrossCanada. Unlike traditional immigration programs that often favor large cities, RNIP empowers rural and northern communities to take  charge of their own economic growth by attracting foreign workers and international students who want to settle permanently.",
      },
    },
    "Temporary Residence": {
      text: " The Temporary Resident Permit (TRP) is a legal document issued by Citizenship and Immigration Canada (CIC) that allows individuals who  are inadmissible to Canada to temporarily visit and stay in the country under very specific circumstances.",
      image: "/path-to-another-image.png",
      subcategories: ["Visitor Visa", "Work Permit"],
      dropdowns: {
        "Study Permit":"As parents, we all aspire to provide our children with the best possible foundation for their future. Canada offers a unique and  enriching educational experience that can set your child on a path   to success and global citizenship. A study permit for minors allows  a child under the age of 18 to attend any type of educational institution in Canada, including elementary schools, secondary schools, vocational schools, colleges, and universities. Minors who  want to study in Canada for more than 6 months must apply for a      study permit before they enter the country.",
        "Visitor Visa":" A Visitor Visa, also known as a Temporary Resident Visa (TRV),  allows people from other countries to visit Canada for a short period. Are you planning to visit Canada and need to apply for a Visitor Visa? There are several different options through which you     can apply for a Visitor Visa, each with its own specific    requirements. You can visit Canada for various purposes, all of  which are generally covered by the Visitor Visa umbrella. For some  visa-exempt countries, a simple Electronic Travel Authorisation (eTA) application can be submitted. However, if you're from a  country that requires a visa, you'll need to obtain authorization to  enter and stay in Canada for a specific period, which is a TemporaryResident Visa, also commonly known as Visitor Visa.",
        "Work Permit": " Canada is a top choice for people worldwide looking to advancetheir careers. To work in Canada, international workers need atemporary document called a work permit. This permit allows themto legally take on employment in the country, and it's available for a broad range of occupations, skill levels, and immigration statuses.",
      },
    },

    "Student Visa": {
      text: "Canada ranks as one of the top choices worldwide for students. Its uniqueness lies not only in offering opportunities for academic pursuit but also in inviting exploration of its diverse cultures and the enjoyment of a safe, high-quality life. With its comprehensive healthcare system and stunning natural landscapes, this destination becomes an attractive prospect for pursuing your academic aspirations. Whether your passion lies in STEM (Science, Technology, Engineering, Math) fields, healthcare, humanities, social sciences, or creative pursuits, Canada's diverse educational system has something to offer everyone. As a student in Canada, you have the privilege of learning at some of the world's top-rated universities and colleges.",
      image: graduatedStudentImg,
      subcategories: ["Study Abroad", "Visitor Student"],
      dropdowns: {
        "University Programs": " The decision to change colleges or programs is significant and often driven by a desire to explore new opportunities, enhance your skill set, or align with your evolving career goals. Whether you're seeking a more challenging curriculum, a more supportive learning environment, or a better fit with your personal values, understanding your motivations is crucial for making an informed choice.",
        "Visitor Student": " Transitioning from visitor status to student status (also known as a change of status) can be an option for you if you have been staying in Canada as a visitor and wish to pursue full-time studies in a recognized academic institution. This program, known as the Visitor to Student Program (VTS), allows you to extend your stay and pursue studies at a designated learning institution (DLI). This process involves you applying for a student visa or changing your current visa to a student visa.",
      },
    },
    "Family Reunification & Sponsorship": {
      text: "Canada is renowned for its welcoming spirit and commitment to diversity, making it a haven for immigrants looking for a better life. When it comes to family reunification, Canada has established a comprehensive program that allows Canadian citizens and permanent residents to bring their loved ones to the country.",
      image: parentsImg,
      subcategories: ["Family Reunification & Sponsorship", "Work Permit"],
      dropdowns: {
        "Study Permit": "Details about the Study Permit.",
        "Family Reunification & Sponsorship":
          "Details about the Family Reunification & Sponsorship.",
        "Work Permit": "Details about the Work Permit.",
      },
    },
    "Work Permit": {
      text: "Work Permit content goes here.",
      image: workPermitImg,
      subcategories: ["Work Permit"],
      dropdowns: {
        "Work Permit": "Canada is a top choice for people worldwide looking to advancetheir careers. To work in Canada, international workers need atemporary document called a work permit. This permit allows themto legally take on employment in the country, and it's available for a broad range of occupations, skill levels, and immigration statuses.",
      },
    },

    "PR Renewal": {
      text: "PR Renewal.",
      image: "/path-to-PR Renewal.png",
      subcategories: ["PR Renewal"],
      dropdowns: {
        "PR Renewal": "You have lived in Canada for at least 2 years out of the last 5 years.",
      },
    },
    "Citizenship": {
      text: "Citizenship.",
      image: "/path-to-Citizenship.png",
      subcategories: ["Citizenship"],
      dropdowns: {
        Citizenship: "After completing your 3 years (or staying physically in Canada for at least 1,095 days) of PR journey in Canada, you are now  officially going to become a Canadian Citizen. Congratulations.  All you are left to do is complete the Canadian Citizenship  application through IRCC and enjoy the highest form of legal   status in Canada. This is the last step for you to become a   Canadian.",
      },
    },
  };

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Bright Light Immigration Inc. is a trusted immigration consulting
              firm based in Vancouver, serving Globally. We provide
              comprehensive services to individuals seeking to immigrate to
              Canada. We understand every twist and turn of the complex
              immigration process, whether its permanent residency, temporary
              residency, student visas, family reunification, work permits,
              LMIAs, caregiver services, PR renewal, or citizenship. We
              streamline and expedite the process to a level you never thought
              possible.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sidebar}>
          {Object.keys(sections).map((heading, index) => (
            <div
              key={index}
              className={
                selectedHeading === heading
                  ? styles.activeHeading
                  : styles.heading
              }
              onClick={() => handleHeadingClick(heading)}
            >
              <h5>{heading}</h5>
            </div>
          ))}
        </div>

        <div className={styles.imageContainer}>
          <img
            src={sections[selectedHeading].image}
            alt="Icon"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{selectedHeading}</h2>
            <p>{sections[selectedHeading].text}</p>
            <ul className={styles.subcategories}>
              {sections[selectedHeading].subcategories.map(
                (subcategory, idx) => (
                  <li key={idx}>{subcategory}</li>
                )
              )}
            </ul>
            {sections[selectedHeading].dropdowns &&
              Object.keys(sections[selectedHeading].dropdowns).map(
                (dropdown, idx) => (
                  <div key={idx} className={styles.dropdown}>
                    <div
                      className={styles.dropdownHeader}
                      onClick={() => handleDropdownToggle(dropdown)}
                    >
                      {dropdown}{" "}
                      <span>{openDropdown === dropdown ? "-" : "+"}</span>
                    </div>
                    {openDropdown === dropdown && (
                      <div className={styles.dropdownContent}>
                        {sections[selectedHeading].dropdowns[dropdown]}
                      </div>
                    )}
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <Footer1/>
    </>
  );
};
export default MoreServices;
