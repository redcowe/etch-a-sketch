const gameBoard = document.getElementById("gameBoard");

const gameGrid = document.getElementById("gameGrid");

const clone = gameGrid.cloneNode(true);

gameBoard.appendChild(clone);
gameBoard.appendChild(clone);
gameBoard.appendChild(clone);

let multiplier = 9;







gameBoard.setAttribute("style", `grid-template-columns: repeat(${multiplier}, 1fr); grid-template-rows: repeat(${multiplier}, 1fr);`);