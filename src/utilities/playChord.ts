import * as Tone from 'tone'
import { Burger } from '../types/Burger';

const synth = new Tone.PolySynth(Tone.Synth)
const pitch = new Tone.PitchShift()
const reverb = new Tone.Reverb(5)
export function playChord(burger: Burger) {
    if(burger){
    pitch.pitch = burger.pitch
    }
    synth.connect(pitch)
    pitch.connect(reverb)
    reverb.toDestination()
    if (burger) {
        const now = Tone.now()
        let chord = [`${burger?.bun.note}${burger?.bun.octave}`, `${burger?.topping.note}${burger?.topping.octave}`, `${burger?.sauce.note}${burger?.sauce.octave}`, `${burger?.patty.note}${burger?.patty.octave}`]
        synth.triggerAttack(`${chord[0]}`, now);
        synth.triggerAttack(`${chord[1]}`, now + 0.2);
        synth.triggerAttack(`${chord[2]}`, now + 0.4);
        synth.triggerAttack(`${chord[3]}`, now + 0.6);
        synth.triggerRelease(chord, now + 0.7);
    } else {
        console.log("no burger today")
    }
}