import { useEffect, useState } from "react";
import Options from "./components/Options";
import { generateRandomBurger } from "./utilities/generateRandomBurger";
import { Burger } from "./types/Burger";
import {
  allBuns,
  allPattys,
  allSauces,
  allToppings,
} from "./types/Ingredients";
import Preview from "./components/Preview";
import { Ingredient } from "./types/Ingredient";

function App() {
  const [preview, setPreview] = useState<Burger>();

  useEffect(() => {
    randomisePreviewBurger();
  }, []);

  const updatePreview = (
    newIngredient: Ingredient,
  ) => {
    let previewCopy: any = { ...preview };
    previewCopy[newIngredient.category] = newIngredient;
    setPreview(previewCopy);
  };

  const randomisePreviewBurger = () => {
    let randomBurger = generateRandomBurger();
    setPreview(randomBurger);
  };

if(!preview){
  return <p>Loading...</p>
}
  return (
    <>
      <h1 className="text-4xl text-center">Burger Generator</h1>
      <div className="grid grid-cols-4 auto-cols-auto">
        <div className="m-2">
          <Options
            ingredients={allBuns}
            updatePreview={updatePreview}
            preview={preview}
          />
          <Options
            ingredients={allToppings}
            updatePreview={updatePreview}
            preview={preview}
          />
          <Options
            ingredients={allSauces}
            updatePreview={updatePreview}
            preview={preview}
          />
          <Options
            ingredients={allPattys}
            updatePreview={updatePreview}
            preview={preview}
          />
          <button
            className="p-2 bg-red-400 rounded-lg"
            onClick={randomisePreviewBurger}
          >
            RANDOMISE BURGER
          </button>
        </div>
        <Preview preview={preview} />
      </div>
    </>
  );
}

export default App;
