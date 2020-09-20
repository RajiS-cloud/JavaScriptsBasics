// factoryfunctions : It  produces objects 

function createCircle(radius){
    const circle = {
        radius: radius,
        draw(){
            console.log('draw');
                }
    }

    return circle;

}

const c1 = createCircle(1)
console.log(c1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5)
console.log(c2);
console.log(c2.radius);
c2.draw();

function createSquare(side1){

    const square = 
    {
        area: side1*side1,    
        
    }

    return square;
}

const a2 = createSquare(5);
//console.log(a2);

function funcSlice(){

    var fruits = ["Banana","Oranage", "Lemon", "Apple", " Mango"];
    var citrus = fruits.slice(1,3);
    console.log(citrus);

}





