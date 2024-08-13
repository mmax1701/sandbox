const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion === newPotion) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
  } this.potions.push(newPotion);
  },
  
  removePotion(potionName) {
    
  },
};



console.log(atTheOldToad);
atTheOldToad.removePotion("Dragon breath")