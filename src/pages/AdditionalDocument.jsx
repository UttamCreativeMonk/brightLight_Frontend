import React, { useState } from "react";
import styles from "../styles/AdditionalDocument.module.css";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const AdditionalDocument = () => {
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
      <header className={styles.header}>
        <h1>Reply to Additional Document Request</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Don’t Worry, We’re Here to Help!</h2>
          <p>If you’re here, that means IRCC has already requested you to submit additional documents for your Canadian Immigration application. Don’t worry. This can happen at any stage of the application process, and the specific documents requested will vary depending on your case and program.</p>
          <p>We know these requests can be stressful. Especially if you’ve applied your application yourself. It's easy to forget something or accidentally upload the wrong document. No worries, though! We can help you out.</p>
          <p>If you already got that "Acknowledgement of Receipt" (AOR) letter with your application number and the Unique Client Identifier (UCI) – you can just use IRCC's online form to upload the right document.</p>
          <p>Make sure you know what they need and why. Follow their instructions to the letter, label your documents clearly, and get them uploaded in the right format. The faster you get that missing document submitted, the sooner things can keep moving along.</p>
        </section>

        <section className={styles.section}>
          <h2>Key Points to Keep in Mind</h2>
          <ul>
            <li>Submit the requested document ASAP. Failure to do so can negatively impact your application.</li>
            <li>Only submit requested documents. Don't include irrelevant information.</li>
            <li>The documents should be clear, legible, and translated if necessary.</li>
            <li>If you're unsure about any aspect of the process, let us handle your case for you. <a href="#bookAppointment">Click here</a></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Still Not Sure?</h2>
          <p>If you have received a Request for an additional document, do not worry. We can help you with your application. With over a decade of experience, we have guided many when it comes to providing additional documents.</p>
          <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You keep your focus on your Canadian ambition, and we'll focus on making it happen smoothly.</p>
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
            <dt>What are the most common reasons IRCC requests additional documents?</dt>
            <dd>
              <ul>
                <li>Missing or incomplete documents in your initial application</li>
                <li>Discrepancies or inconsistencies in your application</li>
                <li>Needing more proof of financial support, identity, or travel history</li>
                <li>Verifying specific details related to your program or reason for coming to Canada</li>
              </ul>
            </dd>
            <dt>How long do I have to submit the requested documents?</dt>
            <dd>The deadline will be specified in the notification you receive from IRCC. Generally, it ranges from a few days to a few weeks. Early submission is recommended to avoid delays.</dd>
            <dt>Can I submit additional documents that weren't requested?</dt>
            <dd>IRCC only considers documents specifically requested in the RAD notification. Submitting unsolicited and irrelevant documents can delay your application processing.</dd>
            <dt>What happens if I can't submit the requested documents by the deadline?</dt>
            <dd>Contact IRCC as soon as possible to explain the situation and request an extension. Failure to submit documents without explanation may result in a delay or even rejection of your application.</dd>
            <dt>How can I check the status of my application after submitting additional documents?</dt>
            <dd>You can check the status of your application online through your IRCC account. The updated status may take a few days or weeks to reflect after submitting additional documents.</dd>
          </dl>
        </section>
      </main>
    </div>

      {/* <Footer1 /> */}
    </>
  );
};

export default AdditionalDocument;
