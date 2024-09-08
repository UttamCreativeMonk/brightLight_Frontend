import React, { useState } from "react";
import styles from "../styles/DependentChildren.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const DependentChildren = () => {
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
              <p onClick={() => scrollToSection("application-process")}>Application Process</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("consultation")}>consultation</p>
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
      <header className={styles.header} id="about-program">
        <h1>Canada’s Dependent Children Sponsorship Program</h1>
        <p>The Dependent Child Program helps families stay together and gives your child the chance to go to good schools in Canada, grow up in a safe place, and be successful in the future.</p>
        <p>The Dependent Children Program allows Canadian citizens and permanent residents to bring their unmarried children under the age of 22 to Canada as permanent residents.</p>
      </header>

      <section className={styles.eligibility} id="eligibility">
        <h2>Eligibility Requirements</h2>
        <h3>For the Dependent Child:</h3>
        <ul>
          <li>The child must be under the age of 22 on the date the sponsorship application is submitted.</li>
          <li>The child must be a biological or adopted child of the Canadian citizen or permanent resident sponsoring them.</li>
          <li>The child must be unmarried and not in a common-law relationship on the date the sponsorship application is submitted and throughout the sponsorship process.</li>
        </ul>
        <h3>For the Sponsor:</h3>
        <ul>
          <li>You must have an annual income that meets the Canadian income requirements for sponsorship.</li>
          <li>You should have sufficient funds and assets to support your child.</li>
          <li>You must have adequate accommodation for your child to live.</li>
        </ul>
      </section>

      <section className={styles.applicationProcess} id="application-process">
        <h2>How to Apply for the Dependent Children Sponsorship Program</h2>
        <ol>
          <li>Collect and submit a variety of documents to support your application, such as proof of identity, proof of relationship with your child, financial documentation, and accommodation details.</li>
          <li>You and your child must attend biometrics appointments at designated Service Canada locations to provide fingerprints and photographs for processing.</li>
          <li>If the application is approved, your child will be issued a visa to travel to Canada.</li>
        </ol>
      </section>

      <section className={styles.refusalReasons} id="refusal-reasons">
        <h2>Common Reasons for Refusals</h2>
        <ul>
          <li>Fails to meet the eligibility criteria for the DC Program, such as being a Canadian citizen or permanent resident, having the financial means to support the sponsored child, or having a clean criminal record.</li>
          <li>Your child is not under the age of 22 or is married or in a common-law relationship.</li>
          <li>You or your child may have provided false or misleading information on their application.</li>
        </ul>
      </section>

      <section className={styles.consultation} id="consultation">
        <h2>Still Not Sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals by using a tailored approach, addressing each concern listed in previous refusals, and applying case law precedents. Our high success rate is a testament to our expertise.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. <a href="#book-appointment" className={styles.button}>Start your process now</a></p>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us?</h2>
        <p>[Insert the "Why Choose Us" section content here]</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Clients Testimonials</h2>
        <div className={styles.videoTestimonials}>
          <h3>Video Testimonials</h3>
          {/* Insert video testimonials here */}
        </div>
        <div className={styles.writtenTestimonials}>
          <h3>Written Testimonials</h3>
          {/* Insert written testimonials here */}
        </div>
        <button className={styles.toggleButton}>Toggle Testimonials Visibility</button>
      </section>


      <section className={styles.blogs}>
        <h2>Blogs</h2>
        <p>[Insert blog content or links here]</p>
      </section>
    </div>

    </>
  );
};

export default DependentChildren;
