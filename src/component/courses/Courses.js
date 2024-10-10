import React, { useState } from "react";
import Html from "../img/glossy-standard-1-1-html-logo.jpg";
import Css from "../img/css.jpg";
import Js from "../img/636a0431e4b00641d2596354_scaled_cover.jpg";
import Reactimg from "../img/JIyBtKW.png";
import Reduxtoolkit from "../img/Redux.jpg";
import Pythonlogo from "../img/python.jpg";
import OOP from "../img/python.jpg";
import django from "../img/django.png";
import ML from "../img/Machine learng.jpeg";
import DL from "../img/Deaplearning.jpeg";
import NLP from "../img/NLP.png";

import styles from "./courses.module.css";

const Courses = () => {
  const [courses] = useState([
    { 
      name: "HTML", 
      img: Html, 
      category: "Frontend", 
      id: 1, 
      description: "HTML is the standard markup language for creating web pages." 
    },
    { 
      name: "CSS", 
      img: Css, 
      category: "Frontend", 
      id: 2, 
      description: "CSS is used to style and layout web pages, controlling the design." 
    },
    { 
      name: "JavaScript", 
      img: Js, 
      category: "Frontend", 
      id: 3, 
      description: "JavaScript is a versatile language for creating interactive web features." 
    },
    { 
      name: "React", 
      img: Reactimg, 
      category: "Frontend", 
      id: 4, 
      description: "React is a JavaScript library for building user interfaces, developed by Facebook." 
    },
    { 
      name: "Redux", 
      img: Reduxtoolkit, 
      category: "Frontend", 
      id: 5, 
      description: "Redux is a predictable state container for JavaScript apps." 
    },
    { 
      name: "Python", 
      img: Pythonlogo, 
      category: "AI", 
      id: 6, 
      description: "Python is a versatile language, commonly used in AI and data science." 
    },
    { 
      name: "OOP Python", 
      img: OOP, 
      category: "AI", 
      id: 8, 
      description: "Object-Oriented Programming (OOP) in Python focuses on data and functions." 
    },
    { 
      name: "Python Django", 
      img: django, 
      category: "Backend", 
      id: 9, 
      description: "Django is a high-level Python web framework for rapid development." 
    },
    { 
      name: "Machine Learning (ML)", 
      img: ML, 
      category: "AI", 
      id: 11, 
      description: "ML is a subset of AI focused on creating systems that learn from data." 
    },
    { 
      name: "Deep Learning (DL)", 
      img: DL, 
      category: "AI", 
      id: 12, 
      description: "DL uses neural networks with many layers to model complex patterns in data." 
    },
    { 
      name: "Natural Language Processing (NLP)", 
      img: NLP, 
      category: "AI", 
      id: 13, 
      description: "NLP involves teaching machines to understand and process human language." 
    }
]);

  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  // Filter courses based on search input and category selection
  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "" || course.category === selectedCategory) && // Check category
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check search term
    );
  });

  // Handlers for input and select change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value === "Filter By Category" ? "" : e.target.value);
  };

  return (
    <div className={styles.total}>
      <div className={styles.inputdrop}>
        <input
          className={`${styles.customInput}`} // Combine with Bootstrap class
          type="search"
          placeholder="Search By Name"
          aria-label="Search"
          value={searchTerm} // Bind input to state
          onChange={handleSearchChange} // Update search term
        />

        <select
          className={`${styles.customselection}`}
          value={selectedCategory} // Bind select to state
          onChange={handleCategoryChange} // Update category
        >
          <option>Filter By Category</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>AI</option>
        </select>
      </div>

      <div className={styles.courses}>
        {filteredCourses.map((el) => (
          <div className={`card ${styles.card}`} key={el.id}>
            <img className={`card-img-top ${styles.logo}`} src={el.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">
                { el.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
