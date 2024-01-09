import React, { useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import { Burger } from "../types/Burger";
import { Ingredient } from "../types/Ingredient";
import { playNote } from "../utilities/playNote";

type GltfModelProps = {
  modelPath: string;
  scale: number;
  position: [number, number, number];
  clone: boolean;
  burger: Burger
  ingredient: Ingredient | undefined
};

const GltfModel = ({ modelPath, scale, position, clone, burger, ingredient }: GltfModelProps) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const { viewport } = useThree()
  gltf.scene.visible = true;
  useFrame(() => (ref.current.rotation.y += 0.003));
  if(!clone){
  return (
    <>
      <primitive
        
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={viewport.width/5}
        dispose={null}
        onClick={()=>playNote(ingredient, burger)}
      />
    </>
  )}else{
    return(
    <>
      <primitive
        ref={ref}
        object={gltf.scene.clone()}
        position={position}
        scale={scale}
        dispose={null}
      />
      
        
    </>
  )};
};

export default GltfModel;
