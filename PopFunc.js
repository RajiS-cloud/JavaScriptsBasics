function pop_Function(p)
{
    var x = p;
    var n = p.length-1;
    x.pop();
    x.push();
    return x;

}

function push_Function(q)
{
    var y= q;
    var n = q.length-1;
    //var y = pop_Function(p);
    y.push();
    return y;
}

function shift_Function(s)
{
    var s1= s;
    var n = s.length-1;
    //var y = pop_Function(p);
    s1.shift();
    return s1;
}

function unshift_Function(us)
{
    var s2= us;
    var n = us.length-1;
    //var y = pop_Function(p);
    s2.unshift();
    return s2;
}



var p = ["Banana", "Orange", "Apple", "Mango", "Pear", "gauva", "grape", "plum"] ;
console.log(pop_Function(p));
p.push("Kiwi", "Peach");
console.log(push_Function(p));
//p.reverse();
console.log(p.reverse());
// Shiift removes the 1st element in the array list 
p.shift();
console.log(shift_Function(p));

// UnShiift adds the 1st element in the array list 
p.unshift("peach2");
console.log(unshift_Function(p));

// to remove two elements from teh array from the index 2 
p.splice(2,2)
console.log(p);

p.splice(3,1,"lemon", "kiwi");
console.log(p);

//  remove one element at the index 2 upto index 4 and add two element inbetween 

var q = p.slice(2,5);
console.log(q);


/* var p = ["one", "three", "four", "two"] ;
console.log(pop_Function(p)); */

// reduce fucntion will substract the as 275 - (175)
// reduceright func will add 1st two and substract from 3rd element
// i.e reduce right will do - (275+150) +25
function reduce_Func(total,num)
{
    return total- num;
    
}
var numbers = [275, 150, 25];
console.log (numbers.reduce(reduce_Func));
console.log(numbers.reduceRight(reduce_Func));


