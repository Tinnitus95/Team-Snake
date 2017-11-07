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
		hide('feedback');
		hide('vfeedback');
		hide('popDiv');
	}
};
const code = "123";

function check(form) {
	if (form.code.value == code) {
		document.getElementById("message").innerHTML = "Du har nu anmält närvaro till Backend 101, 09.00-12.00";
		document.getElementById("popup").style.background = '#60ff83';
	} else {
		document.getElementById("message").innerHTML = "Det finns ingen lektion som passar med den koden";
		document.getElementById("popup").style.background = '#ff7a7a';
	}
}<<<<<<< HEAD
=======
>>>>>>> oscar
