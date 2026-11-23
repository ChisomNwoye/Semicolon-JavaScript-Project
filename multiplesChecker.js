/*
(Multiples) Write an application that reads two integers, determines whether the first
number tripled is a multiple of the second number doubled, and prints the result. [Hint: Use the remainder operator.]
*/

const prompt = require("prompt-sync")();
let number1 = parseInt(prompt("Enter First Number: "));
let number2 = parseInt(prompt("Enter Second Number: "));

let numberTrippled = number1 * 3;
let numberDoubled = number2 * 2;
if((numberTrippled % numberDoubled) == 0){
    console.log(`${number1} tripled (${numberTrippled}) is a multiple of ${number2} doubled (${numberDoubled}).`);   
    }
else{
    console.log(`${number1} tripled (${numberTrippled}) is NOT a multiple of ${number2} doubled (${numberDoubled}).`); 
    }
