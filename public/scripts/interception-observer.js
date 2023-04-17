// interception observer
const lineOne = document.getElementById("line1");
const lineTwo = document.getElementById("line2");
const lineThree = document.getElementById("line3");
const lineFour = document.getElementById("line4");
const lineFive = document.getElementById("line5");

const allLines = [lineOne, lineTwo, lineThree, lineFour, lineFive];
const trigger = document.getElementById("interception-lines");

let showLines = (entries) => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        for(const line of allLines){
            line.classList.toggle(intersecting ? "final-state" : "initial-state");
        }
    })
};

const observer = new IntersectionObserver(showLines);
observer.observe(trigger);