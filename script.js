// declare initial grid size - OK
let gridCells = 16;

// rewrite above as a function with custom grid size - OK
function drawGrid(gridCells) {
    let gridWidth = (100/gridCells) + '%';
    for (let i = 0; i < gridCells; i++) {
        for (let i = 0; i < gridCells; i++) {
            const div = document.createElement("div");
            const container = document.getElementById("container");
            container.appendChild(div);
            // console.log('div appended');
            div.style.width = gridWidth;
            div.style.border = "0.1px solid lightgrey";
            div.className = "box";
        }
    }
}

// draw initial grid - OK
drawGrid(gridCells);

// Function to select all boxes - OK
let boxes;
function selectBoxes() {
    boxes = document.querySelectorAll(".box");
    return boxes;
}

// function to select the grid, & create hover effect for each cell of the grid - OK
function enableColorScroll() {
    selectBoxes();
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', () => createHoverEffect(i));
    }
}

// random color on each interaction with a cell - OK
function createHoverEffect(box) {
    let color = `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`;
    boxes[box].style.backgroundColor = color;
}
enableColorScroll();

// Function for deleting all cells in the container div - OK
function clearGrid() {
    selectBoxes();
    for (let i = 0; i < boxes.length; i++) {
        container.removeChild(boxes[i]);
    }
}

// Button on top of screen, that sends user popup asking no. of squares - OK
const button = document.getElementById("button");

// function to get the custom size of grid - OK
function getGridSize() {
    gridCells = Number(prompt("Input the size of grid ? (between 1 & 100; both inclusive"));
    if (gridCells > 100 || gridCells < 1) {
        alert("please click the button again and enter a number between 1 & 100");
        gridCells = 16;
        return gridCells;
    } else {
        return gridCells;
    }
}

// 4 STEPS=> 1.clearGrid, 2.getGridSize, 3.drawGrid, 4.enableColorScroll - OK
button.addEventListener("click", clearGrid);
button.addEventListener("click", getGridSize);
button.addEventListener("click", () => drawGrid(gridCells));
button.addEventListener("click", enableColorScroll);

// on mouse over
// - store box reference in visitedBoxes
// - create hover effect on the box (i.e. color it randomly)
// - pass this color value & box reference to another function that will store box reference with color
// - whenever a box mouseover event fires, check if the box is in visitedBoxes:
//      -   if its, then fetch color value
//      -   if it isn't, add it


// existing grid removed & new grid generated as per no. of squares in same total space (960px)
// set limit of input to 100
// research button html tags; js function to run when one is clicked
// check prompt, return a square grid

// function clearGrid() {
//     for (let i = 0; i < gridCells*gridCells ; i++) {
//         document.getElementsByClassName("box").item(i).removeChild;
//     }
// }


// ATTEMPTS FOR COLOR CHANGE ON MOUSEOVER
// -------- Successful attempt 1 --------
// const box1 = document.querySelector(".box");
// box1.addEventListener("mouseover", () => box1.style.backgroundColor = 'red');

// -------- Failed attempt 3 --------
// boxes.forEach(addEventListener("mouseover", changeColor()));
// function changeColor(box) {
//     box.style.backgroundColor = 'red';
// }

// -------- Failed attempt 2 --------
// boxes.addEventListener("mouseover", () => boxes.style.backgroundColor = 'gray');
// boxes.forEach((box) => {
//     addEventListener("mouseover", (box) => box.style.backgroundColor = 'green');
// });

// -------- Failed attempt 1 -------
// const boxes = document.querySelectorAll(".box");
// boxes.forEach( () => {addEventListener("mouseover", () )})
// boxes.forEach(addEventListener("mouseover", (box) => {
//     box.style.backgroundColor = 'red';
// }));
// const box1 = document.getElementsByClassName("box");


// create divs - SUCCESSFUL ATTEMPT
// for (let i = 0; i < 16; i++) {
//     for (let i = 0; i <16; i++) {
//         const div = document.createElement("div");
//         const container = document.getElementById("container");
//         container.appendChild(div);
//         console.log('child appended');
//         div.style.width = "calc(100%/16)";
//         // div.style.height = "10px";
//         div.style.border = "1px solid black";
//         div.className = "box";
//     }
// }


// add event listener for mouseover to create hover effect - OK
// const boxes = document.querySelectorAll(".box");
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('mouseover', () => boxes[i].style.backgroundColor = 'lightgrey');
// }


// function to clear existing grid of cells
// first clear one cell - OK
// container.removeChild(boxes[1]);


// Working loop for removing children of parent container i.e. small boxes - OK
// for (let i = 0; i < 10; i++) {
//     container.removeChild(box1[i]);
// }


// make function to create hover effect on grid - OK
// function createHoverEffect() {
//     selectBoxes();
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].addEventListener('mouseover', () => boxes[i].style.backgroundColor = 'lightgrey');
//     }
// }
// createHoverEffect();

// randomize the square RGB value - OK
// function createHoverEffect() {
//     selectBoxes();
//     for (let i = 0; i < boxes.length; i++) {
//         let color = `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`;
//         boxes[i].addEventListener('mouseover', () => boxes[i].style.backgroundColor = color);
//     }
// }
// createHoverEffect();