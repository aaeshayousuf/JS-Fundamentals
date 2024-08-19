//Declare variables using const for your name, age, and height. Assign appropriate values to these variables.

const name = "Aishah";
console.log(name);
const age = "30";
console.log(age);
const height = "165cm";
console.log(height);

//Declare variables using let for your bio and address. ReAssign the value for address and log out the response.

let bio = "Full-stack developer student at Labano Academy";
console.log(bio);
let address = "Lagos, Nigeria";
address = "Ketu, Lagos, Nigeria";
console.log(address);

//Create two string variables, firstName and lastName. Assign your first name and last name to these variables.

let firstName = "Aishah";
let lastName = "Yusuf";

//Concatenate these two strings with a space in between to form your full name and print it to the console.

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//to get the fullname length
let fullNameLength = fullName.length;
console.log(fullNameLength);

//to convert the fullname to uppercase and lowercase
let upperCase = fullName.toUpperCase();
console.log(upperCase);

let lowerCase = fullName.toLowerCase();
console.log(lowerCase);

//Use template literals to create a message that includes your name, age, and height.

const info = `my name is ${name}, I am ${age} years old and my height is ${height}.`;
console.log(info);

//Extract and print the first 5 characters of your full name.
let sliceFullName = fullName.slice(0, 5);
console.log(sliceFullName);

//Declare variables for two numbers and perform addition, subtraction, multiplication, and division with these numbers. Print the results to the console.

let num1 = 20;
let num2 = 40;

let result1 = num1 + num2;
console.log(result1);

let result2 = num2 - num1;
console.log(result2);

let result3 = num1 * num2;
console.log(result3);

let result4 = num2 / num1;
console.log(result4);

//Math.round(): Round a decimal number to the nearest integer.
let mathRound = Math.round(4.5);
console.log(mathRound);

//Math.floor(): Round a decimal number down to the nearest integer.
let mathFloor = Math.floor(4.6);
console.log(mathFloor);

//Math.ceil(): Round a decimal number up to the nearest integer.
let mathCeil = Math.ceil(4.4);
console.log(mathCeil);

//Math.max(): Find the maximum value among a list of numbers.
let maxNum = Math.max(2, 4, 10, 20);
console.log(maxNum);

//Math.min(): Find the minimum value among a list of numbers.
let minNum = Math.min(1, 2, 4, 5, 7, 10);
console.log(minNum);