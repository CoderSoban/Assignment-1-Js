// Alerts
// alert("Welcome to the javascript pure programming");
// alert("Welcome to the Vscode");
// alert("learning the web development with javascript");

//Alert is a shortway of window.alert 

// window.alert("Learn Javascript")

// Variable for strings

// Javascript only remembers the value of variable and print a value not that variable

// var color = black;

// color is referring to a "black" and if  I say to javascript to print color then It prints black not that color variable
// Javascript doesn't care what variable are we using

// Variables for Numbers

// var anyNum = 34;
// var secNum = 24;
// var newNum = anyNum + secNum
// console.log(anyNum+secNum)

// If we want to specify a variable that uses as alert message so we can like
// var number = 65;
// alert(number); 

// Variables Name legal and Illegal

// A variable that contains space that is not usable
// A variable only contains number, letters, dollar signs and underscore
// Make your variable names descriptive

// Math expressions Familiar operators

// var j = 4;
// // But we can also write this
// var j = 2+2;
// alert(2 + 2);
// THis displays 4 in an alert box 
// THese are the familiars operators + - *

// This is a modulus here after 5 which is not familiar and it returns 0
// var thisNum = 5 % 2;
// console.log(thisNum)

// Math Unfamiliar operators
// num ++;
// num = num + 1;

//  This is a short way of writing..

//  num = num++  It increments the variable by 1 and ++ increases 1

//  We use decrement for minus like 
//  num--;
 
// var num = 1;
// var newNum = --num;
// console.log(num);

// Chapter 7
// Eliminating Embiguity

// var totalCost = 5+1 * 2  
// console.log(totalCost);
// Answer is 7 because In normal algebra we do sum first then multiplication
//  but in Javascript multiplication first that's why answer is 7 not 12
// var totalCost = (2 + 7) * 3;
// console.log(totalCost)

// var hereNum = ((2 * 3) * 3) + 2;

// two times product so do like that

// var herreNum = (2 * 3) * (3 + 2);

// Chapter 8
// Concatenating Text Strings 

// alert("Thank you for being here")
// or we could write like:

// var message = "Thank you for being here"
// alert(message);
// alert("Thanks, " + userName + "!");

// // We can assign a concatenate to a variable
// var message = "What's up guys ";
// var newMessage = "!"
// var userName = "Susan";
// alert(message+userName+newMessage);

// Here it is with three strings

// if we put numbes in quotes, Javascript concatenates as strings rather than adding them
// alert("3" + "3")

// If we mix strings and numbers
// alert("4 plus 4 equals " + 4 + 4);

// Chapter 9 
// Prompts
// It is asking box from a user of some information

// var info = prompt("your complete bio?" , "descriptive")

// User's response is a string whether it is a number
// var numberofcards =prompt("How many cards?");
// var tooManyCards = numberOfCats + 1;

// we can write this code like window.prompt and just only prompt is a short way

// Chapter 10
// If statements

// var x = prompt("Where does I live?")
// if (x === "Pakistan"){
//     alert("correct");
// }

// using condition without string
// var correctAnswer ="Pakistan";
// if(x === correctAnswer){
//     alert("correct");
// }

// Chapter 11
// Comparison Operator

// === It's a type of comparison operator, specifically an equality 
// operator we use to compare two things to see if they are/they're equal

// if (yourTicketNumber !== 343334){
//     alert("Better luck next time");
// }

// if(fullNmae === "Miller" + "" +"Arnonld"){
     // >is greater than
    // < is less than
    // >= is greater than or equal to 
    // <= is less than or equal to

    // Like ===, the not-equal operator can be
     // used to compare numbers, strings, variables, 
    // math expressions, and combinations.
    // Like ===, string comparisons usign the not-equal operator are case-sensitive. It's true that
    //"Rose" !== "rose"
    // Here are 4 more comparison operators, usually used to 
    // comapre numbers.
// if (1>0){


// if (0 <1){

// if (1 >=0){

// if (1 >= 1){
// if (0 <= 1){
// if (1 <=1){

// Chapter 12 
// if... else and else if statements
// It is used for when condition tested true, something happened. If the  
// condition tested false, nothing happened.

// var x = prompt("Where does the Asim live?")
// if(x == "India"){
//     alert("Right")
// }
// if(x !== "India"){
//     alert("Wrong")
// }

// if(x === "Australia") {
//     alert("THis is right country")
// }
// else{
//     alert("THis is not right country") {

    
// }

// Else if is used if all test above have failed and you
// want to test another condition.
// var correctAnswer = "Lahore";
// if (x === correctAnswer){
//     alert("correct");
// }
// else if (x === "Rome"){
//     alert("Incorrect but close")
// }
// else{ 
//     alert("Incorrect");
// }
// IN series of if tests, Javascript stops testing 
// whenever a condition tests true.

// Chapter 13 
// Testing sets of condtions

// In if statement, we've learned to ttest fo a condition.

// if (yourWeight > 300 && time < 6){
//     alert("Come to our tryout");
// }
// else{
//     alert("Come to our cookout");

// }
// if (age > 65 || age <20 && res === "U.s"){
//     This can be read in either of two Ways.
// }

// Chapter 14
// If statement nested
// Check out this code
// if ((x === y || a===b) && c ===d){
//     g=h;
//     }
//     else {
//         e = f;
// }
// else {
//     e=f;
// }

// In the code  above, if either of the first conditions is true, and, in addition, the 
// third condition is true, then g is assigned h. Otherwise, e is assigned f.
// There's another way to code this, using nesting

// if (c === d){

//     if (x === y){
//         g = h;

//     }
//     else if ( a=== b){
//         g = h;

//     }
//     {
//         else {
//             e = f;
//         }
//     }
//     else {
//         e =f;
//     }

// }

// Chapetr 15 
// Arrays

// Let's assign some string values to some variables.

// var city0 = "Lahore";
// var city1 = "Atlanta";
// var city2 = "Chciago";
// var city3 = "Saddar"
// var city4 = "Los Angeles";
// var city5 = " Seattle";
// alert("Welcome to" + city3);;

//  var cities = "Atlanta", "Baltimore","Chicago"

//  alert("Welcome to" + cities[2]);
//  var mixedArray = [1, "Bob" , "Now is", true];

// Things keep in mind 
// The firs item always has an index of 0, not 1. This means that if the last item in
// the list has an index of , there are 10 items in the list.

// Only letetrs, numbers, $ and _ are legal. The first character can't be a number. No spaces

// Chapter 16 Adding and removing elements 
// Values can be assigned in arrays after

// var pets = [];

// pets[0] = "dog"
// pets [1] = "cat";
// pets [2] = "birds";

// pop keyword  is used for  removing last element of an array 
// pets.pop() 
