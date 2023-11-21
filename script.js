// declare initial grid size - OK
let gridCells = 16;
// let color;

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

// function to select grid & create hover effect for each cell of the grid - OK
function enableColorScroll() {
    selectBoxes();
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', () => createHoverEffect(i));
    }
}

// random color on each interaction with a cell - OK
function createHoverEffect(box) {
    boxes[box].style.backgroundColor = `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`;
}
// enableColorScroll();

// random color on first interaction but darkening of color upon subsequent interactions with a cell - OK
function createDarkenEffect(box) {
  if (boxes[box].style.backgroundColor) {
    let color = boxes[box].style.backgroundColor;
    // console.log(color);
    let rgbValue = color.match(/ *\d+/g);
    // https://javascript.info/regular-expressions, https://regexr.com/, https://convertingcolors.com/
    // console.log(rgbValue);
    let newRGBValue = [];
    for (let i = 0; i < rgbValue.length; i++) {
        rgbValue[i] = Number(rgbValue[i]);
        console.log('RGBValue = ' + rgbValue[i]);
        rgbValue[i] -= rgbValue[i]*0.1;
        console.log('After 10% darkening; RGBValue = ' + rgbValue[i]);
        newRGBValue.push(rgbValue[i]);
        console.log('newRGBValue array = ' + newRGBValue);
    }
    // console.log('newRGBValue is equal to: ' + newRGBValue);
    // console.log(`new value of color will be = RGB(${newRGBValue[0]},${newRGBValue[1]},${newRGBValue[2]})`);
    boxes[box].style.backgroundColor = `RGB(${newRGBValue[0]},${newRGBValue[1]},${newRGBValue[2]})`;
  } else {
    // console.log('NO COLOR SIR !');
    boxes[box].style.backgroundColor = `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`
  }
}

// function to select grid & create hover effect for each cell of the grid - OK
function enableDarkScroll() {
  selectBoxes();
  for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('mouseover', () => createDarkenEffect(i));
  }
}
// initially enabling dark scrolling
enableDarkScroll();

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
// button.addEventListener("click", enableColorScroll);
button.addEventListener("click", enableDarkScroll);



// ******************* BELOW ROUGH WORKING ONLY ***************************

// create function enableDarkScroll that:
//  - selectBoxes()
//  - onmouseover fires function that:
//      - checks if hovered over box reference already stored:
//        - if reference stored; retrieve color value and darken as per visitCounter
//        - if reference isn't stored; 
//          - createHoverEffect() for the box
//          - append box reference, color reference, visitCounter in list of objects (nodeList named 'boxes', & each object is the individual box reference i.e. boxes[box])

// function makeBox(reference, visitCounter, color) {
//   return {
//     reference,
//     visitCounter,
//     color: `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`,
//   };
// } 
// let box[i] = makeBox(boxes[i], 1)

// function createDarkenEffect(box) {
//   color = `RGB(${Math.round(Math.random()*1000/2.55)},${Math.round(Math.random()*1000/2.55)}, ${Math.round(Math.random()*1000/2.55)})`;
//   boxes[box].style.backgroundColor = color;
// }

// function enableDarkScroll() {
//   selectBoxes();
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('mouseover', () => createDarkenEffect(i));
//   }
// }

// ATTEMPT TO Darken cell color by 10% ----- OK
// if (boxes[1].style.backgroundColor) {
//   let color = boxes[1].style.backgroundColor;
//   // console.log(color);
//   let rgbValue = color.match(/ *\d+/g);
//   // console.log(rgbValue);
//   let newRGBValue = [];
//   for (let i = 0; i < rgbValue.length; i++) {
//       rgbValue[i] = Number(rgbValue[i]);
//       console.log('RGBValue = ' + rgbValue[i]);
//       rgbValue[i] -= rgbValue[i]*0.1;
//       console.log('After 10% darkening; RGBValue = ' + rgbValue[i]);
//       newRGBValue.push(rgbValue[i]);
//       console.log('newRGBValue array = ' + newRGBValue);
//   }
//   console.log('newRGBValue is equal to: ' + newRGBValue);
//   console.log(`new value of color will be = RGB(${newRGBValue[0]},${newRGBValue[1]},${newRGBValue[2]})`);
//   boxes[1].style.backgroundColor = `RGB(${newRGBValue[0]},${newRGBValue[1]},${newRGBValue[2]})`;
// } else {
//   console.log('NO COLOR SIR !');
// }


// achieve above tasks by :
//    - appending objects to a list - DONE
//    - querying the list of objects and, - DONE
//      - add value to an object (which is in a list) - DONE
//      - amend value of an object (which is in a list) - DONE

// --------- appending objects to list, querying list of objects
// for (let i = 0; i < list1.length; i++) {
//   for (key in list1[i]) {
//       console.log(key, list1[i][key]);
//   };
// };
// where user1 & user2 are 2 objects pushed into list1 with list1.push(user1)

// --------------- looping over keys (name, age) of objects (user1, user2) which is inside a list (list1)
// for (let i = 0; i < list1.length; i++) {
//   for (key in list1[i]) {
//     if (list1[i][key] === 'rehan') {
//       console.log(list1[i][key] + ' changed to');
//       list1[i][key] = 'brother';
//       console.log(list1[i][key]);
//     } else {
//       console.log(list1[i][key]);
//     }
//   };
// };

// ------------- continued looping over list of objects
// for (let i = 0; i < list1.length; i++) {
//   for (key in list1[i]) {
//     if (list1[i][key] === 'rehan') {
//       console.log(list1[i][key] + ', you know him right !');
//     } else {
//       console.log(list1[i][key]);
//     }
//   };
// };

// ------------- amend value of an object (similarly can be added)
// for (let i = 0; i < list1.length; i++) {
//   for (key in list1[i]) {
//     if (list1[i][key] === 'rehan') {
//       console.log(list1[i][key] = 'brother');
//     } else {
//       console.log(list1[i][key]);
//     }
//   };
// };


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