//Project

var restaurantMenu = {
    name : "Pina Azul Bistro",
    items : [
        item1 = {
            name  : "Arepa",
            price : 10,
        },
        item2 = {
            name  : "Tequeno",
            price : 12,
        },
        item3 = {
            name  : "Cachapa",
            price : 15,
        },
        item4 = {
            name  : "Empanada",
            price : 8,
        },
        item5 = {
            name  : "Pastelito",
            price : 6,
        }
    ],
    alertItems : function(){

        var menuItems = ""
        alert("Printing items available and prices...")
        
        for (var i = 0; i < this.items.length; i++)
        
        {
            var j
            menuItems += i + "." + this.items[i].name + "'s price is: " + this.items[i].price +"\n"

            j = i
         
        
        }
             
        alert(menuItems)
        
    },
    alertItem : function()
    {
        var i = 0
        i= prompt("which item number you want to list?")
       // console.log(i)
        //alert("The " + this.items[i].name + "'s price is: " + this.items[i].price)
        if  (i > this.items.length){

                 prompt("Enter the valid item number from 0-4 in the list")
                 console.log(this.alertItem())
                // alert("The " + this.items[i].name + "'s price is: " + this.items[i].price)

          
        } 
        alert("The " + this.items[i].name + "'s price is: " + this.items[i].price)
                
            
    } 
    }

  
console.log(restaurantMenu.alertItems());

console.log(restaurantMenu.alertItem())