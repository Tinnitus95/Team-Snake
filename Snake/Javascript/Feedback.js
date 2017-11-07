function pop(div) {

	document.getElementById(div).style.display = 'block';

}

function hide(div) {

	document.getElementById(div).style.display = 'none';

}
//To detect escape button
document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('webb-uppgift1');
<<<<<<< HEAD
		hide('popDiv');
	}
};

=======
	}
};
>>>>>>> oscar
function showAttendence(id, cb) {
	var checkbox = document.getElementById(cb);
	var data = document.getElementById(id);
	if (checkbox.checked === true) {
		data.style.display = "block";
	} else {
		data.style.display = "none";
	}
}
/*document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('vfeedback');
	}
};*/