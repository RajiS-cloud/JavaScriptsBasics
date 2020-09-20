// Arithmetic 
//assignment 
//Ternary
//comparisiom
//logical
//binary

//Arithmetic
let x=10;
let y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(y/x);
console.log(2**3);

// ++ and --
let p=1;
let q=2;
let t = ++q;
console.log(q); // this will print increment 
console.log(p++); // this will print 1 and then post increment
console.log(p); // this will print 2 after increment 
console.log(q++); // This will print 3 before increment 
console.log(q); // this will print 4 after increment 
console.log(++t); // This wil show pre imcrement of q i.e 3+1 = 4

// Ternary:

/* let points = 110;
let type = points > 100 ? 'gold' : 'silver' ;
console.log(type);
*/

 // logical operators: 
// And (&&):
let highIncome = true;
let goodCreditScore =true;
let eligiblForLoan = highIncome && goodCreditScore;

console.log(eligiblForLoan);

// OR (||)

//If else
//switch case

// 6am to 12m -- Good Morning
// 12pm tp 6 pm -- Good Afternoon
// else ---Good 
let hour =15
if(hour>=6 && hour <12){
    console.log('good morning');
    console.log('good morning', Raji)
}


else if (hour >=12 && hour <= 18)
console.log('good afternoon')
else  console.log ('good evening');

// We have to write the max number 

a = 400;
b = 300;
c = 200;

if (a>b && b>c) console.log('a is the greatest...');
else if (b > c ) console.log( 'b is greatest');
else console.log(' c is the greatest!!');

// Switch 

let role = 'vendor';
switch(role) {
    case 'guest':
        console.log('guest user');
    break;
    case 'admin' :
        console.log('admin user');
    break;
    case 'vendor':
        console.log('vendor user');
    break;  
    default :
       console.log('no user');
    break;
}
// role with if-else 
if(role === 'guest') console.log('guest user');
else if(role === 'admin') console.log('admin user');
else if (role ==='vendor') console.log('vendor user');
else console.log('no user');


