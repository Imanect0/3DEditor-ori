import { NextPage } from 'next';
import React, {createContext, useEffect, useRef, useState} from 'react';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import { DstAlphaFactor, Mesh, Object3D} from 'three';
import ClickMenu from "../feature/clickMenu";

type BoxProps = {
  position: [x: number, y: number, z: number],
  handleClick: (isActive:boolean, object: Object3D) => void /*SHO800*/
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
      onClick={() => {
        setActive(!active)
        props.handleClick(!active, mesh.current) /*SHO800*/
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Editor = () => {
  const [pointedObjects, setPointedObjects] = useState<Object3D[]>([]); /*SHO800*/
  const [isObjectPointed, setIsObjectPointed] = useState<boolean>(false); /*SHO800*/
  const clickObject = (isActive: boolean, object: Object3D) => { /*SHO800*/
    if(isActive){
      setPointedObjects(prevState => [...prevState, object]);
      setIsObjectPointed(true);
    } else {
      setPointedObjects(prevState => prevState.filter(item => item !== object));
      setIsObjectPointed(pointedObjects.length > 1);
    }

    // setIsObjectPointed((prevState) => !prevState);
  }

  return(
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} handleClick={clickObject}/>
      <Box position={[1.2, 0, 0]} handleClick={clickObject}/>
    </Canvas>
    <ClickMenu isObjectPointed={isObjectPointed} objects={pointedObjects}/>
  </div>
  )
  
}
export default Editor;