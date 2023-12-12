import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

export function playNote(ingredient){
    // const pentatonic: String[] = ["C#","D#","F#","G#","A#"]
    // const noteIndex = Math.floor(Math.random() * pentatonic.length)
    synth.triggerAttackRelease(`${ingredient.note}${ingredient.octave}`, "16n");
}

