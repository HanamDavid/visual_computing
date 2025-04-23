import {useRef} from 'react';
import Frog from './Frog'
import Controls from './Controls';
import { useFrame } from '@react-three/fiber';

function Scene() {
    const mesh = useRef()
    useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime + Math.PI / 2) * 1.5;
      mesh.current.scale.x = Math.abs(Math.sin(state.clock.elapsedTime)) + 1;
      mesh.current.scale.y = Math.abs(Math.sin(state.clock.elapsedTime)) + 1;
      mesh.current.scale.z = Math.abs(Math.sin(state.clock.elapsedTime)) + 1;
    }
  });
    return (
        <>
         <Controls />
         <pointLight position={[0, 0, 3]} intensity={3} color="white" />
         <pointLight position={[0, 0, -2]} intensity={10} color="red" />
         <pointLight position={[0, 4, -4]} intensity={10} color="yellow" />
         <pointLight position={[4, 0, -4]} intensity={10} color="yellow" />
         <mesh ref={mesh} position={[4, 4,0 ]} rotation={[0, 2, 0]}>
             <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
             <meshStandardMaterial attach="material" color="orange" />
         </mesh>
         <Frog />
        </>
  );
}

export default Scene;
