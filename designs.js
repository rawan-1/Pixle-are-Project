const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  // Stop the default action of submit
  event.preventDefault();
  table.innerHTML = "";

  // get value for width and hight of the Table Canvas
  const hight = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  // drawing the canvas
  for (var i = 0; i < hight; i++) {
    let row = document.createElement("tr");
    for (var c = 0; c < width; c++) {
      let column = document.createElement("td");
      row.appendChild(column);
    }
    table.appendChild(row);
  }
}

// The reset function
function resetGrid(event) {
  event.preventDefault();
  table.innerHTML = "";
}

// Coloring function
function coloring(event) {
  var color = document.getElementById("colorPicker").value;
  var fontColor = document.getElementById("color");
  fontColor.style.color = color;
  // To coloring the cell itself not all table
  if (event.target.nodeName == "TD") {
    event.target.style.backgroundColor = color;
  }
}
