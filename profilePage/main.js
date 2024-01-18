const hamburger_icon = document.querySelector(".hamburger-icon");
const link_items = document.querySelectorAll(".link-item");
const btn_resume = document.querySelector("#btn-resume");
const btn_contact = document.querySelector("#btn-contact");

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

// Profile button links.
btn_resume.addEventListener("click", () => {
    window.open("../profilePage/assets/resume.pdf"); // Opens my resume.
})

btn_contact.addEventListener("click", () => {
    location.href = "./#contact"; // Jumps to contact section of the page.
})

