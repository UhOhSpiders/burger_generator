import React from 'react'
import { Ingredient } from '../types/Ingredient'
import { Burger } from '../types/Burger';

type ButtonProps = {
    ingredient: Ingredient;
    preview: Burger;
    updatePreview: (
        newIngredient: Ingredient
      ) => void;
    vegan: boolean;
    vegetarian: boolean
}

const Button = ({
    ingredient,
    preview,
    updatePreview,
    vegan,
    vegetarian
}: ButtonProps) => {
    let buttonStyles = "m-2 p-1 rounded-md";
     if(vegan && !ingredient.vegan || vegetarian && !ingredient.vegetarian){
        return(
            <>
          <button
            className={`bg-gray-400 ${buttonStyles}`}
          >
            {ingredient.name}
          </button>
        </>
        )
     }
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
}

export default Button