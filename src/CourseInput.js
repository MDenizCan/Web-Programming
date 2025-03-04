import React, { useState } from 'react';

const CourseInput = ({ addCourse }) => {
  const [grade, setGrade] = useState('');
  const [credits, setCredits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (grade && credits) {
      addCourse({ grade: parseFloat(grade), credits: parseInt(credits) });
      setGrade('');
      setCredits('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      <input type="number" placeholder="Credits" value={credits} onChange={(e) => setCredits(e.target.value)} />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseInput;