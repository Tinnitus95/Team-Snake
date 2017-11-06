function pop(div) {

	document.getElementById(div).style.display = 'block';

}
function popacc() {
	document.getElementById("resetform").reset();
	document.getElementById('timedacc').style.display = 'none';
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
function submitaccount() {
  document.getElementById("popupacc").style.display = "none";
  var timed = document.getElementById("timedacc");
  timed.style.display = "flex";
  setTimeout(function() {
  	 document.getElementById("account").style.display = "none"
  }, 1000);
}
/*document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hide('vfeedback');
	}
};*/