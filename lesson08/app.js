const tasks = [
  { id: 1, title: "Learn HTML", done: true },
  { id: 2, title: "Learn CSS", done: true },
  { id: 3, title: "Learn JS", done: false },
];
// map: transform every item into something new
const titles = tasks.map((task) => task.title);
// ["Learn HTML", "Learn CSS", "Learn JS"]

// filter: keep only items that pass a test
const pending = tasks.filter((task) => task.done === false);
// [{ id: 3, title: "Learn JS", done: false }]

// find: get the first item that matches
const task2 = tasks.find((task) => task.id === 2);
// { id: 2, title: "Learn CSS", done: true }
console.log(tasks.length);
console.log(tasks[2].title);
console.log(tasks.map((task) => task.title));
console.log(tasks.filter((task) => task.done));