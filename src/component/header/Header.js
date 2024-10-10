import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css"; // Import the CSS module
import logo from "../img/Blue_Yellow_Elegant_Professional_University_Logo-removebg-preview (1).png";

const Header = () => {
  return (
    <div className={styles.customNavbar}>
      <div className={styles.LogoAndText}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={`${styles.customText} navbar-brand`}>ERS SOFTACADEMY</h1>
      </div>

      <div className={styles.linkes}>
        {/* Use Link instead of a for smooth routing */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
