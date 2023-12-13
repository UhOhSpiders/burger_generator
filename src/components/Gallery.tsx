import React from 'react'
import { Burger } from '../types/Burger';
import { playChord } from '../utilities/playChord';
import ModelViewer from './ModelViewer';


type GalleryProps = {
    saved: Burger[];
}

const Gallery = ({saved}:GalleryProps) => {
 
  const galleryItems = saved.map((burger, index) => {
    return( 
    <div key={index} className='p-2 bg-blue-300 mx-2 rounded' onClick={()=>playChord(burger)}>
    <p>{burger?.bun.name}</p>
    <p>{burger?.sauce.name}</p>
    <p>{burger?.topping.name}</p>
    <p>{burger?.patty.name}</p>
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