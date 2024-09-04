import React, { useState } from "react";
import styles from "../styles/Reconsideration.module.css";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const Reconsideration = () => {
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
      <header className={styles.header}>
        <h1>Reconsideration for Refusal Decision</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Don't Worry, There's Still Hope!</h2>
          <p>Are you a Canadian immigrant who has recently received a rejection for your visa application? If so, you're not alone. Many people experience this setback on their journey to becoming a Canadian resident.</p>
          <p>Firstly, don’t worry. There's still hope!</p>
          <p>IRCC offers a Reconsideration of Refusal Decision program, which gives you the chance to appeal the decision and potentially secure the visa you deserve. A reconsideration of a refusal decision, also known as a request for reconsideration, is a formal process that allows you to ask IRCC to review your case again. The Reconsideration of Refusal program allows you to challenge the refusal decision of your application based on new information or arguments that were not previously considered. This is a great opportunity to present additional evidence or address any misunderstandings that may have led to the initial rejection.</p>
        </section>

        <section className={styles.section}>
          <h2>Requests for reconsideration can be made for:</h2>
          <ul>
            <li>Permanent residence</li>
            <li>Temporary residence</li>
            <li>Citizenship</li>
            <li>Humanitarian and compassionate considerations</li>
          </ul>
          <p>You can request reconsideration within 30 days of the date of the refusal letter. However, there are some exceptions to this rule. For example, if you have new information that you did not submit with your original application, you may be able to request reconsideration more than 90 days after the refusal letter.</p>
        </section>

        <section className={styles.section}>
          <h2>Eligibility for Reconsideration</h2>
          <p>Are you considering reconsideration requests? See if you meet the eligibility.</p>
          <ul>
            <li>You must have received a letter saying your application was rejected or refused by IRCC. This letter will tell you why.</li>
            <li>Your initial application must have been turned down because of a mistake. This means the officer who looked at your case made an error in understanding your circumstances.</li>
            <li>You must have new info or reasons that weren't considered before. This new info should relate to why your application was rejected and be enough to change the decision.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How to Apply for Reconsideration</h2>
          <p>Meet the eligibility criteria? Let's see how you can request a reconsideration.</p>
          <ul>
            <li>You must submit the request within 30 days of receiving the refusal letter. The request should be well-written and clearly explain why you believe the decision should be overturned.</li>
            <li>Wait for IRCC to review your request and provide any additional information or documentation that the IRCC officer may request.</li>
            <li>IRCC will decide on your request within 90 days of receiving it. If the decision is in your favor, you will be granted the visa you requested. If the decision is not in your favor, you will have the option to appeal the decision.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Reasons for Refusal After Reconsideration</h2>
          <p>Don’t forget to avoid these common reconsideration request refusal reasons and increase your chances of approval.</p>
          <ul>
            <li>Failing to provide enough new evidence to counter the initial refusal reasons.</li>
            <li>Submitting new evidence that is irrelevant or unconvincing.</li>
            <li>Not addressing the legal basis for the initial refusal adequately.</li>
            <li>Making procedural errors in the reconsideration request itself.</li>
            <li>Providing contradictory or inconsistent information compared to the original application.</li>
            <li>Failing to articulate a persuasive case for reconsidering the decision.</li>
            <li>Not proving why you should be granted the visa despite the initial refusal.</li>
          </ul>
          <p><a href="#bookAppointment">Book Appointment</a></p>
        </section>

        <section className={styles.section}>
          <h2>Still Not Sure?</h2>
          <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
          <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.</p>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          {/* Add content here */}
        </section>

        <section className={styles.section}>
          <h2>Clients Testimonials</h2>
          {/* Add video and written testimonials here */}
        </section>

        <section className={styles.section}>
          <h2>FAQs Made Simple</h2>
          <dl>
            <dt>What are the grounds for reconsideration?</dt>
            <dd>
              <ul>
                <li>New evidence that was unavailable at the time of the initial application, such as updated financial documents, proof of strong ties to your home country, or additional qualifications that strengthen your case.</li>
                <li>If you believe there was a mistake or misinterpretation of your application or supporting documents, you can explain the error and provide necessary clarifications.</li>
                <li>If your circumstances have changed significantly since the initial application (e.g., job offer, marriage, medical condition), you can explain how these changes affect your eligibility and show your continued interest in immigrating to Canada.</li>
              </ul>
            </dd>
            <dt>How long does the reconsideration process take?</dt>
            <dd>IRCC plans to make a decision on reconsideration requests within 90 days of receiving them. However, the processing time can be longer depending on the complexity of the case and the workload of IRCC.</dd>
            <dt>Can I submit a reconsideration request for any type of visa refusal?</dt>
            <dd>Yes, the program applies to most Canadian visa types, including:
              <ul>
                <li>Visitor visas</li>
                <li>Study permits</li>
                <li>Work permits</li>
                <li>Permanent residency applications (Express Entry, Family Class Sponsorship, etc.)</li>
              </ul>
            </dd>
            <dt>Are there specific deadlines for submitting a reconsideration request?</dt>
            <dd>Yes, you must submit your request within 30 days of receiving your refusal letter. Missing this deadline will significantly reduce your chances of success.</dd>
            <dt>How much does it cost to file a reconsideration request?</dt>
            <dd>There is no fee to file a reconsideration request with IRCC.</dd>
            <dt>Are there any success stories of individuals who have had their refusals overturned through reconsideration?</dt>
            <dd>Yes, there are many success stories of individuals who have had their refusals overturned through reconsideration. Watch some of our client’s testimonials that prove it is possible to overcome a visa refusal if you are prepared and committed to your case.</dd>
          </dl>
        </section>
      </main>
    </div>

      {/* <Footer1 /> */}
    </>
  );
};

export default Reconsideration;
