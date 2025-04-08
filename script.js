//
//      This function scrolls the page to the given section ID
//

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); // Use the correct sectionId
    if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    } else {
        console.log("Section not found: " + sectionId); // Debugging line
    }
}

//
//      scroll to section about
//
const homeMenu = document.getElementById("home-menu");
const homeMenuScroll = document.getElementById("home-menu-scroll");

homeMenu.addEventListener("click", () => { // if clicked on hamburger, toggle Nav Category active
    homeMenuScroll.classList.toggle("active");
});
