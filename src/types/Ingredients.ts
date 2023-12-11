import { Ingredient } from "./Ingredient";

const brioch: Ingredient = {
    name: "brioch",
    vegan: false,
    vegetarian: true,
    category: "bun"
}

const wholeWheat: Ingredient = {
    name: "whole-wheat",
    vegan: true,
    vegetarian: true,
    category: "bun"
}

const classic: Ingredient = {
    name: "classic",
    vegan: true,
    vegetarian: true,
    category: "bun"
}

const mushrooms: Ingredient = {
    name: "mushrooms",
    vegan: true,
    vegetarian: true,
    category: "topping"
}

const lettuce: Ingredient = {
    name: "Lettuce",
    vegan: true,
    vegetarian: true,
    category: "topping"
  };
  
  const tomato: Ingredient = {
    name: "Tomato",
    vegan: true,
    vegetarian: true,
    category: "topping"
  };
  
  const cheese: Ingredient = {
    name: "Cheese",
    vegan: false,
    vegetarian: true,
    category: "topping"
  };

  const bacon: Ingredient = {
    name: "Bacon",
    vegan: false,
    vegetarian: false,
    category: "topping"
  };

  const ketchup: Ingredient = {
    name: "Ketchup",
    category: "sauce",
    vegan: true,
    vegetarian: true,
  };
  
  const mustard: Ingredient = {
    name: "Mustard",
    category: "sauce",
    vegan: true,
    vegetarian: false,
  };
  
  const mayo: Ingredient = {
    name: "Mayonnaise",
    category: "sauce",
    vegan: false,
    vegetarian: true,
  };
  
  const BBQ: Ingredient = {
    name: "BBQ Sauce",
    category: "sauce",
    vegan: false,
    vegetarian: false,
  };
  
  const hotSauce: Ingredient = {
    name: "Hot Sauce",
    category: "sauce",
    vegan: true,
    vegetarian: true,
  };

  const beef: Ingredient = {
    name: "Beef Patty",
    category: "patty",
    vegan: false,
    vegetarian: false,
  };
  
  const chicken: Ingredient = {
    name: "Chicken Patty",
    category: "patty",
    vegan: false,
    vegetarian: false,
  };
  
  const tofu: Ingredient = {
    name: "Tofu Patty",
    category: "patty",
    vegan: true,
    vegetarian: true,
  };


export const allBuns = [brioch, wholeWheat, classic];

export const allToppings = [mushrooms, bacon, lettuce, cheese, tomato];

export const allSauces = [ketchup, mustard, mayo, BBQ, hotSauce];

export const allPattys = [beef, chicken, tofu];