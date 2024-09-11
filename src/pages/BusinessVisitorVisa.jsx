import React, { useState } from "react";
import styles from "../styles/BusinessVisitorVisa.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";


const BusinessVisitorVisa = () => {
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
              <p onClick={() => scrollToSection("activities")}>Activities</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("event-codes")}>Event Codes</p>
              <p onClick={() => scrollToSection("essential-documents")}>Essential Documents</p>
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
      <h1 className={styles.heading} id="about-program">Business Visitor Visa</h1>

      <section className={styles.introduction}>
        <p>
          A Business Visitor Visa is ideal for business owners who wish to travel to Canada to explore business opportunities without requiring sponsorship. This visa allows you to engage in various business activities while in Canada, including attending meetings, events, and conferences.
        </p>
      </section>

      <section className={styles.activities} id="activities">
        <h2 className={styles.subheading}>Activities Allowed with a Business Visitor Visa</h2>
        <ul>
          <li>Purchasing Canadian goods or services for a foreign business or government.</li>
          <li>Accepting orders for goods or services.</li>
          <li>Attending meetings, conferences, conventions, or trade fairs.</li>
          <li>Providing after-sales service related to warranties or sales agreements.</li>
          <li>Receiving training from a Canadian parent company (while employed outside Canada).</li>
          <li>Training employees of a Canadian branch of a foreign company.</li>
          <li>Receiving training from a Canadian company that sold you equipment or services.</li>
        </ul>
        <p>
          Additional Considerations: U.S. or Mexican nationals may also participate in research, marketing, and general services under the Canada-United States-Mexico Agreement (CUSMA). Refer to the Global Affairs Canada website for details.
        </p>
      </section>

      <section className={styles.eligibility} id="eligibility">
        <h2 className={styles.subheading}>Eligibility Criteria</h2>
        <p>To qualify as a business visitor, you must meet the following requirements:</p>
        <ul>
          <li>Your stay in Canada is less than 6 months.</li>
          <li>You do not intend to enter the Canadian labor market.</li>
          <li>Your primary business operations, income, and profits are outside Canada.</li>
          <li>You possess documents supporting your application.</li>
          <li>You meet Canada’s basic entry requirements, including:
            <ul>
              <li>Valid travel document (e.g., passport)</li>
              <li>Adequate funds for your stay and return</li>
              <li>Intent to leave Canada at the end of your stay</li>
              <li>No criminal, security, or health risks to Canadians</li>
            </ul>
          </li>
        </ul>
        <p>
          If your stay exceeds 6 months or involves working in Canada, you may be considered a temporary worker and need to apply for a work permit.
        </p>
      </section>

      <section className={styles.eventCode} id="event-codes">
        <h2 className={styles.subheading}>Event Code (if Applicable)</h2>
        <p>
          If your meeting, event, or conference is registered with Immigration, Refugees and Citizenship Canada (IRCC), your organizer will provide an event code. Include this code on your visa application form to indicate your participation in a registered event.
        </p>
      </section>

      <section className={styles.documents} id="essential-documents">
        <h2 className={styles.subheading}>Essential Documents for Entry</h2>
        <p>Upon arrival at the border, ensure you have the following documents:</p>
        <ul>
          <li>Valid passport or travel document for the entire stay.</li>
          <li>Visitor visa (if applicable).</li>
          <li>Same passport used in your eTA application (if applicable).</li>
          <li>For U.S. lawful permanent residents (green card holders), a valid green card and passport from your country of nationality (or equivalent document).</li>
          <li>Letters of support from your parent company.</li>
          <li>Letter of invitation from the Canadian host business or recognition letter from the Canada Border Services Agency.</li>
          <li>Relevant documents such as warranty or service agreements.</li>
          <li>24-hour contact details of your business host in Canada.</li>
          <li>Proof of sufficient funds to cover your stay and return journey.</li>
        </ul>
      </section>

      <section className={styles.support}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>
          If you have received a refusal or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling previous refusals. Our approval rate for these programs is nearly 100%. We have achieved this with a tailored approach to your specific case, using case law and finding similar cases with positive results as precedents.
        </p>
        <p>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link>
      </section>

      <section className={styles.whyChooseUs} id="why-choose-us">
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
    </div>
    <Footer1/>
    </>
  );
};

export default BusinessVisitorVisa;
