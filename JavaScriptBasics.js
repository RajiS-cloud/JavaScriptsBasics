//datatypes
let name = 'Raji';
let age = 25;
let colour = 'red';

console.log (name+ ' ' + age);

let range = 4;
range = 5 ;
console.log(range);

const length = 6;
// length = 4;
console.log(length);

let val =85;
let s = 'Hello workd';
let price;
let isActive=true;
let model = null;
let wheels = undefined;
let flag =false;

// dynamic typing:
let d ='Testing';
d = 30;

//reference types

//1. objects:
let user ={
    name: "Tom",
    age:30
};
console.log(user);

//1. dot notation
console.log(user.name);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user.name + ' ' + user.age);

// 2. Using bracket notation;
user['name'] = 'Mary';
console.log(user.name);


// Arrays:
//List of objects

let language =['java','javascript'];
console.log(language);

console.log(language.length);
language[2]= 'Ruby';
console.log(language.length);
console.log(language[2]);
console.log(language[3]);

// 3. functions:

function getName(){
    console.log('this is my function!');
}

// call the function:
getName();

//param basesd functions:
function greet(name, age){
    console.log('hello'+ name + '' + age);

}
greet('Nameer', 24);
greet('Nameer');
greet();

// return from function :

function add(num1,num2){
    return num1 +num2;
}

let sum = add(10,20);
console.log(sum);
console.log(add(40,50));

function squareRoot(number){
    let root = number * number;
    return root;
}

console.log(squareRoot(2));
console.log(squareRoot(10));

