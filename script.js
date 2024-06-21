const num_grids = 32;
const cont = document.querySelector(".container");

function randColor(){
    const arr = ["pink", "lightblue", "indigo", "lightgreen", "yellow", "orange", "red"];
    let y = Math.floor(7*Math.random());
    return arr[y];
}

function createGrids(x){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    tem.forEach(element => {
        cont.removeChild(element); 
    });
    for(let i = 0; i<x*x; i++){
        const part = document.createElement("div");
        part.style.cssText = `height: ${500/x}px; width: ${500/x}px;`;
        part.classList.add("parts");
        part.style.backgroundColor = "white";
        part.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = randColor();
        })
        cont.appendChild(part);
    }
}

function Grids(x){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    tem.forEach(element => {
        cont.removeChild(element);
    });
    for(let i = 0; i<x*x; i++){
        const part = document.createElement("div");
        part.style.cssText = `height: ${500/x}px; width: ${500/x}px;`;
        part.classList.add("parts");
        part.style.backgroundColor = "white";
        cont.appendChild(part);
    }
}

function createGrid(x){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    tem.forEach(element => {
        cont.removeChild(element);
    });
    for(let i = 0; i<x*x; i++){
        const part = document.createElement("div");
        part.style.cssText = `height: ${500/x}px; width: ${500/x}px;`;
        part.style.backgroundColor = "black";
        part.classList.add("parts");
        part.style.opacity = 0;
        part.classList.add("parts");
        part.addEventListener("mouseenter", function(e){
            let opa = Number(e.target.style.opacity);
            e.target.style.opacity = `${opa+0.1}`;
        })
        cont.appendChild(part);
    }
}

const rainbow = document.querySelector(".first");
rainbow.addEventListener("click", function(){
    createGrids(num_grids);
})

const darken = document.querySelector(".second");
darken.addEventListener("click", function(){
    createGrid(num_grids);
})

const erase = document.querySelector(".erase");
erase.addEventListener("click", function(){
    Grids(num_grids);
})