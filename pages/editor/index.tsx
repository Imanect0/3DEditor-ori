import { NextPage } from 'next';
import {useRef, useState, MouseEvent} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {DstAlphaFactor, Mesh, Object3D, Vector2} from 'three';
import ClickMenu from '../feature/clickmenu/clickMenu';
import ClickObject from "./clickObject";

type BoxProps = {
  position: [x: number, y: number, z: number];
  activeObject: Object3D | null; /*SHO800*/
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
      scale={mesh.current === props.activeObject ? 1.5 : 1} /*アクティブかそうでないかをactiveObjectで判別しなければならないため仮変更(SHO800)、要協議 変更前: active ? 1.5 : 1*/
      // onClick={() => setActive(!active)} /*上記の理由で無効化(SHO800)*/
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

type clickMenuRefType = { /*SHO800*/
  onClickCanvas: () => void;
}

const Editor = () => {
  const [activeObject, setActiveObject] = useState<Object3D | null>(null); /*SHO800*/
  const [cursorPosition, setCursorPosition] = useState<Vector2>(new Vector2(0, 0)) /*SHO800*/
  const componentRefGetObject = useRef<clickMenuRefType>(); /*SHO800*/
  const onClickCanvas = (event: MouseEvent<HTMLDivElement>) => {/*SHO800*/
    if (componentRefGetObject.current) {
      componentRefGetObject.current.clickObject();
    }
    setCursorPosition(new Vector2(event.clientX, event.clientY));
  }


  return(
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas id='myCanvas' onClick={event => onClickCanvas(event)}>
      <ClickObject ref={componentRefGetObject} setActiveObject={setActiveObject} /> {/*SHO800*/}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} activeObject={activeObject} />
      <Box position={[1.2, 0, 0]} activeObject={activeObject} />
    </Canvas>
    <ClickMenu activeObject={activeObject} cursorPosition={cursorPosition} /> {/*SHO800*/}
  </div>
  )

}
export default Editor;
