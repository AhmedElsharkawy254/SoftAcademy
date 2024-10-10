import React from "react";
import aboutImage from "../img/WhatsApp Image 2024-10-07 at 02.39.51_c98a6908.jpg"; // Update the path according to your project
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css"
const About = () => {
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className={`img-fluid ${styles.logo}`}
                          loading="lazy"
                          width={330}
                          height={250}
              src={aboutImage}
              alt="About 2"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-10">
                <h2 >Why Choose Us?</h2>
                <p className="lead fs-4  mb-xl-5">
                  With years of experience and deep industry knowledge, we have
                  a proven track record of success and are constantly pushing
                  ourselves to stay ahead of the curve.
                </p>

                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 mp-3">
                    <svg
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">
                      Our evolution procedure is super intelligent.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 ">
                    <svg
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">
                      We deliver services beyond expectations.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4 mb-xl-5">
                  <div className="me-3 ">
                    <svg
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">Let's hire us to reach your objectives.</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn bsb-btn-xl btn-outline-primary rounded-pill"
                >
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
