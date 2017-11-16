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
		if(items[i].innerHTML == para) {
			items[i].innerHTML = newname;
		} 
	}
	document.getElementById(show).style.display = 'none';
	document.getElementById(hide).style.display = 'flex';
}
/*document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('vfeedback');
	}
};*/