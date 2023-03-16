const menu=document.getElementById("drawer_menu")
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("drawer_button").addEventListener("click",function(){
        this.classList.toggle("active");
        menu.classList.toggle("active");
    })
})
