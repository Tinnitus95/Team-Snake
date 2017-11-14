function pop(div) {

	document.getElementById(div).style.display = 'block';

}
function popacc() {
	document.getElementById("resetform").reset();
	document.getElementById('account').style.display = 'flex';
	document.getElementById("popupacc").style.display = "flex";

}

function hide(div) {

	document.getElementById(div).style.display = 'none';

}
//To detect escape button
document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('account');
	}
};
function submitaccount(name, table, reset) {
  var listitem = document.createElement("LI");

  var taskname = document.getElementById(name).value;

  var input = document.createTextNode(taskname);

  listitem.appendChild(input);

  document.getElementById(table).appendChild(listitem);
  document.getElementById(reset).reset();
}
/*document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('vfeedback');
	}
};*/