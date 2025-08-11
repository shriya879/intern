"use strict";

// 1️⃣ Must Assign Immediately
const brand = "Nike";
// const unassigned; // ❌ SyntaxError: Missing initializer

// 2️⃣ Block Scope
if (true) {
  const message = "Hello from block!";
  console.log(message); // ✅ "Hello from block!"
}
// console.log(message); // ❌ ReferenceError: message is not defined

// 3️⃣ Temporal Dead Zone (TDZ)
{
  // console.log(rate); // ❌ ReferenceError: Cannot access 'rate' before initialization
  const rate = 5;
  console.log(rate); // ✅ 5
}

// 4️⃣ No Reassignment
const country = "India";
// country = "Canada"; // ❌ TypeError: Assignment to constant variable

// 5️⃣ No Redeclaration in Same Scope
const city = "Mumbai";
// const city = "Pune"; // ❌ SyntaxError
// let city = "Pune";   // ❌ SyntaxError
// var city = "Pune";   // ❌ SyntaxError

// 6️⃣ Not Added to Global Object (even at top level)
const myConst = "test";
console.log(globalThis.myConst); // ❌ undefined

// 7️⃣ Working with Objects & Arrays
const user = { name: "Shriya", age: 21 };
user.name = "Anu"; // ✅ Allowed
console.log(user); // { name: "Anu", age: 21 }

// user = { name: "Another" }; // ❌ TypeError: Assignment to constant variable

// Freezing object to make it immutable
Object.freeze(user);
user.age = 99; // ❌ No effect
console.log(user.age); // 21

// Arrays
const numbers = [1, 2];
numbers.push(3); // ✅ [1, 2, 3]
// numbers = [4, 5]; // ❌ TypeError: Assignment to constant variable
console.log(numbers);

// 8️⃣ Shadowing in New Block
const mode = "dark";
if (true) {
  const mode = "light";
  console.log("Inside block:", mode); // light
}
console.log("Outside block:", mode); // dark

// 9️⃣ Destructuring with const
const match = /(a+)(b+)(c+)/.exec("aaabcc");
const [, groupA, groupB, groupC] = match;
console.log(groupA, groupB, groupC); // "aaa", "b", "cc"
