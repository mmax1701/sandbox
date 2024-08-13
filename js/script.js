const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

    let idx = this.potions.indexOf(oldName)
    return this.potions.splice(idx, 1, newName)

    // Change code above this line
  },
};

console.log(atTheOldToad);

atTheOldToad.updatePotionName("Dragon breath", "Polymorth") //в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]