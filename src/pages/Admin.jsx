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
import HomeMeta from "../admin_sections/HomeMeta";
import AboutMeta from "../admin_sections/AboutMeta";
import ContactMeta from "../admin_sections/ContactMeta";
import NewsMeta from "../admin_sections/NewsMeta";
import BlogsMeta from "../admin_sections/BlogsMeta";
import FederalSkilled from "../admin_sections/Federal";
import FederalMeta from "../admin_sections/FederalMeta";
import TransportOccupation from "../admin_sections/Transport";
import TransportMeta from "../admin_sections/TransportMeta";
import CategoryMeta from "../admin_sections/CategoryMeta";
import CategoryBased from "../admin_sections/Category";
import CLB from "../admin_sections/CLB";
import CLBMeta from "../admin_sections/CLBMeta";
import BCPNP from "../admin_sections/BCPNP";
import BCPNPMeta from "../admin_sections/BCPNPMeta";
import ExpressEntry from "../admin_sections/Express";
import ExpressMeta from "../admin_sections/ExpressMeta";
import AboutAchievement from "../admin_sections/AboutAchievements";

let Admin = () => {
  let { logout } = useAuth();
  let [showDropdown, setShowDropdown] = useState(false);
  let [activePage, setActivePage] = useState("home");
  let [activeSection, setActiveSection] = useState("home-top");
  let [displayParam, setDisplayParam] = useState("main_pages");

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let displayValue = params.get("display") || "main_pages";
    setDisplayParam(displayValue);
    params.set("display", displayValue);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
    window.scrollTo({
      top: 0,
    });
  }, []);

  let setInternalPages = () => {
    let params = new URLSearchParams(window.location.search);
    params.set("display", "internal_pages");
    setDisplayParam("internal_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let setMainPages = () => {
    let params = new URLSearchParams(window.location.search);
    params.set("display", "main_pages");
    setDisplayParam("main_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let updateDisplayParam = () => {
    let params = new URLSearchParams(window.location.search);
    let newDisplayValue = params.get("display");
    if (newDisplayValue !== displayParam) {
      setDisplayParam(newDisplayValue);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", updateDisplayParam);
    return () => {
      window.removeEventListener("popstate", updateDisplayParam);
    };
  }, [displayParam]);

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
        {displayParam == "main_pages" ? (
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

              <div
                className={`${styles.page} ${
                  activePage === "federal" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("federal")}
              >
                <p>Federal Skilled</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "transport" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("transport")}
              >
                <p>Transport Occupation</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "category" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("category")}
              >
                <p>Category Based Draws</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "clb" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("clb")}
              >
                <p>CLB Calculator</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "bcpnp" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("bcpnp")}
              >
                <p>BCPNP Calculator</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "express" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("express")}
              >
                <p>Express Entry</p>
              </div>
              <div
                className={styles.page}
                onClick={() => {
                  setInternalPages();
                }}
              >
                <p>Internal Pages {"->"}</p>
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

                  <div
                    className={`${styles.section} ${
                      activeSection === "section12" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section12")}
                  >
                    Page Meta
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

              {activePage === "home" && activeSection === "section10" && (
                <FAQ />
              )}

              {activePage === "home" && activeSection === "section11" && (
                <Blogs />
              )}

              {activePage === "home" && activeSection === "section12" && (
                <HomeMeta />
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
                      activeSection === "we-are-small"
                        ? styles.activeSection
                        : ""
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
                      activeSection === "aboutSocial"
                        ? styles.activeSection
                        : ""
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
                      activeSection === "pillarimage"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("pillarimage")}
                  >
                    Pillar Image
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "pageMeta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("pageMeta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "about" && activeSection === "about-top" && (
                <AboutTop />
              )}

              {activePage === "about" && activeSection === "our-foundation" && (
                <OurFoundation />
              )}

              {activePage === "about" && activeSection === "vision" && (
                <Vision />
              )}
              {activePage === "about" &&
                activeSection === "aboutAchievement" && <AboutAchievement />}
              {activePage === "about" && activeSection === "pillar" && (
                <Pillars />
              )}

              {activePage === "about" && activeSection === "directors" && (
                <Directors />
              )}

              {activePage === "about" && activeSection === "we-are" && (
                <WeAre />
              )}

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

              {activePage === "about" && activeSection === "pageMeta" && (
                <AboutMeta />
              )}

              {activePage === "contact" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "contact-top"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("contact-top")}
                  >
                    Top Heading Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "page-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("page-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "express" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "express-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("express-content")}
                  >
                    Express Entry Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "express-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("express-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "bcpnp" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "content" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("content")}
                  >
                    BCPNP Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "bcpnp-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("bcpnp-meta")}
                  >
                    Page Meta
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

                  <div
                    className={`${styles.section} ${
                      activeSection === "blogs-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("blogs-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "clb" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "clb-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("clb-content")}
                  >
                    Page Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "clb-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("clb-meta")}
                  >
                    Page Meta
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

                  <div
                    className={`${styles.section} ${
                      activeSection === "news-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("news-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "federal" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "Page-Content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("Page-Content")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "federal-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("federal-meta")}
                  >
                    Federal Skilled Meta
                  </div>
                </div>
              )}

              {activePage === "transport" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "Transport" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("Transport")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "transport-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("transport-meta")}
                  >
                    Transport Occupation Meta
                  </div>
                </div>
              )}

              {activePage === "category" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "category-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("category-content")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "category-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("category-meta")}
                  >
                    Category Based Draws Meta
                  </div>
                </div>
              )}

              {activePage === "contact" && activeSection === "contact-top" && (
                <ContactTop />
              )}

              {activePage === "federal" && activeSection === "Page-Content" && (
                <FederalSkilled />
              )}

              {activePage === "federal" && activeSection === "federal-meta" && (
                <FederalMeta />
              )}

              {activePage === "express" &&
                activeSection === "express-content" && <ExpressEntry />}

              {activePage === "express" && activeSection === "express-meta" && (
                <ExpressMeta />
              )}

              {activePage === "bcpnp" && activeSection === "content" && (
                <BCPNP />
              )}

              {activePage === "bcpnp" && activeSection === "bcpnp-meta" && (
                <BCPNPMeta />
              )}

              {activePage === "category" &&
                activeSection === "category-content" && <CategoryBased />}

              {activePage === "category" &&
                activeSection === "category-meta" && <CategoryMeta />}

              {activePage === "transport" && activeSection === "Transport" && (
                <TransportOccupation />
              )}

              {activePage === "transport" &&
                activeSection === "transport-meta" && <TransportMeta />}

              {activePage === "contact" && activeSection === "page-meta" && (
                <ContactMeta />
              )}

              {activePage === "blogs" && activeSection === "all-blogs" && (
                <AllBlogs />
              )}

              {activePage === "blogs" && activeSection === "add-blog" && (
                <AddBlog />
              )}

              {activePage === "blogs" && activeSection === "blogs-meta" && (
                <BlogsMeta />
              )}

              {activePage === "news" && activeSection === "all-news" && (
                <AllNews />
              )}

              {activePage === "news" && activeSection === "add-news" && (
                <AddNews />
              )}

              {activePage === "news" && activeSection === "news-meta" && (
                <NewsMeta />
              )}

              {activePage === "clb" && activeSection === "clb-content" && (
                <CLB />
              )}

              {activePage === "clb" && activeSection === "clb-meta" && (
                <CLBMeta />
              )}

              {activePage === "privacy-policy" && <Privacy />}

              {activePage === "terms-and-conditions" && <Terms />}
            </div>
          </div>
        ) : (
          <>
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* Dashboard For Internal Pages Below */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}

            <div className={styles.dashboard}>
              <div className={styles.leftPanel}>
                <div className={styles.page} onClick={setMainPages}>
                  <p>Move Back {"->"}</p>
                </div>
                <div
                  className={`${styles.page} ${
                    activePage === "bcpnp_page" ? styles.activePage : ""
                  }`}
                  onClick={() => handlePageClick("bcpnp_page")}
                >
                  <p>BCPNP Page</p>
                </div>
              </div>
              <div className={styles.rightPanel}>
                {activePage === "bcpnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "bcpnp_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("bcpnp_page_content")}
                    >
                      Page Content
                    </div>
                  </div>
                )}
                <div className={styles.roshiSection}>
                  {activePage === "bcpnp" &&
                    activeSection === "bcpnp_page_content" && <HomeTop />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;
