const container = document.querySelector("#container")
function gridbuild(grid){
    container.style.setProperty("--grid", grid);
    for(c = 0; c < (grid * grid); c++){
        var cell = document.createElement("div");
        cell.className = "grid-items"
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = "black"
        })
        container.appendChild(cell)    
    }
}
gridbuild(3);

// container.addEventListener("mouseover", move) 
const single = document.getElementsByClassName("grid-items")
console.log(single)

