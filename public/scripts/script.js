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
}

toggleDropmenu(productDropmenuClass,productDropmenuId);
toggleDropmenu(filtraciaDropmenuClass,filtraciaDropmenuId);

// zivotnost oleja - tables functionality
const hodmButton = document.getElementById("hodm-button");
const kltsButton = document.getElementById("klts-button");
const vlButton = document.getElementById("vl-button");
const poButton = document.getElementById("po-button");
const voButton = document.getElementById("vo-button");
const hodmTable = document.getElementById("hodm-table");
const kltsTable = document.getElementById("klts-table");
const vlTable = document.getElementById("vl-table");
const poTable = document.getElementById("po-table");
const voTable = document.getElementById("vo-table");

const showTable = function(button,showTable, ...hideTables) {
    button.addEventListener("click", ()=>{
        showTable.classList.add("table-visible");
        for(i of hideTables){
            i.classList.remove("table-visible");
        }
    })
}

showTable(hodmButton, hodmTable, kltsTable, vlTable, poTable, voTable);
showTable(kltsButton, kltsTable, hodmTable, vlTable, poTable, voTable);
showTable(vlButton, vlTable, hodmTable, kltsTable, poTable,voTable);
showTable(poButton, poTable, hodmTable, kltsTable, vlTable, voTable);
showTable(voButton, voTable, hodmTable, kltsTable, vlTable, poTable);
window.onload = () => hodmButton.click();

//