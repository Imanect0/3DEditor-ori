import * as THREE from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

class MeshLoader {
  loadingManager: THREE.LoadingManager;

  constructor() {
    this.loadingManager = new THREE.LoadingManager();
    // ロード開始時の処理
    this.loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
      console.log('Started loading file');
    }

    // ロード進行中の処理
    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log('Loading file');
    }

    // ロード完了時の処理
    this.loadingManager.onLoad = () => {
      console.log('Loading complete!');
    }

    // ロードエラー時の処理
    this.loadingManager.onError = (url) => {
      console.log('There was an error loading ' + url);
    };
  }

  // ファイル名から拡張子を取得する関数
  getExtension(filename: string) {
    const extension = filename.split('.').pop()?.toLowerCase();
    return extension !== undefined ? extension : ''
  }


  async convert2DataUrl(inputFile: File) {
    const reader = new FileReader()
    reader.readAsDataURL(inputFile)
    await new Promise<void>(resolve => reader.onload = () => resolve())
    return reader.result 
  }
  // 拡張子によってloaderと成功時の処理を選択する関数

  async loadFile(inputFile: File, ) {
    const fileName: string = inputFile.name
    let loadedModel = new THREE.Object3D();

    const dataUrl = await this.convert2DataUrl(inputFile)

    await new Promise<void>(resolve => {
      if (typeof dataUrl === 'string'){
        switch (this.getExtension(fileName)) {
  
          case "obj":
            new OBJLoader(this.loadingManager).load(dataUrl,
              // success
              (object) => {
                loadedModel = object;
                resolve()
              },
              // between loading
              (xhr: ProgressEvent) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
              // called when loading has errors
              (err: ErrorEvent) => console.log('An error happened', err)
            );
            break
    
          case "gltf":
          case "glb":
            new GLTFLoader(this.loadingManager).load(dataUrl,
              // success
              (object: GLTF) => {
                loadedModel = object.scene;
                resolve()
              },
              // between loading
              (xhr: ProgressEvent) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
              // called when loading has errors
              (err: ErrorEvent) => console.log('An error happened', err)
            );
            break
    
          case "fbx":
            new FBXLoader(this.loadingManager).load(dataUrl,
              // success
              (object: THREE.Group) => {
                loadedModel = object;
                resolve()
              },
              // between loading
              (xhr: ProgressEvent) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
              // called when loading has errors
              (err: ErrorEvent) => console.log('An error happened', err)
            );
            break
        }
      }
    })

    return loadedModel;
  }

}
export default MeshLoader