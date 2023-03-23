import {Dispatch, forwardRef, SetStateAction, useImperativeHandle,} from "react";
import {Mesh, Object3D} from "three";
import {useThree} from "@react-three/fiber";
import * as THREE from "three";

// ui担当ですがクリックされたオブジェクトを取得する必要があったためSHO800がこちらに制作しました。
// このコンポーネントの親はeditor/index.tsxのEditorコンポーネントを想定して制作しています。
// クリックされたオブジェクトのObject3Dインスタンスを親コンポーネントであるEditorのactiveObjectというStateに代入します。
// 何もない場所がクリックされたり、既に選択してあるオブジェクトがクリックされた場合はactiveObjectにnullが入ります。
// 取得するものはObject3Dですが、もしマテリアルやジオメトリなどを編集したい場合はif (clickedObject instanceof Mesh) {}で型を識別することでそれらMeshのプロパティも扱えるかと思います。

type Props = {
    setActiveObject: Dispatch<SetStateAction<Object3D | null>>;
}

const GetClickedObject = forwardRef<unknown, Props>((props, ref) => {
    const {camera, mouse, scene} = useThree(); /*SHO800*/
    const raycaster = new THREE.Raycaster(); /*SHO800*/

    useImperativeHandle(ref, () => ({
        onClickCanvas: () => {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) { //クリックされた場所にオブジェクトがあった場合
                const clickedObject = intersects[0].object;
                props.setActiveObject(prevState => {
                    if (prevState === clickedObject) { //既に選択してあるオブジェクトが再度クリックされている場合
                      return null; //選択解除する
                    }else { // 別のオブジェクトがクリックされている場合
                      return clickedObject; // そのオブジェクトを選択する(アクティブ化する)
                    }
                });
            } else { //何もない場所がクリックされた場合
                props.setActiveObject(null);
            }
        },
    }));
    // const [activeObject, setActiveObject] = useState<Object3D | null>(null); /*SHO800*/
 return <></>;
});

export default GetClickedObject;