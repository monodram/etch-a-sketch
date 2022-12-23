const grid = document.querySelector('.grid');

let cellCount = 16;

function setGridSize(cellCount) { // creates a grid with choosen cell count


    
    const createCells = document.createElement('div')
    createCells.classList.add('cell');
    grid.appendChild(createCells);

}