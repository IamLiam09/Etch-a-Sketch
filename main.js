const container = document.querySelector("#container")
function gridbuild(rows, cols){
    container.style.setProperty("--grid-row", rows);
    container.style.setProperty("--grid-cols", cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-items"
    }
}
gridbuild(16, 16);