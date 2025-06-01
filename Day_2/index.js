"use strict"; // Treat the rest of JS as newer version of JS

// alert only works in browser

/*
    
; used for ending a statement but code should be written such that it has good readability
not just so it works!

https://tc39.es/ecma262/  => Official documentation of JS, Mozilla one is for browser JS

Datatypes (Primitive):
=> number : 2**53 i think
=> bigint : greater than that
=> string : "afadgad"
=> boolean : true/false
=> null : Absence of a value / standalone value
=> undefined : something not defined yet
=> symbol : idk


=> Object

*/

let someString = "hi"
let age = 65
let someone;
let zeroDivision = null

// console.table([someString, age, someone, zeroDivision]);
// console.log(typeof someone);       // datatype of undefined is undefined.
// console.log(typeof zeroDivision);  // datatype of null is object


/*
    undefined - in itself a datatype
    null - has datatype "object"
*/

// CONVERSION BETWEEN DATATYPES

/*
    Numeric -> String [Normal]
    Numeric -> Boolean [False only if number = 0]

    String -> Boolean [False only if string is empty]
    
    String -> Numeric {
                        if only numbers in string -> Valid Number
                        if numbers and characters -> NaN {or only characters}
                        if empty                  -> 0
                    }
    
    Boolean -> Numeric [either 0/1]
    Boolean -> String ['false' or 'true']
*/ 

let some_String = true;
let convertedNumber = String(some_String);


console.log(some_String, convertedNumber)
console.log(typeof convertedNumber)



