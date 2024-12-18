let container = document.querySelector("#container")

let gridSize = 10
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
        gridItem.style.cssText = ``

        // Color Differentiation
        let blue = getRandom()
        let green = getRandom()
        let red = getRandom()
        gridItem.style.backgroundColor = `rgb(${red},${green},${blue})`
        

        container.appendChild(gridItem)
    }
    
}