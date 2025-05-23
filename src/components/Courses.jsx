import React from 'react';
import './Courses.css';

const courseList = [
  {
    title: 'Web Development',
    description: 'Learn to build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React.',
  },
  {
    title: 'Data Science',
    description: 'Dive into data analysis, visualization, and machine learning using Python, NumPy, Pandas, and more.',
  },
  {
    title: 'Mobile App Development',
    description: 'Create cross-platform apps using Flutter or React Native with real-world project experience.',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Understand the fundamentals of AI, deep learning, and build predictive models using cutting-edge tools.',
  },
];

const Courses = () => {
  return (
    <main className="page-content">
      <header>
        <h2>Our Courses</h2>
        <p>
          Explore a range of courses designed to enhance your skills and knowledge in various fields.
        </p>
      </header>

      <section className="courses-grid">
        {courseList.map((course, index) => (
          <article className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="enroll-button">Explore Course</button>
          </article>
        ))}
      </section>

      <footer>
        <p className="coming-soon-note">More courses coming soon! Stay tuned for updates.</p>
      </footer>
    </main>
  );
};

export default Courses;
