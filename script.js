const num_grids = 32;
let newflag = 0;
const cont = document.querySelector(".container");

const dark = function(e) 
{
    let opa = Number(e.target.style.opacity);
    e.target.style.opacity = `${opa+0.1}`;
}

const colorize = function(e){
    e.target.style.backgroundColor = randColor();
}

function randColor(){
    const arr = ["pink", "lightblue", "indigo", "lightgreen", "yellow", "orange", "red"];
    let y = Math.floor(7*Math.random());
    return arr[y];
}

function createGrids(){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    newflag = 1;
    tem.forEach(element => {
        element.removeEventListener("mouseenter", dark);
        element.style.backgroundColor = "white";
        element.style.opacity = "1";
        element.addEventListener("mouseenter", colorize);
    });
}

function resetGrids(){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    tem.forEach(element => {
        if(newflag === 2){
        element.style.backgroundColor = "black";
        element.style.opacity = "0"
    }
        else if(newflag === 1){
            element.style.backgroundColor = "white";
        }

    });
}

function Grids(x){
    const temp = document.querySelectorAll(".parts");
    const tem = Array.from(temp);
    tem.forEach(element => {
        cont.removeChild(element);
    });
    if(x > 64) x = 64;
    for(let i = 0; i<x*x; i++){
        const part = document.createElement("div");
        part.style.cssText = `height: ${600/x}px; width: ${600/x}px;`;
        part.classList.add("parts");
        part.style.backgroundColor = "white";
        cont.appendChild(part);
    }
}

function createGrid(){
    const temp = document.querySelectorAll(".parts");
    newflag = 2;
    const tem = Array.from(temp);
    tem.forEach(element => {
        element.removeEventListener("mouseenter", colorize);
        element.style.backgroundColor = "black";
        element.style.opacity = 0;
        element.addEventListener("mouseenter", dark);
    });
}

Grids(num_grids);

const input = document.querySelector(".in");
let value = +input.value;
input.addEventListener("change", function(e){
    Grids(+e.target.value);
})


const rainbow = document.querySelector(".first");
rainbow.addEventListener("click", function(){
    createGrids();
})

const darken = document.querySelector(".second");
darken.addEventListener("click", function(){
    createGrid();
})