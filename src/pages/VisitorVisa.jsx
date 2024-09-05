import React, { useState } from "react";
import styles from "../styles/VisitorVisa.module.css";
import { Link } from "react-router-dom";

const VisitorVisa = () => {
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
      <h1 className={styles.heading}>Visitor Visa</h1>

      <section className={styles.introduction}>
        <p>
          A Visitor Visa, also known as a Temporary Resident Visa (TRV), allows people from other countries to visit Canada for a short period. Are you planning to visit Canada and need to apply for a Visitor Visa? There are several different options through which you can apply for a Visitor Visa, each with its own specific requirements. You can visit Canada for various purposes, all of which are generally covered by the Visitor Visa umbrella. For some visa-exempt countries, a simple Electronic Travel Authorisation (eTA) application can be submitted. However, if you're from a country that requires a visa, you'll need to obtain authorization to enter and stay in Canada for a specific period, which is a Temporary Resident Visa, also commonly known as Visitor Visa.
        </p>
      </section>

      <section className={styles.options}>
        <h2 className={styles.subheading}>Choose Your Application of Interest:</h2>
        <div className={styles.buttons}>
          <Link to="/business-visa" className={styles.button}>Business Visa</Link>
          <Link to="/dual-intent-visa" className={styles.button}>Dual-intent Visa</Link>
          <Link to="/super-visa" className={styles.button}>Super Visa</Link>
          <a href="#tourism" className={styles.button}>Tourism Visa</a>
          <a href="#emergency-visa" className={styles.button}>Emergency Visa</a>
          <Link to="/reconsideration" className={styles.button}>Reconsideration for Refusal</Link>
        </div>
      </section>

      <section className={styles.eligibility}>
        <h2 className={styles.subheading}>Eligibility Criteria</h2>
        <p>
          To obtain a visitor visa, you must meet essential requirements, which may vary depending on your individual circumstances and country of citizenship and residence.
        </p>
        <ul>
          <li>A passport that is valid for 6 months or more</li>
          <li>No criminal or immigration-related convictions</li>
          <li>Proof of strong ties to your home country</li>
          <li>Proof of your intention to leave Canada at the end of your visit</li>
          <li>Proof that you have enough funds to cover your stay</li>
        </ul>
        <p>
          The amount of money you will need depends on the purpose of your visit, how long you plan to stay, and whether you will stay in a hotel or with friends or relatives.
        </p>
      </section>

      <section className={styles.applicationProcess}>
        <h2 className={styles.subheading}>How to Apply for a Visitor Visa</h2>
        <ol>
          <li>Assess your eligibility for a Canadian visitor visa.</li>
          <li>Gather the necessary documents and complete the required application forms.</li>
          <li>Submit your Canadian visitor visa application in accordance with IRCC guidelines and our recommendations.</li>
          <li>Wait for the processing of your application and respond promptly to any additional inquiries from the authorities (if any).</li>
          <li>Send your passport for the stamping of your Temporary Resident Visa (TRV).</li>
        </ol>
      </section>

      <section id="tourism" className={styles.tourism}>
        <h2 className={styles.subheading}>Tourism Visa</h2>
        <p>
          Canadian immigration allows you to visit Canada for tourism purposes and explore various tourist destinations, which are world-renowned. To apply for a visitor visa for tourism purposes, you don’t need an invitation from a Canadian citizen, permanent resident, or Canadian business. However, you must satisfy Immigration, Refugees and Citizenship Canada (IRCC) that you have sufficient funds to support your trip to Canada. If dependents are accompanying you, you’ll need to provide additional proof of funds. Furthermore, you’ll need to provide convincing reasons why you will return to your home country or country of residence after your trip is completed.
        </p>
      </section>

      <section id="emergency-visa" className={styles.emergencyVisa}>
        <h2 className={styles.subheading}>Emergency Visa</h2>
        <p>
          Canada Immigration allows for the application of an emergency visa in situations that necessitate an immediate visit to Canada. This could be due to unexpected circumstances such as emergency medical care, sudden illness, to be present during the final moments of life, end-of-life care, or the death or funeral of a family member, close relative, or friend who is residing in Canada.
        </p>
      </section>

      <section className={styles.refusalReasons}>
        <h2 className={styles.subheading}>Common Reasons for Refusals of Visitor Visa</h2>
        <ul>
          <li>Prove that you can afford your trip. Address any concerns about your financial ability to cover your expenses. Show your bank statements, employment contracts, or pay stubs to demonstrate a steady income, etc.</li>
          <li>Highlight your attachment to home. Visa officers want to see why you're not eager to abandon your home life. Showcase your commitments to your home country.</li>
          <li>Clearly express your visit's purpose and explain in detail the reason for your visit, whether it's business, tourism, medical treatment, etc.</li>
          <li>Showcase your travel experience and that you intend to return home.</li>
        </ul>
      </section>

      <section className={styles.support}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>
          If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case laws and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
        </p>
        <p>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <Link to="/book-appointment" className={styles.button}>Book Appointment</Link>
      </section>

      <section className={styles.whyChooseUs}>
        <h2 className={styles.subheading}>Why Choose Us?</h2>
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

      <section className={styles.faqs}>
        <h2 className={styles.subheading}>FAQs Made Simple</h2>
        <div className={styles.faq}>
          <h4>Does Canada give visitor visa now?</h4>
          <p>Everyone who wants to enter Canada who is not a Canadian citizen or permanent resident, or otherwise visa-exempt, requires a visitor visa.</p>
        </div>
        <div className={styles.faq}>
          <h4>How long is Canadian visitor visa valid?</h4>
          <p>The Canadian visitor visa can be either a single or multiple entry visa. The visa can be valid for up to 10 years or until the passport expires. However, you must visit Canada before your visa expires.</p>
        </div>
        <div className={styles.faq}>
          <h4>How long does it take for visitor visa Canada?</h4>
          <p>The processing time for a visitor visa application from within Canada is 10-27 days. However, applications made from outside of Canada may take longer depending on the applicant's country of residence. Please check the IRCC's website to determine the processing time from your country of residence or contact our office at 605-503-3734 for more information.</p>
        </div>
        <div className={styles.faq}>
          <h4>How much is Canada visitor visa fee?</h4>
          <p>The processing fee for a Canada Visitor visa application is $100 CAD. You will also have to pay biometrics fees of $85 CAD.</p>
        </div>
        <div className={styles.faq}>
          <h4>Can a friend sponsor me to Canada for visitor visa?</h4>
          <p>A friend or family member can help you with your visitor visa application by writing a letter of invitation. This letter should explain how they will support you during your stay in Canada, such as providing accommodation or financial assistance. However, a letter of invitation alone does not guarantee visa approval.</p>
        </div>
        <div className={styles.faq}>
          <h4>What is proof of funds for visitor visa?</h4>
          <p>To show that you have the financial means to support yourself during your stay in Canada, you will need to provide proof of funds. This could include original bank statements from your personal account for the past six months, the last six months of pay slips, or evidence of other financial resources.</p>
        </div>
        <div className={styles.faq}>
          <h4>How to get 100% Canada tourist visa?</h4>
          <p>While there is no guarantee of visa approval, there are several steps you can take to strengthen your application:
            <ul>
              <li>Check your eligibility for the Canada Visitor Visa.</li>
              <li>Collect and submit the documents required.</li>
              <li>Submit the Canada Visitor Visa Application form.</li>
              <li>Wait for processing and provide any required additional information.</li>
              <li>Send your passport for stamping.</li>
            </ul>
          </p>
        </div>
        <div className={styles.faq}>
          <h4>Does Canada refuse visitor visa?</h4>
          <p>Visitor visas may be refused because the applicant did not provide enough detail about the purpose of their visit to Canada. If your visit is for a specific event, you must submit evidence to support this, such as invitation letters, event details, and documentation.</p>
        </div>
        <div className={styles.faq}>
          <h4>Can I convert Canada visitor visa to work permit/study permit?</h4>
          <p>While it is possible to convert a visitor visa to a work permit or study permit, it is not guaranteed. The specific requirements and eligibility criteria for each program will vary. It is best to consult our RCIC Regulated immigration consultant to discuss your options.</p>
        </div>
        <div className={styles.faq}>
          <h4>Can I apply for visitor visa for my parents from Canada?</h4>
          <p>Yes, you can apply for a visitor visa on behalf of your parents if they are not citizens or permanent residents of Canada and are not otherwise visa-exempt. However, they will need to meet all the eligibility criteria for a visitor visa, including providing proof of funds, ties to their home country, and a clear purpose for their visit.</p>
        </div>
        <div className={styles.faq}>
          <h4>Do I need an invitation letter/Sponsor to visit Canada?</h4>
          <p>An invitation letter is not mandatory for visitor visa applications. However, it can be helpful to provide a letter of invitation from someone in Canada who can vouch for your purpose of visit and provide support during your stay. It is important to note that an invitation letter alone does not guarantee visa approval.</p>
        </div>
        <div className={styles.faq}>
          <h4>Can I sponsor a non-family member to Canada?</h4>
          <p>Canada does not offer a program specifically for sponsoring non-family members to immigrate to the country. However, there are other immigration programs that may be suitable for them. Speak to our RCIC Regulated immigration consultant to discuss their options.</p>
        </div>
        <div className={styles.faq}>
          <h4>Who can invite tourists to Canada?</h4>
          <p>While Canada does not have an invitation visa, you can invite a friend or family member to come and visit you in Canada. Your friend or family member will be applying for a regular tourist visa, but you can provide an invitation letter in support of their visa application.</p>
        </div>
        <div className={styles.faq}>
          <h4>Can I invite my boyfriend, spouse, or common-law partner to Canada on a Visitor Visa?</h4>
          <p>Yes, you can invite your boyfriend, spouse, or common-law partner to Canada on a visitor visa. However, they will need to meet all of the eligibility requirements for a visitor visa, including providing proof of funds, ties to their home country, and a clear purpose for their visit.</p>
        </div>
        <div className={styles.faq}>
          <h4>My Visitor Visa got refused. What should I do?</h4>
          <p>If you have received a refusal for any of the reasons, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. Speak to our RCIC Regulated consultant at 605-503-3734 and discuss your options.</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default VisitorVisa;
