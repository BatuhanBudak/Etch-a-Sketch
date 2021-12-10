
const gridSize = 512; //Static grid area

const sixteenButton = document.getElementById("16-16-button"); 
const thirtyTwoButton = document.getElementById("32-32-button"); 
const sixtyFourButton = document.getElementById("64-64-button");
const resetButton = document.getElementById("reset-button");
const eraserButton = document.getElementById("eraser-button");
const colorPickerButton = document.getElementById("color-picker");
const randomColorButton = document.getElementById("random-color-button");

//Find the grid container
const gridContainer = document.querySelector(".grid-container");

function populateGridContainer(gridElementSize =16 ){
    
    //Populate the grid container
    for (let i = 0; i < gridElementSize*gridElementSize; i++) {

        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.style.height = `${gridSize/gridElementSize}px`;
        gridElement.style.width = `${gridSize/gridElementSize}px`;
        gridContainer.appendChild(gridElement);
        
    }
}
function removeOldGridElements(){

    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        gridContainer.removeChild(element);
    });
}

function changeGridSctructure(gridElementSize) {
    removeOldGridElements();
    populateGridContainer(gridElementSize);
    changeGridElementsFixedColor();
}

sixteenButton.onclick = () => {
    let gridElementSize = 16;
    changeGridSctructure(gridElementSize);
}
thirtyTwoButton.onclick = () => {
    let gridElementSize = 32;
    changeGridSctructure(gridElementSize);
}
sixtyFourButton.onclick = () => {
    let gridElementSize = 64;
    changeGridSctructure(gridElementSize);
}

resetButton.onclick = () => {
    resetGridBackgroundColor();
}
eraserButton.onclick = () => {
    activeEraser();
}
colorPickerButton.addEventListener("change", e => {
    let chosenColor = e.target.value;
    changeGridElementsFixedColor(chosenColor)
})
randomColorButton.onclick = () => {

    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        let color = createRandomColor();
        element.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = `${color}`;
        })
    })
}
    



function createRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor = "#" + randomColor;
}

function changeGridElementsFixedColor(chosenColor= "#000000")
{
    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        element.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = `${chosenColor}`;
        })
    })
}

function resetGridBackgroundColor(){
    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        element.style.backgroundColor = "rgb(112, 112, 112)";
        
    });
}

function activeEraser(){
    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        element.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "rgb(112, 112, 112)";;
        })
    })
}
 



populateGridContainer();
changeGridElementsFixedColor();

