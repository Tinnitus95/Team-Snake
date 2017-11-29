function pop(div) {
  document.getElementById(div).style.display = 'flex';
}

function hide(div) {
  document.getElementById(div).style.display = 'none';
}

function popacc() {
  document.getElementById("resetform").reset();
  document.getElementById('account').style.display = 'flex';
  document.getElementById("popupacc").style.display = "flex";
}

function popclass() {
  document.getElementById('timedclass').style.display = 'none';
  document.getElementById("popupclass").style.display = "flex";

}




//To detect escape button
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    hide('account');
    hide('popEdu');
    hide('feedback');
    hide('vfeedback')

  }
};

function submitaccount(name, table, reset) {
  var listitem = document.createElement("LI");
  var taskname = document.getElementById(name).value;
  var input = document.createTextNode(taskname);
  var onclick = document.createAttribute("onclick");
  onclick.value = "editaccount(this, 'hidenewacc', 'showedit', 'accname', 'emailacc')";
  listitem.setAttributeNode(onclick);
  listitem.appendChild(input);
  document.getElementById(table).appendChild(listitem);
  document.getElementById(reset).reset();
}

function submitclass() {
  document.getElementById("popupclass").style.display = "none";
  var timed = document.getElementById("timedclass");
  timed.style.display = "flex";


}

function editaccount(name, hide, show, aname, aemail, p, pass) {
  let kyh = "@student.kyh.se";
  document.getElementById(hide).style.display = 'none';
  document.getElementById(show).style.display = 'flex';
  document.getElementById(aname).value = name.innerHTML;
  document.getElementById(aemail).value = name.innerHTML + kyh;
  document.getElementById(p).innerHTML = name.innerHTML;
  document.getElementById(pass).value = "";
}

function createaccount(hide, show) {
  document.getElementById(show).style.display = 'none';
  document.getElementById(hide).style.display = 'flex';
}

function editaccounts(name, logins, p, hide, show) {
  var newname = document.getElementById(name).value;
  var ol = document.getElementById(logins);
  var items = ol.getElementsByTagName('LI');
  var para = document.getElementById(p).innerHTML;
  for (var i = 0; i < items.length; i++) {
    if (items[i].innerHTML == para) {
      items[i].innerHTML = newname;
    }
  }
  document.getElementById(show).style.display = 'none';
  document.getElementById(hide).style.display = 'flex';
}



/*-------------add student---------------------------------------------*/


var rIndex,
  table = document.getElementById("student-table");

// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    firstname = document.getElementById("firstname").value,
    lastname = document.getElementById("lastname").value,
    email = document.getElementById("email").value,
    phonenum = document.getElementById("phonenum").value;




}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      firstname = document.getElementById("firstname").value,
      lastname = document.getElementById("lastname").value,
      email = document.getElementById("email").value,
      phonenum = document.getElementById("phonenum").value;

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = email;
    cell4.innerHTML = phonenum;
    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("firstname").value = this.cells[0].innerHTML;
      document.getElementById("lastname").value = this.cells[1].innerHTML;
      document.getElementById("email").value = this.cells[2].innerHTML;
      document.getElementById("phonenum").value = this.cells[3].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var firstname = document.getElementById("firstname").value,
    lastname = document.getElementById("lastname").value,
    email = document.getElementById("email").value,
    phonenum = document.getElementById("phonenum").value;

  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = firstname;
    table.rows[rIndex].cells[1].innerHTML = lastname;
    table.rows[rIndex].cells[2].innerHTML = email;
    table.rows[rIndex].cells[3].innerHTML = phonenum;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phonenum").value = "";
}


function clearFields() {

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phonenum").value = "";

}

function clearRows() {
  for (var i = document.getElementById("student-table").rows.length; i > 1; i--) {
    document.getElementById("student-table").deleteRow(i - 1);
    document.getElementById("ClassName").innerHTML = "";
    document.getElementById("className-input").value = "";
  }
}

function addClassName() {
  var x = document.getElementById("className-input").value;
  document.getElementById("ClassName").innerHTML = "<h2> Klass: " + x + "</h2>";
}


function classCreated() {
  var y = document.getElementById("className-input").value;
  document.getElementById("classCreated").innerHTML = "<h3> Klass " + y + " har skapats." + "</h3>";
}
