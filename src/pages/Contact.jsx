import React, { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let Contact = () => {
  let [activeDiv, setActiveDiv] = useState("insideCanada");
  useEffect(() => {
    setActiveDiv("insideCanada");
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
      {/* <Navbar /> */}
      <div className={styles.contactTopSection}>
        <h1>Contact Us</h1>
        <h3>Got a Question? We're here to answer!</h3>
        <h3>
          Reach out using the form below, and we'll get back to you pronto.
        </h3>

        <p>
          While booking a free assessment or scheduling an appointment with our
          Registered Canadian immigration Concsultant (RCIC) is the prefrred
          method to contact us, rest assured that will promptly reach out you.
          Please feel to share your detailed query below.
        </p>
      </div>
      <div className={styles.contactMapSection}>
        <div className={styles.contactForm}>
          <div className={styles.inputBarFlexSection}>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Your Name" />
              <span>*</span>
            </div>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Your Name" />
              <span>*</span>
            </div>
          </div>
          <div className={styles.inputBarFlexSection}>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Your Name" />
              <span>*</span>
            </div>
            <div className={styles.inputBar}>
              <input type="text" placeholder="Your Name" />
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
            <a href="/">Terms & Conditions</a> ,{" "}
            <a href="/">Privacy and Data Protection Policy</a>
          </div>
        </div>
      </div>
      <div className={styles.officeDetailsSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.752602531727!2d76.74414563737653!3d30.63835165105361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febb05ee7e45b%3A0xa17a586890ee2175!2sGmada%20Aerocity%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723022976691!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                corporis.
              </p>
            </div>

            <div>
              <h5>GET IN TOUCH</h5>
              <p>0000 - 0000 - 0000</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Contact;
