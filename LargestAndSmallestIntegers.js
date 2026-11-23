/*
(Largest and Smallest Integers) Write an application that reads five integers and determines and prints the largest and smallest integers in the group. Use only the programming techniques you learned in this chapter.
*/

const prompt = require("prompt-sync")();
let number1 = parseInt(prompt("Enter First Number : "));
let number2 = parseInt(prompt("Enter Second Number : "));
let number3 = parseInt(prompt("Enter Third Number : "));
let number4 = parseInt(prompt("Enter Fourth Number : "));
let number5 = parseInt(prompt("Enter Fifth Number : "));

let largest = number1;
let smallest =number1;

if(number2 > largest){
    largest = number2;
    }

if(number3 > largest){
    largest = number3;
    }
    
if(number4 > largest){
    largest = number4;
    }
    
if(number5 > largest){
    largest = number5;
    }

if(number2 < smallest){
    smallest = number2;
    }
    
if(number3 < smallest){
    smallest = number3;
    }
    
if(number4 < smallest){
    smallest = number4;
    }
    
if(number5 < smallest){
    smallest = number5;
    }

console.log(largest + " is the Largest Number");
console.log(smallest + " is the Smalest Number");
