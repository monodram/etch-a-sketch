const gridContainer = document.querySelector('.grid-container');

let cellCount = 8 * 8; // cell count aka grid size

function setGridSize(cellCount) { // creates a grid with choosen cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };
    
}

setGridSize(cellCount);