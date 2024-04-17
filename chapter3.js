/// 1) What is a function? 
/// a regular binding where the value of that binding is a function. Help you encapsulate and make your code more generalizable and reusble 

///2) What is scope 
///     part of the program which the binding is visible. Where you can access your variables between global and local


///3) What is the difference between a global variable and local variable?
///   Global variables can be called outside of the function whereas local variables can only be called in the function 

///4) What is the difference between a parameter and an argument? 
///   A parameter is a variable in the function definition, arguments are the values that are passed to the function 

///5) 2,3 are assigned to a and b 

///6) 

function divide(x,y){
    let z = x/y
    console.log(z)
}
   

console.log(divide(16,4))

///7)
function multiply(x,y){
    let z = x*y
    console.log(z)
}

console.log(multiply(12,12))

///8)

function goal (g,p,f){
    let d = g/p*f
    console.log(d)
}
console.log(goal(10000,1000,4))

///9 amount/12 for each ingredient 

    function cupcake(amount){
        
        let multiplier = amount/12;
        let flour = 1*multiplier;
        let butter = .5*multiplier;
        let eggs = 2*multiplier;
        let milk = .5*multiplier;

        console.log(amount,flour,eggs,butter,milk)
    }
    cupcake(18)
    cupcake(6)

    function getprofit(bought,sold,shares){
        let amountSold = sold * shares;
        let amountBought = bought * shares;

        let profit = amountSold - amountBought;
        console.log(profit)
        }
    getprofit(50,75,1000)
    getprofit(100,75,1000)
function budget(income,expenses,savings,nonessentials){
        
        let e = income * expenses;
        let s = income * savings;
        let n = income * nonessentials;
        console.log(e,s,n);
}
budget(10000,.5,.4,.1)
