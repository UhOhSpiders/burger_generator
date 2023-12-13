import { allBuns, allPattys, allSauces, allToppings } from "../types/Ingredients"
import { Burger } from "../types/Burger";
import { getIngredientsByDiet } from "./getIngredientsByDiet";

export function generateRandomBurger(vegan: boolean, vegetarian: boolean): Burger {
  let filteredBuns = allBuns
  let filteredToppings = allToppings
  let filteredSauces = allSauces
  let filteredPattys = allPattys
  if(vegan){
    filteredBuns = getIngredientsByDiet(allBuns, "vegan")
    filteredToppings = getIngredientsByDiet(allToppings, "vegan")
    filteredSauces = getIngredientsByDiet(allSauces, "vegan")
    filteredPattys = getIngredientsByDiet(allPattys, "vegan")
  }else if(vegetarian){
    filteredBuns = getIngredientsByDiet(allBuns, "vegetarian")
    filteredToppings = getIngredientsByDiet(allToppings, "vegetarian")
    filteredSauces = getIngredientsByDiet(allSauces, "vegetarian")
    filteredPattys = getIngredientsByDiet(allPattys, "vegetarian")
  }
    const bunIndex = Math.floor(Math.random() * filteredBuns.length);
    const toppingIndex = Math.floor(Math.random() * filteredToppings.length);
    const sauceIndex = Math.floor(Math.random() * filteredSauces.length);
    const pattyIndex = Math.floor(Math.random() * filteredPattys.length);
  
    const randomBurger = {
      bun: filteredBuns[bunIndex],
      topping: filteredToppings[toppingIndex],
      sauce: filteredSauces[sauceIndex],
      patty: filteredPattys[pattyIndex],
      pitch: 0
    };
    return randomBurger;
  }