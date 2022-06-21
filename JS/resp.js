const burger = document.querySelector(".burger");
const navmanu = document.querySelector("#navbar ul");
const navbar = document.querySelector("#navbar");
burger.addEventListener('click', () => {
    navmanu.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})