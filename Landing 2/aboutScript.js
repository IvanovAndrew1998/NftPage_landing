const hamburger = document.querySelector(".hamburgerImage");
const hamburgerMenu = document.querySelector(".hamburgerMenu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})
hamburgerMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburgerMenu.classList.remove("active");
});


