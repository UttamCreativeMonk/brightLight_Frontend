import React, { useState } from "react";
import styles from "../styles/Adoption.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const Adoption = () => {
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
              <p onClick={() => scrollToSection("types-of-adoption")}>
                Types of Adoption
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>

              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          <h1>Canada's Adoption Program</h1>
          <p>
            The heart-warming journey of bringing a child into your life through
            adoption is an incredible act of love and commitment, offering the
            child a nurturing home and a lifetime of opportunities.
          </p>
          <p>
            Canada's adoption program under family reunification and sponsorship
            provides a pathway for eligible Canadians to adopt children from
            both within Canada and internationally. The program aims to provide
            permanent homes for children who cannot live with their biological
            families due to various circumstances.
          </p>
        </header>

        <section className={styles.adoptionTypes} id="types-of-adoption">
          <h2>Types of Adoption</h2>
          <ul>
            <li>
              <a href="#intra-country" className={styles.button}>
                Intra-Country Adoption
              </a>
            </li>
            <li>
              <a href="#inter-country" className={styles.button}>
                Inter-Country Adoption
              </a>
            </li>
          </ul>
        </section>

        <section id="intra-country" className={styles.intraCountry}>
          <h2>Intra-Country Adoption (Inside Canada)</h2>
          <p>
            Intra-country adoption involves adopting a child from another
            province within Canada.
          </p>
          <h3  className={styles.marginTop}>How to Apply for Intra-Country Adoption:</h3>
          <ol>
            <li>Fill out the adoption application.</li>
            <li>Attend an adoption orientation.</li>
            <li>Get matched with a child.</li>
            <li>Complete a home study.</li>
            <li>Receive approval from the provincial adoption authority.</li>
            <li>Finalize the adoption.</li>
          </ol>
        </section>

        <section id="inter-country" className={styles.interCountry}>
          <h2>Inter-Country Adoption (Outside Canada)</h2>
          <p>
            Inter-country adoption involves adopting a child from another
            country.
          </p>
          <h3 className={styles.marginTop}>How to Apply for Inter-Country Adoption:</h3>
          <ol>
            <li>Choose a child from the available list.</li>
            <li>Complete a home study and provide financial documentation.</li>
            <li>
              Receive approval from the Canadian government and the child's
              country of origin.
            </li>
            <li>
              Travel to the child's country of origin to finalize the adoption.
            </li>
            <li>Return to Canada with the child.</li>
          </ol>
        </section>

        <section className={styles.eligibility} id="eligibility">
          <h2>Eligibility Criteria for Adoption in Canada</h2>
          <ul>
            <li>Be a Canadian citizen or permanent resident.</li>
            <li>Be at least 18 years of age.</li>
            <li>Have a stable income and living situation.</li>
            <li>
              Be able to provide for the child's physical and intellectual
              needs.
            </li>
            <li>Pass a criminal background check and medical assessment.</li>
            <li>Provide references from other families and professionals.</li>
          </ul>
          <p>
            Note that if you are adopting a child from abroad, you will need to
            sponsor the child for permanent residency in Canada. This means that
            you will be financially responsible for the child's care until they
            reach the age of majority.
          </p>
        </section>

        <section className={styles.refusalReasons} id="refusal-reasons">
          <h2>Common Reasons for Refusals of Adoption Program</h2>
          <ul>
            <li>
              Incomplete or inaccurate information on your application or during
              interviews.
            </li>
            <li>
              In some cases, the child may have health concerns that make
              adoption difficult. The government may refuse adoption if it
              believes that the child's health needs are too great for the
              adoptive parents to meet.
            </li>
            <li>
              The child's home country may refuse consent due to concerns about
              the child's well-being or cultural suitability in Canada.
            </li>
          </ul>
        </section>

        <section className={styles.consultation} id="why-choose-us">
          <h2>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any of the reasons mentioned
            above, do not worry. With over a decade of experience, we specialize
            in previously refused cases. We have successfully obtained approvals
            for clients with multiple previous refusals by using a tailored
            approach, addressing each concern listed in previous refusals, and
            applying case law precedents. Our high success rate is a testament
            to our expertise.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa.

            <button onClick={() =>
                  (window.location.href =
                    "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
                } className={styles.button}> Start your process now</button>

          </p>
        </section>
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

export default Adoption;
