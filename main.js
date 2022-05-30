var container = document.querySelector("#container")
const colr = document.querySelector(".color-btn")
const usergrid = document.querySelector(".btn first")
var rangeEl = document.querySelector("#grid")
const reset = document.getElementById("reset")
const eraser = document.getElementById("eraser")
var range = rangeEl.value

function gridbuild(grid){
    container.style.setProperty("--grid", grid);
    for(var c = 0; c < (grid * grid); c++){
        const cell = document.createElement("div");
        cell.className = "grid-items"
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = colr.value
        })
        colr.addEventListener("click", function(){
            cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = colr.value
            })
        })
        eraser.addEventListener("click", function(){
            cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = eraser.value
            })
        })
        container.appendChild(cell)    
    }
}
gridbuild(range)
function userinput(){
    var userans = prompt("Please enter a grid: ")
    rangeEl.textContent = userans
    range = userans
    if (userans > 100){
        alert("Grid cannot be higher than 100")
        gridbuild(100)
        rangeEl.textContent = 100
        range = 100
    }if (userans < 3){
        alert("Grid cannot be less than 3")
        gridbuild(3)
        rangeEl.textContent = 3
        range = 3
    }
    return range
}
function originalbg(){
    if(cnge === true){
        changebgErase()
    }else{
        changebg()
    }
}
function resetEl(){
    container.innerHTML = ''
    gridbuild(range)
}
function range_change(){
    userinput()
    resetEl()
}
rangeEl.addEventListener("click", range_change)
reset.addEventListener("click", resetEl)

