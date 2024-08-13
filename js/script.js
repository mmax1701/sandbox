const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line

    this.potions.push(potionName);

    // Change code above this line
  },
};

console.log(atTheOldToad);

atTheOldToad.addPotion("Invisibility") //в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]