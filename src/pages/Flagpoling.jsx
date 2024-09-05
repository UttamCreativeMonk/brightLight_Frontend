import React, { useState } from "react";
import styles from '../styles/Flagpoling.module.css';
import { Link } from "react-router-dom";

const Flagpoling = () => {
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
      <h1 className={styles.heading}>Flagpoling</h1>
      <section className={styles.introduction}>
        <p>Flagpoling is a legal process of exiting Canada and re-entering the country without physically crossing into the USA to obtain, change, or extend a valid status in Canada. It is commonly used to obtain a new temporary residence status, such as renewing a study permit, applying for a work permit, or finalizing the permanent residency (PR) process.</p>
        <p>Typically, temporary resident visa holders have the option to apply through online or paper applications. However, these applications can take weeks or even months to process. Therefore, sometimes people choose to save time by going to the port of entry (aka border). This allows for quick processing, which can be helpful for people who need their application processed quickly.</p>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.subheading}>Benefits of Flagpoling</h2>
        <ul>
          <li>Flagpoling is a time-saving alternative to applying for a work or study permit through online or paper applications, where processing times can take weeks or even months or longer than what is mentioned on the IRCC website.</li>
          <li>You do not need to gather extensive documentation, complete complex and lengthy forms, etc. Instead, candidates can present their passport and supporting documents directly to a Canada Border Services Agency (CBSA) officer, attend the interview, and obtain the new permit on the spot.</li>
          <li>Many times, CBSA officers follow a more humane approach than IRCC officers and consider humanitarian and compassionate grounds in approving the application.</li>
        </ul>
      </section>

      <section className={styles.eligibility}>
        <h2 className={styles.subheading}>Eligibility Criteria for Flagpoling</h2>
        <ul>
          <li>You must be currently holding a valid visitor, study, or work permit.</li>
          <li>If your current status has expired, you must have applied for an extension online and have proof of application submission and receipt.</li>
          <li>Do not attempt flagpoling if you are out of status or have applied for restoration of status.</li>
          <li>You meet the requirements of the new permit that you are requesting as per IRCC guidelines.</li>
          <li>It is recommended that you carry original documents with you at the time when the CBSA officer interviews you.</li>
        </ul>
      </section>

      <section className={styles.tips}>
        <h2 className={styles.subheading}>Don’t Forget This Important Tip</h2>
        <p>While flagpoling can be a helpful tool when used under the right circumstances, it's important to approach it with careful preparation and the right documentation. We strongly advocate for thorough preparation to maximize the benefits of this process. However, it's crucial to remember that flagpoling also comes with inherent risks. Potential denial of entry at both US and Canadian borders could lead to forced removal from Canada back to your home country. Additionally, flagpoling typically involves a detailed interview with a US immigration officer or CBSA border officer.</p>
      </section>

      <section className={styles.assistance}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>To avoid these risks and ensure a smooth flagpoling experience, we highly recommend hiring representation from a Regulated Canadian Immigration Consultant (RCIC). An RCIC can not only guide you on the necessary documents for flagpoling but also effectively prepare you for the Port of Entry and border interviews conducted by immigration officers.</p>
        <p>Brightlight Immigration is available to represent you at any Point of Entry in the Lower Mainland, British Columbia. Our experienced consultants will ensure you have the necessary documentation, provide tailored guidance, and assist you in effectively communicating your case to immigration officers.</p>
        <Link to="/book-appointment" className={styles.button}>Book Appointment</Link>
      </section>

      <section className={styles.whyChooseUs}>
        <h2 className={styles.subheading}>Why Choose Us?</h2>
        <p>We offer expert advice and personalized service to make your flagpoling experience as smooth as possible. Our team of experienced professionals will guide you through the process and ensure that you are well-prepared for every step, from gathering documentation to handling interviews.</p>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.subheading}>Clients Testimonials</h2>
        <div className={styles.testimonialSection}>
          <h3>Video Testimonials</h3>
          {/* Conditional rendering based on backend configuration */}
          {/* <VideoTestimonials /> */}
        </div>
        <div className={styles.testimonialSection}>
          <h3>Written Testimonials</h3>
          {/* Conditional rendering based on backend configuration */}
          {/* <WrittenTestimonials /> */}
        </div>
      </section>
    </div>
    </>
  );
};

export default Flagpoling;
