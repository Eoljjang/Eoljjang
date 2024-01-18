const hamburger_icon = document.querySelector(".hamburger-icon");
const link_items = document.querySelectorAll(".link-item")

// Give all link-items an onclick.
link_items.forEach(i => i.addEventListener("click", () =>{
    toggleMenu();
}));

// Toggle menu
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Add / remove the class "open" when toggleMenu() is called (toggle will do both). Then we style the "open" class.
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");
}

// Hamburger menu toggle.
hamburger_icon.addEventListener("click", () =>{
    toggleMenu();
});