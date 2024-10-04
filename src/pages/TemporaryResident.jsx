import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/TemporaryResident.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";

const TemporaryResident = () => {
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
              <p onClick={() => scrollToSection("visa-categories")}>Visa Categories</p>

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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          Temporary Residency
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}>
          <p>
            Temporary residency in Canada is a status granted by Canadian
            immigration officers to foreign nationals, permitting them to reside
            there for a limited period. Individuals who enter Canada on a
            temporary residency basis legally and for various purposes,
            including visiting relatives, joining a family member who holds
            permanent residency, working, or starting a business.
          </p>
          <p>
            When granted temporary residency status, foreign nationals become
            temporary residents of Canada. This status differs from permanent
            residency, <a href="/pr-renewal">Pr Renewal</a> which allows individuals to stay in
            Canada indefinitely.
          </p>
          <p>
            Canada warmly welcomes visitors, workers, and entrepreneurs from
            across the globe. This option might be perfect for you if you're
            considering a temporary stay in Canada.
          </p>
        </section>

        {/* New Section for Visa Categories */}
        <section className={styles.visaCategories} id="visa-categories">
          <h2 className={styles.subheading}>
            Visa Categories under Temporary Residency
          </h2>
          <div className={styles.buttonContainer}>
            <button onClick={() =>(window.location.href ="/super-visa")}
              className={styles.button}
            >
              Super Visa
            </button>
            <button
            onClick={() =>(window.location.href ="/visitor-visa")}
              className={styles.button}
            >
              Visitor Visa
            </button>
            <button
             onClick={() =>(window.location.href ="/temporary-resident-permit-draft")}
              className={styles.button}
            >
              Temporary Resident Permits
            </button>
            <button
             onClick={() =>(window.location.href ="/restoration-status-draft")}
              className={styles.button}
            >
              Restoration
            </button>
            <button
              onClick={() =>(window.location.href ="/extensions-draft")}
              className={styles.button}
            >
              Extend Stay
            </button>
            <button
             onClick={() =>(window.location.href ="/flagpoling")}
              className={styles.button}
            >
              Flagpole
            </button>
            <button
              onClick={() =>(window.location.href ="/spousal-open-work-permit")}
              className={styles.button}
            >
              Spousal Open Work Permit
            </button>
          </div>
        </section>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
            Why Choose Us?
          </h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>

          <button   className={styles.button1} id="book-appointment"
          onClick={() =>(window.location.href ="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")}
        >
          Book Appointment
        </button>
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

export default TemporaryResident;