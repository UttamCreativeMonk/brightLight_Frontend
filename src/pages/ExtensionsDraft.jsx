import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ExtensionsDraft.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const ExtensionsDraft = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {

    fetch("https://brightlight-node.onrender.com/extensionMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
            <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
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
        <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
          Extension of Temporary Status
        </h1>
        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
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

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
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

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[3] = el}>
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

        <section  className={`${styles.assistance} ${styles.section}`} id="testing3" ref={(el) => sectionsRef.current[4] = el}>
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

          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>

        <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            We offer personalized service and expert advice to ensure your
            application stands the best chance of approval. Our dedicated team
            of professionals will guide you through every step of the process,
            addressing all your concerns and providing you with peace of mind.
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

export default ExtensionsDraft;
