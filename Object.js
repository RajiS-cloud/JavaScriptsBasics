/* // in Objects - variables and functions should be defined 
// Key : value pair format

const circle = {

    radius : 1,
    isVisible : true,
    location : {
        x : 1,
        y : 1
    },
    draw : function() {
        console.log('draw');
    }
}

console.log(circle.radius);
console.log(circle); */

/* // 2. Object Family Tree Task

var family = {
    father: {
        firstName: "John",
        lastName: "Davis",
        IsAlive: false
    },
    mother: {
        firstName: "Catherine",
        lastName: "Davis",
        IsAlive: false
    },
    children:[
        {
        firstName: "Bruce",
        lastName: "Davis",
        IsAlive: true
       }
],
    butler: {
        firstName: "Alferd",
        lastName: "Watson",
        IsAlive: true
    },
    isRich: true

}
console.log(family);
console.log(family.mother.firstName)
console.log(family.children[0].lastName)
console.log(family.isRich)
 */

/*  // 3. Method - Onemore object we can add a library , we can add a function
// we use this to a property inside an object 
var library = {
    book: "Javascript is fun",
    movie: "Spiderman",
    checkOut: function()
    {
       console.log("You have checked out of the book" + library.book); 
       console.log("You have checked out of the book" + this.book); 
       console.log("You have checked out of the movie " + this.movie); 
    },
    checkIn: function(number)
    {
        console.log(" You have checked in "  + number + " books.");

    }
}

console.log(library.book);
console.log(library.checkOut());
console.log(library.checkIn(2)) */
/* 
// 4. Assigning new values 

var person= {
    firstName: "James",
    favNumber: 7,
    IsMarried: true,
    Chidren: [
        "Child1",
        "Child2"

    ]


}
person.firstName = "Bob";
person.favNumber = 4
person.Chidren[0] = "Kid1"

console.log(person)
 */

 // 5. Create a Object  named RestaurantMenu 
 /*
   1. Create an object named "restaurantMenu "
   2. Properties that contains
        a. The name  of the restaurant
        b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items
        c. A method that lists out all the menu items with their prices via an alert
        d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert menu Item back to teh user 

 */


 var  restaurantMenu = {

           name: "DosaPlaza", 
           items: [
               {
                   itemName: "ButterNaan ",
                   itemPrice: 3    
               },
               {
                  itemName: "GarlicNaan ",
                  itemPrice: 4
               }, 
               {
                   itemName: "CheeseNaan ",
                   itemPrice: 6
               },                
               {
                  itemName: "TikkaPaneer ",
                  itemPrice:  20
               },       
               {
                itemName: "MasalaDosa ",
                itemPrice: 22
               },       
           ],
           listMenuItems: function()
           {
               
              var menuList = ""
               for (let i = 0 ; i<=4; i++)
               {
                //    console.log(this.items[i.itemName]);
                //    console.log(this.itemName[i.itemPrice]);
                menuList += i + "." + this.items[i].itemName + "- $" + this.items[i].itemPrice + "\n"
               }
               alert(menuList)
               var answer = prompt("Which item would you like. Enter the item number");
               this.selectMenuItems(answer);
           },
           selectMenuItems: function(number)
           {
               alert(this.items[number].itemName);

           }
 }
 console.log(restaurantMenu.listMenuItems());




