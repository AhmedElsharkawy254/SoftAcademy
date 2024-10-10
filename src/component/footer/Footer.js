import React from "react";
import styles from "./footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../img/Blue_Yellow_Elegant_Professional_University_Logo-removebg-preview (1).png";
const Footer = () => {
  return (
    <div className={`${styles.all}`}>
      <footer className={`${styles.footer}`}>
        <div className="container p-2 pb-0">
          <section className="">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6
                  className={`text-uppercase mb-4 font-weight-bold ${styles.heading}`}
                >
                  ERS SoftAcademy
                </h6>
                <img src={logo} alt="Logo" className={styles.logo} />
              </div>

              {/* Column 2 */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6
                  className={`text-uppercase mb-4 font-weight-bold ${styles.heading}`}
                >
                  Products
                </h6>
                <p>Frontend</p>
                <p>Backend</p>
                <p>AI</p>
                <p>Software Products</p>
              </div>

              {/* Column 3 */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6
                  className={`text-uppercase mb-4 font-weight-bold ${styles.heading}`}
                >
                  Useful links
                </h6>
                <p>Your Account</p>
                <p>Become an Affiliate</p>
                <p>Shipping Rates</p>
                <p>Help</p>
              </div>

              {/* Column 4 */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6
                  className={`text-uppercase mb-4 font-weight-bold ${styles.heading}`}
                >
                  Contact
                </h6>
                <p>Qalama ,Qalyup</p>
                <p>ahmed.s.elsharkawy254@gmail.com</p>
                <p>+20 128 144 0738 </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3"><i>Eng: Ahmed Elsharkawy</i></div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
