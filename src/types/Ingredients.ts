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
    name: "lettuce",
    vegan: true,
    vegetarian: true,
    category: "topping"
  };
  
  const tomato: Ingredient = {
    name: "tomato",
    vegan: true,
    vegetarian: true,
    category: "topping"
  };
  
  const cheese: Ingredient = {
    name: "cheese",
    vegan: false,
    vegetarian: true,
    category: "topping"
  };

  const bacon: Ingredient = {
    name: "bacon",
    vegan: false,
    vegetarian: false,
    category: "topping"
  };

  const ketchup: Ingredient = {
    name: "ketchup",
    category: "sauce",
    vegan: true,
    vegetarian: true,
  };
  
  const mustard: Ingredient = {
    name: "mustard",
    category: "sauce",
    vegan: true,
    vegetarian: false,
  };
  
  const mayo: Ingredient = {
    name: "mayonnaise",
    category: "sauce",
    vegan: false,
    vegetarian: true,
  };
  
  const BBQ: Ingredient = {
    name: "BBQ",
    category: "sauce",
    vegan: false,
    vegetarian: false,
  };
  
  const hotSauce: Ingredient = {
    name: "hot-sauce",
    category: "sauce",
    vegan: true,
    vegetarian: true,
  };

  const beef: Ingredient = {
    name: "beef",
    category: "patty",
    vegan: false,
    vegetarian: false,
  };
  
  const chicken: Ingredient = {
    name: "chicken",
    category: "patty",
    vegan: false,
    vegetarian: false,
  };
  
  const tofu: Ingredient = {
    name: "tofu",
    category: "patty",
    vegan: true,
    vegetarian: true,
  };
  const squareSausage: Ingredient = {
    name: "square-sausage",
    category: "patty",
    vegan: false,
    vegetarian: false,
  };



export const allBuns = [brioch, wholeWheat, classic];

export const allToppings = [mushrooms, bacon, lettuce, cheese, tomato];

export const allSauces = [ketchup, mustard, mayo, BBQ, hotSauce];

export const allPattys = [beef, chicken, tofu, squareSausage];