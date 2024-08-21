// Assignment # 4

// Question 1
var name1,age,birthdate;

// Question 2
var a,b,c,d;
// var 3cx,c x,total-amount,@user,class;

// Question 3
// document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable <br>");
// document.write("Variables must begin with a varter, $ or _. For example $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS keywords");

// Assignment # 5

// Question 1
var a = 5;
var b = 5;
var c = a + b;
console.log("Sum of "+a+" and "+b+" is "+c);

// Question 2
var a = 5;
var b = 5;
var c = a - b;
console.log("subtraction of "+a+" and "+b+" is "+c);

var a = 5;
var b = 5;
var c = a * b;
console.log("Multiplication of "+a+" and "+b+" is "+c);

var a = 5;
var b = 5;
var c = a / b;
console.log("Division of "+a+" and "+b+" is "+c);

var a = 5;
var b = 5;
var c = a % b;
console.log("Modulus of "+a+" and "+b+" is "+c);

// Question 3
var abc;
document.write("Value after variable declaration is:: "+abc+"<br>");

abc= 50;
document.write("Initial value is:: "+abc+"<br>");

abc = ++abc;
document.write("Value after increment is:: "+abc+"<br>");

abc = abc + 7;
document.write("Value after addition is:: "+abc+"<br>");

abc = --abc;
document.write("Value after decrement is:: "+abc+"<br>");

abc = abc % 3;
document.write("The remainder is:: "+abc+"<br>");

// Question 4
var price = 600;
var cost = 5 * price;
document.write("Total cost to buy 5 tickets to a movie is "+cost+"PKR.");

// Question 5
var table = 4;
document.write("Table of 4 <br>");
document.write("4 x 1 = "+table*1+ "<br>");
document.write("4 x 2 = "+table*2+ "<br>");
document.write("4 x 3 = "+table*3+ "<br>");
document.write("4 x 4 = "+table*4+ "<br>");
document.write("4 x 5 = "+table*5+ "<br>");
document.write("4 x 6 = "+table*6+ "<br>");
document.write("4 x 7 = "+table*7+ "<br>");
document.write("4 x 8 = "+table*8+ "<br>");
document.write("4 x 9 = "+table*9+ "<br>");
document.write("4 x 10 = "+table*10+ "<br>");

// Question 6
var celsius = 32;
var f = (celsius * (9/5))+32;
document.write(celsius+"C is "+f+"F <br>");
var fahrenheit = 32;
var c = (fahrenheit - 32) * (5/9);
document.write(fahrenheit+"F is "+c+"C <br>");

// Question 7
var item_1 = 650;
var qty_1 = 3;
var item_2 = 100;
var qty_2 = 7;
var ship = 100;
var total = (item_1 * qty_1)+(item_2 * qty_2)+ship

document.write("Price of item 1 is:: "+item_1+"<br>");
document.write("Quantity of item 1 is:: "+qty_1+"<br>");
document.write("Price of item 2 is:: "+item_2+"<br>");
document.write("Quantity of item 2 is:: "+qty_2+"<br>");
document.write("Price of item 1 is:: "+item_1+"<br>");
document.write("Shipping charges:: "+ship+"<br>");
document.write("Price of item 1 is:: "+item_1+"<br> <br>");
document.write("Total cost of order is:: "+total+"<br>");

// Question 8
var total = 980;
var obtain = 804;
var per = (obtain / total)*100;
document.write("Total marks:: "+total+"<br>");
document.write("Marks obtained:: "+obtain+"<br>");
document.write("Percentage:: "+per+"% <br>");

// Question 9

var total = (10 * 104.80)+(25 * 28);
document.write("Total Currency in PKR:: "+total+"<br>");

// Question 10
var ari = (((5 + 5)*10)/2);

// QUestion 11
var current = 2016;
var birth = 1992;
var age = current - birth;
document.write("Your age is: "+age+"<br>");

// Assignment # 6
var a = 10;
document.write("The value of a is: "+a+"<br>");

a = ++a;
document.write("The value of ++a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

a = a++;
document.write("The value of a++ is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

a = --a;
document.write("The value of --a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

a = a--;
document.write("The value of a-- is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");