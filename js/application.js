function TableCreator(){
  var div = document.getElementById("tableDiv");
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");
  var row = document.getElementById('row').value;
  check_row    = CheckNumber(row,"Please Enter valid Row number")
  var column = document.getElementById('column').value;
  check_column    = CheckNumber(column,"Please Enter valid Column number")
  if(check_row || check_column) {
    return false;
  }

  for (var r = 1; r <= row; r++) {
    var rows = document.createElement("tr");
    for (var c = 1; c <= column; c++) {
      var unit = document.createElement("td");
      var unitText = document.createTextNode(r + "," +c);
      unit.appendChild(unitText);
      rows.appendChild(unit);
    }
    tableBody.appendChild(rows);
  }
  document.getElementById("tableDiv").innerHTML = "";
  table.appendChild(tableBody);
  div.appendChild(table);
}

function CheckNumber(number,message){
  number_check = false
  if(number == '' || number < 0 ){
    alert(message)
    number_check = true
  }
  return number_check
}