import React from 'react'
import { Burger } from '../types/Burger';
import { playChord } from '../utilities/playChord';
import ModelViewer from './ModelViewer';


type GalleryProps = {
    saved: Burger[];
}

const Gallery = ({saved}:GalleryProps) => {
 
  const galleryItems = saved.map((burger, index) => {
    let modelPaths = [`models/sauces/${burger?.sauce.name}.gltf`, `models/buns/${burger?.bun.name}.gltf`,`models/toppings/${burger?.topping.name}.gltf`,`models/pattys/${burger?.patty.name}.gltf`]
    return( 
    <div key={index} className='p-2 bg-blue-300 mx-2 rounded' onClick={()=>playChord(burger)}>
    <p>{burger?.bun.name}</p>
    <p>{burger?.sauce.name}</p>
    <p>{burger?.topping.name}</p>
    <p>{burger?.patty.name}</p>
    {/* <ModelViewer key={index} scale={3} modelPaths={modelPaths} /> */}

    </div>)
  })
    return (
    <>
    <div className="flex">
    {galleryItems}
        </div>
    </>
  )
}

export default Gallery