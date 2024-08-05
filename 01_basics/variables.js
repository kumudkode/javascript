//variables can be form in different patterns
//const accountID or const account_ID or accountId just remember it should be remember easily
// javascript have some concept keywords which do action according to commands that can be done by v8 enjine or node.js
// like if you get var, let or const then assign it to memory..... and console.log uses for print output...

//const means constant value and it wont changes  vs Var means value can be changes
const accountId = 12345
//accountId = 3 // not allowed to change cause we use ...const...

let accountEmail = "kumud@gmail.com"
accountEmail = "raj@gmail.com"// allowed and can be changes

var accountPassword = "1234"
accountPassword = "12"//allowed to changes


accountCity = "Delhi"
accountCity = "mumbai"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

//or we can write like this

console.table([accountId, accountEmail, accountPassword, accountCity]);
// its easy and change into tabular format

//-------------------------------------------------------------------------//
// js developer doesnt know that what will be the scope of javascript { var }
// curly braces are scope and cause of this we were using "var" and it changes all variables 
// so for fixing this developer introduce "let" that same work like var but only changes where it need to changes instead of all variables
// so if you have to change variable then use the "let" instead of var
//---------------------------------------------------------------------------//
/* 
prefer not to use var
because of issue in block scope and functional scope
*/
/*
Variables can be define in 3ways in javascript "name" as:

1. let name = "karan"
2. var name = "karan"
3. name = "karan"
you can use one at a time
----------console.log(name);---------------
but in current time only "let" use for defining variable🫡
*/
//============================================================================//
/*
 and if you dont define variable it is "undefined" in js example:
 */
let name;
name = "kumud";
console.log(name);





