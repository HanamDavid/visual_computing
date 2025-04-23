import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Frog() {
  const { scene } = useThree();
  const frogRef = useRef();
  const gltf = useLoader(GLTFLoader, './frog_animated_-_3d_model/scene.gltf');

  useEffect(() => {
    if (gltf) {
      gltf.scene.position.set(0, 0, 0);

      const froggyFind = gltf.scene.getObjectByName("9498c94f7c8b46b3a9529acf28f0c556fbx");
      if (froggyFind) {
        frogRef.current = froggyFind;
        frogRef.current.scale.set(1, 1, 1);
        frogRef.current.position.set(0, 0, -4);
      } else {
        console.warn("Didn't find froggy '9498c94f7c8b46b3a9529acf28f0c556fbx'");
      }

      scene.add(gltf.scene);

      return () => {
        scene.remove(gltf.scene);
      };
    }
  }, [gltf, scene]);

  return null;
}
export default Frog;

