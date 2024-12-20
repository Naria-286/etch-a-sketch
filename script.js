
const container = document.querySelector("#container")
const gridBtn = document.querySelector("#change-grid")
function getRandomNum () {
    return Math.floor(Math.random() * 256);
}

function changeColor (e){
    let square = e.target

    if (square.id === "container") {return}

    let blue = getRandomNum()
    let green = getRandomNum()
    let red = getRandomNum()
    if (e.shiftKey){
        square.style.backgroundColor = `rgb(${red},${green},${blue})`
    } else {
        square.classList.add("change-color")
    }
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
            
            container.appendChild(gridItem)
        }
        
    }
    container.addEventListener("mouseover", changeColor)
    gridBtn.textContent = `Change Grid Size: ${gridSize}`
}
