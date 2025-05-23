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
        question: "Which of these is a linear data structure?",
        options: ["Graph", "Tree", "Stack", "Hash Table"],
        correctAnswer: 2
      },
      {
        question: "Which data structure is best suited for recursive algorithms?",
        options: ["Queue", "Stack", "Heap", "Array"],
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
        question: "Which traversal is used in Depth-First Search?",
        options: ["Level Order", "In-order", "Pre-order", "Breadth-First"],
        correctAnswer: 2
      },
      {
        question: "What data structure is used in BFS algorithm?",
        options: ["Stack", "Queue", "Tree", "Set"],
        correctAnswer: 1
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
        question: "What is the time complexity of inserting into a Red-Black Tree?",
        options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
        correctAnswer: 0
      },
      {
        question: "Which algorithm is used for finding strongly connected components?",
        options: ["Prim's", "Kruskal's", "Kosaraju's", "Dijkstra's"],
        correctAnswer: 2
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
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Float"],
        correctAnswer: 3
      },
      {
        question: "How do you write a comment in JavaScript?",
        options: ["# This is a comment", "// This is a comment", "<!-- Comment -->", "/* Comment */"],
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
        question: "Which method is used to convert JSON data to a JavaScript object?",
        options: ["JSON.toObject()", "JSON.parse()", "JSON.stringify()", "JSON.convert()"],
        correctAnswer: 1
      },
      {
        question: "What will the expression 'typeof NaN' return?",
        options: ["'NaN'", "'undefined'", "'number'", "'object'"],
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
        question: "Which feature allows JavaScript functions to be paused and resumed?",
        options: ["Callbacks", "Async/Await", "Generators", "Promises"],
        correctAnswer: 2
      },
      {
        question: "What does 'Object.freeze()' do in JavaScript?",
        options: ["Makes an object immutable", "Deletes all keys", "Makes an object non-serializable", "Disables garbage collection"],
        correctAnswer: 0
      }
    ]
  }
};
