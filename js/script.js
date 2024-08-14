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
    for (i = 0; i <= this.potions.length - 1; i += 1) {
      if (this.potions[i].name === newPotion.name) {
        return `Error! Potion ${this.potions[i].name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  
  removePotion(potionName) {
    for (i = 0; i <= this.potions.length-1; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        break;
      }
    }  return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (i = 0; i <= this.potions.length-1; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        break;
      }
    }  return `Potion ${oldName} is not in inventory!`;
  }
};





console.log(atTheOldToad);

atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })