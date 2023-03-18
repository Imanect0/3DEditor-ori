import { NextPage } from 'next';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { DstAlphaFactor, Mesh } from 'three';
import * as THREE from "three";

type BoxProps = {
  position: [x: number, y: number, z: number];
};

const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
let isClicked : boolean;

const Click = () =>{
  
}


const openEditMenu = () =>{
  if(isClicked){
    return(
      <div style={{width : "100px" , height : "100px" , background : "black"}}></div>
    )
  }
  else{

  }
}


const Editor = () => {
  return(
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas id='myCanvas'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </div>
  )
  
}
export default Editor;