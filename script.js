
const container = document.querySelector("#container")

function changeColor (e){
    let element = e.target
    element.classList.add("change-color")
}
function getGridSize (){
    let size = prompt("Enter Grid Size:")
    if (size === '' || !size) {
        return 100 //default value if cancelled
    }
    if (size > 100) {
        size = prompt("Number too large ( >100 )")
    }
    if (isNaN(Number(size)) || size <= 0){
        size = prompt("Not a valid number")
    }
    return Number(size)
}
function renderGrid (){
    let gridSize = getGridSize()
    let itemSize = (100/gridSize)

    let previousGrid = container.querySelectorAll("div")
    if (previousGrid.length > 0){
        container.innerHTML = ''
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
}

renderGrid()


// refactor idea: event delegation for changeColor
// idea render grid default for first start 