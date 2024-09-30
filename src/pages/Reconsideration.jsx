import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Reconsideration.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

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
        <header className={styles.header}>
          <h1>Reconsideration for Refusal Decision</h1>
        </header>
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
              <p onClick={() => scrollToSection("requests-for-reconsideration")}>Requests for reconsideration</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>Refusal Reasons</p>
              <p onClick={() => scrollToSection("eligibilty")}>Eligibilty</p>
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
        <main className={styles.mainContent}>
          <section  className={`${styles.section} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}  >
            <h2>Don't Worry, There's Still Hope!</h2>
            <p>
              Are you a Canadian immigrant who has recently received a rejection
              for your visa application? If so, you're not alone. Many people
              experience this setback on their journey to becoming a Canadian
              resident.
            </p>
            <p>Firstly, don’t worry. There's still hope!</p>
            <p>
              IRCC offers a Reconsideration of Refusal Decision program, which
              gives you the chance to appeal the decision and potentially secure
              the visa you deserve. A reconsideration of a refusal decision,
              also known as a request for reconsideration, is a formal process
              that allows you to ask IRCC to review your case again. The
              Reconsideration of Refusal program allows you to challenge the
              refusal decision of your application based on new information or
              arguments that were not previously considered. This is a great
              opportunity to present additional evidence or address any
              misunderstandings that may have led to the initial rejection.
            </p>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="requests-for-reconsideration" ref={(el) => sectionsRef.current[1] = el}  >
            <h2>Requests for reconsideration can be made for:</h2>
            <ul>
              <li>Permanent residence</li>
              <li>Temporary residence</li>
              <li>Citizenship</li>
              <li>Humanitarian and compassionate considerations</li>
            </ul>
            <p>
              You can request reconsideration within 30 days of the date of the
              refusal letter. However, there are some exceptions to this rule.
              For example, if you have new information that you did not submit
              with your original application, you may be able to request
              reconsideration more than 90 days after the refusal letter.
            </p>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="eligibilty" ref={(el) => sectionsRef.current[2] = el}  >
            <h2>Eligibility for Reconsideration</h2>
            <p>
              Are you considering reconsideration requests? See if you meet the
              eligibility.
            </p>
            <ul>
              <li>
                You must have received a letter saying your application was
                rejected or refused by IRCC. This letter will tell you why.
              </li>
              <li>
                Your initial application must have been turned down because of a
                mistake. This means the officer who looked at your case made an
                error in understanding your circumstances.
              </li>
              <li>
                You must have new info or reasons that weren't considered
                before. This new info should relate to why your application was
                rejected and be enough to change the decision.
              </li>
            </ul>
          </section>

          <section  className={`${styles.section} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[3] = el}   >
            <h2>How to Apply for Reconsideration</h2>
            <p>
              Meet the eligibility criteria? Let's see how you can request a
              reconsideration.
            </p>
            <ul>
              <li>
                You must submit the request within 30 days of receiving the
                refusal letter. The request should be well-written and clearly
                explain why you believe the decision should be overturned.
              </li>
              <li>
                Wait for IRCC to review your request and provide any additional
                information or documentation that the IRCC officer may request.
              </li>
              <li>
                IRCC will decide on your request within 90 days of receiving it.
                If the decision is in your favor, you will be granted the visa
                you requested. If the decision is not in your favor, you will
                have the option to appeal the decision.
              </li>
            </ul>
          </section>

          <section  className={`${styles.section} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[4] = el} >
            <h2>Reasons for Refusal After Reconsideration</h2>
            <p>
              Don’t forget to avoid these common reconsideration request refusal
              reasons and increase your chances of approval.
            </p>
            <ul>
              <li>
                Failing to provide enough new evidence to counter the initial
                refusal reasons.
              </li>
              <li>
                Submitting new evidence that is irrelevant or unconvincing.
              </li>
              <li>
                Not addressing the legal basis for the initial refusal
                adequately.
              </li>
              <li>
                Making procedural errors in the reconsideration request itself.
              </li>
              <li>
                Providing contradictory or inconsistent information compared to
                the original application.
              </li>
              <li>
                Failing to articulate a persuasive case for reconsidering the
                decision.
              </li>
              <li>
                Not proving why you should be granted the visa despite the
                initial refusal.
              </li>
            </ul>
            <span className={styles.bookButtonPara}>
              <button
                id="book-appointment"
                onClick={() =>
                  (window.location.href =
                    "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
                }
              >
                Book Appointment
              </button>
              {/* <a  href=""></a> */}
            </span>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[5] = el} >
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a refusal for any of the reasons mentioned
              above, do not worry. With over a decade of experience, we
              specialize in previously refused cases. We have got approvals for
              clients who had multiple previous refusals. We achieve this with a
              tailored approach to your specific case, addressing each concern
              that the officer has listed in previous refusals. We use case law
              and find similar cases to your circumstances that had positive
              results, and we use them as precedents in cases we work on. This
              is why we have a high success rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process all the way to obtaining your visa. Start your
              process now.
            </p>
          </section>
        </main>
      </div>
      <div id="faqs">
        <FAQ />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default Reconsideration;
