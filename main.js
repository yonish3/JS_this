const coffeeShop = {
    beans: 40,
    money: 100,
    beansPrice: 2,
  

    drinkRequirements: {
      latte: {beanRequirements: 10, price: 20},
      americano: {beanRequirements: 5, price: 10},
      doubleShot: {beanRequirements: 15, price: 30},
      frenchPress: {beanRequirements: 12, price: 24}
    },

    buyBeans: function(x){
        this.money+=-x*2
        this.beans+=x

    },

    buyDrink: function(drinkType){
        let drinkKeyes = Object.keys(this.drinkRequirements)
        let checkpoint = false
        for (const drink of drinkKeyes) {
            if (drink==drinkType) {      
                this.money+=this.drinkRequirements[drinkType].price
                return
            }
        }
    },
  
    makeDrink: function(drinkType){
        let drinkKeyes = Object.keys(this.drinkRequirements)
        let checkpoint = false
        for (const drink of drinkKeyes) {
            if (drink==drinkType) {
                if (this.beans<this.drinkRequirements[drink].beanRequirements) {
                    console.log("Sorry, we're all out of beans")
                    console.log("let me go buyyy some dear")
                    this.buyBeans(this.drinkRequirements[drink].beanRequirements)
                    
                }
                this.beans+= -this.drinkRequirements[drink].beanRequirements
                checkpoint=true
            }
        }
        if (!checkpoint){
            console.log("Sorry, we don't make")
        }else{
            this.buyDrink(drinkType)
        }
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  

//   const coffeeShop = {
//     beans: 40,
//     money: 100,
//     beansPrice: 2,
  
//     drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },

//     buyBeans: function(x){
//         this.money+=-x*2
//         this.beans+=x

//     },
  
//     makeDrink: function (drinkType) {
//         let drinkKeyes = Object.keys(this.drinkRequirements)
//         let checkpoint = false
//         for (const drink of drinkKeyes) {
//             if (drink==drinkType) {
//                 if (this.beans<this.drinkRequirements[drink]) {
//                     console.log("Sorry, we're all out of beans")
//                     console.log("let me go buyyy some dear")
//                     this.buyBeans(this.drinkRequirements[drink])
                    
//                 }
//                 this.beans+= -this.drinkRequirements[drink]
//                 checkpoint=true
//             }
//         }
//         if (!checkpoint){
//             console.log("Sorry, we don't make")
//         }
//     }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  

  