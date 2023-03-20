import { NextPage } from 'next';
import { useEffect, useRef, useState, ReactElement } from 'react';
import { Canvas, ThreeElements, useFrame, MeshProps } from '@react-three/fiber';
import { DstAlphaFactor, Mesh } from 'three';
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';

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
  // 3dオブジェクト管理用配列
  const [meshes, setMeshes] = useState<THREE.Mesh[]>([]);

  const addMeshes = (mesh : THREE.Mesh) => setMeshes(prevMeshes => [...prevMeshes, mesh])
  // 表示テストコード
  useEffect(()=>{
    addMeshes(new THREE.Mesh(new THREE.CircleGeometry(1, 1, 1), new THREE.MeshStandardMaterial({color: 'red'}))),
    addMeshes(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({color: 'blue'})))
    }, [])

  return(
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas id='myCanvas'>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      {meshes.map((mesh, index) => 
        <mesh key={index} geometry={mesh.geometry} material={mesh.material} position={mesh.position} />
      )}
    </Canvas>
  </div>
  )
  
}
export default Editor;