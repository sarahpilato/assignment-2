const hamburgerNav = document.querySelector(".hamburgerNav")
const hamburger = document.querySelector(".hamburger")


function toggleHamburger(){
    hamburgerNav.classList.toggle("showNav")
    hamburger.classList.toggle("menuClose")
}

hamburger.addEventListener("click", toggleHamburger)

const menuNav = document.querySelectorAll(".menuNav")
menuNavs.forEach( 
    function(menuNav) { 
        menuNav.addEventListener("click", toggleHamburger) 
    }
)

