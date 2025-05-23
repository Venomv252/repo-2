import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="page-content">
      <h2>Our Courses</h2>
      <p>Explore a range of courses designed to enhance your skills and knowledge in various fields.</p>

      <div className="courses-grid">
        <div className="course-card">
          <h3>Web Development</h3>
          <p>Learn to build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React.</p>
          <button className="enroll-button">Explore Course</button>
        </div>

        <div className="course-card">
          <h3>Data Science</h3>
          <p>Dive into data analysis, visualization, and machine learning using Python, NumPy, Pandas, and more.</p>
          <button className="enroll-button">Explore Course</button>
        </div>

        <div className="course-card">
          <h3>Mobile App Development</h3>
          <p>Create cross-platform apps using Flutter or React Native with real-world project experience.</p>
          <button className="enroll-button">Explore Course</button>
        </div>

        <div className="course-card">
          <h3>AI & Machine Learning</h3>
          <p>Understand the fundamentals of AI, deep learning, and build predictive models using cutting-edge tools.</p>
          <button className="enroll-button">Explore Course</button>
        </div>
      </div>

      <p className="coming-soon-note">More courses coming soon! Stay tuned for updates.</p>
    </div>
  );
};

export default Courses;
