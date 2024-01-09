import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Stage } from "@react-three/drei";
import GltfModel from "./GltfModel";
import { Burger } from "../types/Burger";

type ModelViewerProps = {
  scale: number;
  preview: Burger;
}

const ModelViewer = ({  scale,  preview }:ModelViewerProps) => {
let modelPaths = [`models/sauces/${preview?.sauce.name}.gltf`, `models/buns/${preview?.bun.name}.gltf`,`models/toppings/${preview?.topping.name}.gltf`,`models/pattys/${preview?.patty.name}.gltf`]

  return (
    <>
    <Canvas>
      <Suspense fallback={null}>
        <Stage adjustCamera intensity={0.8} shadows={false} environment="city">
        <Center>
        <GltfModel modelPath={modelPaths[0]} scale={scale} position={[0,0,0]} burger={preview} ingredient={preview?.sauce}/>
        <GltfModel modelPath={modelPaths[1]} scale={scale}  position={[0,0,0]} burger={preview} ingredient={preview?.bun}/>
        <GltfModel modelPath={modelPaths[2]} scale={scale}  position={[0,0,0]} burger={preview} ingredient={preview?.topping}/>
        <GltfModel modelPath={modelPaths[3]} scale={scale}  position={[0,0,0]} burger={preview} ingredient={preview?.patty}/>
        </Center>
        </Stage>
        <OrbitControls />
      </Suspense>
   
    </Canvas>
    </>
  );
};

export default ModelViewer;