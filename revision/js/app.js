let btn = document.querySelector("#bars")
let navLinks = document.querySelector(".nav-links")

btn.addEventListener("click", function () {
    navLinks.classList.toggle("show")
    btn.classList.toggle("fa-times")
})

window.addEventListener('scroll', function () {
    navLinks.classList.remove('show')
    btn.classList.remove("fa-times")
})