import React, { useState } from "react";
import styles from "../styles/ReplyToPflPage.module.css";

const ReplyToPflPage = () => {
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
          <h1>Procedural Fairness Letter (PFL)</h1>
        </header>
        <main className={styles.mainContent}>
          <section className={styles.section}>
            <h2>Did You Get a Red Flag from Canadian Immigration - PFL?</h2>
            <p>
              Don't panic! We'll help you through the PFL process and turn that
              flag into a welcome mat.
            </p>
            <p>
              Responding to a Procedural Fairness Letter (PFL) is a crucial step
              in addressing concerns raised by IRCC about your immigration
              application. It's your chance to clear things up, provide more
              proof, and possibly prevent a negative decision/refusal.
            </p>
            <p>
              These letters often come up when an officer from IRCC is unsure
              about the information given in your application. For example, they
              might suspect something's not quite right, like providing false or
              misleading details, which could lead to issues with the
              Immigration Refugees and Protection Act (IRPA).
            </p>
            <p>
              Typically, you'll get a letter outlining the concerns, and you
              usually have around 30 days to respond. This is a serious matter,
              as not addressing it properly might keep you from entering Canada
              for at least 5 years. So, it's crucial to respond with detailed
              answers, covering all the officer's concerns, even the ones you
              might not know about.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Here Are a Few Reasons You Might Have Received a PFL</h2>
            <ul>
              <li>
                IRCC or PNP officer might have found discrepancies in your
                application or supporting documents.
              </li>
              <li>
                You might have missed providing the necessary information or
                documentation.
              </li>
              <li>
                There may be concerns about your criminal history, health, or
                financial status that could affect your admissibility to Canada.
              </li>
              <li>
                If you are sponsoring family members, IRCC may have questions
                about the genuineness of the relationship.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a PFL, don't panic. We can help you with your
              application. With over a decade of experience, we have
              successfully cleared many applications that faced PFL.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your visa. Just reach out to us,
              and we'll handle the rest. You focus on your Canadian ambition,
              and we'll focus on making it happen smoothly.
            </p>
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
              <dt>
                My PFL mentions discrepancies in my travel history. I believe
                it's a misunderstanding due to outdated visa stamps. How should
                I address this?
              </dt>
              <dd>
                You should explain the situation clearly, provide copies of your
                passport with current and outdated stamps, and offer any
                supporting documentation like travel tickets or itineraries that
                clarify the timeline. Attach a cover letter highlighting the
                specific reasons for the discrepancy and how your explanation
                clarifies any concerns.
              </dd>

              <dt>
                I received a PFL regarding my financial status, but my income
                has significantly increased since applying. Can I submit updated
                documents?
              </dt>
              <dd>
                Absolutely! Include updated proof of income (pay stubs, tax
                returns) along with a detailed explanation of your increased
                income and how it aligns with your revised financial plan for
                supporting your immigration goals. Demonstrate your ability to
                meet the financial requirements now.
              </dd>

              <dt>
                The PFL questions the genuineness of my relationship with the
                family member I'm sponsoring. What kind of evidence can
                strengthen my case?
              </dt>
              <dd>
                Gather comprehensive evidence like photos, joint bank accounts,
                communication records (emails, messages), proof of shared
                celebrations or events, and affidavits from friends or family
                confirming the long-standing nature of your relationship.
                Highlight commonalities in cultural background, traditions, and
                values to showcase the genuine connection.
              </dd>

              <dt>
                I haven't received legal representation before, but my PFL
                concerns are complex. Should I consider hiring an immigration
                lawyer?
              </dt>
              <dd>
                Seeking legal counsel can be highly beneficial, especially if
                the PFL involves complicated legal aspects or admissibility
                concerns. We can help you draft a robust response and represent
                you effectively during any potential appeals.{" "}
                <a href="#bookAppointment">Let us handle your case for you</a>.
              </dd>

              <dt>
                I missed the deadline to respond to my PFL due to unforeseen
                circumstances. Can I still submit a response?
              </dt>
              <dd>
                Immediately contact IRCC and explain the reason for the missed
                deadline. Provide supporting documentation if possible. While
                they might allow a late response based on extenuating
                circumstances, it's crucial to act swiftly and demonstrate
                genuine intention to address the concerns.
              </dd>
            </dl>
          </section>
        </main>
      </div>
    </>
  );
};

export default ReplyToPflPage;
