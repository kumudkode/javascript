// js creaters doesnt wanted to break the older code of js that are already running but also wanted to develop new js codes for improvemnt thats why they use "use sctrict"; command for only new js developers.

"use srict"; //treat all js as newer version

//alert( 3 + 3 ) // we are using nodejs not browser u can use alert command in browser
// code readibility should be high so dont use too much spaces or too low spaces in code

//"mdn javascript" just for learning but "tc39.es" ecma script are the original page for javascript for specification or standards

// DATA - TYPES
console.log("kumud");
let name = "karan"
let age = 20
let isloggedIn = false

//TYPES FOR DATA-TYPES
//------------------------
/* #Primitive Data-Types |
//------------------------
// Number = 2 to power 53 its number limit
let age = 30;
let price = 19.99;

// Bigint = for using big numbers in trading, stock market ..

// String =>
Examples:
let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;  

// Boolean => true/false
Examples: let isAdmin = true;

// Null => its an object... and standalone value or empty value.. and also its defined but empty.
Examples: let nonexistentValue = null;

// Undefined => value is not defined when variable declared without value
let name;

// Symbol => for uniqueness finding 
let id = Symbol('uniqueId');
*/
//--------------------------
/* #NonPrimitive Data-Types |
//--------------------------
//Object: COllection of Key value pairs, often used to represent complex data structure.Example:
let person = { name: 'John', age: 30 };

//Array: A collection of values, often used to represent a list or sequence of items. Example:
let colors = ['red', 'green', 'blue'];

//Function: A block of code that can be executed multiple times, often used to represent reusable logic. Example:
function greet(name) {
  console.log(`Hello, ${name}!`);
}
  
In summary, primitive data types are immutable and include Number, String, Boolean, Undefined, Null, and Symbol. 
Non-primitive data types are mutable and include Object, Array, and Function. Understanding the differences between these data types is essential for effective JavaScript programming.

*/

