/// chapter 2 problem set 
// Comments: Overall good job. Make sure to use var, let, or const when declaring variables. 
/// Exercise 1,2,3

var wage = 15; 

var hours = 40;

var pay = wage * hours;

console.log("This is you pay", pay); 

/// Exercise $ 

let previous = 19;
let current = 20;
previous = current;
current = previous;

console.log(previous,current);

/// Exercise 5 

let x = 'a';
let y = 'b';

let z;

z = x;
x = y;
y = z;

console.log(x,y);

/// exercise 6

///let c = 3;
///let d = 6;
///let e = 9;
///let results = f + g * h;
///console.log(results);



/// Exercise 7

let j = 2;
let a = 4;
let b = 8;

let result = j + a;
result *= 4 
result /= b

console.log(result);

/// exercise 8 correct answer should be 
/// boxes = 10;
/// booksperbox = 20;
/// totalBooks = boxes * booksperbox;

//In JavaScript, these variables need to be declared first. 
//You just need to add var, let, or const before each of the variables.
boxes = 10;
booksperbox = 20;
totalBooks = boxes * booksperbox;

/// exercise 9 
/// x has already been declared (This is true since I reused variables. However, this is the only correct statement)
/// == is an invalid assignment 
/// 1234 = x is invalid assignment on left hand side 

///let x = "1234";
///let y = 'Hello';
///let z = Hello;
///1234 = v; 

///exercise 10
//The logic is correct. Remember to use var/let/const when declaring variables
shares = 1000 ;
stock = 50;
com = 1 ;
stockprice = 55;

let p = shares * stock - com / 100 ;
let q = shares * stockprice - com / 100;
let profit = q - p;
console.log(profit);


/// exercise 11

let x = 10; 
let y = 15;
let z = 25;
let tax = 10/100
//To get the tax charged on the item we need to multiply the price by the tax and add it to the price
//You can calculate this once on the subtotal.
let price1 = x + tax; 
let price2 = y + tax;
let price3 = z + tax;
let subtotal = x + y + z;
let totaltax = (x + tax - x) + (y + tax - y) + (z + tax - z);
let total = price1 + price2 + price3;

console.log(x,y,z,totaltax,subtotal,total);

///exercise 12

car = 25000;
sale = 20000;

discount = car - sale;
discount2 = discount / car;

console.log(discount2);

///exercise 13

car2 = 24000;
savings = 200 / 2;

weeks = car2 / savings;

console.log(weeks);

///exercise 14

earnings = 5000

expenses = 50/100;
savings = 40/100;
nonessentials = 10/100;

budget1= earnings * expenses;
budget2=earnings * savings;
budget3=earnings * nonessentials;


console.log(earnings, budget1, budget2, budget3);