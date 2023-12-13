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
import Gallery from "./components/Gallery";

function App() {
  const [preview, setPreview] = useState<Burger>();
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [saved, setSaved] = useState<Burger[]>([])
  const pitchShiftInterval = 2

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
    playNote(newIngredient, previewCopy)
  };

  const randomisePreviewBurger = () => {
    let randomBurger = generateRandomBurger(vegan, vegetarian);
    setPreview(randomBurger);
  };

  const incrementPitch = () => {
    let previewCopy: any = { ...preview };
    previewCopy.pitch += pitchShiftInterval
    setPreview(previewCopy);
  }

  const decrementPitch = () => {
    let previewCopy: any = { ...preview };
    previewCopy.pitch -= pitchShiftInterval
    setPreview(previewCopy);
  }

  const resetPitch = () => {
    let previewCopy: any = { ...preview };
    previewCopy.pitch = 0
    setPreview(previewCopy);
  }

  const saveBurger = () => {
    let savedCopy = [...saved]
    let previewCopy: any = {...preview}
    savedCopy.push(previewCopy)
    setSaved(savedCopy)
    setPreview(previewCopy)
  }

if(!preview){
  return <p>Loading...</p>
}
  return (
    <>
      <h1 className="text-3xl text-center pt-2">MUSICAL BURGERS DOT COM</h1>
      <div className="grid grid-cols-4 grid-rows-2 auto-cols-auto m-2">
        <div>
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

        </div>
          <div className="bg-purple-200 p-2 rounded row-start-2">
          <button
            className="p-2 m-1 bg-red-400 rounded-lg"
            onClick={randomisePreviewBurger}
          >
            RANDOMISE BURGER
          </button>
          <button className="p-2 m-1 bg-red-400 rounded-lg" onClick={saveBurger}>SAVE FOR LATER</button>
          <p><input type="checkbox" onClick={()=>setVegan(!vegan)}/>    vegan</p>
          <p><input type="checkbox" onClick={()=>setVegetarian(!vegetarian)}/>    vegetarian</p>
          <button onClick={()=>incrementPitch()}>+</button>
          <button onClick={()=>decrementPitch()}>-</button>
          <button onClick={()=>resetPitch()}>reset</button>
          </div>
        <Preview preview={preview} playChord={playChord}/>
        <Gallery saved={saved}/>
      </div>
    </>
  );
}

export default App;
