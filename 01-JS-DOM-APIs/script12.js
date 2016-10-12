function createMatrix(){
  matrix = [
    ["Juan","Carlos","Almeida"],
    ["Javier","Armando","Perez"],
    ["Jose","Esteban","Quito"],

  ];
  console.log(matrix[0][0]);
  return matrix;
}

function importMatrixToDOM(matrix) {
  console.log(matrix);

  for(var indexTR = 0; indexTR < 3; indexTR++ ){
    var trNode = document.createElement("tr");

    for (var indexTD = 0; indexTD < matrix[]; indexTD++) {
        var tdNode = document.createElement("td");
        var dataNode = document.createTextNode(matrix[indexTR][indexTD]);
        tdNode.appendChild(dataNode);
        trNode.appendChild(tdNode);
    }
    document.getElementById("dataTable").appendChild(trNode);
  }
}
