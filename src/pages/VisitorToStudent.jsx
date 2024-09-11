import React, { useState } from "react";
import styles from '../styles/VisitorToStudent.module.css';
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const VisitorToStudent = () => {
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
                <p onClick={() => scrollToSection("about-program")}>
                  About the Program
                </p>
                <p onClick={() => scrollToSection("benifits")}>Benifits</p>
                <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
      <h1 className={styles.heading} id="about-program">Visitor to Student</h1>
      <p className={styles.intro}>
        Transitioning from visitor status to student status (also known as a change of status) can be an option for you if you have been staying in Canada as a visitor and wish to pursue full-time studies in a recognized academic institution. This program, known as the Visitor to Student Program (VTS), allows you to extend your stay and pursue studies at a designated learning institution (DLI). This process involves you applying for a student visa or changing your current visa to a student visa.
      </p>

      <section className={styles.benefits} id="benifits">
        <h2 className={styles.subheading}>Benefits of Changing Your Status from Visitor to Student</h2>
        <ul className={styles.benefitsList}>
          <li>A Guaranteed Investment Certificate (GIC) is not required to apply for a Study Permit when you apply from inside Canada.</li>
          <li>You do not need to pay a 1-year fee to college or university, upfront.</li>
          <li>You do not need a Provincial Attestation Letter (PAL) when you apply for a Study Permit from inside Canada.</li>
          <li>While you study, you are allowed to work up to 24 hours per week, starting September 2024.</li>
          <li>Every 2 semesters, you are allowed to take a scheduled break for one semester. During this time, there are no restrictions on your work hours.</li>
          <li>If you decide to stay in Canada after completing your studies, you may be eligible for a post-graduate work permit, which can give you valuable work experience and enhance your chances of obtaining permanent residency.</li>
          <li>You can continue your studies without having to return to your home country.</li>
          <li>You can avoid the hassle and expense of traveling back and forth between Canada and your home country.</li>
        </ul>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria for the Student Permit Program</h2>
        <ul className={styles.eligibilityList}>
          <li>You are already in Canada legally with a valid status, such as a valid study permit, work permit, or visitor record.</li>
          <li>You have taken a prerequisite course inside Canada.</li>
          <li>You are enrolled in a full-time program at a designated learning institution (DLI).</li>
          <li>You have sufficient funds to support yourself while you study in Canada, including tuition, living expenses, and return transportation.</li>
          <li>You have no criminal record.</li>
        </ul>
        <p className={styles.eligibilityAdditional}>
          In addition, you should meet at least one of the following conditions:
        </p>
        <ul className={styles.eligibilityAdditionalList}>
          <li>Your work permit or study permit is still valid.</li>
          <li>You are the parent, spouse, or common-law partner of someone with a valid work or study permit.</li>
          <li>You are the parent, spouse, or common-law partner of someone with a valid Temporary Resident Permit with a validity of 6 months or more.</li>
          <li>You are a minor, and your parents or guardian are planning to send you to primary or secondary school.</li>
          <li>You are an exchange student or a visiting student.</li>
          <li>You have sponsorship for immigration and your permanent residency profile is already in the pool.</li>
          <li>You are completing a short-term course aimed at making you eligible to be accepted at a designated learning institute.</li>
        </ul>
      </section>

      <section className={styles.applicationProcess} id="how-to-apply">
        <h2 className={styles.subheading}>How to Apply for a Study Permit When Applying as a Visitor</h2>
        <p className={styles.processDescription}>
          You will need to provide the same documents as you would if you were applying from outside Canada. This includes your passport, letter of acceptance from your DLI, proof of financial support, and police certificates. Here are 5 easy steps we help you follow to process your application:
        </p>
        <ol className={styles.processList}>
          <li>Contact Bright Light Immigration.</li>
          <li>Apply to a prerequisite course (Mandatory).</li>
          <li>Apply to a Public/Private College.</li>
          <li>Get your documents and submit your application.</li>
          <li>Obtain your Study Permit.</li>
        </ol>
      </section>

      <section className={styles.refusals} id="refusal-reasons">
        <h2 className={styles.subheading}>Reasons for Refusals of Study Permit When Applying as a Visitor</h2>
        <ul className={styles.refusalList}>
          <li>You do not have a Letter of Acceptance (LOA) from a DLI.</li>
          <li>If you do not have strong ties to your home country, such as a job offer or property ownership.</li>
          <li>You do not have enough money to cover tuition, living expenses, and return transportation.</li>
          <li>You provided false or misleading information on your application.</li>
          <li>You have a history of immigration violations, such as overstaying a visa or working without authorization.</li>
          <li>You have a criminal record, depending on the nature of the crime.</li>
          <li>You submitted incomplete or incorrect documentation with your application.</li>
          <li>You did not provide sufficient evidence to show your genuine intent to study.</li>
        </ul>
      </section>

      <section className={styles.callToAction}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p className={styles.callToActionText}>
          If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.
        </p>
        <p className={styles.callToActionText} >
          We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists ready to assist you from the start of the application process to obtaining your visa. Start your process now.
        </p>
        <a id="book-appointment" href="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</a>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.subheading} id="why-choose-us">Why Choose Us</h2>
        <div className={styles.testimonialsContainer}>
          {/* Implement your video and written testimonials here */}
          {/* Option to hide/display testimonials in backend */}
        </div>
      </section>
    </div>

    <Footer1/>
    </>
  );
};

export default VisitorToStudent;
