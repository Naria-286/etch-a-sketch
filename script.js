let container = document.querySelector("#container")

// let gridSize = prompt("Enter Grid Size:",10) //Removed for testing
let gridSize = 100
let itemSize = (100/gridSize)

function changeColor (e){
    let element = e.target
    element.classList.add("change-color")
}
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let gridItem = document.createElement("div")

        gridItem.classList.add("grid-item")
        gridItem.style.cssText = `width:${itemSize}%; height:${itemSize}%`
        // gridItem.classList.add(`${i}-${j}`) // Temp to keep track of grid
        
        gridItem.addEventListener("mouseover", changeColor)

        container.appendChild(gridItem)
    }
    
}
// refactor idea: event delegation for changeColor