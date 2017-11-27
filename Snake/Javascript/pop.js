function pop(div) {

	document.getElementById(div).style.display = 'flex';

}

function hide(div) {

	document.getElementById(div).style.display = 'none';

}
//To detect escape button
document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('webb-uppgift1');
		hide('group');
		hide('codePop');
		hide('answered-form');
		hide('answered-form2');
		hide('answered-form3');
		hide('nervaro');

	}
};
