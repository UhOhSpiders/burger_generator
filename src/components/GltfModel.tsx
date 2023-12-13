import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type GltfModelProps = {
  modelPath: string;
  scale: number;
};

const GltfModel = ({ modelPath, scale }: GltfModelProps) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  gltf.scene.visible = true;
  useFrame(() => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={scale}
        dispose={null}
      />
    </>
  );
};

export default GltfModel;
