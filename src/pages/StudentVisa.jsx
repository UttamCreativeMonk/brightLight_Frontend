import React, { useState } from "react";
import styles from '../styles/StudentVisa.module.css';

const StudentVisa = () => {
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
                <p onClick={() => scrollToSection("about-program")}>
                  About the Program
                </p>
                <p onClick={() => scrollToSection("key-points")}>Key Points</p>
                <p onClick={() => scrollToSection("how-to-apply")}>
                  How to Apply?
                </p>
                <p onClick={() => scrollToSection("refusal-reasons")}>
                  Refusal Reasons
                </p>
                <p onClick={() => scrollToSection("book-appointment")}>
                  Book Appointment
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
      <h1 className={styles.heading}>Student Visa</h1>
      <p className={styles.description}>
        Canada ranks as one of the top choices worldwide for students. Its uniqueness lies not only in offering opportunities for academic pursuit but also in inviting exploration of its diverse cultures and the enjoyment of a safe, high-quality life. With its comprehensive healthcare system and stunning natural landscapes, this destination becomes an attractive prospect for pursuing your academic aspirations. Whether your passion lies in STEM (Science, Technology, Engineering, Math) fields, healthcare, humanities, social sciences, or creative pursuits, Canada's diverse educational system has something to offer everyone. As a student in Canada, you have the privilege of learning at some of the world's top-rated universities and colleges.
      </p>

      <section className={styles.pathways}>
        <h2 className={styles.subheading}>Pathways to Study Abroad</h2>
        <div className={styles.pathwayContainer}>
          <div className={styles.pathway}>
            <img src="/images/outside-canada.png" alt="Outside Canada" className={styles.image} />
            <h3 className={styles.pathwayTitle}>Outside Canada</h3>
            <p className={styles.pathwayDescription}>Explore study options and visa requirements for students planning to study in Canada from abroad.</p>
          </div>
          <div className={styles.pathway}>
            <img src="/images/inside-canada.png" alt="Inside Canada" className={styles.image} />
            <h3 className={styles.pathwayTitle}>Inside Canada</h3>
            <p className={styles.pathwayDescription}>Discover the options available for students already in Canada or planning to transfer from one institution to another.</p>
          </div>
          <div className={styles.pathway}>
            <img src="/images/minor-permit.png" alt="Study Permit for Minor" className={styles.image} />
            <h3 className={styles.pathwayTitle}>Study Permit for Minor</h3>
            <p className={styles.pathwayDescription}>Learn about the specific requirements and process for obtaining a study permit for minors.</p>
          </div>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2 className={styles.subheading}>Start Your Journey</h2>
        <p className={styles.callToActionText}>
          Ready to take the next step in your educational journey? Whether you’re planning to study from abroad or already in Canada, our expert team can guide you through the process and ensure you meet all the requirements for a successful student visa application. 
        </p>
        <button className={styles.button}>Book a Consultation</button>
      </section>
    </div>
    </>
  );
};

export default StudentVisa;
