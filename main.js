let language = document.getElementById("language"),
    darkMode = document.getElementById("dark-mode"),
    skillsContainers = document.getElementsByClassName("skills-container"),
    navbar = document.getElementsByClassName("navbar"),
    languageIndicator = document.getElementById("lang");

//dropdown variables
let dropdownSkill = document.getElementsByClassName("skills-visible-dropdown"),
    skillDetails = document.getElementsByClassName("skills-details-container"),
    arrowSkill = document.getElementsByClassName("bx-chevron-down");

//slider variables
let arrowLeft = document.getElementsByClassName("bx-chevron-left"),
    arrowRight = document.getElementsByClassName("bx-chevron-right"),
    portfolioArray = document.getElementsByClassName("portfolio"),
    portfolioItem = document.getElementsByClassName("portfolio-item"),
    contador = 0,
    linksArray = ["https://agu5m4ndo.github.io/portfolio/", "https://agu5m4ndo.github.io/inmobiar/"];

//scroll up variable 
let scrollTop = document.getElementsByClassName("scroll-top");

//darkmode
function cambioDarkMode() {
    if (darkMode.classList.contains("bx-moon")) {
        //iconos
        darkMode.classList.remove("bx-moon");
        darkMode.classList.add("bx-sun");
        //body
        document.body.classList.add("dark-mode");
        //contenedores de skills
        for (let i = 0; i < skillsContainers.length; i++) {
            skillsContainers[i].classList.add("dark");
        }
        //formulario de contacto
        document.documentElement.style.setProperty("--form-color", "#223");
        document.documentElement.style.setProperty("--form-item-color", "#334");
        document.documentElement.style.setProperty("--form-placeholder", "#fff");
        //nav
        navbar[0].classList.add("dark-mode");
        navbar[0].classList.remove("navbar-light", "bg-light");
        document.documentElement.style.setProperty("--navbar-color", "#ccc");
        document.documentElement.style.setProperty("--navbar-color-hover", "#999");
    } else {
        //iconos
        darkMode.classList.remove("bx-sun");
        darkMode.classList.add("bx-moon");
        //body
        document.body.classList.remove("dark-mode");
        //contenedores de skills
        for (let i = 0; i < skillsContainers.length; i++) {
            skillsContainers[i].classList.remove("dark");
        }
        //formulario de contacto
        document.documentElement.style.setProperty("--form-color", "#eee");
        document.documentElement.style.setProperty("--form-item-color", "#fff");
        document.documentElement.style.setProperty("--form-placeholder", "#999");
        //nav
        navbar[0].classList.remove("dark-mode");
        navbar[0].classList.add("navbar-light", "bg-light");
        document.documentElement.style.setProperty("--navbar-color", "rgba(0,0,0,.5)");
        document.documentElement.style.setProperty("--navbar-color-hover", "#000");
    }
}
darkMode.addEventListener("click", cambioDarkMode, true);

//language change
function cambioLanguage() {
    if (languageIndicator.innerHTML == "Es") {
        location.href = "en/paginaResponsive.html";
    } else {
        location.href = "../paginaResponsive.html";
    }
}
language.addEventListener("click", cambioLanguage, true);

//skills dropdown
for (let index = 0; index < dropdownSkill.length; index++) {
    dropdownSkill[index].addEventListener("click", function() {
        if (skillDetails[index].classList.contains("skills-open")) {
            skillDetails[index].classList.add("skills-closed");
            skillDetails[index].classList.remove("skills-open");
            arrowSkill[index].classList.remove("rotate-arrow");
            if (skillDetails[0].classList.contains("skills-closed")) {
                document.documentElement.style.setProperty("--row-size", "63px");
            } else {
                document.documentElement.style.setProperty("--row-size", "auto");
            }
        } else {
            skillDetails[index].classList.add("skills-open");
            skillDetails[index].classList.remove("skills-closed");
            arrowSkill[index].classList.add("rotate-arrow");
            if (skillDetails[0].classList.contains("skills-closed")) {
                document.documentElement.style.setProperty("--row-size", "63px");
            } else {
                document.documentElement.style.setProperty("--row-size", "auto");
            }
        }
    });
}

//portfolio slider right
function slideRight() {
    for (let index = 0; index < portfolioArray.length; index++) {
        if (portfolioArray[index].classList.contains("show-portfolio") && (index < (portfolioArray.length - 1))) {
            portfolioArray[index].classList.add("leave-right");
            setTimeout(() => {
                portfolioArray[index].classList.remove("show-portfolio");
                portfolioArray[index].classList.remove("leave-right");
            }, 300);
            contador++;
            console.log(contador + ", " + linksArray[contador]);
            portfolioItem[portfolioItem.length - 1].href = linksArray[contador];
            portfolioArray[index + 1].classList.add("arrive-right");
            portfolioArray[index + 1].classList.add("show-portfolio");
            setTimeout(() => {
                portfolioArray[index + 1].classList.remove("arrive-right");
            }, 300);
            break;
        }
    }
}
arrowRight[0].addEventListener("click", slideRight, true);

//portfolio slider left
function slideLeft() {
    for (let index = 0; index < portfolioArray.length; index++) {
        if (portfolioArray[index].classList.contains("show-portfolio") && (index > 0)) {
            portfolioArray[index].classList.add("leave-left");
            setTimeout(() => {
                portfolioArray[index].classList.remove("show-portfolio");
                portfolioArray[index].classList.remove("leave-left");
            }, 300);
            portfolioArray[index - 1].classList.add("arrive-left");
            portfolioArray[index - 1].classList.add("show-portfolio");
            contador--;
            console.log(contador + ", " + linksArray[contador]);
            portfolioItem[portfolioItem.length - 1].href = linksArray[contador];
            setTimeout(() => {
                portfolioArray[index - 1].classList.remove("arrive-left");
            }, 300);
            break;
        }
    }
}
arrowLeft[0].addEventListener("click", slideLeft, true);

//scroll top function

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollTop[0].classList.add("active");
    } else {
        scrollTop[0].classList.remove("active");
    }
})