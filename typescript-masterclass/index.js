"use strict";
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));
// console.log(addNumbers("text", 3));
/**
 * String types
 */
var firstname = "John";
// firstname = 1;
let automobile = "BMW";
const city = "New York";
let students = 32;
let studentsAsString = students.toString();
/**
 * Number types
 */
var age = 32;
let year = 2024;
const numberOfNumbers = 61;
let stringToNumber = parseInt("1985");
/**
 * Boolean types
 */
let isStudent = true;
const alwaysStudent = true;
let minimumAge = age > 6 ? true : false;
/**
 * null and undefined types
 */
let user;
console.log(user);
let userRole;
userRole = null;
console.log(userRole);
console.log(userRole === user);
if (!userRole) {
    console.log("This condition is true");
}
if (!user) {
    console.log("This condition is true");
}
/**
 * bigInt types
 */
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
let bigInt1 = BigInt(1234);
let bigInt2 = 123456789n;
console.log(bigInt1);
console.log(bigInt2);
let c = bigInt1 - bigInt2;
// let f = Math.log(bigInt1);
/**
 * Symbol types
 */
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user1 = {
    [id]: "1234",
    name: "Mark",
    getId() {
        return this[id];
    }
};
console.log(user1.name);
// console.log(user1.id);
console.log(id);
console.log(user1.getId());
/**
 * Practice: The Primitive Types
 */
let message = "Hello, Typescript!";
let age1 = 42;
let isStudent1 = true;
let fetched = null;
let user2 = undefined;
let largeNumber = 12345678901234567890n;
let unique = Symbol("uniqueSymbol");
