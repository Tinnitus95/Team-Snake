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
  	var onclick = document.createAttribute("onclick");
  	onclick.value = "editaccount(this, 'hidenewacc', 'showedit', 'accname', 'emailacc')";
  	listitem.setAttributeNode(onclick);
  	listitem.appendChild(input);
  	document.getElementById(table).appendChild(listitem);
  	document.getElementById(reset).reset();
}

function editaccount(name, hide, show, aname, aemail) {
	let kyh = "@student.kyh.se";
	document.getElementById(hide).style.display = 'none';
	document.getElementById(show).style.display = 'flex';
	document.getElementById(aname).value = name.innerHTML;
	document.getElementById(aemail).value = name.innerHTML + kyh; 
	document.getElementById('thisaccount').innerHTML = name.innerHTML;
}
function createaccount(hide, show) {
	document.getElementById(show).style.display = 'none';
	document.getElementById(hide).style.display = 'flex';
}
function editaccounts(name) {
	var newname = document.getElementById(name).value;
}
/*document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('vfeedback');
	}
};*/