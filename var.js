"use strict";

// ✅ 1. VAR is from old JavaScript (ES3) and can be declared globally
var globalVar = "I'm global";
console.log("Global var:", globalVar); // ✅ I'm global

// ✅ 2. VAR allows re-declaration and re-assignment
var globalVar = "Redeclared!";
globalVar = "Reassigned!";
console.log("After redeclaration and reassignment:", globalVar); // ✅ Reassigned!

// ✅ 3. VAR does NOT follow block scope (accessible outside blocks)
if (true) {
  var blockVar = "Inside if block";
}
console.log("blockVar outside if block:", blockVar); // ✅ Accessible

// ✅ 4. VAR respects function scope
function testVarScope() {
  var insideFunction = "Inside function";
  console.log("Inside function:", insideFunction); // ✅ Works
}
testVarScope();
// console.log(insideFunction); // ❌ ReferenceError: Not accessible outside the function

// ✅ 5. VAR becomes a global object property (in non-module environments)
var x = 123;
console.log("Is x in globalThis?", Object.hasOwn(globalThis, "x")); // ✅ true
// delete x; // ❌ SyntaxError in strict mode (fails silently otherwise)

// ✅ 6. In Node.js, top-level VARs are NOT truly global — they’re module scoped
console.log("In Node.js, globalThis.x is:", globalThis.x); // ❌ undefined in Node

// ✅ 7. VAR binding list allows using earlier variables
var a = 1,
    b = a + 1,
    c = b + 1;
console.log("a, b, c:", a, b, c); // ✅ 1 2 3
