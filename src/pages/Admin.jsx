import styles from "../styles/Admin.module.css";
import blueLogo from "../assets/brlightlight-icon.webp";
import { ReactComponent as Search } from "../assets/search-white.svg";
import user from "../assets/user.png";
import { useState, useEffect } from "react";
import HomeTop from "../admin_sections/HomeTop";
import LoveneetBanner from "../admin_sections/LoveneetBanner";
import MemberOf from "../admin_sections/MemberOf";
import Features from "../admin_sections/Features";
import OurProcess from "../admin_sections/OurProcess";
import Services from "../admin_sections/Services";

let Admin = () => {
  let [showDropdown, setShowDropdown] = useState(false);
  let [activePage, setActivePage] = useState("home");
  let [activeSection, setActiveSection] = useState("home-top");

  let handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  let handlePageClick = (page) => {
    setActivePage(page);
  };

  let handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className={styles.grayBg}>
        <div className={styles.topBar}>
          <img src={blueLogo} className={styles.logo} alt="Logo" />
          <div className={styles.topBarSearch}>
            <input placeholder="Search Sections..." />
            <button className={styles.searchBtn}>
              <Search width={20} height={20} />
            </button>
          </div>
          <div className={styles.userDiv}>
            <img src={user} onClick={handleDropdownClick} alt="User" />
            <div
              className={`${styles.userDropdown} ${
                showDropdown ? styles.active : ""
              }`}
            >
              <p>Log Out</p>
            </div>
          </div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.leftPanel}>
            <div
              className={`${styles.page} ${
                activePage === "home" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("home")}
            >
              <p>Homepage</p>
            </div>
            <div
              className={`${styles.page} ${
                activePage === "about" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("about")}
            >
              <p>About Us</p>
            </div>
            <div
              className={`${styles.page} ${
                activePage === "contact" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("contact")}
            >
              <p>Contact Us</p>
            </div>
            <div
              className={`${styles.page} ${
                activePage === "privacy-policy" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("privacy-policy")}
            >
              <p>Privacy Policy</p>
            </div>
            <div
              className={`${styles.page} ${
                activePage === "terms-and-conditions" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("terms-and-conditions")}
            >
              <p>Terms & Conditions</p>
            </div>
            <div
              className={`${styles.page} ${
                activePage === "blogs" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("blogs")}
            >
              <p>Blogs</p>
            </div>
          </div>
          <div className={styles.rightPanel}>
            {activePage === "home" && (
              <div className={styles.sections}>
                <div
                  className={`${styles.section} ${
                    activeSection === "home-top" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("home-top")}
                >
                  Top Heading Section
                </div>
                <div
                  className={`${styles.section} ${
                    activeSection === "section2" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section2")}
                >
                  Banner Section
                </div>
                <div
                  className={`${styles.section} ${
                    activeSection === "section3" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section3")}
                >
                  Member Of Section
                </div>
                <div
                  className={`${styles.section} ${
                    activeSection === "section4" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section4")}
                >
                  Why US?
                </div>
                <div
                  className={`${styles.section} ${
                    activeSection === "section5" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section5")}
                >
                  Our Process
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "section6" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section6")}
                >
                  Services
                </div>
              </div>
            )}
            {activePage === "home" && activeSection === "home-top" && (
              <HomeTop />
            )}

            {activePage === "home" && activeSection === "section2" && (
              <LoveneetBanner />
            )}

            {activePage === "home" && activeSection === "section3" && (
              <MemberOf />
            )}

            {activePage === "home" && activeSection === "section4" && (
              <Features />
            )}

            {activePage === "home" && activeSection === "section5" && (
              <OurProcess />
            )}

            {activePage === "home" && activeSection === "section6" && (
              <Services />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;