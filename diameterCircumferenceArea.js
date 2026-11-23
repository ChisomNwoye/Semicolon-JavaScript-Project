/*
(Diameter, Circumference and Area of a Circle) Here’s a peek ahead. In this chapter, you learned about integers and the type int. Java can also represent floating-point numbers that contain decimal points, such as 3.14159. Write an application that inputs from the user the radius of a circle as an integer and prints the circle’s diameter, circumference and area using the floating-point value 3.14159 for π. [Note: You may also use the predefined con-stant Math.PI for the value of π. This constant is more precise than the value 3.14159. Classes in that package are imported automatically, so you do not need to import class Math to use it.] Use the following formulas (r is the radius):
diameter = 2r
circumference = 2πr
area = πr 2
Do not store the results of each calculation in a variable. Rather, specify each calculation as the value that will be output in a System.out.printf statement. The values produced by the circum-ference and area calculations are floating-point numbers. Such values can be output with the for-mat specifier %f in a System.out.printf statement.
*/

const prompt = require("prompt-sync")();
let radius = parseFloat(prompt("Enter Radius: "));

let pi = 3.14159;
let diameter = 2*radius;
let circumference = 2*pi*radius;
let area = pi*(radius)**2;

console.log("Diameter: "+ diameter.toFixed(3));
console.log("Circumference: "+ circumference.toFixed(3));
console.log("area: "+ area.toFixed(3));
