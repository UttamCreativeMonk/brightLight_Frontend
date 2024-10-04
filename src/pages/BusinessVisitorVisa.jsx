import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BusinessVisitorVisa.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

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

  

  const sectionsRef = useRef([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add(styles.visible);
      } else {
        section.classList.remove(styles.visible);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              {/* <p onClick={() => scrollToSection("activities")}>Activities</p> */}
              {/* <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              {/* <p onClick={() => scrollToSection("event-codes")}>Event Codes</p> */}
              <p onClick={() => scrollToSection("essential-documents")}>Essential Documents</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.container}>
      <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>Business Visitor Visa</h1>

      <section  className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
        <h2>Business Visitors in Canada: Meetings, Events, and Conferences. </h2>
        <p>
        Business Visa is a great option for business owners who want to travel to Canada for purposes of exploring business opportunities. The best part about this program is that you do not require any sponsorship.
        </p>
      </section>

      <section className={`${styles.activities} ${styles.section}`} id="activities" ref={(el) => sectionsRef.current[2] = el} >
        <h2 className={styles.subheading}>As a business visitor, you may engage in the following activities:</h2>
        <ul>
          <li>Purchasing Canadian goods or services for a foreign business or government.</li>
          <li>Accepting orders for goods or services.</li>
          <li>Attending meetings, conferences, conventions, or trade fairs.</li>
          <li>Providing after-sales service related to warranties or sales agreements.</li>
          <li>Receiving training from a Canadian parent company (while employed outside Canada).</li>
          <li>Training employees of a Canadian branch of a foreign company.</li>
          <li>Receiving training from a Canadian company that sold you equipment or services.</li>
        </ul>
        <h4>
          Additional Considerations
        </h4>
        <ul>
          <li>
          <p><strong>Canada-United States-Mexico Agreement (CUSMA):</strong> U.S. or Mexican nationals may participate in other activities such as research, marketing, and general services. Refer to the Global Affairs Canada website for details.</p>
          </li>
        </ul>
      </section>

      <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[3] = el}>
        <h2 className={styles.subheading}>Eligibility criteria for a Business Visitor Visa?</h2>
        <h4>Before proceeding, learn whether you qualify as a business visitor or if you need to apply for a work permit instead. Business visitors typically stay in Canada for a few days or weeks to attend meetings or events, with a maximum stay of up to 6 months. A separate application can be filed to extend the stay.</h4>
        <p>To qualify as a business visitor, you must meet the following requirements:</p>
        <ul className={styles.eligibilityList}>
          <li> <strong>Duration of Stay:</strong> Your planned stay is less than 6 months.</li>
          <li> <strong>Non-Engagement in Canadian Labor Market:</strong> You do not intend to enter the Canadian labor market.</li>
          <li> <strong>Business Ties Outside Canada:</strong> Your primary business operations, income, and profits are outside Canada.</li>
          <li> <strong>Documentary Support:</strong> You possess documents supporting your application.</li>
          <li><strong>Basic Entry Requirements:</strong> You meet Canada’s basic entry criteria, including:
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

      <section className={`${styles.eventCode} ${styles.section}`} id="event-codes" ref={(el) => sectionsRef.current[4] = el}>
        <h2 className={styles.subheading}>Event Code (if Applicable)</h2>
        <li>If you require a business visitor visa for Canada and your meeting, event, or conference is registered with Immigration, Refugees and Citizenship Canada (IRCC), your organizer will provide an event code.</li>
        <li>Include this event code on your visa application form to indicate your participation in a registered event.</li>
      </section>

      <section className={styles.documents}>
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

      <section className={`${styles.support} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[6] = el}>
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>
          If you have received a refusal or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling previous refusals. Our approval rate for these programs is nearly 100%. We have achieved this with a tailored approach to your specific case, using case law and finding similar cases with positive results as precedents.
        </p>
        <p>
          At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.
        </p>
        <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }>
              Book Appointment
            </button>
      </section>

      <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[5] = el}>
        <h2 className={styles.subheading}>Why Choose Us?</h2>
        <p>
          At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.
        </p>
      </section>
    </div>


      <div id="faqs">
        <FAQ/>
      </div>
      <div id="testimonials"> 
        <Testimonials/>
      </div>
      <div id="blogs">
        <RecentBlogs/>
      </div>
    <Footer1/>
    </>
  );
};

export default BusinessVisitorVisa;
