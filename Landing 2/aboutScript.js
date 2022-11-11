const hamburger = document.querySelector(".hamburgerImage");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const wholePage = document.querySelector("AboutNFT")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})
hamburgerMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburgerMenu.classList.remove("active");
})
if (hamburger.classList.contains("active" = true)) {
    wholePage.addEventListener("click", () => {
        hamburger.classList.remove("active");
        hamburgerMenu.classList.remove("active");
    })
}
