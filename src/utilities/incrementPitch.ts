import { Burger } from "../types/Burger";

export function incrementPitch(burger: Burger){
    let pitchShiftInterval = 4
    if(burger){
        let burgerCopy: any = { ...burger};
    burgerCopy.bun.pitch += pitchShiftInterval
    burgerCopy.topping.pitch += pitchShiftInterval
    burgerCopy.sauce.pitch += pitchShiftInterval
    burgerCopy.patty.pitch += pitchShiftInterval
    console.log(pitchShiftInterval)
    }
    return burger
}