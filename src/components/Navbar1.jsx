import React, { useState } from "react";
import styles from "../styles/Navbar1.module.css";
import { ReactComponent as IconGear } from "../assets/gearIcon.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import LocationIcon from "../assets/location-white.png";
import EmailIcon from "../assets/mail-white.png";
import EmailBlue from "../assets/mailBlue.png";
import LocationBlue from "../assets/locationBlue.png";

import { ReactComponent as TikTokIcon } from "../assets/tiktok.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as YouTubeIcon } from "../assets/youtube.svg";
import Facebookblue from "../assets/facebookBlue.png";
import Youtubeblue from "../assets/youtubeBlue.png";
import Instagramblue from "../assets/instagramBlue.png";
import Linkedinblue from "../assets/linkedinBlue.png";
import Tiktokblue from "../assets/tiktokBlue.png";

const Navbar1 = (props) => {
  const { showBlue } = props;

  // State to manage dropdown visibility
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.firstNavbar}>
          <div className={styles.calculatorIcon}>
            <IconGear width={25} height={25} />
            <p>CALCULATORS</p>
            <RightArrow width={10} height={10} />
          </div>
          <div className={styles.ancor}>
            <a href="/about-us">ABOUT</a>
            <a href="/contact-us">CONTACT</a>
            <div className={styles.mobileIcon}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-3 md:w-5"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>+1 (604) 503 3734</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSectionNavbar}>
          <div className={styles.secondNavbar}>
            <a href="/" className={styles.logo}>
              <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
            </a>
            <div className={styles.mainNavbar}>
              {/* SERVICES Menu with Dropdown */}
              <div
                className={styles.navItem}
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <a href="/">SERVICES</a>
                {showServicesDropdown && (
                  <div className={styles.dropdownMenu}>
                    <a href="/express-entry">Express Entry</a>
                    <a href="/permanent-residency">Permanent Residency</a>
                    <a href="/transport-occupation">Transport Occupation</a>
                    <a href="/category-based">CategoryBased</a>
                  </div>
                )}
              </div>

              {/* BLOGS */}
              <a href="/">BLOGS</a>

              {/* NEWS */}
              <a href="/">NEWS</a>

              {/* CALCULATORS Menu with Dropdown */}
              <div
                className={styles.navItem}
                onMouseEnter={() => setShowCalculatorsDropdown(true)}
                onMouseLeave={() => setShowCalculatorsDropdown(false)}
              >
                <a href="/">CALCULATORS</a>
                {showCalculatorsDropdown && (
                  <div className={styles.dropdownMenu}>
                    <a href="/BCPNP-Calculator">BCPNP Calculator</a>
                    <a href="/Federal-Skilled">Federal Skilled</a>
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <a href="/contact-us">CONTACT</a>

              {/* Search Bar */}
              <div className={styles.searchBar}>
                <div className={styles.inputWrapper}>
                  <svg
                    className={styles.searchIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Search here"
                  />
                </div>
                <button className={styles.button}>Search here</button>
              </div>
            </div>
          </div>

          <div className={styles.contactNavbar}>
            <div className={styles.contactInfo}>
              <div className={styles.location}>
                {showBlue ? (
                  <img
                    src={LocationBlue}
                    alt="Location Blue"
                    className={styles.icon}
                  />
                ) : (
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className={styles.icon}
                  />
                )}
                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
                >
                  Vancouver
                </span>
              </div>
              <div className={styles.email}>
                {showBlue ? (
                  <img
                    src={EmailBlue}
                    alt="Email blue"
                    className={styles.icon}
                  />
                ) : (
                  <img src={EmailIcon} alt="Email" className={styles.icon} />
                )}

                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
                >
                  info@brightlightimmigration.ca
                </span>
              </div> 
            </div> 
            <div className={styles.socialMedia}>
              {showBlue ? (
                 <a target="_blank" href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1">
                <img src={Tiktokblue} />
                </a>
              ) : (
                <a target="_blank" href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1">
                <TikTokIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? ( <a target="_blank" href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198">
                <img src={Linkedinblue} />
                </a>
              ) : (
                <a target="_blank" href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198">
                <LinkedInIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a target="_blank" href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p">
                <img src={Instagramblue} />
                </a>
              ) : ( <a target="_blank" href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p">
                <InstagramIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a target="_blank" href="https://www.facebook.com/brightlightimmigration">
                <img src={Facebookblue} />
                </a>
              ) : ( <a target="_blank" href="https://www.facebook.com/brightlightimmigration">
                <FacebookIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a target="_blank" href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA">
                <img src={Youtubeblue}  /></a>
              ) : (
                <a target="_blank" href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"><YouTubeIcon className={styles.socialIcon} /></a>
                
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
