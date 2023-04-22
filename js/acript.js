/*
baras =document.querySelector(".baras");
baras.onclick= function(){
    navBaras= document.querySelector(".nav-baras");
    navBaras.classList.toggle("active")
}
*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})