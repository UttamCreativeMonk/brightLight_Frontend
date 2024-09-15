import React, { useState , useEffect } from "react";
import styles from "../styles/ReplyToPflPage.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const ReplyToPflPage = () => {
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

  useEffect(()=>{
    fetch("https://brightlight-node.onrender.com/pfl-meta")
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
  },[])

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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>

      <Navbar1 />
      <div className={styles.bannerParent}>
        <header className={styles.header}>
          <h1>Procedural Fairness Letter (PFL)</h1>
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("recieved-a-pfl")}>
                Recieved a PFL
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
        <main className={styles.mainContent} id="about-program">
          <section className={styles.section}>
            <h2>Did You Get a Red Flag from Canadian Immigration - PFL?</h2>
            <p>
              Don't panic! We'll help you through the PFL process and turn that
              flag into a welcome mat.
            </p>
            <p>
              Responding to a Procedural Fairness Letter (PFL) is a crucial step
              in addressing concerns raised by IRCC about your immigration
              application. It's your chance to clear things up, provide more
              proof, and possibly prevent a negative decision/refusal.
            </p>
            <p>
              These letters often come up when an officer from IRCC is unsure
              about the information given in your application. For example, they
              might suspect something's not quite right, like providing false or
              misleading details, which could lead to issues with the
              Immigration Refugees and Protection Act (IRPA).
            </p>
            <p>
              Typically, you'll get a letter outlining the concerns, and you
              usually have around 30 days to respond. This is a serious matter,
              as not addressing it properly might keep you from entering Canada
              for at least 5 years. So, it's crucial to respond with detailed
              answers, covering all the officer's concerns, even the ones you
              might not know about.
            </p>
          </section>

          <section className={styles.section} id="recieved-a-pfl">
            <h2>Here Are a Few Reasons You Might Have Received a PFL</h2>
            <ul>
              <li>
                IRCC or PNP officer might have found discrepancies in your
                application or supporting documents.
              </li>
              <li>
                You might have missed providing the necessary information or
                documentation.
              </li>
              <li>
                There may be concerns about your criminal history, health, or
                financial status that could affect your admissibility to Canada.
              </li>
              <li>
                If you are sponsoring family members, IRCC may have questions
                about the genuineness of the relationship.
              </li>
            </ul>
          </section>

          <section className={styles.section} id="how-to-apply">
            <h2>Still Not Sure?</h2>
            <p>
              If you have received a PFL, don't panic. We can help you with your
              application. With over a decade of experience, we have
              successfully cleared many applications that faced PFL.
            </p>
            <p>
              At Brightlight Immigration, we have a dedicated team of visa
              application specialists who can assist you from the start of the
              application process to obtaining your visa. Just reach out to us,
              and we'll handle the rest. You focus on your Canadian ambition,
              and we'll focus on making it happen smoothly.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Clients Testimonials</h2>
            {/* Add video and written testimonials here */}
          </section>
        </main>
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

export default ReplyToPflPage;
