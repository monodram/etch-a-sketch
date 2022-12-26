const gridContainer = document.querySelector('.grid-container');


let cellCount = 48 * 48; // cell count aka grid size X by X

var slider = document.getElementById("sizeSlider");
var output = document.getElementById("size-value");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() { // Updates slider value
    output.innerHTML = this.value;
    cellCount = this.value * this.value; // Updates cell count
    clearGrid(); // Deletes all cells after changing size with slider
    createGrid();  // Creates grid with new value from slider
};

function createGrid() { // creates a grid with selected cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };
    
};
createGrid();

const cells = document.querySelectorAll('.cell');

 // Paints the cells with color on hover
 cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
    cell.classList.add('cell-painted');
    
 });
});

function clearGrid() { // Deletes all generates cells on board - it is used only after changing grid size with slider
    cells.forEach(cell => {
        cell.remove();
    })
};

