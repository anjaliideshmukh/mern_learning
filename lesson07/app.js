// 1. A function getGrade(marks) that returns "A" for 90 or more, "B" for 75 to 89, "C" for 50 to 74, and "Fail" below 50
function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

// 2. An arrow function isEven(n) that returns true if n is even, otherwise false
const isEven = (n) => n % 2 === 0;

// 3. A for loop from 1 to 10 that prints each number and whether it’s even or odd, using your isEven function
console.log("--- Even or Odd Loop ---");
for (let i = 1; i <= 10; i++) {
    if (isEven(i)) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
// 4. Test getGrade with at least four different marks and print the results
console.log("\n--- Testing getGrade ---");
console.log(`Marks: 95 -> Grade: ${getGrade(95)}`);
console.log(`Marks: 82 -> Grade: ${getGrade(82)}`);
console.log(`Marks: 60 -> Grade: ${getGrade(60)}`);
console.log(`Marks: 45 -> Grade: ${getGrade(45)}`);