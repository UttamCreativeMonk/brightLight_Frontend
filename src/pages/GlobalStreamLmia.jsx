import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/GlobalStreamLmia.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

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
          <h1>Global Talent Stream (GTS) LMIA</h1>
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("labour-market")}>Labour Market</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
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
          <section className={`${styles.section} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}> 
            <h2>Overview</h2>
            <p>
              This type of LMIA stream is designed to expedite the process of
              hiring foreign workers with exceptional skills and experience in
              in-demand occupations, including engineers, scientists, and IT
              professionals. The GTS is a priority stream within the Temporary
              Foreign Worker Program (TFWP), and it is intended to attract
              highly skilled workers who can contribute to Canada's economy.
            </p>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[1] = el}>
            <h2>Benefits of Global Talent Stream (GTS) LMIA</h2>
            <ul>
              <li>
                GTS LMIAs are typically processed within 10 business days.
              </li>
              <li>Faster processing of work permits with GTS LMIA.</li>
              <li>
                Using this LMIA, foreign workers can stay in Canada as workers
                for up to three years, with many options to extend or transition
                to permanent resident status.
              </li>
              <li>
                No or minimal recruitment efforts are required to obtain LMIA
                approval.
              </li>
            </ul>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[2] = el}>
            <h2>Eligibility Criteria for Global Talent Stream (GTS) LMIA</h2>
            <h3>Global Talent Stream Categories</h3>
            <p>
              The Global Talent Stream consists of two categories with their own
              set of requirements:
            </p>
            <ol>
              <li>
                <strong>
                  Category A - Referred by one of the stream's designated
                  referral partners
                </strong>
              </li>
              <li>
                <strong>
                  Category B - In-demand occupations on the global talent
                  occupations list
                </strong>
              </li>
            </ol>

            <h3>
              Category A - Referred by one of the stream's designated referral
              partners
            </h3>
            <p>
              If you've been referred by a designated referral partner and are
              hiring someone with unique, specialized talent, your application
              will fall under Category A. This stream is perfect for businesses
              looking to bring in individuals who can drive growth and
              innovation.
            </p>
            <ul>
              <li>The employer company must be based in Canada.</li>
              <li>
                The company should focus on innovation and be willing and able
                to grow.
              </li>
              <li>
                The position must require advanced industry knowledge and a
                relevant advanced degree, or a minimum of 5 years of specialized
                experience. The employer must offer a minimum of $38.46 per hour
                ($80,000 annual base salary) or the equivalent of the prevailing
                wage for the occupation.
              </li>
              <li>
                The employer must have identified a qualified temporary foreign
                worker (TFW) to hire for this position.
              </li>
            </ul>

            <h3>
              Category B - In-demand occupations on the global talent
              occupations list
            </h3>
            <p>
              If you're seeking to hire highly skilled temporary foreign workers
              (TFWs) to fill in-demand positions, you may qualify for Category
              B. No referral is required for this category, making it a great
              option for companies needing to fill roles quickly.
            </p>
            <p>
              Here's the list of occupations allowed under the Global Talent
              Stream:
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>NOC Code</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20012</td>
                  <td>Computer and information systems managers</td>
                </tr>
                <tr>
                  <td>21300</td>
                  <td>Civil engineers</td>
                </tr>
                <tr>
                  <td>21310</td>
                  <td>Electrical and electronics engineers</td>
                </tr>
                <tr>
                  <td>21330</td>
                  <td>Mining engineers</td>
                </tr>
                <tr>
                  <td>21390</td>
                  <td>Aerospace engineers</td>
                </tr>
                <tr>
                  <td>21311</td>
                  <td>Computer engineers</td>
                </tr>
                <tr>
                  <td>21210</td>
                  <td>Mathematicians and statisticians</td>
                </tr>
                <tr>
                  <td>21211</td>
                  <td>Data scientists</td>
                </tr>
                <tr>
                  <td>21220</td>
                  <td>Cybersecurity specialists</td>
                </tr>
                <tr>
                  <td>21221</td>
                  <td>Business system specialists</td>
                </tr>
                <tr>
                  <td>21222</td>
                  <td>Information systems specialists</td>
                </tr>
                <tr>
                  <td>21223</td>
                  <td>Web designers</td>
                </tr>
                <tr>
                  <td>21223</td>
                  <td>Database analysts and data administrators</td>
                </tr>
                <tr>
                  <td>21231</td>
                  <td>Software engineers and designers</td>
                </tr>
                <tr>
                  <td>21230</td>
                  <td>Computer systems developers and programmers</td>
                </tr>
                <tr>
                  <td>21232</td>
                  <td>Software developers and programmers</td>
                </tr>
                <tr>
                  <td>21234</td>
                  <td>Web developers and programmers</td>
                </tr>
                <tr>
                  <td>22310</td>
                  <td>
                    Electrical and electronics engineering technologists and
                    technicians
                  </td>
                </tr>
                <tr>
                  <td>22220</td>
                  <td>Computer network technicians</td>
                </tr>
                <tr>
                  <td>22222</td>
                  <td>Information systems testing technicians</td>
                </tr>
                <tr>
                  <td>51120</td>
                  <td>
                    Producer, technical, creative, and artistic director, and
                    project manager – Visual effects and video game
                  </td>
                </tr>
                <tr>
                  <td>52120</td>
                  <td>Digital media designers</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="labour-market" ref={(el) => sectionsRef.current[3] = el}  >
            <h2>Labour Market Benefits Plan (LMBP)</h2>
            <p>
              The Labour Market Benefits Plan (LMBP) is a mandatory component of
              the Global Talent Stream (GTS) application process. It requires
              employers to outline specific activities they will undertake to
              create positive outcomes for the Canadian labor market as a result
              of hiring a foreign worker.
            </p>
            <p>
              The LMBP consists of 1 mandatory activity and at least 2
              supplementary activities:
            </p>
            <ul>
              <li>
                Category A: The employer must create jobs for Canadian citizens
                and permanent residents.
              </li>
              <li>
                Category B: The employer must invest in the training and skill
                improvement of Canadian citizens and permanent residents.
              </li>
            </ul>
            <p>Examples of supplementary activities include:</p>
            <ul>
              <li>
                Increasing the number of Canadians and permanent residents
                employed full-time and part-time.
              </li>
              <li>
                Establishing or enhancing educational partnerships with local or
                regional post-secondary institutions or other organizations
                supporting skills and training.
              </li>
              <li>Providing paid co-op or internship opportunities.</li>
              <li>
                Developing, implementing, or participating in initiatives that
                increase the participation of underrepresented groups in the
                workplace.
              </li>
              <li>
                Providing direct training aimed at improving skills, including
                supporting employees to travel to and attend industry or
                industry sector conferences relevant to the development of their
                specialized skillset.
              </li>
              <li>
                Ensuring that the foreign worker will supervise and mentor
                Canadian workers to support knowledge transfer.
              </li>
              <li>
                Increasing the growth of revenue, employment, or investment at
                the firm.
              </li>
              <li>
                Developing or improving best company practices or policies
                related to the attraction and retention of the Canadian
                workforce.
              </li>
              <li>
                Developing or enhancing partnerships with organizations that
                assist with identifying top domestic capital.
              </li>
            </ul>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[4] = el} >
            <h2>How to Apply for Global Talent Stream (GTS) LMIA</h2>
            <ol>
              <li>
                Have an initial assessment performed by us to verify if the
                employer is eligible to apply for LMIA for a specific position
                and how many positions are allowed.
              </li>
              <li>
                We will provide you with a checklist of documents and
                information required to start the initial process.
              </li>
              <li>
                While there is no minimum recruitment requirement for the GTS,
                it is recommended to perform recruitment efforts.
              </li>
              <li>
                Prepare the Labour Market Benefits Plan according to the
                category GTS LMIA application is to be applied under.
              </li>
              <li>Interview local applicants.</li>
              <li>
                Prepare and submit an LMIA application to the Service Canada
                ESDS department.
              </li>
              <li>
                Wait for LMIA processing time, which can range from 7 to 10
                business days.
              </li>
            </ol>
          </section>

          <section  className={`${styles.section} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[5] = el}>
            <h2>
              Common Reasons for Refusal of Global Talent Stream (GTS) LMIA
            </h2>
            <ul>
              <li>Insufficient Evidence of Labour Market Benefits.</li>
              <li>
                Provided false, misleading, or inaccurate information in the
                LMIA application.
              </li>
              <li>
                Non-compliance as a result of an employer compliance review.
              </li>
              <li>
                Being banned from the Temporary Foreign Worker Program due to
                non-compliance discovered during an inspection.
              </li>
              <li>
                Defaulting on payment of an administrative monetary penalty.
              </li>
            </ul>
          </section>

          <section className={`${styles.section} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[6] = el}>
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a refusal for any of the reasons mentioned
              above, do not worry. With over a decade of experience, we
              specialize in previously refused cases. While we don't provide
              jobs for LMIA, we can certainly assist you if you have a job
              offer.
            </p>
            <p>
              We have obtained approvals for clients who had multiple previous
              refusals. We achieve this with a tailored approach to your
              specific case, addressing each concern that the officer has listed
              in previous refusals. We use case law and find similar cases to
              your circumstances that had positive results, and we use them as
              precedents in cases we work on. This is why we have a high success
              rate.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your visa. Start your process
              now.
            </p>
          </section>

          <section  className={`${styles.section} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el}>
            <h2>Why Choose Us</h2>
            <p>
              At Brightlight Immigration, we offer comprehensive services and a
              high success rate due to our tailored approach and expert
              knowledge in immigration law. We provide step-by-step guidance
              through the entire process, ensuring that every aspect of your
              application is handled with the utmost care.
            </p>
            <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
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

export default GlobalStreamLmia;
