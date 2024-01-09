import * as Tone from 'tone'
import { Burger } from '../types/Burger'
import { Ingredient } from '../types/Ingredient'


const synth = new Tone.Synth()
const pitch = new Tone.PitchShift()
export function playNote(ingredient: Ingredient | undefined, burger: Burger) {
    if(ingredient && burger){
    pitch.pitch = burger.pitch
    synth.connect(pitch)
    pitch.toDestination()
    synth.triggerAttackRelease(`${ingredient.note}${ingredient.octave}`, "16n");
    }
}

