import React, { useState } from "react";
import styles from '../styles/RestorationStatusDraft.module.css';
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";


const RestorationStatusDraft = () => {
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
                <p onClick={() => scrollToSection("about-program")}>  About the Program     </p>
                <p onClick={() => scrollToSection("check-status")}>Check Status</p>
                <p onClick={() => scrollToSection("how-to-apply")}>   How to Apply?       </p>
                <p onClick={() => scrollToSection("requirement")}>  Requirement      </p>
                <p onClick={() => scrollToSection("book-appointment")}>  Book Appointment       </p>
                <p onClick={() => scrollToSection("why-choose-us")}>  Why Choose Us?     </p>
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
      <h1 className={styles.heading} id="about-program">Restoration of Status</h1>
      <section className={styles.introduction}>
        <p>Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing in Canada.</p>
        <p>The restoration of status is a process that provides temporary residents with a second chance to maintain their legal presence in Canada. If your temporary status (student visa, visitor permit, or work permit) lapses or expires and you did not apply for an extension before the expiry date, you will be considered out of status. At this point, you have a few options. You can either depart Canada immediately or apply to restore your temporary status. You have a maximum of 90 days from the date your status expires to apply for restoration of your status.</p>
        <p>This is a very serious situation that should be handled with the utmost importance, as any further delay could have a negative impact on any future applications you may submit. If you meet specific eligibility requirements, you can apply to reinstate your status and continue enjoying the advantages of living and working in Canada.</p>
        <p><strong>Important:</strong> If you're a student or worker on temporary status, you're not allowed to work or study while your restoration application is under review.</p>
      </section>

      <section className={styles.checkStatus} id="check-status">
        <h2 className={styles.subheading}>How to Check if Your Immigration Status is Valid</h2>
        <p>To check if your stay in Canada is still allowed, look for the expiration date printed on your permits. These dates provide an indication of your temporary permission to remain in Canada until that point.</p>
        <ul>
          <li>If you are visiting Canada as a tourist, your stay is typically valid for 6 months from the date you entered the country.</li>
          <li>It is illegal to stay in Canada beyond the authorized period. If your stay expires and you have not applied for an extension, you must apply for restoration of status within 90 days.</li>
        </ul>
      </section>

      <section className={styles.requirements} id="requirement">
        <h2 className={styles.subheading}>What Are the Requirements for Restoration of Your Status?</h2>
        <ul>
          <li>Apply for restoration of status within 90 days (3 months) of your status expiration.</li>
          <li>Maintain the initial requirements and conditions of your stay, whether it is for study, work, or visiting Canada.</li>
          <li>Adhere to all conditions imposed on your stay, including not engaging in unauthorized work.</li>
        </ul>
        <p><strong>Important Tip:</strong> Restoration of status cannot be granted at any Canadian port of entry, so you must apply while you are still in the country.</p>
      </section>

      <section className={styles.applicationProcess} id="how-to-apply">
        <h2 className={styles.subheading}>How to Apply for Restoration of Status</h2>
        <p>To apply for status restoration, you will need to provide specific documents and information to Immigration, Refugees and Citizenship Canada (IRCC). The specific requirements vary based on the type of restoration you are seeking, whether it's for a visitor, student, or worker. It is crucial to complete the correct forms for your restoration type and submit the necessary documents to increase the chances of your application being approved. Here are a few general guidelines:</p>
        <ul>
          <li>Provide a compelling reason why your previous status expired.</li>
          <li>Submit photocopies of all valid pages of your passport.</li>
          <li>Attach a photocopy of your last valid immigration document, such as a visitor visa, work permit, or study permit.</li>
          <li>If you are applying for restoration as a spouse, provide a copy of your marriage certificate or license (if applicable).</li>
          <li>Showcase sufficient financial means to support yourself during your extended stay in Canada.</li>
        </ul>
      </section>

      <section className={styles.refusalReasons} id="refusal-reasons">
        <h2 className={styles.subheading}>Common Reasons for Refusal of Restoration of Status Applications</h2>
        <ul>
          <li>Missed the deadline to submit the restoration application within 90 days of the expiry of status.</li>
          <li>Continued working or studying on the restoration status.</li>
          <li>Did not answer the questions in the application form correctly, completely, and truthfully.</li>
          <li>Applied for the wrong type of intent along with the restoration application.</li>
          <li>Paid insufficient fees to IRCC.</li>
        </ul>
      </section>

      <section className={styles.assistance} id="why-choose-us">
        <h2 className={styles.subheading}>Still Not Sure?</h2>
        <p>If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.</p>
        <p>We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.</p>
        <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>Book Appointment</Link>
      </section>
    </div>

    <Footer1/>

    </>
  );
};

export default RestorationStatusDraft;
