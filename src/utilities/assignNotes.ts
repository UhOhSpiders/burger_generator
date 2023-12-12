import { Ingredient } from "../types/Ingredient";

export function assignNotes(ingredients: Ingredient[]){
    const scale: string[] = ["C#","D#","F#","G#","A#"]
    
    let result = ingredients.forEach((ingredient) => {
        const noteIndex = Math.floor(Math.random() * scale.length)
        ingredient.note = scale[noteIndex]
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
            ingredient.octave = 7
            break;
        default:
            console.log(ingredient.name)
      }
    })
    return result
}