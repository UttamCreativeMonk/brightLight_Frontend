import React, { useState } from "react";
import styles from "../styles/GlobalStreamLmia.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const GlobalStreamLmia = () => {
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
     <Navbar1/>
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("labour-market")}>Labour Market</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
      <header className={styles.header} id="about-program">
        <h1>Global Talent Stream (GTS) LMIA</h1>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Overview</h2>
          <p>
            This type of LMIA stream is designed to expedite the process of hiring foreign workers with exceptional skills and experience in in-demand occupations, including engineers, scientists, and IT professionals. The GTS is a priority stream within the Temporary Foreign Worker Program (TFWP), and it is intended to attract highly skilled workers who can contribute to Canada's economy.
          </p>
        </section>

        <section className={styles.section} id="benifits">
          <h2>Benefits of Global Talent Stream (GTS) LMIA</h2>
          <ul>
            <li>GTS LMIAs are typically processed within 10 business days.</li>
            <li>Faster processing of work permits with GTS LMIA.</li>
            <li>Using this LMIA, foreign workers can stay in Canada as workers for up to three years, with many options to extend or transition to permanent resident status.</li>
            <li>No or minimal recruitment efforts are required to obtain LMIA approval.</li>
          </ul>
        </section>

        <section className={styles.section} id="eligibility">
          <h2>Eligibility Criteria for Global Talent Stream (GTS) LMIA</h2>
          <h3>Global Talent Stream Categories</h3>
          <p>The Global Talent Stream consists of two categories with their own set of requirements:</p>
          <ol>
            <li>
              <strong>Category A - Referred by one of the stream's designated referral partners</strong>
              <button className={styles.linkButton} onClick={() => document.getElementById('childcare').scrollIntoView({ behavior: 'smooth' })}>
                Go to Childcare Section
              </button>
            </li>
            <li>
              <strong>Category B - In-demand occupations on the global talent occupations list</strong>
              <button className={styles.linkButton} onClick={() => document.getElementById('childcare').scrollIntoView({ behavior: 'smooth' })}>
                Go to Childcare Section
              </button>
            </li>
          </ol>

          <h3>Category A - Referred by one of the stream's designated referral partners</h3>
          <p>
            If you've been referred by a designated referral partner and are hiring someone with unique, specialized talent, your application will fall under Category A. This stream is perfect for businesses looking to bring in individuals who can drive growth and innovation.
          </p>
          <ul>
            <li>The employer company must be based in Canada.</li>
            <li>The company should focus on innovation and be willing and able to grow.</li>
            <li>
              The position must require advanced industry knowledge and a relevant advanced degree, or a minimum of 5 years of specialized experience. The employer must offer a minimum of $38.46 per hour ($80,000 annual base salary) or the equivalent of the prevailing wage for the occupation.
            </li>
            <li>The employer must have identified a qualified temporary foreign worker (TFW) to hire for this position.</li>
          </ul>

          <h3>Category B - In-demand occupations on the global talent occupations list</h3>
          <p>
            If you're seeking to hire highly skilled temporary foreign workers (TFWs) to fill in-demand positions, you may qualify for Category B. No referral is required for this category, making it a great option for companies needing to fill roles quickly.
          </p>
          <p>Here's the list of occupations allowed under the Global Talent Stream:</p>
          <ul>
            <li>NOC 2021: 20012 - Computer and information systems managers</li>
            <li>NOC 2021: 21300 - Civil engineers</li>
            <li>NOC 2021: 21310 - Electrical and electronics engineers</li>
            <li>NOC 2021: 21330 - Mining engineers</li>
            <li>NOC 2021: 21390 - Aerospace engineers</li>
            <li>NOC 2021: 21311 - Computer engineers</li>
            <li>NOC 2021: 21210 - Mathematicians and statisticians</li>
            <li>NOC 2021: 21211 - Data scientists</li>
            <li>NOC 2021: 21220 - Cybersecurity specialists</li>
            <li>NOC 2021: 21221 - Business system specialists</li>
            <li>NOC 2021: 21222 - Information systems specialists</li>
            <li>NOC 2021: 21223 - Web designers</li>
            <li>NOC 2021: 21211 - Data scientists</li>
            <li>NOC 2021: 21223 - Database analysts and data administrators</li>
            <li>NOC 2021: 21231 - Software engineers and designers</li>
            <li>NOC 2021: 21211 - Data scientists</li>
            <li>NOC 2021: 21230 - Computer systems developers and programmers</li>
            <li>NOC 2021: 21232 - Software developers and programmers</li>
            <li>NOC 2021: 21234 - Web developers and programmers</li>
            <li>NOC 2021: 21233 - Web designers</li>
            <li>NOC 2021: 21234 - Web developers and programmers</li>
            <li>NOC 2021: 22310 - Electrical and electronics engineering technologists and technicians</li>
            <li>NOC 2021: 22220 - Computer network technicians</li>
            <li>NOC 2021: 22222 - Information systems testing technicians</li>
            <li>
              NOC 2021: 51120 - Producer, technical, creative, and artistic director, and project manager – Visual effects and video game (The position must require a minimum of 3 years of experience in the visual effects, video game, or animation industries in 1 or a combination of the following roles: producer, technical director, creative director, artistic director or project manager, senior coordinator, department manager, with 3 years of job experience in at least 1 or more of the following skills relevant to the visual effects, video game, or animation industries: surfacing and look development; character or simulation rigging; matte painting; managing budgets or teams; or technical pipeline development and application for visual effects, video games, or animation production.)
            </li>
            <li>
              NOC 2021: 52120 - Digital media designers (The position must require a minimum of 3 years of job experience in at least 1 of the following digital media design skills: 3D modeling, compositing, paint and roto, layout and match move, digital environment and Matte painting, texture, lighting shading, character effects, effects and simulations, design and scenario, rigging, user interface or user experience, responsive design (for gaming), virtual reality, augmented reality, digital media animation, levels editing for digital media design, software editing for digital media design, pipeline software development or applications relevant for digital media design)
            </li>
          </ul>
        </section>

        <section className={styles.section} id="labour-market">
          <h2>Labour Market Benefits Plan (LMBP)</h2>
          <p>
            The Labour Market Benefits Plan (LMBP) is a mandatory component of the Global Talent Stream (GTS) application process. It requires employers to outline specific activities they will undertake to create positive outcomes for the Canadian labor market as a result of hiring a foreign worker.
          </p>
          <p>The LMBP consists of 1 mandatory activity and at least 2 supplementary activities:</p>
          <ul>
            <li>Category A: The employer must create jobs for Canadian citizens and permanent residents.</li>
            <li>Category B: The employer must invest in the training and skill improvement of Canadian citizens and permanent residents.</li>
          </ul>
          <p>Examples of supplementary activities include:</p>
          <ul>
            <li>Increasing the number of Canadians and permanent residents employed full-time and part-time.</li>
            <li>Establishing or enhancing educational partnerships with local or regional post-secondary institutions or other organizations supporting skills and training.</li>
            <li>Providing paid co-op or internship opportunities.</li>
            <li>
              Developing, implementing, or participating in initiatives that increase the participation of underrepresented groups in the workplace.
            </li>
            <li>Providing direct training aimed at improving skills, including supporting employees to travel to and attend industry or industry sector conferences relevant to the development of their specialized skillset.</li>
            <li>Ensuring that the foreign worker will supervise and mentor Canadian workers to support knowledge transfer.</li>
            <li>Increasing the growth of revenue, employment, or investment at the firm.</li>
            <li>Developing or improving best company practices or policies related to the attraction and retention of the Canadian workforce.</li>
            <li>Developing or enhancing partnerships with organizations that assist with identifying top domestic capital.</li>
          </ul>
        </section>

        <section className={styles.section} id="how-to-apply">
          <h2>How to Apply for Global Talent Stream (GTS) LMIA</h2>
          <ol>
            <li>Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed.</li>
            <li>We will provide you with a checklist of documents and information required to start the initial process.</li>
            <li>While there is no minimum recruitment requirement for the GTS, it is recommended to perform recruitment efforts.</li>
            <li>Prepare the Labour Market Benefits Plan according to the category GTS LMIA application is to be applied under.</li>
            <li>Interview local applicants.</li>
            <li>Prepare and submit an LMIA application to the Service Canada ESDS department.</li>
            <li>Wait for LMIA processing time, which can range from 7 to 10 business days.</li>
          </ol>
        </section>

        <section className={styles.section} id="refusal-reasons">
          <h2>Common Reasons for Refusal of Global Talent Stream (GTS) LMIA</h2>
          <ul>
            <li>Insufficient Evidence of Labour Market Benefits.</li>
            <li>Provided false, misleading, or inaccurate information in the LMIA application.</li>
            <li>Non-compliance as a result of an employer compliance review.</li>
            <li>Being banned from the Temporary Foreign Worker Program due to non-compliance discovered during an inspection.</li>
            <li>Defaulting on payment of an administrative monetary penalty.</li>
          </ul>
        </section>

        <section className={styles.section} id="how-to-apply">
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer.
          </p>
          <p>
            We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.
          </p>
        </section>

        <section className={styles.section} id="why-choose-us">
          <h2>Why Choose Us</h2>
          <p>
            At Brightlight Immigration, we offer comprehensive services and a high success rate due to our tailored approach and expert knowledge in immigration law. We provide step-by-step guidance through the entire process, ensuring that every aspect of your application is handled with the utmost care.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Clients Testimonials</h2>
          <div className={styles.testimonials}>
            <div className={styles.videoTestimonials}>
              <h3>Video Testimonials</h3>
              {/* Placeholder for video testimonials */}
              <div className={styles.videoPlaceholder}>Video content here...</div>
            </div>
            <div className={styles.writtenTestimonials}>
              <h3>Written Testimonials</h3>
              {/* Placeholder for written testimonials */}
              <div className={styles.writtenPlaceholder}>Written content here...</div>
            </div>
          </div>
        </section>

      </main>
    </div>

    <Footer1/>
    </>
  );
};

export default GlobalStreamLmia;
