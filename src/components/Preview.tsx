import React from 'react'
import { Burger } from '../types/Burger'
import ModelViewer from "./ModelViewer"

type PreviewProps = {
    preview: Burger;
}

const Preview = ({preview }:PreviewProps) => {

  return (
    <>
    <ModelViewer scale={4} preview={preview}/>
    </>
  )
}

export default Preview