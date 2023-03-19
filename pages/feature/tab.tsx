import React from "react";

const Tab = () => {
    return <div className="App">
            <button id="fileButton" onClick={clickFile}><LikeButton title = {"file"}/></button>
            <button id="editButton"><LikeButton title = {"edit"}/></button>
            <button id="templateButton" onClick={clickBtnTem}><LikeButton title = {"template"}/></button>
            <button id="settingButton"><LikeButton title = {"setting"}/></button>
            
            <div id="fileFile">
                <button id="ResetButton">Reset</button>
                <button id="InportButton">Inport</button>
                <button id="ExportButton" onClick={clickExp}>Export</button>

                <div id="ext">
                    <button id="DaeButton">.DAE</button>
                    <button id="DrcButton">.DRC</button>
                    <button id="ExrButton">.EXR</button>
                    <button id="GltfButton">.gltf</button>
                    <button id="ObjButton">.OBJ</button>
                    <button id="PlyButton">.PLY</button>
                    <button id="StlButton">.STL</button>
                </div>
            </div>

                <button id="CubeButton">cube</button>
                <button id="RingButton">ring</button>
                <button id="CircleButton">circle</button>
                <button id="SphereButton">sphere</button>
                <button id="CylinderButton">cylinder</button>
                <button id="ConeButton">cone</button>
                <button id="TetraButton">tetrahedron</button>
                <button id="OctaButton">octahedron</button>
                <button id="TorusButton">torus</button>
                <button id="IcosaButton">icosahedron</button>
    
    </div>

}
function LikeButton(props :any) {
    return <span><p >{props.title}</p></span>
}

function clickFile() {
    const reset = document.getElementById("ResetButton");
    if (reset?.style.display == "block") {
        reset.style.display = "none";
    }else {
        reset.style.display = "block";
    }

    const inport = document.getElementById("InportButton");
    if (inport?.style.display == "block") {
        inport.style.display = "none";
    }else {
        inport.style.display = "block";
    }

    const export0 = document.getElementById("ExportButton");
    if (export0?.style.display == "block") {
        export0.style.display = "none";
    }else {
        export0.style.display = "block";
    }


    const dae = document.getElementById("DaeButton")
    if (dae?.style.display == "block") {
        dae.style.display = "none";
    }

    const drc = document.getElementById("DrcButton");
    if (drc?.style.display == "block") {
        drc.style.display = "none";
    }

    const exr = document.getElementById("ExrButton");
    if (exr?.style.display == "block") {
        exr.style.display = "none";
    }

    const gltf = document.getElementById("GltfButton");
    if (gltf?.style.display == "block") {
        gltf.style.display = "none";
    }

    const obj = document.getElementById("ObjButton");
    if (obj?.style.display == "block") {
        obj.style.display = "none";
    }

    const ply = document.getElementById("PlyButton");
    if (ply?.style.display == "block") {
        ply.style.display = "none";
    }

    const stl = document.getElementById("StlButton");
    if (stl?.style.display == "block") {
        stl.style.display = "none";
    }
}

function clickExp() {
    const dae = document.getElementById("DaeButton");
    if (dae?.style.display == "block") {
        dae.style.display = "none";
    }else {
        dae.style.display = "block";
    }

    const drc = document.getElementById("DrcButton");
    if (drc?.style.display == "block") {
        drc.style.display = "none";
    }else {
        drc.style.display = "block";
    }

    const exr = document.getElementById("ExrButton");
    if (exr?.style.display == "block") {
        exr.style.display = "none";
    }else {
        exr.style.display = "block";
    }

    const gltf = document.getElementById("GltfButton");
    if (gltf?.style.display == "block") {
        gltf.style.display = "none";
    }else {
        gltf.style.display = "block";
    }

    const obj = document.getElementById("ObjButton");
    if (obj?.style.display == "block") {
        obj.style.display = "none";
    }else {
        obj.style.display = "block";
    }

    const ply = document.getElementById("PlyButton");
    if (ply?.style.display == "block") {
        ply.style.display = "none";
    }else {
        ply.style.display = "block";
    }

    const stl = document.getElementById("StlButton");
    if (stl?.style.display == "block") {
        stl.style.display = "none";
    }else {
        stl.style.display = "block";
    }
}


function clickBtnTem() {
    const cube = document.getElementById("CubeButton");
    if (cube?.style.display == "block") {
        cube.style.display = "none";
    }else {
        cube.style.display = "block";
    }

    const ring = document.getElementById("RingButton");
    if (ring?.style.display == "block") {
        ring.style.display = "none";
    }else {
        ring.style.display = "block";
    }

    const circle = document.getElementById("CircleButton");
    if (circle?.style.display == "block") {
        circle.style.display = "none";
    }else {
        circle.style.display = "block";
    }

    const sphere = document.getElementById("SphereButton");
    if (sphere?.style.display == "block") {
        sphere.style.display = "none";
    }else {
        sphere.style.display = "block";
    }

    const cylinder = document.getElementById("CylinderButton");
    if (cylinder?.style.display == "block") {
        cylinder.style.display = "none";
    }else {
        cylinder.style.display = "block";
    }

    const cone = document.getElementById("ConeButton");
    if (cone?.style.display == "block") {
        cone.style.display = "none";
    }else {
        cone.style.display = "block";
    }

    const tetra = document.getElementById("TetraButton");
    if (tetra?.style.display == "block") {
        tetra.style.display = "none";
    }else {
        tetra.style.display = "block";
    }

    const octa = document.getElementById("OctaButton");
    if (octa?.style.display == "block") {
        octa.style.display = "none";
    }else {
        octa.style.display = "block";
    }

    const torus = document.getElementById("TorusButton");
    if (torus?.style.display == "block") {
        torus.style.display = "none";
    }else {
        torus.style.display = "block";
    }

    const icosa = document.getElementById("IcosaButton");
    if (icosa?.style.display == "block") {
        icosa.style.display = "none";
    }else {
        icosa.style.display = "block";
    }


    const fileFile = document.getElementById("fileFile");
    if (fileFile?.style.display == "block") {
        fileFile.style.display = "none";
    }
}
    

export default Tab;
