// Clean Code Principles
// 1. Use Meaningful Names
// Names should clearly describe their purpose. Avoid single letters or ambiguous names.

// Example:
// Bad: Hard to understand what these names represent.
// let x = 10;
// function doStuff(a) {
//   return a * x;
// }

// // Good: Clear and descriptive.
// const TAX_RATE = 10;
// function calculateTotalWithTax(amount) {
//   return amount * TAX_RATE;
// }

// 2. Follow the DRY (Don’t Repeat Yourself) Principle
// Avoid repeating code by using reusable functions.
// Example:
// Bad: Repeating similar logic.
// function calculateCircleArea(radius) {
//   return 3.14 * radius * radius;
// }
// function calculateCirclePerimeter(radius) {
//   return 2 * 3.14 * radius;
// }

// // condition ? truthy : falsy - ternary operator

// // Good: Reusable function handles both tasks.
// function calculateCircleMeasurement(radius, isArea = true) {
//   //   return isArea ? Math.PI * radius ** 2 : 2 * Math.PI * radius;
//   if (isArea) {
//     return Math.PI * radius ** 2;
//   } else {
//     return 2 * Math.PI * radius;
//   }
// }
// console.log(calculateCircleMeasurement(4, (isArea = false)));

// 3. Keep Functions Small and Focused
// Each function should do one thing well. This makes it easier to read, debug, and test.
// Example:
// Bad: One function doing too much.
// function processOrder(order) {
//   if (!order.items || order.items.length === 0) return false; // Validation
//   let total = 0;
//   for (let item of order.items) total += item.price * item.quantity; // Calculation
//   console.log(`Order confirmed. Total: $${total}`); // Confirmation
// }

// // Good: Separate functions for specific tasks.
// function isValidOrder(order) {
//   return order.items && order.items.length > 0;
// }

// // const array1 = [1, 2, 3, 4];

// // // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );

// function calculateTotal(order) {
//   return order.items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// }

// function confirmOrder(order) {
//   if (isValidOrder(order)) {
//     const total = calculateTotal(order);
//     console.log(`Order confirmed. Total: $${total}`);
//   }
// }

// 4. Avoid Unnecessary Comments
// Write code that explains itself. Use comments only when the intent isn’t obvious.
// Example:
// Bad: Comment explains something obvious.
// This function calculates the square of a number.
// function square(number) {
//   return number * number;
// }

// // Good: Comment explains intent when it’s not clear.
// // Optimizes the array size to prevent memory overflow.
// function optimizeArraySize(currentSize) {
//   return currentSize * 2;
// }

// Technial Communication
// Original Code
function avg(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s / arr.length;
}

// const array1 = [1, 2, 3, 4]
// Improved Code
function getAverage(numbers) {
  //   let sum = 0;
  //   for (let index = 0; index < numbers.length; i++) {
  //     sum += numbers[index];
  //   }
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
}
