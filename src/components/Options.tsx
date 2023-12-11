import React from "react";
import { Burger } from "../types/Burger";
import { Ingredient } from "../types/Ingredient";

type OptionsProps = {
  ingredients: Ingredient[];
  updatePreview: (
    newIngredient: Ingredient
  ) => void;
  preview: Burger;
};

const Options = ({
  ingredients,
  updatePreview,
  preview,
}: OptionsProps) => {
  const optionsInput = ingredients.map((ingredient) => {
    let buttonStyles = "m-2 p-1 rounded-md";
    if(preview[ingredient.category].name== ingredient.name){
      return(<>
        <button
          className={`bg-red-300 ${buttonStyles}`}
          onClick={() => updatePreview(ingredient)}
        >
          {ingredient.name}
        </button>
      </>)
    }
    return (
      <>
        <button
          className={`bg-green-300 ${buttonStyles}`}
          onClick={() => updatePreview(ingredient)}
        >
          {ingredient.name}
        </button>
      </>
    );
  });
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
