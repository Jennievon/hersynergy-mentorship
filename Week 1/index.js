// 1. Variables and Types

//Types:
// String
// Numbers
// Boolean
// Array
// Object
// Function

// let courseName = "Software Engineering"; // string
// var weekCount = 6; // number
// const isActive = true; // boolean
// let grades = [95, 88, 92]; // array - 0-indexed

// let subjects = [
//   {
//     subject: "Mathematics",
//     grade: "A",
//   },
//   {
//     subject: "English",
//     grade: "B",
//   },
// ];

// courseName = "Data Entry";

//access array
// console.log(subjects[1]);

//array methods
// push, pop, shift, unshift, splice, reduce
// grades.push(34);
// console.log(grades);

// grades.pop();

// grades.splice(1, 2);
// console.log(grades);

// // 2. Functions
// function calculateAverage(numbers) {
//   const sum = numbers.reduce((a, b) => a + b, 0);
//   return sum / numbers.length;
// }

// console.log(calculateAverage(grades));

// 3. Objects
// const student = {
//   name: "Halima Kundiri",
//   age: 20,
//   grades: [95, 88, 92],
//   gender: "female",
//   calculateGPA() {
//     return calculateAverage(this.grades);
//   },
// };

// object methods
// `.keys` - array of keys
// console.log(Object.keys(student));
// `.values` - array of values
// console.log(Object.values(student));
// entries gives an array of the [key, value] pairs
// console.log(Object.entries(student));

// access object
// console.log(student.age);
// console.log(student["age"]);

// // // 4. Error Handling
// function divideNumbers(a, b) {
//   try {
//     if (b === 0) throw new Error("Cannot divide by zero");
//     return a / b;
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return null;
//   }
// }

// console.log(divideNumbers(3, 0));

// Interactive
// class GradeCalculator {
//   constructor(studentName) {
//     this.studentName = studentName;
//     this.assignments = [];
//   }

//   addGrade(assignment, score) {
//     // create an object with the assignment and the score
//     let newGrade = {
//       name: assignment,
//       score: score,
//     };

//     // add this to our assignments array
//     this.assignments.push(newGrade);

//     //let the user know that this worked
//     return `Added ${assignment} with score ${score} added`;
//   }

//   calculateAverage() {
//     // take sum of the assignment scores and divide by length
//     if (this.assignments.length === 0) {
//       return 0;
//     }
//     let total = 0;
//     for (const assignment of this.assignments) {
//       // total = total + assignment.score
//       total += assignment.score;
//     }
//     // console.log("Total:", total);

//     const average = total / this.assignments.length;
//     return average.toFixed(2);
//   }

//   generateReport() {
//     if (this.assignments.length === 0) {
//       return `${this.studentName} does not have any grades yet`;
//     }

//     let report = `Report for ${this.studentName}\n`;
//     report += "----------------------\n";

//     for (const assignment of this.assignments) {
//       report += `${assignment.name}: ${assignment.score}\n`;
//     }

//     report += "----------------------\n";
//     report += `Average: ${this.calculateAverage()}`;

//     return report;
//   }
// }

// const student = new GradeCalculator("Halima");
// student.addGrade("Math", 90);
// student.addGrade("English", 87);
// student.addGrade("Biology", 97);
// console.log(student.generateReport());

// && - and
// || - or
// ++ - increase by 1
// y += x - increase y by x
// -- - decrease by 1
// y -= x - decrease y by x

// true && false = false
// true || false = true

// Problem-solving strategies
// Problem: Create a function that finds the most frequent element in an array
// function findMostFrequent(arr) {}

// // Career Path Exploration
// const careerPaths = {
//   frontendDeveloper: {
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     projects: ["Web Apps", "User Interfaces"],
//   },
//   backendDeveloper: {
//     skills: ["Node.js", "Express", "Databases"],
//     projects: ["APIs", "Server Logic"],
//   },
//   fullStackDeveloper: {
//     skills: [...frontendDeveloper.skills, ...backendDeveloper.skills],
//     projects: ["End-to-End Applications"],
//   },
// };

// // SMART Goals Framework
// const smartGoalTemplate = {
//   specific: "What exactly do you want to achieve?",
//   measurable: "How will you track progress?",
//   achievable: "Is it realistic with your resources?",
//   relevant: "Does it align with your career goals?",
//   timeBound: "When will you achieve this?",
// };

// // Example Goal
// const sampleGoal = {
//   goal: "Build 3 full-stack JavaScript applications",
//   timeline: "6 weeks",
//   milestones: [
//     "Week 2: Frontend complete",
//     "Week 4: Backend integrated",
//     "Week 6: Deployment done",
//   ],
// };

// Action Planning
// Personal Roadmap
const actionPlan = {
  daily: [
    "1 hour coding practice",
    "Read documentation",
    "Work on current project",
  ],
  weekly: ["Complete course assignment", "Project milestone", "Code review"],
  monthly: ["Finish major project", "Skill assessment", "Portfolio update"],
};

// Technical Assignment
// - Implement a function to calculate factorial
// - Create a program to check prime numbers
// - Write a simple array manipulation function

class Assignment {
  // 1. Create a student grade tracker
  // 2. Implement error handling
  // 3. Add input validation
  // 4. Generate reports
}

// Professional Tasks
const weekOneTasks = [
  "Document SMART goals",
  "Set up GitHub profile",
  "Start learning journal",
];
