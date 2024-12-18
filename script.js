let container = document.querySelector("#container")

// let gridSize = prompt("Enter Grid Size:",10) //Removed for testing
let gridSize = 25
let itemSize = (100/gridSize)

function getRandom() {
    return Math.floor(Math.random() * 256);
}
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        gridItem.classList.add(`${i}-${j}`) // Temp to keep track of grid

        // Currently messing with the sizing of each grid item
        gridItem.style.cssText = `width:${itemSize}%; height:${itemSize}%`

        // Color Differentiation
        let blue = getRandom()
        let green = getRandom()
        let red = getRandom()
        gridItem.style.backgroundColor = `rgb(${red},${green},${blue})`
        

        container.appendChild(gridItem)
    }
    
}