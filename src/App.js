import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Content from "./component/content/Content";
import Courses from "./component/courses/Courses";
import Footer from "./component/footer/Footer";
import About from "./component/about/About "; // Corrected import
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}> {/* Added basename for GitHub Pages */}
      <div className="back">
        <Fragment>
          <div className="Header">
            <Header />
          </div>

          <div className="WEBContainer">
            <Routes>
              {/* Route for the home page */}
              <Route
                path="/"
                element={
                  <>
                    <Content />
                    <Courses />
                    <Footer />
                  </>
                }
              />

              {/* Route for the about page */}
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
