import { Ingredient } from "../types/Ingredient";

export function getIngredientsByDiet(ingredients: Ingredient[], dietKey: keyof Ingredient): Ingredient[]{
    let filteredIngredients = ingredients.filter((ingredient)=> ingredient[dietKey] === true)
    return filteredIngredients
}