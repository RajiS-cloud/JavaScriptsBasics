//  6. Another way of doing it 

var restaurantMenu = {
    name : "Esplanade",
    items : {
        fishCurry : 250,
        chickenBiriyani : 300,
        muttonRoganJosh : 350,
        vanillaIcecream : 75,
        jaljeeraJuice : 25
    },
    menuList : function() {
        alert("Below are the cusines we offer : " + "\n\n" + "1.) Fishcurry@Rs.250/plate" + "\n\n" + "2.) Chicken Biriyani@Rs.300/plate" + "\n\n" + "3.) MuttonRoganJosh@Rs.350/bowl" + "\n\n" + "4.) VanillaIceCrean@Rs75/scoop" + "\n\n" + "5.) JalJeeraJucie@Rs.25/glass")
    },
    chooseItem : function() {
        this.menuList()
        function myChoice(){
            var choice = parseInt(prompt("Enter your choice"), 10);       
            switch(choice) {
                case 1 :
                    alert("Fishcurry@Rs.250/plate")
                    break
                case 2 :
                    alert("Chicken Biriyani@Rs.300/plate")
                    break
                case 3 :
                    alert("MuttonRoganJosh@Rs.350/bowl")
                    break
                case 4 :
                    alert("VanillaIceCrean@Rs75/scoop")
                    break
                case 5 :
                    alert("JalJeeraJucie@Rs.25/glass")
                    break
                default :
                    alert("Invalid Choice. Please choose again")
                    myChoice()
            }
        } 
        myChoice()      
    }
}

//console.log(restaurantMenu.menuList())
console.log(restaurantMenu.chooseItem())
