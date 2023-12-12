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
import { playNote } from "./utilities/playNote";
import { playChord } from "./utilities/playChord";
import { assignNotes } from "./utilities/assignNotes";

function App() {
  const [preview, setPreview] = useState<Burger>();
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);

  useEffect(() => {
    randomisePreviewBurger();
    assignNotes(allBuns)
    assignNotes(allPattys)
    assignNotes(allSauces)
    assignNotes(allToppings)
  }, []);

  useEffect(() => {
    playChord(preview)
  },[preview])

  const updatePreview = (
    newIngredient: Ingredient,
  ) => {
    let previewCopy: any = { ...preview };
    previewCopy[newIngredient.category] = newIngredient;
    setPreview(previewCopy);
    playNote(newIngredient)
  };

  const randomisePreviewBurger = () => {
    let randomBurger = generateRandomBurger(vegan, vegetarian);
    setPreview(randomBurger);
  };

if(!preview){
  return <p>Loading...</p>
}
  return (
    <>
      <h1 className="text-4xl text-center">Music Burgers</h1>
      <div className="grid grid-cols-4 auto-cols-auto">
        <div className="m-2">
          <Options
            ingredients={allBuns}
            updatePreview={updatePreview}
            preview={preview}
            vegan={vegan}
            vegetarian={vegetarian}
          />
          <Options
            ingredients={allToppings}
            updatePreview={updatePreview}
            preview={preview}
            vegan={vegan}
            vegetarian={vegetarian}
          />
          <Options
            ingredients={allSauces}
            updatePreview={updatePreview}
            preview={preview}
            vegan={vegan}
            vegetarian={vegetarian}
          />
          <Options
            ingredients={allPattys}
            updatePreview={updatePreview}
            preview={preview}
            vegan={vegan}
            vegetarian={vegetarian}
          />
          <button
            className="p-2 bg-red-400 rounded-lg"
            onClick={randomisePreviewBurger}
          >
            RANDOMISE BURGER
          </button>
          <p><input type="checkbox" onClick={()=>setVegan(!vegan)}/>    vegan</p>
          <p><input type="checkbox" onClick={()=>setVegetarian(!vegetarian)}/>    vegetarian</p>
        </div>
        <Preview preview={preview} playChord={playChord}/>
      </div>
    </>
  );
}

export default App;
