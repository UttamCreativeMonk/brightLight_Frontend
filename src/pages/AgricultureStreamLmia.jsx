import React, { useState } from "react";
import styles from "../styles/AgricultureStreamLmia.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const AgricultureStreamLmia = () => {
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
        <h1>Agricultural Stream LMIA</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Overview</h2>
          <p>This type of LMIA allows employers to hire foreign workers to fill jobs in farms, nurseries, or greenhouses. It can involve the operation of agricultural machinery, caring for and breeding of animals, and planting & harvesting various crops, trees, sods, etc.</p>
          <p>To qualify for this stream, employers must meet 2 criteria:</p>
          <ol>
            <li>Production must be in specific commodity sectors from the list below, and</li>
            <li>The activity must be related to on-farm primary agriculture</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>NOC Codes</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>NOC CODE</th>
                <th>OCCUPATION TITLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>80020</td>
                <td>Managers in agriculture</td>
              </tr>
              <tr>
                <td>80021</td>
                <td>Managers in horticulture</td>
              </tr>
              <tr>
                <td>82030</td>
                <td>Agricultural service contractors and farm supervisors</td>
              </tr>
              <tr>
                <td>82031</td>
                <td>Contractors and supervisors, landscaping, grounds maintenance, and horticulture services</td>
              </tr>
              <tr>
                <td>84120</td>
                <td>Specialized livestock workers and farm machinery operators</td>
              </tr>
              <tr>
                <td>85100</td>
                <td>Livestock labourers</td>
              </tr>
              <tr>
                <td>85101</td>
                <td>Harvesting labourers</td>
              </tr>
              <tr>
                <td>85103</td>
                <td>Nursery and greenhouse laborers</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>National Commodity List</h2>
          <ul>
            <li>Apiary products</li>
            <li>Fruits, vegetables (including canning/processing of these products if grown on the farm)</li>
            <li>Mushrooms</li>
            <li>Flowers</li>
            <li>Nursery-grown trees including Christmas trees, greenhouses/nurseries</li>
            <li>Pedigreed canola seed</li>
            <li>Seed corn</li>
            <li>Grains</li>
            <li>Oil seeds</li>
            <li>Maple syrup</li>
            <li>Sod</li>
            <li>Tobacco</li>
            <li>Bovine</li>
            <li>Dairy</li>
            <li>Duck</li>
            <li>Horse</li>
            <li>Mink</li>
            <li>Poultry</li>
            <li>Sheep</li>
            <li>Swine</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Housing Requirements</h2>
          <p>Employers must provide proof that the on-farm or off-site housing has been inspected by the appropriate provincial/territorial/municipal body or by an authorized private inspector with appropriate certification. Foreign workers are not obliged to use the accommodation provided by the employer and can choose to live at the accommodation of their own choice with their family.</p>
        </section>

        <section className={styles.section}>
          <h2>Benefits of Agricultural Stream LMIA</h2>
          <ul>
            <li>No LMIA processing fees, as compared to low-wage/high-wage LMIA applications, where the employer has to pay $1000.00 for each position.</li>
            <li>Only 14 calendar days of recruitment efforts have to be performed, as compared to 4 weeks in low-wage/high-wage LMIA applications. Advertising requirements are less strict than the low-wage/high-wage occupations.</li>
            <li>No cap calculation requirements like in the low-wage LMIA applications.</li>
            <li>No transition plan is required like in the High-wage LMIA applications.</li>
            <li>Employers can submit the LMIA application without advertising if they are hiring a replacement worker, provided it is for the same occupation and the location of work is in the same Job Bank economic region as per the previous LMIA application.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Important Considerations</h2>
          <p>Agriculture Stream LMIA applications are approved with the employment duration of 2 years only. However, if the employer qualifies for the same position in the High-wage LMIA application, the employment duration can be 3 years instead.</p>
        </section>

        <section className={styles.section}>
          <h2>How to Apply for Agricultural Stream LMIA</h2>
          <ol>
            <li>Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed. We will also discuss the application that should be submitted to the High-wage LMIA program.</li>
            <li>We will provide you with a checklist of documents and information required to start the initial process.</li>
            <li>If required, perform recruitment efforts as per ESDC program requirements for each LMIA type. Job advertisement postings (All advertisements must be active for 14 days before submission).</li>
            <li>Get a housing inspection done by the appropriate provincial/territorial/municipal body or by an authorized private inspector with appropriate certification. The inspector will provide you with a filled-in Schedule F – Housing inspection report seasonal agricultural worker program and agricultural stream.</li>
            <li>Interview local applicants.</li>
            <li>Prepare and submit an LMIA application to the Service Canada ESDS department.</li>
            <li>Wait for LMIA processing time, which can range from 15 to 60 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.</li>
            <li>Once LMIA is received, the employer can add or remove the name of the foreign worker.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Common Reasons for Refusal</h2>
          <ul>
            <li>Failure to perform or document the minimum recruitment requirements.</li>
            <li>Using the wrong methods of recruitment.</li>
            <li>Not able to provide housing inspection report.</li>
            <li>The job requirements mentioned in the job postings and LMIA application are too high compared to the Employment Requirements mentioned on the NOC website.</li>
            <li>Provided false, misleading, or inaccurate information in the LMIA application.</li>
            <li>Have been found non-compliant as a result of an employer compliance review.</li>
            <li>Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.</li>
            <li>Are in default of payment of an administrative monetary penalty.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Still Not Sure?</h2>
          <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
          <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.</p>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us?</h2>
          {/* Content about why choose your services */}
        </section>

        <section className={styles.section}>
          <h2>Clients Testimonials</h2>
          {/* Embed video testimonials and include written testimonials */}
          {/* Option to hide any testimonial in the backend */}
        </section>

        <section className={styles.section}>
          <h2>FAQs</h2>
          <div className={styles.faq}>
            <h3>What is the maximum duration of employment under this stream?</h3>
            <p>The employment duration for Agricultural Stream LMIA applications is typically two years, but it can be extended to three years if the employer qualifies under the High-wage LMIA application.</p>
          </div>
          <div className={styles.faq}>
            <h3>How much is the LMIA application fee?</h3>
            <p>The Labour Market Impact Assessment (LMIA) processing fee doesn’t apply to occupations related to primary agriculture and positions under the National Occupational Classification (NOC) codes 80020, 80021, 82030, 82031, 84120, 85100, 85101, and 85103.</p>
          </div>
          <div className={styles.faq}>
            <h3>What type of housing can an employer provide to foreign workers?</h3>
            <p>There are two types of housing – on-farm housing and off-site housing. The employer can be the owner or leaseholder of these housing properties.</p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default AgricultureStreamLmia;