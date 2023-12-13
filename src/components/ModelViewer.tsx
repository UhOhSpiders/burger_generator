import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

type ModelViewerProps = {
  modelPaths: string[];
  scale: number;
}

const ModelViewer = ({ modelPaths, scale }:ModelViewerProps) => {
  
  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0.1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPaths[0]} scale={scale} />
        <GltfModel modelPath={modelPaths[1]} scale={scale}  />
        <GltfModel modelPath={modelPaths[2]} scale={scale}  />
        <GltfModel modelPath={modelPaths[3]} scale={scale}  />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;