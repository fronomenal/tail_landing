button = document.getElementById("burger");
menu = document.getElementById("menu");

button.addEventListener("click", ()=> {
    menu.classList.toggle("hidden");
});