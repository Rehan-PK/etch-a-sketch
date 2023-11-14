// create divs

for (let i = 0; i < 16; i++) {
    for (let i = 0; i <16; i++) {
        const div = document.createElement("div");
        const container = document.getElementById("container");
        container.appendChild(div);
        console.log('child appended');
        div.style.width = "calc(100%/16)";
        // div.style.height = "10px";
        div.style.border = "1px solid black";
        div.className = "box";
    }
}

// add event listener for mouseover
const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', () => boxes[i].style.backgroundColor = 'lightgrey');
}

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
// const document.getElementsByClassName("box");