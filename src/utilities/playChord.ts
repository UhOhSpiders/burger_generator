import * as Tone from 'tone'
import { Burger } from '../types/Burger';

const synth = new Tone.PolySynth(Tone.Synth)
const reverb = new Tone.Reverb(5)
synth.connect(reverb)
reverb.toDestination()
export function playChord(preview:Burger){
    if(preview){
    const now = Tone.now()
    console.log(`${preview?.bun.note}${preview?.bun.octave}`)
    let chord = [`${preview?.bun.note}${preview?.bun.octave}`,`${preview?.sauce.note}${preview?.sauce.octave}`,`${preview?.topping.note}${preview?.topping.octave}`,`${preview?.patty.note}${preview?.patty.octave}`]
    synth.triggerAttack(`${preview?.bun.note}${preview?.bun.octave}`, now);
    synth.triggerAttack(`${preview?.topping.note}${preview?.topping.octave}`, now + 0.2);
    synth.triggerAttack(`${preview?.sauce.note}${preview?.sauce.octave}`, now + 0.4);
    synth.triggerAttack(`${preview?.patty.note}${preview?.patty.octave}`, now + 0.6);

    synth.triggerRelease(chord, now + 0.7);
    }else{
        console.log("no burger today")
    }
}