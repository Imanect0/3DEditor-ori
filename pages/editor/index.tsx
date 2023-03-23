import { NextPage } from 'next';
import { useEffect, useRef, useState, ReactElement } from 'react';
import { Canvas, ThreeElements, useFrame, MeshProps, useLoader } from '@react-three/fiber';
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';
import MeshLoader from './Loader'
import { Object3D } from 'three';

type BoxProps = {
  position: [x: number, y: number, z: number];
};

const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<THREE.Mesh>(null!);
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
let isClicked: boolean;

const Click = () => {

}


const openEditMenu = () => {
  if (isClicked) {
    return (
      <div style={{ width: "100px", height: "100px", background: "black" }}></div>
    )
  }
  else {

  }
}


const Editor = () => {



  // 3dオブジェクト管理用配列
  const [objects, setObject] = useState<THREE.Object3D[]>([]);
  const meshLoader = new MeshLoader()

  const import3dObject = async (loadedFile: File) => {
    const object =  await meshLoader.loadFile(loadedFile);
    addObject(object)
  }

  const addObject = (mesh: THREE.Object3D) => setObject(prevMeshes => [...prevMeshes, mesh])

  // 表示テストコード(最初のみ実行)
  // useEffect(() => {
  //   addObject(new THREE.Mesh(new THREE.CircleGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 'red' }))),
  //     addObject(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 'blue' })))
  // }, [])

  return (
    <>
      <input type='file' onChange={(e) => {
        e.target.files?.length != null ? import3dObject(e.target.files[0]): e
      } } />
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas id='myCanvas'>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
          {objects.map((mesh, index) =>
            <primitive object={mesh} key={index}/>
            // <mesh key={index} geometry={mesh.geometry} material={mesh.material} position={mesh.position} />
          )}
        </Canvas>
      </div>
    </>

  )

}
export default Editor;