import React, { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
let Contact = () => {
  let [data, setData] = useState([]);
  let [activeDiv, setActiveDiv] = useState("insideCanada");
  useEffect(() => {
    setActiveDiv("insideCanada");
    fetch("https://brightlight-node.onrender.com/contact-page")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let handleActiveDiv = () => {
    if (activeDiv == "insideCanada") {
      setActiveDiv("outsideCanada");
    } else {
      setActiveDiv("insideCanada");
    }
  };
  return (
    <>
<Helmet>
    <title>Contact Us - Brightlight Immigration</title>
    <meta
      name="description"
      content="Get in touch with Brightlight Immigration for all your immigration inquiries. Find our contact information, including phone numbers, email addresses, and office locations, to connect with our team."
    />
    <meta
      name="title"
      property="og:title"
      content="Contact Us - Brightlight Immigration"
    />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:type" content="image/png" />
    <meta
      property="og:description"
      content="Reach out to Brightlight Immigration for any questions or support. Our contact page provides all the details you need to connect with us directly."
    />
    <meta name="Keywords" content="Contact Us, Brightlight Immigration, Contact Information, Immigration Support, Get in Touch" />
</Helmet>

      <Navbar1 showBlue={true} />
      <div className={styles.contactTopSection}>
        <h1>{data?.page_heading}</h1>
        <h3>{data?.form_section_heading}</h3>
        <p>{data?.form_section_description}</p>
      </div>
      <div className={styles.contactMapSection}>
        <div className={styles.contactForm}>
          <div className={styles.inputBarFlexSection}>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Your Name" required />
              <span>*</span>
            </div>
            <div className={styles.inputBar}>
              <input type="email" placeholder="Email Address" required />
              <span>*</span>
            </div>
          </div>
          <div className={styles.inputBarFlexSection}>
            <div className={styles.inputBar}>
              <input type="number" placeholder="Phone Number" required />
              <span>*</span>
            </div>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Area of Intrest" required />
              <span>*</span>
            </div>
          </div>
          <div className={styles.formCategory}>
            <div
              onClick={handleActiveDiv}
              className={
                activeDiv == "insideCanada" ? styles.active : styles.notActive
              }
            >
              <p>Inside Canada</p>
            </div>
            <div
              onClick={handleActiveDiv}
              className={
                activeDiv == "outsideCanada" ? styles.active : styles.notActive
              }
            >
              <p>Outside Canada</p>
            </div>
          </div>
          <div className={styles.contactMessageBox}>
            <textarea placeholder="How can we help ?" />
            <span>*</span>
          </div>
          <button className={styles.sendMessageButton}>
            Send Your Message
          </button>
          <div className={styles.agreeMessageDiv}>
            <span>By clicking, you agree to our</span>{" "}
            <a href="/terms-&-conditions">Terms & Conditions</a> ,{" "}
            <a href="/privacy-policy">Privacy and Policy</a>
          </div>
        </div>
      </div>
      <div className={styles.officeDetailsSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.752602531727!2d76.74414563737653!3d30.63835165105361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febb05ee7e45b%3A0xa17a586890ee2175!2sGmada%20Aerocity%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723022976691!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.officeSection}>
          <div className={styles.officeInfoSection}>
            <h5>OUR WORKING HOURS</h5>
            <p className={styles.boldtext}>Monday To Friday:</p>
            <p>(10:00 AM - 6:00 PM)</p>
            <br />
            <p className={styles.boldtext}>Saturday:</p>
            <p>(By Appointment Only)</p>
            <br />
            <p>
              <span className={styles.boldtext}>Sunday:</span> Closed
            </p>
          </div>
          <div className={styles.officeInfoSection}>
            <div>
              <h5>OUR OFFICE LOCATION</h5>
              <p>15315 66 Ave unit 327, Surrey, BC V3S 2A1</p>
            </div>

            <div>
              <h5>GET IN TOUCH</h5>
              <p>(604) 503-3734 </p>
              <p>info@brightlightimmigration.ca</p>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
};
export default Contact;
