import React from 'react'
import { Burger } from '../types/Burger'
import ModelViewer from "./ModelViewer"

type PreviewProps = {
    preview: Burger;
    playChord: (preview: Burger) => void;
}

const Preview = ({preview, playChord}:PreviewProps) => {
  let modelPaths = [`models/sauces/${preview?.sauce.name}.gltf`, `models/buns/${preview?.bun.name}.gltf`,`models/toppings/${preview?.topping.name}.gltf`,`models/pattys/${preview?.patty.name}.gltf`]
  return (
    <>
    <div className="col-span-3 bg-orange-200 m-2  rounded" onClick={()=>playChord(preview)}>
    <ModelViewer scale={3} modelPaths={modelPaths} />
    </div>
    </>
  )
}

export default Preview