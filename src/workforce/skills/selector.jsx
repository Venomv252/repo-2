import React, { useState } from 'react';
import './selector.css';

const SkillSelector = ({ onStartAssessment }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillLevel, setSkillLevel] = useState('beginner');

  const skills = [
    'Data Structures & Algorithms',
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'Java',
    'C++',
    'System Design'
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSkills.length > 0) {
      onStartAssessment(selectedSkills, skillLevel);
    }
  };

  return (
    <div className="skill-selector">
      <h2>Select Your Skills</h2>
      <form onSubmit={handleSubmit}>
        <div className="skills-grid">
          {skills.map(skill => (
            <div 
              key={skill}
              className={`skill-card ${selectedSkills.includes(skill) ? 'selected' : ''}`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div className="level-selector">
          <h3>Select Your Skill Level:</h3>
          <div className="level-options">
            {['beginner', 'intermediate', 'advanced'].map(level => (
              <label key={level}>
                <input
                  type="radio"
                  name="skillLevel"
                  value={level}
                  checked={skillLevel === level}
                  onChange={() => setSkillLevel(level)}
                />
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </label>
            ))}
          </div>
        </div>
        
        <button 
          type="submit" 
          className="start-btn"
          disabled={selectedSkills.length === 0}
        >
          Start Assessment
        </button>
      </form>
    </div>
  );
};

export default SkillSelector;