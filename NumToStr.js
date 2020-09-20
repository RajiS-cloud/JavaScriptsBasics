/* // Converting Number to String 

var num = 1234 

var str

str = num.toString()

console.log (str)

(123).toString()

(123.5).toString() */

/* // exponnential 

var x = 5.556
console.log(x.toExponential(2))
console.log(x.toExponential(5)) */

/* //  number of digits after decimal

var x = 5.556
console.log(x.toFixed(2))
console.log(x.toFixed(5))
var x = 5.556
console.log(x.toPrecision(2))
console.log(x.toPrecision(5)) */

/* //  Not a number  displays NaN ( i.e not a valid number )

console.log(Number("t5"))

console.log(Number("Hello/5"))

// Math

console.log(Math.PI)

console.log(Math.round(4.4))


console.log(Math.pow(5,2))


console.log(Math.sqrt(25))


console.log(Math.ceil(8.1))

console.log(Math.floor(6.9))


console.log(Math.min(1, 2, 5 ,8,125,100,4))

console.log(Math.max(1, 2, 5 ,8,125,100,4))


console.log(Math.random(1, 2, 5 ,8,125,100,4))
 */

 // Write a function that takes in numbers . Fine Min and Max nums  as whole number no decimal 

 function random(min, max) 
  {
     
   min = math.ceil(min)
   max = math.floor(max)
    var num = Math.random() * (max - min) + min
  // var num = Math.random()
   console.log(num)
 } 

