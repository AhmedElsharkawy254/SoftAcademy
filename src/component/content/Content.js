import React from "react";
import styles from "./content.module.css";
import logo from "../img/Blue_Yellow_Elegant_Professional_University_Logo-removebg-preview (1).png";
const Content = () => {
  return (
    <div className={`content ${styles.content}`}>
      <div>
        <h1>ERS SOFTACADEMY</h1>
        <p className={`${styles.softacademyparagraph}`}>
          Softacademy is a dynamic start-up specializing in teaching
          programming, dedicated to empowering individuals with the skills
          needed for the digital age. As one of the fastest-growing companies in
          the field of web design, Softacademy leverages cutting-edge artificial
          intelligence to create innovative and intelligent web solutions. Our
          mission is to combine education and technology, driving forward the
          future of both learning and web development.
        </p>
      </div>
      <div>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Content;
