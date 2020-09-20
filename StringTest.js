// String test 

/* var  String  = "Hello";
console .log (String.length) */

var sentence = "I say Hello and you say Hello"

// Ths will find 1st occurence of String 

/* var j = sentence.indexOf("Hello")

console.log(j)

// Last occurence of tehe String 

var x = sentence.lastIndexOf("Hello")

console.log(x)

var srch = sentence.search("Hello")
console.log(srch) */
/* 
// Talking  a slice  or substring or substr
// Slice from left to right 
var str = "Happy, Excited, Calm";
var sl = str.slice(7,14);
console.log(sl);

var sl = str.slice(7);
console.log(sl);

var sl = str.slice();
console.log(sl);


// slice from right to left 
sl = str.slice(-13,-6);
console.log(sl);

sl = str.slice(-13);
console.log(sl);
 */
/* 
 // substring - Substring doesnot allow negative strings 

 var str = "Happy, Excited, Calm";

 var sb = str.substring(7,14)
 console.log(sb)

 
 var sb = str.substring(7)
 console.log(sb)

 var sb = str.substring()
 console.log(sb)
//  Substring doesnot allow negative strings 
 var sb = str.substring(-13,-6)
 console.log(sb)

 var sb = str.substring(-13)
 console.log(sb)
 */
 /* // substr

 var str = "Happy, Excited, Calm";

 var sr = str.substr(7,14)
 console.log(sr)

 var sr = str.substr(7,7)
 console.log(sr)

 var sr = str.substr(7)
 console.log(sr)

 var sr = str.substr(-13,7)
 console.log(sr)

 var sr = str.substr(-13)
 console.log(sr) */
/* 
 //Replacing content 

 var str = "I have turkey for lunch and turkey for dinner"
 //only replaces  the first instance of teh match 
 var lunch =str.replace("turkey", "Pasta")
 console.log(lunch)

// replace is case sensitive and so it will not replace the string 
 var lunch =str.replace("TURKEY", "Pasta")
 console.log(lunch)

//  if we don't want case sensitive i,e case insensitive  then replace "" with /.../i
 var lunch =str.replace(/TURKEY/i, "Pasta")
 console.log(lunch)


 // if you want to replace all the same instances then replace with /g
 var lunch =str.replace(/turkey/g, "Pasta")
 console.log(lunch)
 
// Case insensitive and replace all teh instances of teh string 
 var lunch =str.replace(/turkey/gi, "Pasta")
 console.log(lunch) */

/*  // Converting Upper , lower and Trimming 

 var  word = "happy"
 var upperword = word.toUpperCase()
 console.log(upperword)

 var  word = "HAPPY"
 var lowerword = word.toLowerCase()
 console.log(lowerword)

 
 var  sentence  = "    Hello World!    "
 var clean = sentence.trim()
 console.log(clean) */
/* 
 // converting a string into array 

 var str = "1,2,3,4,5"
 var arr = str.split(",")
 console.log(arr)


 var str = "1 2 3 4 5"
 var arr = str.split(" ")
 console.log(arr)

 
 var str = "12345"
 var arr = str.split("")
 console.log(arr)

 var str = "I have a puppy!"
 var arr = str.split(" ")
 console.log(arr) */

 /* // Converting a String to a number
 var num = "5"
 var newnum = Number(num)
 console.log(newnum)

 newnum = Number("5.5")
 console.log(newnum)

 newnum = Number("0.5")
 console.log(newnum)

 newnum = Number("  5.5")
 console.log(newnum)

 // This give a wierd  - s=we need to use only number to convert string into num
 newnum = Number("t5")
 console.log(newnum)

var num = " "
num = parseInt("5")
console.log(num)

num = parseInt("5.5")
console.log(num)

num = parseInt("0.5")
console.log(num)

num = parseInt(" 5")
console.log(num)

var num = " "
num = parseFloat("5")
console.log(num)

var num = " "
num = parseFloat("5.5")
console.log(num)

var num = " "
num = parseFloat("0.5")
console.log(num)

var num = " "
num = parseFloat(" 5")
console.log(num)
 */

// assignment 
/* 
"Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need." 

Find teh following to teh story 

1. Find all insta


*/


var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

// 1. Find all instances of "cheesburgers" and replace with hamburgers. be sure to note the casing of the word.
// 2. Find all instances on the word "bun", and capitalize all the letters

/* 
 I want following information using string methods 
    1. How many characters are in the story 
    2. How many words are in the story 
*/

// 1. Find all instances of "cheesburgers" and replace with hamburgers. be sure to note the casing of the word.

var strreplace = story.replace(/cheeseburgers/g, "hamburgers")
console.log(strreplace)

// 2. Find all instances on the word "bun", and capitalize all the letters
/* var findword = story.replace(/bun/g,"BUN")
console.log(findword) */

var findword = story.replace(/bun/g,"bun".toUpperCase())
console.log(findword)
/* 
 I want following information using string methods 
    1. How many characters are in the story 
    2. How many words are in the story 
*/

//     1. How many characters are in the story 

var charCount = story.length
console.log(charCount)

// 2. How many words are in the story 
var wordCount = story.split(" ")
console.log(wordCount)
// another method 
var wordLength = story.split(" ").length
console.log(wordLength)
