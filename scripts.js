const gridContainer = document.querySelector('.grid-container');


let cellCount = 64 * 64; // cell count aka grid size X by X

function setGridSize() { // creates a grid with selected cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };
    
};

setGridSize();

const cells = document.querySelectorAll('.cell');

 // changes the color of a cell when clicked
 cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
    cell.classList.add('cell-painted');
    
 });

});
