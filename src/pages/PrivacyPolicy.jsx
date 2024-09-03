import React from "react";
import styles from "../styles/PrivacyPolicy.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar1 showBlue={true}  />
      <div className={styles.privacyContainer}>
        <h1 className={styles.heading}>Privacy Policy</h1>

        <p>
          Bright Light Immigration Inc. (herein referred to as “Brightlight
          Immigration” or “our” or “we”) owns the domain name{" "}
          <a
            href="https://www.brightlightimmigration.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.brightlightimmigration.ca
          </a>{" "}
          and may operate other websites. It is our policy to respect your
          privacy regarding information we may collect while operating our
          websites. We created this Privacy Policy in order to demonstrate our
          commitment to privacy. The following discloses our information
          gathering and dissemination practices for this website.
        </p>

        <h2 className={styles.subheading}>
          Information Gathering and Dissemination
        </h2>
        <p>
          Brightlight Immigration does not sell, resell, lease, disclose, or
          license your personal information including your name, phone number,
          or email address to third parties without your consent. All
          information provided is kept in the strictest confidence. Brightlight
          Immigration discloses potentially-identifying and
          personally-identifying information only to its employees, contractors,
          or affiliated organizations where necessary to process it on
          Brightlight Immigration's behalf or to provide services available at
          Brightlight Immigration’s websites.
        </p>

        <h2 className={styles.subheading}>Website Visitors</h2>
        <p>
          We use your IP address to help us identify problems with our server
          and to administer our website. We also use your IP address to gather
          broad demographic information for our internal use. Brightlight
          Immigration collects non-personally-identifying information to better
          understand how our visitors use our website.
        </p>

        <h2 className={styles.subheading}>Cookies</h2>
        <p>
          Brightlight Immigration uses cookies to help us identify and track
          visitors, their usage of our website, and their website access
          preferences. Visitors to our website who do not wish to have cookies
          placed on their computers should set their browsers to refuse cookies
          before using Brightlight Immigration’s websites.
        </p>

        <h2 className={styles.subheading}>Aggregated Statistics</h2>
        <p>
          Brightlight Immigration may collect statistics about the behavior of
          visitors to our websites. However, Brightlight Immigration does not
          disclose personally-identifying information.
        </p>

        <h2 className={styles.subheading}>Business Transfers</h2>
        <p>
          If Brightlight Immigration or substantially all of its assets were
          acquired or in the unlikely event that Brightlight Immigration goes
          out of business, user information would be one of the assets that is
          transferred or acquired by a third party.
        </p>

        <h2 className={styles.subheading}>Ads</h2>
        <p>
          Ads appearing on any of our websites may be delivered to users by
          advertising partners who may set cookies to compile information about
          you.
        </p>

        <h2 className={styles.subheading}>External Links</h2>
        <p>
          Our website contains hyperlinks to other websites operated by third
          parties who are not affiliated with Brightlight Immigration. We are
          not responsible for the privacy practices or content of such websites.
        </p>

        <h2 className={styles.subheading}>Public Forum/Newsgroup</h2>
        <p>
          This website may make available the use of a public forum/newsgroup.
          Please note that any information disclosed in this forum becomes
          public information.
        </p>

        <h2 className={styles.subheading}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this website, please contact us.
        </p>
      </div>
      <Footer1 />
    </>
  );
};

export default PrivacyPolicy;
