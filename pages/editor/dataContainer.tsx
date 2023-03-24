import * as THREE from "three/src/Three";
import { useEffect, useRef, useState, ReactElement, createContext} from 'react';

// import MeshLoader from './Loader'

// const DataContainer = () => {
    
//     const [objects, setObjects] = useState<THREE.Object3D[]>([]);

//     // 3dオブジェクト管理用配列
//     const addObject = (mesh: THREE.Object3D) => setObjects(prevMeshes => [...prevMeshes, mesh])

//     const meshLoader = new MeshLoader()

//     // この関数がボタンのクリックイベントで呼ばれる予定
//     const import3dObject = async (loadedFile: File) => {
//         const object = await meshLoader.loadFile(loadedFile);
//         addObject(object)
//     }
// }
type contextType = {
    objects: THREE.Object3D[],
    addObjects: (mesh: THREE.Object3D) => void
}


export const ObjectsContext = createContext({} as contextType);