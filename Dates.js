// Date basics 

// get parts of a  date 
var newDate = new Date();


//newDate.getHours

console.log(newDate);
var newYear = newDate.getFullYear();
console.log(newYear)

var newMonth = newDate.getMonth() + 1 ;
console.log(newMonth);

x = newDate.getDate();

console.log(x);

var  today = newMonth + "-" + x + "-" + newYear;

console.log(today)
