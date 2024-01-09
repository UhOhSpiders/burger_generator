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
import SettingsButton from "./components/SettingsButton";

function App() {
  const [preview, setPreview] = useState<Burger>();
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
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

if(!preview){
  return <p>Loading...</p>
}
  return (
    <>
  
      <div className="grid grid-cols-4 auto-cols-auto m-2">
        <div>
        <div className="bg-purple-200 p-2 rounded row-start-2 m-1">
      <h1 className="text-3xl pt-2">MUSICAL BURGERS</h1>
          <SettingsButton onClick={randomisePreviewBurger} text={"RANDOMISE BURGER"}/>
          <p><input type="checkbox" onClick={()=>setVegan(!vegan)}/>    vegan</p>
          <p><input type="checkbox" onClick={()=>setVegetarian(!vegetarian)}/>    vegetarian</p>
          <div className="flex items-center"><p>Increment Pitch: </p>
          <SettingsButton onClick={()=>incrementPitch()} text={"+"} />
          <SettingsButton onClick={()=>decrementPitch()} text={"-"} /></div>
          <SettingsButton onClick={()=>resetPitch()} text={"reset pitch"} />
          </div>
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
          
        <div className="col-span-3 bg-gradient-to-t from-yellow-200 to-white-200 m-2  outline-gray-500 outline-3 rounded" onClick={()=>playChord(preview)}>
        <Preview preview={preview}/>
        </div>
      </div>
    </>
  );
}

export default App;
