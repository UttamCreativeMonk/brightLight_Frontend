import React, { useState } from "react";
import styles from "../styles/LowWageLmia.module.css";
import { Link } from "react-router-dom";
// import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";

const LowWageLmia = () => {
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
        <h1>Low-wage/High-wage LMIA</h1>
      </header>
      <section className={styles.intro}>
        <p>Low-wage/High-wage LMIAs are used by the employer to fill the immediate labor shortage in their business. Whether to apply for low-wage or high-wage LMIA, you must understand the following three key aspects related to wages in Canada.</p>
        <ul>
          <li>National Occupation Classification Code</li>
          <li>Prevailing median wage</li>
          <li>Provincial median wage</li>
        </ul>
      </section>
      <section className={styles.noc}>
        <h2>1. National Occupation Classification NOC Code:</h2>
        <p>The National Occupational Classification is a database developed by the Government of Canada categorizing all types of possible occupations in the Canadian labor market according to their skill level.</p>
      </section>
      <section className={styles.prevailingWage}>
        <h2>2. Prevailing Median Wage</h2>
        <p>Government of Canada’s official Job Bank website lists the prevailing median wage, for each NOC TEER Code, which is specific to the NOC code and location of work being offered by the Canadian employer. One of the most important LMIA requirements is to match this wage with what the employer will offer to their foreign worker.</p>
      </section>
      <section className={styles.provincialWage}>
        <h2>3. Provincial Median Wage</h2>
        <p>Employment and Social Development Canada (ESDC) department updates the Median hourly wages for each province and territory every year in April. This median hourly wage is called the Provincial/territorial Median Hourly Wage.</p>
        <table className={styles.wageTable}>
          <thead>
            <tr>
              <th>Province/territory</th>
              <th>Median hourly wages as of April 2, 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Alberta</td><td>$29.50</td></tr>
            <tr><td>British Columbia</td><td>$28.85</td></tr>
            <tr><td>Manitoba</td><td>$25.00</td></tr>
            <tr><td>New Brunswick</td><td>$24.04</td></tr>
            <tr><td>Newfoundland and Labrador</td><td>$26.00</td></tr>
            <tr><td>Northwest Territories</td><td>$39.24</td></tr>
            <tr><td>Nova Scotia</td><td>$24.00</td></tr>
            <tr><td>Nunavut</td><td>$35.00</td></tr>
            <tr><td>Ontario</td><td>$28.39</td></tr>
            <tr><td>Prince Edward Island</td><td>$24.00</td></tr>
            <tr><td>Quebec</td><td>$27.47</td></tr>
            <tr><td>Saskatchewan</td><td>$27.00</td></tr>
            <tr><td>Yukon</td><td>$36.00</td></tr>
          </tbody>
        </table>
        <p>See the latest median hourly wages at: <a href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage.html" target="_blank" rel="noopener noreferrer">Canada Employment and Social Development</a></p>
      </section>
      <section className={styles.highWageLMIA}>
        <h2>High-wage LMIA</h2>
        <p>This LMIA is for occupations that pay an hourly wage equal to or exceeding the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is no cap on how many foreign workers an employer can hire on high-wage LMIA. However, a transition plan must be submitted to satisfy that the employer will continue to hire Canadians/PR.</p>
      </section>
      <section className={styles.lowWageLMIA}>
        <h2>Low-wage LMIA</h2>
        <p>This LMIA is for occupations that pay an hourly wage that is below the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is a cap on how many foreign workers an employer can hire on low-wage LMIAs.</p>
      </section>
      <section className={styles.benefits}>
        <h2>Benefits of Low-wage/High-wage LMIA:</h2>
        <ul>
          <li>The employer can apply for low-wage/high-wage LMIA to immediately meet the labor shortage.</li>
          <li>Even the employers whose incorporation is fairly new (less than one year in operation), can apply for one of these types of LMIA, provided they can justify that the business is actively providing goods or services and they can meet the financial obligation related to hiring and paying the foreign worker.</li>
          <li>The employer can hire anyone qualified for the job from anywhere in the world or within Canada.</li>
          <li>The employer can apply for an unnamed LMIA and then add the name of the finalized workers to the LMIA later on after the LMIA is approved.</li>
        </ul>
      </section>
      <section className={styles.applicationSteps}>
        <h2>How to Apply for Low-wage/High-wage LMIA:</h2>
        <ol>
          <li>Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed.</li>
          <li>We will provide you with a checklist of documents and information required to start the initial process.</li>
          <li>Perform recruitment efforts as per ESDC program requirements for each LMIA type. Job advertisement postings (All advertisements must be active for 4 weeks before submission). Your LMIA job posting must include the following information:
            <ul>
              <li>Company name and business address</li>
              <li>Job title</li>
              <li>Job duties (if advertising for multiple vacancies, specify duties for each). Do not just copy/paste duties from the NOC occupation classification.</li>
              <li>Employment terms (e.g., permanent, project-based)</li>
              <li>Language requirements</li>
              <li>Wage details (including any raises, performance pay, or bonuses): A wage range can be provided, but the minimum wage must meet prevailing standards</li>
              <li>Benefits offered (if applicable)</li>
              <li>Work location(s) (local area, city, or town)</li>
              <li>Number of positions</li>
              <li>Contact details of the employer: email address, fax number, or mailing address</li>
              <li>Skill requirements (including education and work experience)</li>
            </ul>
          </li>
          <li>Screen and interview local candidates.</li>
          <li>Prepare and submit an LMIA application to the Service Canada ESDS department. Pay the fees when requested, within 2 business days.</li>
          <li>Wait for LMIA processing time, which can range from 30 to 90 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.</li>
          <li>Once LMIA is received, the employer can add or remove the name of the foreign worker.</li>
        </ol>
      </section>
      <section className={styles.differences}>
        <h2>Differences Between High-Wage and Low-Wage Positions</h2>
        <table className={styles.differencesTable}>
          <thead>
            <tr>
              <th>Position Type</th>
              <th>High-Wage Position</th>
              <th>Low-Wage Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wage Offered</td>
              <td>At or above the provincial/territorial median hourly wage</td>
              <td>Below the provincial/territorial median hourly wage</td>
            </tr>
            <tr>
              <td>LMIA Stream</td>
              <td>High-wage stream LMIA application</td>
              <td>Low-wage stream LMIA application</td>
            </tr>
            <tr>
              <td>Median Hourly Wage</td>
              <td>Ontario: $28.39 per hour (or above)<br />British Columbia: $28.85</td>
              <td>Below $27.50 as of May 31, 2023</td>
            </tr>
            <tr>
              <td>Application Requirements</td>
              <td>Maybe more stringent in terms of recruitment efforts.<br />May have different or additional requirements for transportation, housing, and healthcare of workers.<br />Generally aimed at skilled positions.</td>
              <td>Typically less stringent recruitment requirements.<br />May involve caps on the number of TFWs or restrictions based on the sector or region.<br />Generally aimed at lower-skilled, lower-paid positions.</td>
            </tr>
            <tr>
              <td>Intended Use</td>
              <td>For filling short-term skills and labor shortages when no Canadians or permanent residents are available for skilled positions.</td>
              <td>For jobs that do not require high levels of skills and training and where there is a shortage of available Canadian workers.</td>
            </tr>
            <tr>
              <td>Program Requirements</td>
              <td>Must comply with high-wage position requirements from Employment and Social Development Canada, which may involve minimum recruitment efforts, providing certain benefits, etc.</td>
              <td>Must comply with low-wage position requirements from Employment and Social Development Canada, which may include different standards for recruitment, housing, and other factors.</td>
            </tr>
            <tr>
              <td>Duration of Employment Allowed</td>
              <td>Up to 3 years as of April 4, 2022, and potentially longer in exceptional circumstances with adequate rationale.</td>
              <td>Typically shorter durations, align with the lower skill level and pay rate of the position.</td>
            </tr>
            <tr>
              <td>Impact on the Canadian Labour Market</td>
              <td>An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.</td>
              <td>An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.</td>
            </tr>
            <tr>
              <td>Transition Period</td>
              <td>Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.</td>
              <td>Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.refusalReasons}>
        <h2>Common Reasons for Refusal of High-Wage and Low-Wage Positions:</h2>
        <ul>
          <li>Failure to perform or document minimum recruitment requirements.</li>
          <li>Failure to use the Job Match service, i.e., invite applicant profiles in the job bank according to their rating.</li>
          <li>Using the wrong methods of recruitment</li>
          <li>Failure to keep at least 1 of the 3 recruitment activities to seek qualified Canadians and permanent residents ongoing until the date a positive or negative LMIA has been issued.</li>
          <li>Listing wage rate less than median wage rate mentioned on Job Bank for that specific NOC.</li>
          <li>The job requirements mentioned in the job postings and LMIA application are way too high than the Employment Requirements mentioned on the NOC website.</li>
          <li>Provided false, misleading, or inaccurate information in the LMIA application.</li>
          <li>Have been found non-compliant as a result of an employer compliance review.</li>
          <li>Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.</li>
          <li>Are in default of payment of an administrative monetary penalty.</li>
          <li>Regularly offer services in the sex industry (striptease, erotic dance, escort services, or erotic massage)</li>
        </ul>
      </section>
      <section className={styles.consultation}>
        <h2>Still not sure?</h2>
        <p>If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.</p>
        <p>At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.</p>
      </section>
      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        {/* Add content for "Why choose us" section */}
      </section>
      <section className={styles.testimonials}>
        <h2>Client Testimonials</h2>
        {/* Add video and written testimonials with options to hide/show */}
      </section>
      <section className={styles.faq}>
        <h2>FAQs</h2>
        <div className={styles.faqItem}>
          <h3>How long is LMIA valid for?</h3>
          <p>An LMIA is valid for 6 months or 36 months if applying under the Recognised Employer Program. The selected foreign worker has to apply within this validity period.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How much is the LMIA application fee?</h3>
          <p>The employer is required to pay $1000.00 for each position mentioned in the LMIA application.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How old should a company be to apply for LMIA?</h3>
          <p>Service Canada has not set any specific requirement for low-wage/high-wage applications regarding how long the company must be registered and operational to be eligible to apply for LMIA. Once the business operations have started and a labor shortage exists, the employer can apply for LMIA.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Is there a difference between low-wage and high-wage LMIA?</h3>
          <p>Yes, there is a difference. Low-wage positions are those that fall below the provincial or territorial median hourly wage, while high-wage positions are those that are at or above the median hourly wage.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How many employees must they have before they can apply for an LMIA?</h3>
          <p>There is no minimum requirement for a specific number of employees on payroll before an employer can apply for LMIA. It depends on business to business. However, this number of employees will be used for cap calculations for low-wage position LMIA.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Can an employer recruit an unlimited number of foreign workers with an LMIA, or are there any restrictions on the number?</h3>
          <p>High-wage LMIA applications do not have a cap or limit. However, there is a limit on the number of foreign workers an employer can hire for low-wage LMIA applications. This limit is based on the industry, NOC code, and the number of Canadians and foreigners already on the payroll.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Are there compliance and regulations that apply to the employer after hiring a foreign worker through an LMIA?</h3>
          <p>Yes, the employer will be required to meet the following conditions:
            <ul>
              <li>The terms and conditions outlined in the employment contract must be adhered to.</li>
              <li>It is important to retain all LMIA documentation for 6 years, as there may be a random audit conducted within this timeframe, even if the foreign worker does not show up for work.</li>
              <li>If the foreign worker is present on-site, they may be interviewed and various documents such as payroll records will be reviewed to ensure compliance about wages, working hours, overtime, and working conditions.</li>
              <li>It is required that the foreign worker receives higher wages or has improved working conditions compared to the initial offer, but not less.</li>
              <li>Employers are obligated to report to Service Canada if the foreign worker fails to show up for work, whether from the beginning or at any point during the employment period.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className={styles.blogs}>
        <h2>Blogs</h2>
        {/* Add blog content or links */}
      </section>
    </div>
    </>
  );
};

export default LowWageLmia;