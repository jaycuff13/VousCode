/// 1) What is a function? 
/// a regular binding where the value of that binding is a function

///2) What is scope 
///     part of the program which the binding is visible

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
