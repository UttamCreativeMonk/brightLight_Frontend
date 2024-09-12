import React, { useState } from "react";
import styles from "../styles/DualIntentVisa.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";


const DualIntentVisa = () => {
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
              <p onClick={() => scrollToSection("about-program")}> About the Program </p>
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons </p>
              <p onClick={() => scrollToSection("book-appointment")}> Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
      <h1 className={styles.heading} id="about-program">Dual Intent Visa</h1>

      <section className={styles.introduction}>
        <p>
          A Dual Intent Visa allows you to have two different reasons for visiting Canada: you can come to Canada temporarily while also considering permanent residence in the future, or vice versa. This flexibility makes the Dual Intent Visa unique. Typically, applicants have a temporary resident visa and are either applying or planning to apply for permanent resident status.
        </p>
        <p>
          At Brightlight Immigration, we understand that demonstrating Dual Intent can be complex. With over 12 years of experience, we aim to simplify this process for you.
        </p>
      </section>

      <section className={styles.scenarios}>
        <h2 className={styles.subheading}>Common Scenarios</h2>
        <ul>
          <li>
            If you've applied for permanent residence through spousal sponsorship and wish to reunite with your spouse in Canada while waiting for your PR application, you can apply for a Dual Intent Visa to temporarily visit and live with your spouse.
          </li>
          <li>
            If you’ve submitted an Express Entry profile and are in the application process, you can apply for a Dual Intent Visa to temporarily visit Canada or apply for a work/study permit while your permanent residency application is in process. This allows you to stay in Canada and experience the country during your PR application review.
          </li>
        </ul>
      </section>

      <section className={styles.keyConsiderations} id="key-points">
        <h2 className={styles.subheading}>Key Considerations</h2>
        <p>
          Dual Intent Visas are often used by outland spouses awaiting spousal sponsorship approval. These visas typically have a high approval rate, often within 30 days. Here’s what you should know:
        </p>
        <ul>
          <li>For a Dual Intent Visa, you must convincingly demonstrate your intention to leave Canada at the end of your authorized stay, even if your PR application is rejected.</li>
          <li>Ensure your documentation is genuine and supports your temporary visit to Canada while applying for permanent residency.</li>
          <li>Recent changes in family reunification policies may also affect how your application is assessed.</li>
        </ul>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria</h2>
        <p>To be eligible for a Dual Intent Visa, you must meet the following criteria:</p>
        <ul>
          <li>Provide a specific timeframe for your intended stay in Canada.</li>
          <li>Show how you will support yourself financially during your stay.</li>
          <li>Demonstrate strong ties to your home country to ensure your return after your visit.</li>
          <li>Clearly explain the reason for your visit and provide accurate and genuine documentation.</li>
          <li>Show evidence of past compliance with Canadian immigration regulations and provide a clear contingency plan if your visa application is refused.</li>
        </ul>
        <p>For spousal and partner cases, immigration officers will consider the approval status of your sponsorship application and your ties to your home country.</p>
        <p>For parents and grandparents, officers will assess whether your primary intention is to visit temporarily and not seek permanent residency.</p>
      </section>

      <section className={styles.refusals} id="refusal-reasons">
        <h2 className={styles.subheading}>Common Refusal Reasons</h2>
        <ul>
          <li>Failure to demonstrate genuine dual intent.</li>
          <li>Insufficient evidence that you will leave Canada at the end of your stay.</li>
          <li>Lack of strong ties to your home country.</li>
          <li>Unconvincing purpose for traveling temporarily to Canada.</li>
          <li>Previous visa refusals that were not adequately justified in your current application.</li>
        </ul>
      </section>

      <section className={styles.support}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>
          If you have received a refusal or have doubts about your application, don't worry. With over a decade of experience, we specialize in handling previously refused cases. Our tailored approach and high success rate are achieved by addressing each concern listed in previous refusals and using similar successful cases as precedents.
        </p>
        <p>
          At Brightlight Immigration, our dedicated team of visa application specialists will assist you throughout the application process to help you obtain your visa. Start your process now.
        </p>
        <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link>
      </section>

      <section className={styles.whyChooseUs}>
        <h2 className={styles.subheading} id="why-choose-us">Why Choose Us?</h2>
        <p>
          At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.
        </p>
        <div className={styles.testimonials}>
          <h3>Client Testimonials</h3>
          <div className={styles.videoTestimonials}>
            {/* Video testimonials */}
          </div>
          <div className={styles.writtenTestimonials}>
            {/* Written testimonials */}
          </div>
        </div>
      </section>
    </div>
    <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="faqs">
        <FAQ/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
    <Footer1/>
    </>
  );
};

export default DualIntentVisa;
