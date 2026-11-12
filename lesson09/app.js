import { add, multiply } from "./math.js";

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
const user = { name: "Anjali", age: 21, city: "Pune" };
const { name, city } = user;
console.log(name, city);

const updated = { ...user, age: 22 };
console.log(user.age, updated.age);