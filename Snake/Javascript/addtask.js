function addTask(name, task, table) {
  var addtr = document.createElement("TR");
  var tdname = document.createElement("TD");
  var tdstatus = document.createElement("TD");
  var tdgrade = document.createElement("TD");
  var tdgrade2 = document.createElement("SELECT");
  var tdgradeop1 = document.createElement("OPTION");
  var tdgradeop2 = document.createElement("OPTION");
  var tdgradeop3 = document.createElement("OPTION");
  var tdna = document.createElement("A");

  var name = document.getElementById(name).value;
  var status = document.getElementById(task).value;

  var tn = document.createTextNode(name);
  var ts = document.createTextNode(status);

  tdgradeop1.text = "IG";
  tdgradeop2.text = "G";
  tdgradeop3.text = "VG";

  tdgrade2.appendChild(tdgradeop1);
  tdgrade2.appendChild(tdgradeop2);
  tdgrade2.appendChild(tdgradeop3);
  tdgrade.appendChild(tdgrade2);
  tdna.appendChild(tn);
  tdname.appendChild(tdna);
  tdstatus.appendChild(ts);
  addtr.appendChild(tdname);
  addtr.appendChild(tdstatus);
  addtr.appendChild(tdgrade);

  document.getElementById(table).appendChild(addtr);

}
