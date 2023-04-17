// navbar - mobile mode (hamburger)
const hamburger = document.getElementById("hamburger");
const navbarMainMenu = document.querySelector(".navbar-main-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navbarMainMenu.classList.toggle("active-menu");
});

// navbar dropdown functionality
const productDropmenuClass = document.getElementsByClassName("product-dropmenu");
const filtraciaDropmenuClass = document.getElementsByClassName("filtracia-dropmenu");
const productDropmenuId = document.getElementById("product-dropmenu");
const filtraciaDropmenuId = document.getElementById("filtracia-dropmenu");

const toggleDropmenu = function(toggler, menu){
            for(i of toggler){
                i.addEventListener("mouseover",()=>{
                    menu.style.display = "flex";
                    menu.classList.add("navbar-dropmenu-toggler");
                });
                i.addEventListener("mouseout",()=>{
                    menu.style.display = "none";
                    menu.classList.remove("navbar-dropmenu-toggler");
                })
            }
};

toggleDropmenu(productDropmenuClass,productDropmenuId);
toggleDropmenu(filtraciaDropmenuClass,filtraciaDropmenuId);