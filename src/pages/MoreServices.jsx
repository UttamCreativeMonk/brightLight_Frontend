import React, { useState } from "react";
import styles from "../styles/MoreServices.module.css";
import Navbar1 from "../components/Navbar1";
import homeLocationImg from "../assets/homeLocation.png";
import homeLocationImgHover from "../assets/homeLocationWhite.png";  
import graduatedStudentImg from "../assets/graduatedStudent.png";
import graduatedStudentImgHover from "../assets/graduatedStudentWhite.png";  
import TemporaryImg from "../assets/more-services-temporary-house.png";
import TemporaryImgHover from "../assets/more-services-temporary-house-White.png"; 
import parentsImg from "../assets/parents.png";
import parentsImgHover from "../assets/parentsWhite.png";  
import PrRenewalImg from "../assets/more-services-PR-renewal.png";
import PrRenewalImgHover from "../assets/more-services-PR-renewalWhite.png";  
import CitizenshipImg from "../assets/more-services-citizenship.png";
import CitizenshipImgHover from "../assets/more-services-citizenshipWhite.png";  
import workPermitImg from "../assets/workPermit.png";
import workPermitImgHover from "../assets/workPermitWhite.png"; 
import Footer1 from "../components/Footer1";

const MoreServices = () => {
  const [selectedHeading, setSelectedHeading] = useState("Permanent Residency");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      img: homeLocationImg,
      hoverImg: homeLocationImgHover,
      title: "Permanent Residency",
      description: "Canada welcomes thousands of skilled individuals from around the world every year...",
      link: "/permanent-residency"
    },
    {
      img: TemporaryImg,
      hoverImg: TemporaryImgHover,
      title: "Temporary Residence",
      description: "The Temporary Resident Permit (TRP) is a legal document...",
      link: "/temporary-resident-permit-draft"
    },
    {
      img: graduatedStudentImg,
      hoverImg: graduatedStudentImgHover,
      title: "Student Visa",
      description: "Canada ranks as one of the top choices worldwide for students...",
      link: "/student-visa"
    },
    {
      img: parentsImg,
      hoverImg: parentsImgHover,
      title: "Family Reunification & Sponsorship",
      description: "Canada is renowned for its welcoming spirit...",
      link: "/family-reunification-sponsorship"
    },
    {
      img: workPermitImg,
      hoverImg: workPermitImgHover,
      title: "Work Permit",
      description: "The Canadian Work Permit is your key to accessing these exciting professional opportunities.",
      link: "/work-permit"
    },
    {
      img: PrRenewalImg,
      hoverImg: PrRenewalImgHover,
      title: "PR Renewal",
      description: "You have lived in Canada for at least 2 years out of the last 5 years...",
      link: "/pr-renewal"
    },
    {
      img: CitizenshipImg,
      hoverImg: CitizenshipImgHover,
      title: "Citizenship",
      description: "After completing your 3 years of PR journey in Canada...",
      link: "/citizenship"
    },
  ];

  const handleHeadingClick = (link) => {

    window.location.href = link; 
  };

  return (
    <>
    <Navbar1/>
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1>What we Do</h1>
            <p>
              Bright Light Immigration Inc. is a trusted immigration consulting
              firm based in Vancouver, serving globally...
            </p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          <div className={styles.cardParent}>
            {sections.map((section, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleHeadingClick(section.link)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={hoveredIndex === index ? section.hoverImg : section.img}
                  alt={section.title}
                />
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <h4>Read More</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default MoreServices;
