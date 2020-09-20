// Project 
/* 
 Create a series of prompts upto 6 prompts with questions 
 Store the value of each answer into the array for six questions. 
 Answers1 -5 will need to go into the end of the array.
 Answer- 6 will need to go into the beginning of the array.
 Then I want you to remove the last item in the array

 Finally "console.log" your array

 */


/* 
var things = [];
// var t =things.length-1;
var answer ;

answer = prompt("1. What is your first favourite thing?");
things.push(answer);

answer = prompt("2.what is your second favourite thing");
things.push(answer);

answer = prompt("3.what is your third favourite thing?");
things.push(answer);

answer = prompt("4.what is your fourth favourite thing?");
things.push(answer);

answer = prompt("5.what is your fifth favourite thing?");
things.push(answer);

answer = prompt("6.what is your sixth favourite thing?");
// things.push(answer);

//console.log("List of things " + things);

things.unshift(answer);

console.log("List of unshift things " + things);

things.pop();

console.log(things);
 */
/* 
//  Merging Arrays 

 var arr1 = [1,2,3,4]
 var arr2 = [5,6,7,8]
 var arr3 =[9,10]

var newArr= arr1.concat(arr2);
var newarr= arr2.concat(arr1);

var newArr3 =arr1.concat(arr2,arr3);

console.log(newArr);
console.log(newarr);
console.log(newArr3);

// Sorting  a string  array

var arr = ["b", "a", "c"]

console.log(arr.sort());

console.log(arr.reverse());

// Sorting a number array 

var num = [25, 5, 100]

console.log(num.sort(function(a,b) {return a-b})) */
/* 
//Array foreach  and map 

var num = [1,2,3,4,5]
// foreach method will have a call =bacjk function 
num.forEach(funky);

function funky(value,index,array) {

// console.log(index + "\n")

// console.log(index + ":" + value  + "\n")
    
console.log(index + ":" + value  + " & " + array[index] + "\n")

} */
/* 
var num = [1,2,3,4,5];
var newNum;
newNum = num.map(funky);
function funky(value, index, array) {

    newNum = index + ":" + value + " & " + array[index] + " \n ";
    return newNum;

}

console.log(newNum);
 */
// array filter

var num = [1,5,10,12,15];

var even = num.filter(isEven)

    
function isEven(value, index, array) {
    
 return value % 2 == 0; 

 
}

console.log(even);







