const gameBoard = document.getElementById('gameBoard');

const gridSizer = document.getElementById('gridSizer');

let multiplier = gridSizer.value;

let total = multiplier * multiplier;

let gridPiece = document.createElement('div');


function createGrid() {

    for (i = 0; i < total; i++) {
    
    let gridPiece = document.createElement('div');

    gridPiece.className = "game-grid";

    gameBoard.appendChild(gridPiece);

    gameBoard.setAttribute("style", `grid-template-columns: repeat(${multiplier}, 1fr); grid-template-rows: repeat(${multiplier}, 1fr);`);
}};



function clearGrid() {
    
    let child = gameBoard.lastChild;

    while (child) {
        gameBoard.removeChild(child);
        child = gameBoard.lastChild;
    };

};

function getDimensions() {

    multiplier = gridSizer.value;

    total = multiplier ** 2
};

function updateGrid() {

    clearGrid();

    getDimensions();

    createGrid();
    
};

function updateMultiplier() {
    const sizeMultiplier = document.getElementById('gridSizerValue');

    sizeMultiplier.textContent = `${multiplier}x${multiplier}`
};

gridSizer.addEventListener('change', function() {
    updateGrid();
    updateMultiplier();
})

createGrid();








