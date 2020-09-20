// for /while / do-while/ for...in/ for.. of/ infinite loop

// for loop:

for (let i =0 ; i<=5; i++){
    console.log(i);
        if ( i%2 === 0)
            console.log('Hi this is Javascript');
}

//while loop:
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

// do-while - this is execute atleast once  if condition is satisfied 

let p = 1;
do{
    console.log(p);
    p++;
}
while(p<=3);

// for - in :
// this os used for fetch  the  value from objects 

const persons = {
    name: 'Raji',
    age: 25,
    city: "Auckland"

};

var x, txt ="";
for(let key in persons)
// below line will display as a structure
//console.log(key, persons[key]);
 
// another method to display as a sentence 
txt += persons[key] +  " ";
console.log("In Sentence : " + txt);
 

var myArray = Object.values(persons);
console.log("My array text is :  " + myArray);


// Array:

const colors = ['red','green','blue'];
for(let index in colors)
    console.log(index, colors[index]);


    // for -of : 
    // Especially used to get the values from array

    for(let col of colors)
    console.log(col);

    // break and continue :

let k = 0;
while(k<=10){

    if (k === 5)
        break;
    console.log(k);
    k++;

}   


