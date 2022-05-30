const container = document.querySelector("#container")
const colr = document.querySelector(".color-btn")
var range = document.querySelector("#grid")
function gridbuild(grid){
    container.style.setProperty("--grid", grid);
    for(var c = 0; c < (grid * grid); c++){
        const cell = document.createElement("div");
        cell.className = "grid-items"
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = colr.value
        })
        container.appendChild(cell)    
    }
}
gridbuild(range.value)
function userinput(){
    const userans = prompt("Please enter a grid: ")
    range.value = userans
    if (range.value > 100){
        alert("Grid cannot be higher than 100")
        range.value = 100
    }if (range.value < 3){
        alert("Grid cannot be less than 3")
        range.value = 3
    }
    return range.value
}
function reloaddiv(){
    const first = range.value
    const intial = userinput()
    if(intial !== first){
        gridbuild(intial)
    }
}
range.addEventListener("click", reloaddiv)
// range.addEventListener("change", handleupdate)
