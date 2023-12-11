import { allBuns, allPattys, allSauces, allToppings } from "../types/Ingredients"
import { Burger } from "../types/Burger";

export function generateRandomBurger(): Burger {
    const bunIndex = Math.floor(Math.random() * allBuns.length);
    const toppingIndex = Math.floor(Math.random() * allToppings.length);
    const sauceIndex = Math.floor(Math.random() * allSauces.length);
    const pattyIndex = Math.floor(Math.random() * allPattys.length);
  
    const randomBurger = {
      bun: allBuns[bunIndex],
      topping: allToppings[toppingIndex],
      sauce: allSauces[sauceIndex],
      patty: allPattys[pattyIndex],
    };
    return randomBurger;
  }