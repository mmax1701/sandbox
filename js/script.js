const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    for (let i = 0; i <= this.pizzas.length - 1; i++) {
      if (pizzaName === this.pizzas[i]) {
       return onSuccess(pizzaName)
      } 
    }
   return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);


console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); // "Your order is accepted. Cooking pizza Smoked."
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); //"Error! There is no pizza with a name Vienna in the assortment."