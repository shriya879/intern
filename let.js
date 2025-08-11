"use strict";

// 1️⃣ Block-scoped
let globalLet = "I'm global (but not a global object property)";
console.log(globalThis.globalLet); // undefined ❌

// 2️⃣ Temporal Dead Zone (TDZ)
{
  // console.log(tdzVar); // ❌ ReferenceError: Cannot access 'tdzVar' before initialization
  let tdzVar = "Declared now";
  console.log(tdzVar); // ✅ "Declared now"
}

// 3️⃣ No redeclaration in same scope
let a = 10;
// let a = 20; // ❌ SyntaxError: Identifier 'a' has already been declared

// 4️⃣ Block-level scoping
if (true) {
  let b = "I'm inside if";
  console.log(b); // ✅ Accessible here
}
// console.log(b); // ❌ ReferenceError: b is not defined

// 5️⃣ Let shadowing outer variable
let x = 1;
{
  let x = 2; // ✅ Shadows outer x
  console.log("Inner x:", x); // 2
}
console.log("Outer x:", x); // 1

// 6️⃣ Cannot use as a single-line block statement
// if (true) let c = 3; // ❌ SyntaxError
if (true) {
  let c = 3; // ✅ Must use braces
  console.log(c);
}

// 7️⃣ Let in switch cases (must use blocks)
let n = 1;
switch (n) {
  case 1: {
    let foo = "Case 1";
    console.log(foo);
    break;
  }
  case 2: {
    let foo = "Case 2";
    console.log(foo);
    break;
  }
}

// 8️⃣ Shadowing & TDZ together
function test() {
  var outer = 33;
  if (outer) {
    // let outer = outer + 10; // ❌ ReferenceError due to TDZ
    let outer2 = outer + 10; // ✅ OK, different name
    console.log(outer2);
  }
}
test();

// 9️⃣ Destructuring with let
const result = /(a+)(b+)(c+)/.exec("aaabcc");
// result: ["aaabcc", "aaa", "b", "cc"]
let [, matchA, matchB, matchC] = result;
console.log("Destructured:", matchA, matchB, matchC); // "aaa" "b" "cc"
