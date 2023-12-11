import { allBuns, allToppings, allSauces, allPattys } from "./Ingredients";

export type Burger = {
  bun: (typeof allBuns)[number];
  topping: (typeof allToppings)[number];
  sauce: (typeof allSauces)[number];
  patty: (typeof allPattys)[number];
} | undefined;