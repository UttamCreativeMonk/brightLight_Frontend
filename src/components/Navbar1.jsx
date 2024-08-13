import React, { useState } from "react";
import styles from "../styles/Navbar1.module.css";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const Navbar1 = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSearchBar = () => {
    setIsSearchOpen(prevState => !prevState);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.secondNavbar}>
      <a href="#" className={styles.logo}>
        <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
      </a>
      <p>142536978</p>

      <div className={styles.mainNavbar}>
      <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} onClick={toggleSearchBar} />
          <input
            type="text"
            className={`${styles.searchInput} ${isSearchOpen ? styles.open : ''}`}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <a href="/">ABOUT</a>
        <a href="/">SERVICES</a>
        <a href="/">BLOGS</a>
        <a href="/">NEWS</a>
        <a href="/">CALCULATORS</a>
        <a href="/">CONTACT</a>
        <div>
          <button className={styles.bookButton}>BOOK APPOINTMENT</button>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar1;
