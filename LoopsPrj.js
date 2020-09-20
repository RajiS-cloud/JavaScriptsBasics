
// basic For loop example 
/* var answer = prompt("Type YES or NO");
var answers = ["YES", "NO"];
var responses= ["You said YES", "You said NO", "You didn't follow directions" ];

for(var i=0; i < 2; i++){

    if ( answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    } else if (answer == answers[i]){

        console.log(responses[i])
    }

} */

// nested for loop 

var numbers = [1, 2, 3, 4, 5];
var letters = ["a", "b", "c"];

for ( var i = 0 ; i < 5; i++){
    console.log(numbers[i])
    for(var j= 0; j < 3; j++)
    {
        console.log(letters[j]);

    }

}

