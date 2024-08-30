//let score = "33abc"
//change value to 33 for numbers then "33" for string then "33abc" for checking its original value without typeof
//score = null, score = undefined, score = name cause it can not convert into number so we can have NAN 
// remember only score ="83465783" any number strings can be convert into number

//console.log (typeof score);
//console.log (typeof (score));

// if we use let score = 33 means its a number but when we use double quote 
// then it means its a string. score have value of string now...

/* Here Below we are converting string into Numbers */
//let valueInNumber = Number(score)

//when we chek its type it says number but if we change from 33 to 33abc it typeof still shows number
//console.log (typeof valueInNumber);

// but here when it check 33abc using this you will get NaN means NOT a Number
//console.log(valueInNumber)

//--------------------------------------------------------------------------------------------------------------
// true = 1 , false = 0
// ' ' = false, " Hello " = true

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
//---------------------------------------------------------------------------

let someNumber = 55
let stringNumber = String ( someNumber )

console.log(stringNumber);
console.log(typeof stringNumber);


