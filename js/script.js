document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".nav-toggle");
    const navBar = document.querySelector(".nav-bar");

    toggleButton.addEventListener("click", () => {
        navBar.classList.toggle("active");
    });
});