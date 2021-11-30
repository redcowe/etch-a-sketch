
/// Initiallizing variables

const gameBoard = document.getElementById('gameBoard');

const gridSizer = document.getElementById('gridSizer');

const colorPicker = document.getElementById('colorPicker');

const clearButton = document.getElementById('clearButton');

const rainbowButton = document.getElementById('rainbowButton');

const rainbow = ['#9400D3', '#4B0082', '#0000FF' , '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']

let random = Math.floor(Math.random() * rainbow.length);

let multiplier = gridSizer.value;

let total = multiplier * multiplier;

let gridPiece = document.createElement('div');

let color = colorPicker.value;

let clicked = false;




/// Creating the grid

function createGrid() {

    for (i = 0; i < total; i++) {
    
    let gridPiece = document.createElement('div');

    gridPiece.className = "game-grid";

    gridPiece.setAttribute('id', 'gameGrid');

    gameBoard.appendChild(gridPiece);

    gameBoard.setAttribute("style", `grid-template-columns: repeat(${multiplier}, 1fr); grid-template-rows: repeat(${multiplier}, 1fr);`)

    setColor()

    
    gridPiece.addEventListener('mouseover', function () {

        if (clicked == true) {
            let random = Math.floor(Math.random() * rainbow.length);
            color = rainbow[random];
            gridPiece.style.backgroundColor = `${color}`;
        } else {
            setColor();
            gridPiece.style.backgroundColor = `${color}`;
        };
        
    });
}};

///Resetting the grid

function resetGrid() {
    
    let child = gameBoard.lastChild;

    while (child) {
        gameBoard.removeChild(child);
        child = gameBoard.lastChild;
    };

};

///Getting dimensions to update the grid

function getDimensions() {

    multiplier = gridSizer.value;

    total = multiplier ** 2
};

/// Updating the grid

function updateGrid() {

    resetGrid();

    getDimensions();

    createGrid();
    
};

/// Sets color of the grid

function setColor() {

    colorPicker.addEventListener('change', function() {
        
        clicked = false;

        color = colorPicker.value;
    })     
}

/// Updates the multiplier

function updateMultiplier() {
    const sizeMultiplier = document.getElementById('gridSizerValue');

    sizeMultiplier.textContent = `${multiplier}x${multiplier}`
};


gridSizer.addEventListener('change', function() {
    updateGrid();
    updateMultiplier();
})

clearButton.addEventListener('click', () => {
    updateGrid();
})

rainbowButton.addEventListener('click', () => {
    clicked = true;
});

createGrid();


