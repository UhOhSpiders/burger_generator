import React from 'react'
import { Burger } from '../types/Burger'

type PreviewProps = {
    preview: Burger;
    playChord: (preview: Burger) => void;
}

const Preview = ({preview, playChord}:PreviewProps) => {
  return (
    <>
    <div className="col-span-3 bg-orange-200 m-2 p-4 rounded" onClick={()=>playChord(preview)}>
    <div>{preview.bun.name}</div>
    <div>{preview.sauce.name}</div>
    <div>{preview.topping.name}</div>
    <div>{preview.patty.name}</div>
    </div>
    </>
  )
}

export default Preview