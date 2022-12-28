const gridContainer = document.querySelector('.grid-container');

let cellCount = 2304; // cell count aka grid size

let slider = document.getElementById("sizeSlider");
let output = document.getElementById("size-value");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() { // Updates slider value
    output.innerHTML = this.value;
    cellCount = this.value * this.value; // Updates cell count
    generateNewGrid();
};

function createGrid() { // creates a grid with selected cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };

};

function gridColumnSize() { // Changes CSS class for grid-container so that cells in grid are even size
    if (cellCount == 256) {
       gridContainer.classList.remove('grid32', 'grid48', 'grid64');
       gridContainer.classList.add('grid16');
   
    } else if (cellCount == 1024) {
       gridContainer.classList.remove('grid16', 'grid48', 'grid64');
       gridContainer.classList.add('grid32');
   
    } else if (cellCount == 2304) {
       gridContainer.classList.remove('grid32', 'grid16', 'grid64');
       gridContainer.classList.add('grid48');
   
    } else if (cellCount == 4096) {
       gridContainer.classList.remove('grid32', 'grid48', 'grid16');
       gridContainer.classList.add('grid64');
    };
};
gridColumnSize();   // executes both functions 
createGrid();   // to generate very first grid

function addSelectorToCell() { // Class selector for generated cells
    let cells = Array.from(document.getElementsByClassName('cell'));
    return cells;
};
let cellSelector = addSelectorToCell();



function paint() {
    cellSelector.forEach(cell => {  // Paints the cells with black on hover
        cell.addEventListener('mouseover', function() {
        cell.classList.add('cell-painted');
        console.log('painted');
    });
});
};
paint();

function clearGrid() { // Deletes all generates cells on board
    cellSelector.forEach(cell => {
        cell.remove();
    })
};


function generateNewGrid() { 
    clearGrid();
    createGrid();
    gridColumnSize();
    cellSelector = addSelectorToCell();
    paint();
}
