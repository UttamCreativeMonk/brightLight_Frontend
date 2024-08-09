import React from "react";
import styles from "../styles/Navbar.module.css";
import { ReactComponent as IconGear } from "../assets/gearIcon.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";

import LocationIcon from '../assets/location-white.png'; 
import EmailIcon from '../assets/mail-white.png'; 

import { ReactComponent as TikTokIcon } from '../assets/tiktok.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg'; 
import { ReactComponent as YouTubeIcon } from '../assets/youtube.svg'; 


const Navbar = () => {
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
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <div className={styles.mobileIcon}>
              {/* <PhoneIcon width={15} height={15} /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="w-3 md:w-5"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                ></path>
              </svg>
              <p>+1 (604) 503 3734</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondNavbar}>
        <a href="#" className={styles.logo}>
          <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
        </a>
        <div className={styles.mainNavbar}>
          <a href="/">SERVICES</a>
          <a href="/">BLOGS</a>
          <a href="/">NEWS</a>
          <a href="/">CALCULATORS</a>
          <a href="/">CONTACT</a>

          <div className={styles.searchBar}>
            <div className={styles.inputWrapper}>
              <svg 
                className={styles.searchIcon} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            <img src={LocationIcon} alt="Location" className={styles.icon} />
            <span>Vancouver</span>
          </div>
          <div className={styles.email}>
            <img src={EmailIcon} alt="Email" className={styles.icon} />
            <span>info@brightlightimmigration.ca</span>
          </div>
        </div>
        <div className={styles.socialMedia}>
        <TikTokIcon className={styles.socialIcon} />
        <LinkedInIcon className={styles.socialIcon} />
        <InstagramIcon className={styles.socialIcon} />
        <FacebookIcon className={styles.socialIcon} />
        <YouTubeIcon className={styles.socialIcon} />
      </div>
      </div>
    </>
  );
};

export default Navbar;
