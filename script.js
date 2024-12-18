let container = document.querySelector("#container")

// let gridSize = prompt("Enter Grid Size:",10) //Removed for testing
let gridSize = 100
let itemSize = (100/gridSize)

function getRandom() { //Temp: for random color testing 
    return Math.floor(Math.random() * 256);
}

function changeColor (e){
    let element = e.target
    element.classList.add("change-color")
}
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        // gridItem.classList.add(`${i}-${j}`) // Temp to keep track of grid

        // Currently messing with the sizing of each grid item
        gridItem.style.cssText = `width:${itemSize}%; height:${itemSize}%`

        // Color Randomization
        // let blue = getRandom()
        // let green = getRandom()
        // let red = getRandom()
        // gridItem.style.backgroundColor = `rgb(${red},${green},${blue})`
        gridItem.addEventListener("mouseover", changeColor)

        container.appendChild(gridItem)
    }
    
}
// refactor idea: event delegation for changeColor