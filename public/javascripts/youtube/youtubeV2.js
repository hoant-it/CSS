var menuIcon= document.querySelector(".menu-icon");
var sidebar= document.querySelector(".sidebar");
var containerMain= document.querySelector(".container-main");


function resize(){
    if(window.innerWidth<700){
        sidebar.classList.add("small-sidebar");
        containerMain.classList.add("large-container-main")
    }
    else
    {
        sidebar.classList.remove("small-sidebar");
        containerMain.classList.remove("large-container-main")
    }

}



menuIcon.addEventListener("click" , function() {
    sidebar.classList.toggle("small-sidebar");
    containerMain.classList.toggle("large-container-main")
})
window.addEventListener('resize', function(){
    resize();
})
resize()
