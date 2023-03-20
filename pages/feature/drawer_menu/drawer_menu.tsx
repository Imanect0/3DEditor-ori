import React from "react";


const Drawer = () => {
    return <div>
            <button id="drawer_button" onClick={openbutton}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button id="drawer_button2" onClick={closebutton}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div id="drawer_menu"></div>
            </div>
};

function openbutton(){
    const menu = document.getElementById("drawer_menu");
    const button = document.getElementById("drawer_button")
    const button2 = document.getElementById("drawer_button2")
    if(menu?.style.display == "block"){
        menu.style.display= "none";
        button.style.display="block";
        button2.style.display="none";
    }else{
        menu.style.display="block";
        button.style.display="none";
        button2.style.display="block";

    }
}

function closebutton(){
    const menu = document.getElementById("drawer_menu");
    const button = document.getElementById("drawer_button")
    const button2 = document.getElementById("drawer_button2")
    if(menu?.style.display == "none"){
        menu.style.display= "block";
        button.style.display="none";
        button2.style.display="block";
    }else{
        menu.style.display="none";
        button.style.display="block";
        button2.style.display="none";

    }
}

export default Drawer;