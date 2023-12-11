import React from 'react'
import { Burger } from '../types/Burger'

type PreviewProps = {
    preview: Burger;
}

const Preview = ({preview}:PreviewProps) => {
  return (
    <>
    <div className="col-span-3 bg-orange-200 m-2 p-4 rounded">
    <div>{preview.bun.name}</div>
    <div>{preview.sauce.name}</div>
    <div>{preview.topping.name}</div>
    <div>{preview.patty.name}</div>
    </div>
    </>
  )
}

export default Preview