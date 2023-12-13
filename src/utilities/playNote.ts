import * as Tone from 'tone'
import { Burger } from '../types/Burger'


const synth = new Tone.Synth()
const pitch = new Tone.PitchShift()
export function playNote(ingredient, burger) {
    pitch.pitch = burger.pitch
    synth.connect(pitch)
    pitch.toDestination()
    synth.triggerAttackRelease(`${ingredient.note}${ingredient.octave}`, "16n");
}

