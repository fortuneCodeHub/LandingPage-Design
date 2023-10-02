/**
 * Navbar Active selector and deselector
 */

const navlink = document.querySelectorAll("#nav-link");

function unsetActive(value) {
    for (let i = 0; i < value.length; i++) {
        const valueArray = value[i].classList;
        for (let a = 0; a < valueArray.length; a++) {
            if (valueArray[a] == "active") {
                valueArray.remove("active");
            }
        }
    }
}

function activate() {
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].addEventListener("click", function () {
            const navArray = navlink[i].classList;
            unsetActive(navlink);
            for (let a = 0; a < navArray.length; a++) {
                if (navArray[a] != "active") {
                    navArray.add("active");
                }
            }
        });
    }
}
activate()
// console.log(navlink);

/**
 * Setup Cards Observer
 */
const setupCards = document.querySelectorAll(".setup-card")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal")
            observer.unobserve(entry.target)
        }
    })
})
setupCards.forEach(setupCard => {
    observer.observe(setupCard)
})
