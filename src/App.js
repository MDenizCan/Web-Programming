import React, { useState } from 'react';
import CourseInput from './CourseInput';
import Announcements from './Announcements';
import './App.css';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [cgpa, setCGPA] = useState(0);
  const [gradeLetter, setGradeLetter] = useState('');

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const gradePoints = course.grade * course.credits;
      totalGradePoints += gradePoints;
      totalCredits += course.credits;
    });

    const cgpa = totalGradePoints / totalCredits;
    setCGPA(cgpa);

    if (cgpa >= 90) {
      setGradeLetter('A');
    } else if (cgpa >= 70) {
      setGradeLetter('B');
    } else if (cgpa >= 50) {
      setGradeLetter('C');
    } else {
      setGradeLetter('F');
    }
  };

  return (
    <div className="app">
      <h1>CGPA Calculator</h1>
      <CourseInput addCourse={addCourse} />
      <button onClick={calculateCGPA}>Calculate CGPA</button>
      <div className="cgpa">
        CGPA: {cgpa.toFixed(2)} ({gradeLetter})
      </div>
      <Announcements />
    </div>
  );
};

export default App;