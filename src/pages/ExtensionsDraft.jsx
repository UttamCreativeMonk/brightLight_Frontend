import React, { useState } from "react";
import styles from "../styles/ExtensionsDraft.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";


const ExtensionsDraft = () => {
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
              <p onClick={() => scrollToSection("about-program")}> About the Program </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("how-to-apply")}> How to Apply? </p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}> Why Choose Us?   </p>
              <p onClick={() => scrollToSection("testimonials")}> Testimonials </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading} id="about-program">
          Extension of Temporary Status
        </h1>
        <section className={styles.introduction}>
          <p>
            The plans can change, and you may need to extend your stay in Canada
            for various reasons. Let us guide you to maintain your legal status
            in Canada.
          </p>
          <p>
            If you are visiting Canada for leisure, work, family visits,
            studies, or temporary employment, your circumstances may change, and
            you may need to extend your stay beyond the initially specified
            duration in your visa. In such cases, you typically need to apply
            for an extension to maintain valid legal status in Canada.
          </p>
        </section>

        <section className={styles.benefits} id="benifits">
          <h2 className={styles.subheading}>
            Benefits of Extending Your Temporary Status
          </h2>
          <ul>
            <li>
              You can stay longer in Canada after applying for an extension,
              without having to leave Canada and come back.
            </li>
            <li>
              By not needing to travel outside of Canada, you save money on
              travel expenses such as flights, accommodation, and other
              associated costs.
            </li>
            <li>
              Applying for an extension ensures that you adhere to Canadian
              immigration laws and regulations, avoiding any potential penalties
              or issues with future visa applications.
            </li>
          </ul>
        </section>

        <section className={styles.applicationProcess} id="how-to-apply">
          <h2 className={styles.subheading}>
            How to Apply for an Extension of Temporary Status?
          </h2>
          <p>
            To extend your visitor status in Canada, you'll need to gather the
            following documents. Please note that this is a general list, and
            you may be required to provide additional documents depending on
            your specific circumstances.
          </p>
          <ul>
            <li>
              Complete the appropriate visitor record extension application
              forms.
            </li>
            <li>Pay the applicable application fee.</li>
            <li>Submit a copy of your valid passport.</li>
            <li>
              Provide evidence of sufficient financial funds to support
              yourself.
            </li>
            <li>
              Provide a strong reason why you want to continue to live in
              Canada.
            </li>
            <li>
              Provide compelling reasons about why you will leave Canada after
              the end of the proposed stay.
            </li>
          </ul>
        </section>

        <section className={styles.assistance} >
          <h2 className={styles.subheading}>Still Not Sure?</h2>
          <p>
            If you have received a refusal for any reason, do not worry. With
            over a decade of experience, we specialize in previously refused
            cases. We have secured approvals for clients who had multiple
            previous refusals. We achieve this with a tailored approach to your
            specific case, addressing each concern that the officer has listed
            in previous refusals. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>
          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your visa. Start your
            process now.
          </p>
          <Link id="book-appointment" to="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj" className={styles.button}>
            Book Appointment
          </Link>
        </section>

        <section className={styles.whyChooseUs} id="why-choose-us">
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            We offer personalized service and expert advice to ensure your
            application stands the best chance of approval. Our dedicated team
            of professionals will guide you through every step of the process,
            addressing all your concerns and providing you with peace of mind.
          </p>
        </section>

        <section className={styles.testimonials}>
          <h2 className={styles.subheading}>Clients Testimonials</h2>
          <div className={styles.testimonialSection}>
            <h3>Video Testimonials</h3>
            {/* Conditional rendering based on backend configuration */}
            {/* <VideoTestimonials /> */}
          </div>
          <div className={styles.testimonialSection}>
            <h3>Written Testimonials</h3>
            {/* Conditional rendering based on backend configuration */}
            {/* <WrittenTestimonials /> */}
          </div>
        </section>
      </div>
      <Footer1/>
    </>
  );
};

export default ExtensionsDraft;
