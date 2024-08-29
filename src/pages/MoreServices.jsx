import React, { useState } from 'react';
import styles from "../styles/MoreServices.module.css";
import Navbar1 from "../components/Navbar1";

let MoreServices = () => {
    const [selectedHeading, setSelectedHeading] = useState('Permanent Residency');
  
    // State to track which dropdown is opened
    const [openDropdown, setOpenDropdown] = useState(null);
  
    // Data for different sections
    const sections = {
      'Permanent Residency': {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
        image: '/path-to-your-image.png',  // Replace with your image path
        subcategories: ['FSWP', 'FSTP', 'CEC', 'Category based'],
        dropdowns: {
          'Pilot Program': 'Details about the Pilot Program.',
          'PNP': 'Details about PNP.',
          'RNIP': 'Details about RNIP.'
        }
      },
      'Temporary Residence': {
        text: 'Temporary Residence content goes here.',
        image: '/path-to-another-image.png', // Replace with another image path
        subcategories: ['Visitor Visa', 'Work Permit'],
        dropdowns: {
          'Study Permit': 'Details about the Study Permit.',
          'Visitor Visa': 'Details about the Visitor Visa.',
          'Work Permit': 'Details about the Work Permit.'
        }
      },
      // Add more sections as needed
      'Student Visa': {
        text: 'Student Visa content goes here.',
        image: '/path-to-student-visa-image.png',
        subcategories: ['Study Abroad', 'Exchange Programs'],
        dropdowns: {
          'University Programs': 'Details about University Programs.',
          'Exchange Programs': 'Details about Exchange Programs.'
        }
      },
      'Family Reunification & Sponsorship': {
        text: 'Family Reunification & Sponsorship content goes here.',
        image: '/path-to-Family Reunification & Sponsorship.png', // Replace with another image path
        subcategories: ['Family Reunification & Sponsorship', 'Work Permit'],
        dropdowns: {
          'Study Permit': 'Details about the Study Permit.',
          'Family Reunification & Sponsorship': 'Details about the Family Reunification & Sponsorship.',
          'Work Permit': 'Details about the Work Permit.'
        }
      },
      'Work Permit': {
        text: 'Work Permit content goes here.',
        image: '/path-to-Work Permit.png', // Replace with another image path
        subcategories: ['Work Permit'],
        dropdowns: {
          'Work Permit': 'Details about the Work Permit.'
        }
      },
      'Caregiver': {
        text: 'Work Permit content goes here.',
        image: '/path-to-Caregiver.png', // Replace with another image path
        subcategories: ['Caregiver'],
        dropdowns: {
          'Caregiver': 'Details about the Caregiver.'
        }
      },
      'PR Renewal': {
        text: 'PR Renewal.',
        image: '/path-to-PR Renewal.png', // Replace with another image path
        subcategories: ['PR Renewal'],
        dropdowns: {
          'PR Renewal': 'Details about the PR Renewal.'
        }
      },
      'Citizenship': {
        text: 'Citizenship.',
        image: '/path-to-Citizenship.png', // Replace with another image path
        subcategories: ['Citizenship'],
        dropdowns: {
          'Citizenship': 'Details about the Citizenship.'
        }
      },
      'Other Services': {
        text: 'Other Services.',
        image: '/path-to-Other Services.png', // Replace with another image path
        subcategories: ['Other Services'],
        dropdowns: {
          'Other Services': 'Details about the Other Services.'
        }
      },
    };
  
    // Handle heading click
    const handleHeadingClick = (heading) => {
      setSelectedHeading(heading);
      setOpenDropdown(null);  // Reset dropdown state when switching sections
    };
  
    // Handle dropdown toggle
    const handleDropdownToggle = (dropdown) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };
  return (
    <>
    <Navbar1/>
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
            className={selectedHeading === heading ? styles.activeHeading : styles.heading}
            onClick={() => handleHeadingClick(heading)}
          >
            {heading}
          </div>
        ))}
      </div>

      <div className={styles.imageContainer}>
          <img src={sections[selectedHeading].image} alt="Icon" className={styles.image} />
        </div>

      <div className={styles.content}>

        <div className={styles.text}>
          <h2>{selectedHeading}</h2>
          <p>{sections[selectedHeading].text}</p>
          <ul className={styles.subcategories}>
            {sections[selectedHeading].subcategories.map((subcategory, idx) => (
              <li key={idx}>{subcategory}</li>
            ))}
          </ul>
          {sections[selectedHeading].dropdowns && Object.keys(sections[selectedHeading].dropdowns).map((dropdown, idx) => (
            <div key={idx} className={styles.dropdown}>
              <div className={styles.dropdownHeader} onClick={() => handleDropdownToggle(dropdown)}>
                {dropdown} <span>{openDropdown === dropdown ? '-' : '+'}</span>
              </div>
              {openDropdown === dropdown && (
                <div className={styles.dropdownContent}>
                  {sections[selectedHeading].dropdowns[dropdown]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
export default MoreServices;
