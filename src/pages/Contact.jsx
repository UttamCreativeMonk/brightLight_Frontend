import React, { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast, Bounce } from "react-toastify";

let Contact = () => {
  let [metaData, setMetaData] = useState([]);

  let notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  let [data, setData] = useState([]);
  let [activeDiv, setActiveDiv] = useState("insideCanada");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    setActiveDiv("insideCanada");
    fetch("https://brightlight-node.onrender.com/contact-page")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/contact-meta")
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

  let handleActiveDiv = () => {
    setActiveDiv(
      activeDiv === "insideCanada" ? "outsideCanada" : "insideCanada"
    );
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://brightlight-node.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: formData.email,
            to: "info@brightlightimmigration.ca",
            subject: "Contact Form Submission",
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.interest}\nMessage: ${formData.message}`,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        notifySuccess();
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { selector: `.${styles.contactTopSection}`, animationClass: styles.slideInFromTop },
        { selector: `.${styles.inputBar}`, animationClass: styles.slideInFromLeft },
        { selector: `.${styles.formCategory}`, animationClass: styles.slideInFromLeft },
        { selector: `.${styles.contactMessageBox}`, animationClass: styles.slideInFromLeft },
        { selector: `.${styles.officeDetailsSection}`, animationClass: styles.slideInFromTop },
      ];

      sections.forEach(({ selector, animationClass }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight * 0.75) {
            element.classList.add(animationClass);
            element.classList.remove(styles.hidden);
          } else {
            element.classList.remove(animationClass);
            element.classList.add(styles.hidden);
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ToastContainer />
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

      <Navbar1 showBlue={true} />
      <div className={styles.contactTopSection} >
        <h1>{data?.page_heading}</h1>
        <h3>{data?.form_section_heading}</h3>
        <p>{data?.form_section_description}</p>
      </div>
      <div className={styles.contactMapSection}>
        <div className={styles.contactForm} >
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBarFlexSection}>
              <div className={`${styles.inputBar} ${styles.hidden}`}>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
              <div className={styles.inputBar}>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
            </div>
            <div className={styles.inputBarFlexSection}>
              <div className={styles.inputBar}>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
              <div className={styles.inputBar}>
                <input
                  type="text"
                  placeholder="Area of Interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
            </div>
            <div className={`${styles.formCategory} ${styles.hidden}`}>
              <div
                onClick={handleActiveDiv}
                className={
                  activeDiv === "insideCanada"
                    ? styles.active
                    : styles.notActive
                }
              >
                <p>Inside Canada</p>
              </div>
              <div
                onClick={handleActiveDiv}
                className={
                  activeDiv === "outsideCanada"
                    ? styles.active
                    : styles.notActive
                }
              >
                <p>Outside Canada</p>
              </div>
            </div>
            <div className={`${styles.contactMessageBox} ${styles.hidden}`}>
              <textarea
                placeholder="How can we help ?"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <span>*</span>
            </div>
            <button type="submit" className={styles.sendMessageButton}>
              Send Your Message
            </button>
          </form>
          <div className={styles.agreeMessageDiv}>
            <span>By clicking, you agree to our</span>{" "}
            <a href="/terms-&-conditions">Terms & Conditions</a> ,{" "}
            <a href="/privacy-policy">Privacy and Policy</a>
          </div>
        </div>
      </div>

      <div className={`${styles.officeDetailsSection} ${styles.hidden}`}>
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
