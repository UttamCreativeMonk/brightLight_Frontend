import React, { useState } from "react";
import styles from "../styles/HumanitarianCompassionate.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const HumanitarianCompassionate = () => {
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
      <header className={styles.header}>
        <h1>Canada Humanitarian and Compassionate (H&C) Program</h1>
        <p>Unlike traditional immigration programs that prioritize factors like education, work experience, and language proficiency, the Humanitarian and Compassionate (H&C) program focuses on the human element, acknowledging that life's challenges can be tough and unpredictable.</p>
        <p>The Humanitarian and Compassionate (H&C) program allows Canadian citizens and permanent residents to sponsor certain family members who meet the H&C criteria. This program focuses on individuals or families who, despite their efforts, end up in difficult situations and can't go through the usual immigration process.</p>
      </header>

      <section className={styles.whoCanApply}>
        <h2>Who Can Apply Under the Humanitarian and Compassionate (H&C) Program for Family Reunification?</h2>
        <p>If you are a Canadian citizen or permanent resident, you can sponsor certain family members under the H&C program if you can show that the family member is eligible for H&C consideration based on one or more of the following factors:</p>
        <ul>
          <li>The family member is at risk of suffering significant hardship or harm if they are not allowed to stay in Canada.</li>
          <li>The family member has already established strong ties to Canada and would experience significant hardship if they were forced to leave.</li>
          <li>The family member's case presents unique and compelling circumstances that warrant humanitarian consideration. This could include medical conditions, domestic violence, or other exceptional factors.</li>
        </ul>
        <p>Here are a few examples of Humanitarian and Compassionate (H&C) cases under family reunification:</p>
        <ul>
          <li>A child who has been separated from their parents due to war or persecution in their home country.</li>
          <li>A spouse or common-law partner who has been living outside Canada and has no family or support network in their home country.</li>
          <li>A dependent child who needs special medical care that is not available in their home country.</li>
          <li>A sponsor who is elderly or ill and cannot travel to their home country to bring their family members to Canada.</li>
        </ul>
      </section>

      <section className={styles.eligibility}>
        <h2>Eligibility Criteria for the Humanitarian and Compassionate (H&C) Program</h2>
        <ul>
          <li>You must be a spouse, common-law partner, or parent of a Canadian citizen or permanent resident.</li>
          <li>The Canadian citizen or permanent resident should be living in Canada at the time of your application.</li>
          <li>You must show proof of the difficulties you'll face if you can't stay in Canada.</li>
          <li>Your case must present unique and compelling circumstances that need humanitarian consideration.</li>
        </ul>
      </section>

      <section className={styles.applicationProcess}>
        <h2>How to Apply for the Humanitarian and Compassionate (H&C) Program</h2>
        <ol>
          <li>Collect all relevant evidence to support your H&C claims.</li>
          <li>Fill out the necessary forms and submit your application to IRCC.</li>
          <li>Your sponsor will attend an interview with an IRCC officer on your behalf.</li>
        </ol>
      </section>

      <section className={styles.refusalReasons}>
        <h2>Common Reasons for Refusals of the Humanitarian and Compassionate (H&C) Program</h2>
        <ul>
          <li>You did not provide enough evidence to support your H&C claims. This could include evidence of hardship, integration, or humanitarian reasons.</li>
          <li>You provided unclear or inconsistent information in your application, making it difficult for an IRCC officer to understand your situation and make a decision.</li>
          <li>You may be inadmissible to Canada based on other grounds, such as criminality, health, or financial reasons.</li>
        </ul>
      </section>

      <section className={styles.consultation}>
        <h2>Still Not Sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals by using a tailored approach, addressing each concern listed in previous refusals, and applying case law precedents. Our high success rate is a testament to our expertise.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. <a href="#book-appointment" className={styles.button}>Start your process now</a></p>
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

      <section className={styles.faq}>
        <h2>FAQs Made Simple</h2>
        <dl>
          <dt>What is the H&C program?</dt>
          <dd>The H&C program is a discretionary immigration program that allows certain individuals who would not otherwise be eligible under Canada's regular immigration programs to apply for permanent residence. The program is designed to provide humanitarian assistance to individuals who are facing exceptional circumstances that warrant consideration.</dd>

          <dt>What are the processing times for H&C applications under family reunification?</dt>
          <dd>Processing times for H&C applications under family reunification can vary depending on the complexity of the case. Typically, applications can take up to two years to be processed.</dd>

          <dt>What are the costs involved in applying for the H&C program under family reunification?</dt>
          <dd>There are a number of fees involved in applying for the H&C program under family reunification. These fees include processing fees, medical exam fees, and translation fees. The total cost of an application can vary depending on the complexity of the case.</dd>

          <dt>What are my chances of success in applying for the H&C program under family reunification?</dt>
          <dd>The chances of success in applying for the H&C program under family reunification depend on the specific circumstances of your case. However, the program is designed to help individuals who are facing exceptional circumstances that make it difficult for them to remain in their home country.</dd>
        </dl>
      </section>

      <section className={styles.blogs}>
        <h2>Blogs</h2>
        <p>[Insert blog content or links here]</p>
      </section>
    </div>

    </>
  );
};

export default HumanitarianCompassionate;