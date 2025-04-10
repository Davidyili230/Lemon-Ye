//
//      This function scrolls the page to the given section ID
//

function scrollToSection(id) {
    const element = document.getElementById(id);
    const yOffset = -70; // height of your navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}


//
//      scroll to section about
//
const homeMenu = document.getElementById("home-menu");
const homeMenuScroll = document.getElementById("home-menu-scroll");

homeMenu.addEventListener("click", () => { // if clicked on hamburger, toggle Nav Category active
    homeMenuScroll.classList.toggle("active");
});
