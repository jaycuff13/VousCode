////1 

const { ZERO } = require("@drift-labs/sdk")

    function age(y){
        if(y >= 17){
            console.log('adult')
        }else{
            console.log('child')
        }
    } 

    age(18)
///2
    function number(n){
        if(n >= 1){
            console.log("true")
        }else if(n <= 100){
            console.log("true")
        }else{
            console.log("false")
        }
    }
    number(-1)
///3

    function num(x){
        if(x < 1){
            console.log('in range')
        }else if(x < 100){
            console.log('in range')
        }else{
            console.log('out of range')
        }
    }

    num(13)
///4
    function day(x){
        if(x > 5 && x <= 7){
            console.log('weekend')
        }else if( x < 5 && x > 1){
            console.log('weekday')
        }
    }

    day(4)
    ///5
    function wage(x,y){
        let z = x * y 
        if (y > 40){
            (y - 40 * 1.5)
        } else {
            console.log('no overtime')
        }
        console.log(z)
    }

    wage(15.50,40)

    ///6
    
    
    ///7

    function number(n){
        if(n > 0){
            console.log("number is positive")   
        }else if(n = 0){
            console.log('number is zero')
        }else{
            console.log("number is negative")
        }
    }

    number(-1)

    ///8

    function even(n){
        if (n % 2 == 0){
            console.log('Even')
        }else{
            console.log("Odd")
        }
    }

    even(17)
///9
    function odd(x,y){
        if (x % y == 0){
            console.log('even')
        }else{
            console.log('odd')
        }

    }
    odd(19,2)
    ///10
    function grade(n){
        if(n >= 90 ){
            console.log('A')
        }else if(n >= 85){
            console.log('B')
        }else if(n >= 75){
            console.log('C')
        }else if(n >= 65){
            console.log('D')
        }else{
            console.log('F')
        }
    }

    grade(86)

    ///11
        function fizzbuzz(x){
            if(x % 3 == 0){
                console.log('fizz')
            }else if(x % 5 == 0){
                console.log('buzz')
            }else if(x % 3 == 0 && x % 5 == 0){
                console.log('fizzbuzz')
            }else{
                console.log(x)
            }
        }
    fizzbuzz(43)

    //12
        function leapyear(n){
            if(n % 4 == 0 ){
                console.log('Its a leap year')
            }else{
                console.log('its not a leap year')
            }
        }
    leapyear(1999)
    
    
    
    
    
    //14
        function cToF(celsius){
            var cTemp = celsius;
            var cToFahr = cTemp * 9 / 5 + 32;
            var message = cTemp+'\xB0C is' + cToFahr + '\xB0F.';
            console.log(message)
        }

        function fToC(fahrenheit){
            var fTemp = fahrenheit;
            var fToCel = (fTemp - 32) * 5 / 9;
            var message = fTemp+'\xB0F is' + fToCel + '\xB0C.';
            console.log(message)
        }

        cToF(10)
        fToC(99)

    ///15

        