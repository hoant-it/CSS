var menuIcon= document.querySelector(".menu-icon");
var sidebar= document.querySelector(".sidebar");
// var menuIcon= document.querySelector(".menu-icon");

menuIcon.addEventListener("click" , function() {
    sidebar.classList.toggle("small-sidebar");
})

