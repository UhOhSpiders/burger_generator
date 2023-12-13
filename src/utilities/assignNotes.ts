import { Ingredient } from "../types/Ingredient";

export function assignNotes(ingredients: Ingredient[]){
    const scale: string[] = ["C#","D#","F#","G#","A#"]
    // const scale: string[] = ["D","E","F#","G#","A#", "C", "D"]
    // const scale: string[] = ["C","D","E","F","G","A","B"]
    let noteIndex = 0
    let result = ingredients.forEach((ingredient) => {
        ingredient.pitch = 0
        ingredient.note = scale[noteIndex]
        noteIndex++
        if(noteIndex === scale.length){
            noteIndex=0
        }
      switch(ingredient.category){
        case "bun":
            console.log("bun")
            ingredient.octave = 2
            break;
        case "topping":
            console.log("topping")
            ingredient.octave = 4
            break;
        case "sauce":
            console.log("sauce")
            ingredient.octave = 5
            break;
        case "patty":
            console.log("patty")
            ingredient.octave = 6
            break;
        default:
            console.log(ingredient.name)
      }
    })
    return result
}