import React from 'react';
import styles from "../styles/Footer1.module.css"; 
import HoursIcon from "../assets/hours.webp";
import Address from "../assets/address.webp";
import FooterLogo from "../assets/brightlight-main-logo.webp";
import FooterLogo2 from "../assets/cicc.png";
import UpperFooterImage from "../assets/footer-image.webp";

import { ReactComponent as TikTokIcon } from "../assets/tiktok.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as YouTubeIcon } from "../assets/youtube.svg";

const Footer1 = () => {
  return (
    <footer>
      <div className={styles.upperFooter}>
        <img src={UpperFooterImage} alt="Footer background" />
        <div>
          <h1>Start your process today</h1>
          <p>
            Get your free assessment and discover your options to immigrate to
            Canada
          </p>
          <button>FREE ASSESSMENT</button>
        </div>
        <p className={styles.upperFooterLowerText}>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.innerFooter}>
          <div className={styles.leftFooter}>
            <div className={styles.iconHeading}>
              <img src={HoursIcon} alt="Hours Icon" className={styles.socialIcon} />
              <p>OUR WORKING HOURS</p>
            </div>
            <p>Monday to Friday: 10:00 AM - 6:00 PM</p>
            <p>Saturday: By Appointment only</p>
            <p>Sunday: Closed</p>

            <div className={styles.iconHeading}>
              <img src={Address} alt="Address Icon" className={styles.socialIcon} />
              <p>OUR ADDRESS</p>
            </div>
            <p>6638 152A St Unit #114, Surrey, BC V3S 5X5</p>

            <div className={styles.iconHeading}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className={styles.socialIcon}
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>GET IN TOUCH</p>
            </div>
            <p>(604) 503-3734</p>
            <p>
              <a href="mailto:info@brightlightimmigration.ca">
                info@brightlightimmigration.ca
              </a>
            </p>
          </div>

          <div className={styles.socialMediaFooter}>
            <TikTokIcon className={styles.socialIcon} />
            <LinkedInIcon className={styles.socialIcon} />
            <InstagramIcon className={styles.socialIcon} />
            <FacebookIcon className={styles.socialIcon} />
            <YouTubeIcon className={styles.socialIcon} />
          </div>

          <div className={styles.privacyPolicy}>
            <a href="/">PRIVACY POLICY</a> | <a href="/">TERMS & CONDITION</a>
            {/* <div>
              <TikTokIcon className={styles.socialIcon} />
              <LinkedInIcon className={styles.socialIcon} />
              <InstagramIcon className={styles.socialIcon} />
              <FacebookIcon className={styles.socialIcon} />
              <YouTubeIcon className={styles.socialIcon} />
            </div> */}
          </div>

          <div className={styles.rightFooter}>
            <p>QUICK ACCESS</p>
            <div className={styles.footerAncor}>
              <a href="/">PR</a>
              <span>.</span>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">RECONSIDERATION</a>
              <a href="/">PRIVACY POLICY</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">TERMS & CONDITIONS</a>
              <span>.</span>
            </div>
          </div>
        </div>

        <p className={styles.copyrightHeading}>
          ALL RIGHTS RESERVED BRIGHTLIGHT IMMIGRATION ©2024
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
