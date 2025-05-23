import React, { useState } from 'react';
import './skill.css';
import SkillSelector from './selector';

const SkillAssessment = () => {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);

  const questionBank = {
    'Data Structures & Algorithms': {
      beginner: [
        {
          question: "What is the time complexity of linear search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctAnswer: 2
        },
        {
          question: "Which data structure uses FIFO principle?",
          options: ["Stack", "Queue", "Array", "Tree"],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a linear data structure?",
          options: ["Binary Tree", "Graph", "Stack", "Heap"],
          correctAnswer: 2
        },
        {
          question: "Which sorting algorithm has the worst-case time complexity of O(n²)?",
          options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"],
          correctAnswer: 1
        }
      ],
      intermediate: [
        {
          question: "What is the time complexity of merge sort?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctAnswer: 1
        },
        {
          question: "Which algorithm uses divide and conquer approach?",
          options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
          correctAnswer: 1
        },
        {
          question: "Which data structure is used in recursion?",
          options: ["Queue", "Stack", "Heap", "Linked List"],
          correctAnswer: 1
        },
        {
          question: "Which traversal technique is used to convert a binary tree into a binary search tree?",
          options: ["In-order", "Pre-order", "Post-order", "Level-order"],
          correctAnswer: 0
        }
      ],
      advanced: [
        {
          question: "What is the time complexity of Dijkstra's algorithm with Fibonacci heap?",
          options: ["O(V + E)", "O(V log V + E)", "O(V²)", "O(E log V)"],
          correctAnswer: 1
        },
        {
          question: "Which data structure is best for implementing LRU cache?",
          options: ["Queue", "Stack", "Hash Map + Doubly Linked List", "Binary Search Tree"],
          correctAnswer: 2
        },
        {
          question: "Which algorithm finds strongly connected components in a directed graph?",
          options: ["Dijkstra’s algorithm", "Kruskal’s algorithm", "Tarjan’s algorithm", "Prim’s algorithm"],
          correctAnswer: 2
        },
        {
          question: "Which of the following is NOT a self-balancing binary search tree?",
          options: ["AVL Tree", "Red-Black Tree", "Splay Tree", "Trie"],
          correctAnswer: 3
        }
      ]
    },
    'JavaScript': {
      beginner: [
        {
          question: "What will 'typeof null' return in JavaScript?",
          options: ["'null'", "'undefined'", "'object'", "'string'"],
          correctAnswer: 2
        },
        {
          question: "Which keyword is used to declare variables in ES6?",
          options: ["var", "let", "const", "Both let and const"],
          correctAnswer: 3
        },
        {
          question: "What is the result of 2 + '2' in JavaScript?",
          options: ["22", "4", "NaN", "undefined"],
          correctAnswer: 0
        },
        {
          question: "Which method is used to convert JSON into a JavaScript object?",
          options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
          correctAnswer: 1
        }
      ],
      intermediate: [
        {
          question: "What is the output of 'console.log(1 + +'1')'?",
          options: ["'11'", "2", "NaN", "undefined"],
          correctAnswer: 1
        },
        {
          question: "What does the 'this' keyword refer to in arrow functions?",
          options: ["The function itself", "The global object", "The enclosing lexical context", "undefined"],
          correctAnswer: 2
        },
        {
          question: "What is a closure in JavaScript?",
          options: ["An object", "A function bundled with its lexical scope", "A callback", "A loop"],
          correctAnswer: 1
        },
        {
          question: "Which function is used to delay execution of a function?",
          options: ["setInterval", "clearTimeout", "setTimeout", "delay()"],
          correctAnswer: 2
        }
      ],
      advanced: [
        {
          question: "What is the purpose of the Symbol data type in ES6?",
          options: ["To create unique identifiers", "To represent currency values", "To store binary data", "To create private methods"],
          correctAnswer: 0
        },
        {
          question: "What does the following code return: 'Promise.reject(1).catch(x => x + 1).then(x => console.log(x))'?",
          options: ["1", "2", "undefined", "UnhandledPromiseRejectionWarning"],
          correctAnswer: 1
        },
        {
          question: "Which method is used to create a deep copy of an object?",
          options: ["Object.assign()", "JSON.parse(JSON.stringify(obj))", "Object.create()", "clone()"],
          correctAnswer: 1
        },
        {
          question: "What does 'Object.freeze(obj)' do?",
          options: ["Deletes all properties", "Makes object immutable", "Returns a shallow copy", "Locks prototype"],
          correctAnswer: 1
        }
      ]
    }
  };

  const startAssessment = (skills, level) => {
    setSelectedSkills(skills);
    setSkillLevel(level);

    const generatedQuestions = [];
    skills.forEach(skill => {
      if (questionBank[skill] && questionBank[skill][level]) {
        generatedQuestions.push(...questionBank[skill][level]);
      }
    });

    setQuestions(generatedQuestions.sort(() => Math.random() - 0.5).slice(0, 10));
    setAssessmentStarted(true);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setAssessmentStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (!assessmentStarted) {
    return <SkillSelector onStartAssessment={startAssessment} />;
  }

  return (
    <div className="skill-assessment">
      {showResult ? (
        <div className="result">
          <h2>Your Assessment Result</h2>
          <p>You scored {score} out of {questions.length}</p>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${(score / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="feedback">
            {score === questions.length 
              ? "Excellent! You have strong skills in these areas!"
              : score >= questions.length * 0.7 
              ? "Good job! You're proficient but have some room to improve."
              : score >= questions.length * 0.4 
              ? "You have basic understanding but should practice more."
              : "Consider focusing more on these skills and practicing regularly."}
          </p>
          <div className="skill-tags">
            {selectedSkills.map(skill => (
              <span key={skill} className="skill-tag">{skill} ({skillLevel})</span>
            ))}
          </div>
          <button onClick={restartQuiz} className="retry-btn">Take Again</button>
        </div>
      ) : questions.length > 0 ? (
        <div className="question-container">
          <h2>Skill Assessment</h2>
          <div className="progress">Question {currentQuestion + 1} of {questions.length}</div>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="question">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleAnswer(index)}
                  className="option-btn"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-questions">
          <h3>No questions available for your selected skills and level.</h3>
          <button onClick={restartQuiz} className="retry-btn">Go Back</button>
        </div>
      )}
    </div>
  );
};

export default SkillAssessment;
