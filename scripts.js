const grid = document.querySelector('.grid');

let cellCount = 256;

function setGridSize(cellCount) { // creates a grid with choosen cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        grid.appendChild(createCells);
    };
    


}