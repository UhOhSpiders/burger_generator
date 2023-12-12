import React from "react";
import { Burger } from "../types/Burger";
import { Ingredient } from "../types/Ingredient";
import Button from "./Button";

type OptionsProps = {
  ingredients: Ingredient[];
  updatePreview: (
    newIngredient: Ingredient
  ) => void;
  preview: Burger;
  vegan: boolean;
  vegetarian: boolean
};

const Options = ({
  ingredients,
  updatePreview,
  preview,
  vegan,
  vegetarian
}: OptionsProps) => {
  
const optionsInput = ingredients.map((ingredient) => {
  return(<Button ingredient={ingredient} preview={preview} updatePreview={updatePreview} vegan={vegan} vegetarian={vegetarian}/>)
})

  return (
    <div className="bg-yellow-200 mb-2 p-4 rounded">
      <h2 className="text-3xl font-bold underline">
        {ingredients[0].category}
      </h2>
      {optionsInput}
    </div>
  );
};

export default Options;
