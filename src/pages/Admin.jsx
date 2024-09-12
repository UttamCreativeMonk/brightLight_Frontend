import styles from "../styles/Admin.module.css";
import blueLogo from "../assets/brlightlight-icon.webp";
import user from "../assets/user.png";
import { useState, useEffect } from "react";
import HomeTop from "../admin_sections/HomeTop";
import LoveneetBanner from "../admin_sections/LoveneetBanner";
import MemberOf from "../admin_sections/MemberOf";
import Features from "../admin_sections/Features";
import OurProcess from "../admin_sections/OurProcess";
import Services from "../admin_sections/Services";
import Achievements from "../admin_sections/Achiements";
import Testimonials from "../admin_sections/Testimonials";
import TestimonialsVideo from "../admin_sections/TestimonialsVideo";
import FAQ from "../admin_sections/FAQ";
import Blogs from "../admin_sections/Blogs";
import AboutTop from "../admin_sections/AboutTop";
import OurFoundation from "../admin_sections/OurFoundation";
import Vision from "../admin_sections/Vision";
import Pillars from "../admin_sections/Pillars";
import Directors from "../admin_sections/Directors";
import WeAre from "../admin_sections/WeAre";
import WeAreSmall from "../admin_sections/WeAreSmall";
import BestChoice from "../admin_sections/BestChoice";
import SocialMedia from "../admin_sections/SocialMedia";
import Globally from "../admin_sections/Globally";
import Map from "../admin_sections/Map";
import FoundationImg from "../admin_sections/FoundationImg";
import VisionImg from "../admin_sections/VisionImg";
import PillarsImg from "../admin_sections/PillarsImg";
import ContactTop from "../admin_sections/ContactTop";
import Privacy from "../admin_sections/Privacy";
import Terms from "../admin_sections/Terms";
import AllBlogs from "../admin_sections/AllBlogs";
import AddBlog from "../admin_sections/AddBlog";
import AllNews from "../admin_sections/AllNews";
import AddNews from "../admin_sections/AddNews";
import { useAuth } from "../context/AuthContext";


let Admin = () => {
  let { logout } = useAuth();
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
  let handleLogout = () => {
    logout();
    window.location.href = "/auth/dashboard/login/admin";
  };
  return (
    <>
      <div className={styles.grayBg}>
        <div className={styles.topBar}>
          <img src={blueLogo} className={styles.logo} alt="Logo" />
          <div className={styles.userDiv}>
            <img src={user} onClick={handleDropdownClick} alt="User" />
            <div
              className={`${styles.userDropdown} ${
                showDropdown ? styles.active : ""
              }`}
            >
           <p onClick={handleLogout}>Log Out</p>
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

            <div
              className={`${styles.page} ${
                activePage === "news" ? styles.activePage : ""
              }`}
              onClick={() => handlePageClick("news")}
            >
              <p>News</p>
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

                <div
                  className={`${styles.section} ${
                    activeSection === "section7" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section7")}
                >
                  Achievements
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "section8" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section8")}
                >
                  Testimonials
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "section9" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section9")}
                >
                  Testimonials Videos
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "section10" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section10")}
                >
                  FAQ's
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "section11" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("section11")}
                >
                  Blogs Section
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

            {activePage === "home" && activeSection === "section7" && (
              <Achievements />
            )}

            {activePage === "home" && activeSection === "section8" && (
              <Testimonials />
            )}

            {activePage === "home" && activeSection === "section9" && (
              <TestimonialsVideo />
            )}

            {activePage === "home" && activeSection === "section10" && <FAQ />}

            {activePage === "home" && activeSection === "section11" && (
              <Blogs />
            )}

            {activePage === "about" && (
              <div className={styles.sections}>
                <div
                  className={`${styles.section} ${
                    activeSection === "about-top" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("about-top")}
                >
                  Top Heading Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "our-foundation"
                      ? styles.activeSection
                      : ""
                  }`}
                  onClick={() => handleSectionClick("our-foundation")}
                >
                  Our Foundation Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "vision" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("vision")}
                >
                  Our Vision Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "pillar" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("pillar")}
                >
                  Our Pillars Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "directors" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("directors")}
                >
                  Directors Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "we-are" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("we-are")}
                >
                  We Are Section
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "we-are-small" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("we-are-small")}
                >
                  We Are Small Screen
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "aboutAchievement"
                      ? styles.activeSection
                      : ""
                  }`}
                  onClick={() => handleSectionClick("aboutAchievement")}
                >
                  Achievements
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "aboutBest" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("aboutBest")}
                >
                  Best Choice
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "aboutSocial" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("aboutSocial")}
                >
                  Social Media
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "globally" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("globally")}
                >
                  Serving Globally
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "map" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("map")}
                >
                  Map Iframe
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "fimage" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("fimage")}
                >
                  Our Foundation Image
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "vimage" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("vimage")}
                >
                  Our Vision Image
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "pillarimage" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("pillarimage")}
                >
                  Pillar Image
                </div>
              </div>
            )}

            {activePage === "about" && activeSection === "about-top" && (
              <AboutTop />
            )}

            {activePage === "about" && activeSection === "our-foundation" && (
              <OurFoundation />
            )}

            {activePage === "about" && activeSection === "vision" && <Vision />}

            {activePage === "about" && activeSection === "pillar" && (
              <Pillars />
            )}

            {activePage === "about" && activeSection === "directors" && (
              <Directors />
            )}

            {activePage === "about" && activeSection === "we-are" && <WeAre />}

            {activePage === "about" && activeSection === "we-are-small" && (
              <WeAreSmall />
            )}

            {activePage === "about" && activeSection === "aboutBest" && (
              <BestChoice />
            )}

            {activePage === "about" && activeSection === "aboutSocial" && (
              <SocialMedia />
            )}

            {activePage === "about" && activeSection === "globally" && (
              <Globally />
            )}

            {activePage === "about" && activeSection === "map" && <Map />}

            {activePage === "about" && activeSection === "fimage" && (
              <FoundationImg />
            )}

            {activePage === "about" && activeSection === "vimage" && (
              <VisionImg />
            )}

            {activePage === "about" && activeSection === "pillarimage" && (
              <PillarsImg />
            )}

            {activePage === "contact" && (
              <div className={styles.sections}>
                <div
                  className={`${styles.section} ${
                    activeSection === "contact-top" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("contact-top")}
                >
                  Top Heading Section
                </div>
              </div>
            )}

            {activePage === "blogs" && (
              <div className={styles.sections}>
                <div
                  className={`${styles.section} ${
                    activeSection === "all-blogs" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("all-blogs")}
                >
                  All Blogs
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "add-blog" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("add-blog")}
                >
                  Add Blog
                </div>
              </div>
            )}

            {activePage === "news" && (
              <div className={styles.sections}>
                <div
                  className={`${styles.section} ${
                    activeSection === "all-news" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("all-news")}
                >
                  All News
                </div>

                <div
                  className={`${styles.section} ${
                    activeSection === "add-news" ? styles.activeSection : ""
                  }`}
                  onClick={() => handleSectionClick("add-news")}
                >
                  Add News
                </div>
              </div>
            )}

            {activePage === "contact" && activeSection === "contact-top" && (
              <ContactTop />
            )}

            {activePage === "blogs" && activeSection === "all-blogs" && (
              <AllBlogs />
            )}

            {activePage === "blogs" && activeSection === "add-blog" && (
              <AddBlog />
            )}

            {activePage === "news" && activeSection === "all-news" && (
              <AllNews />
            )}

            {activePage === "news" && activeSection === "add-news" && (
              <AddNews />
            )}

            {activePage === "privacy-policy" && <Privacy />}

            {activePage === "terms-and-conditions" && <Terms />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
