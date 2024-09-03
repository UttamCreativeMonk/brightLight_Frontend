import React, { useEffect, useState } from "react";
import styles from "../styles/ExpressEntry.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import { ReactComponent as Responsibility } from "../assets/handsShake.svg";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import RecentBlogs from "../sections/RecentBlogs";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const ExpressEntry = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/express-entry")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching Express Entry data:", error);
      });
  }, []);

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
          <div className={styles.bannerHeading}>
            <h1>{data?.heading}</h1>
            <p>{data?.description}</p>
          </div>

          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>About the program</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("advantages")}>Advantages of Express Entry</p>
              <p onClick={() => scrollToSection("refusal-reason")}>Refusal Reason</p>
              <p onClick={() => scrollToSection("draw-history")}>Draw History</p>
              <p onClick={() => scrollToSection("appointment")}>Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose us</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about-program" className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>{data?.aboutDescription}</p>
        </div>
        <div className={styles.canadianImg}>
          <img src={data?.aboutImage || ServiceImg} alt="About Program" />
        </div>
      </div>

      <div id="eligibility" className={styles.eligibleParent}>
        <h1>{data?.eligibilityHeading}</h1>
        <p>{data?.eligibilityDescription}</p>

        <div className={styles.eligibleCardParent}>
          {data?.er1 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er1}</h2>
            </div>
          )}
          {data?.er2 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er2}</h2>
            </div>
          )}
          {data?.er3 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er3}</h2>
            </div>
          )}
          {data?.er4 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er4}</h2>
            </div>
          )}
          {data?.er5 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er5}</h2>
            </div>
          )}
        </div>
      </div>

      <div id="draw-history" className={styles.additionGrandParent}>
        <div className={styles.additionParent}>
          <h1>{data?.drawHeading}</h1>
          <div className={styles.additionCardParent}>
            {data?.draw1 && (
              <div className={styles.additionCard}>
                <h2>{data.draw1}</h2>
              </div>
            )}
            {data?.draw2 && (
              <div className={styles.additionCard}>
                <h2>{data.draw2}</h2>
              </div>
            )}
            {data?.draw3 && (
              <div className={styles.additionCard}>
                <h2>{data.draw3}</h2>
              </div>
            )}
            {data?.draw4 && (
              <div className={styles.additionCard}>
                <h2>{data.draw4}</h2>
              </div>
            )}
            {data?.draw5 && (
              <div className={styles.additionCard}>
                <h2>{data.draw5}</h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="advantages" className={styles.advantagesParent}>
        <div className={styles.advantages}>
          <div className={styles.advantagesHeading}>
            <h1>{data?.advantageHeading}</h1>
          </div>
          <div className={styles.advantagesPara}>
            <p>{data?.advantageDescription}</p>
            <hr />
            {data?.a1 && <p>{data.a1}</p>}
            {data?.a2 && <p>{data.a2}</p>}
            {data?.a3 && <p>{data.a3}</p>}
            {data?.a4 && <p>{data.a4}</p>}
            {data?.a5 && <p>{data.a5}</p>}
          </div>
        </div>
      </div>

      <div id="refusal-reason" className={styles.forgetParent}>
        <div className={styles.forgetMain}>
          <div className={styles.forgetHeading}>
            <h1>{data?.refusalHeading}</h1>
          </div>
          <div className={styles.forgetListParent}>
            <ul className={styles.forgetListMain}>
              {data?.r1 && <li className={styles.forgetList}>{data.r1}</li>}
              {data?.r2 && <li className={styles.forgetList}>{data.r2}</li>}
              {data?.r3 && <li className={styles.forgetList}>{data.r3}</li>}
              {data?.r4 && <li className={styles.forgetList}>{data.r4}</li>}
              {data?.r5 && <li className={styles.forgetList}>{data.r5}</li>}
              {data?.r6 && <li className={styles.forgetList}>{data.r6}</li>}
              {data?.r7 && <li className={styles.forgetList}>{data.r7}</li>}
            </ul>
          </div>
        </div>
      </div>

      <div id="appointment" className={styles.incaseParent}>
        <div className={styles.incaseMain}>
          <div className={styles.incaseContent}>
            <h1>{data?.appointmentHeading}</h1>
            <p>{data?.appointmentDescription}</p>
            <button className={styles.theButton} role="button">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      <div id="why-choose-us">
        <BestChoice />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="faqs">
        <FAQ />
      </div>

      <div id="blogs">
        <RecentBlogs />
      </div>

      <Footer1 />
    </>
  );
};

export default ExpressEntry;
