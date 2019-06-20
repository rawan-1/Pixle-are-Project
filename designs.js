const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  // Stop the default action of submit
  event.preventDefault();

  // get value for width and hight of the Table Canvas
  const hight = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  for (var i = 0; i < hight; i++) {
    let row = document.createElement("tr");
    for (var c = 0; c < width; c++) {
      let column = document.createElement("td");
      row.appendChild(column);
    }
    table.appendChild(row);
  }
}
