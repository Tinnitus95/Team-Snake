function splitgrp() {
	var ol = document.getElementById("lista");
	var items = ol.getElementsByTagName('LI');
	var div = document.getElementById("groups");
	var grp = div.getElementsByTagName('OL');
	var rest = Math.floor(items.length % n);
	var n = parseInt(document.getElementById("groupNr").value);
	
		var m = Math.floor(items.length /n);



	// 30 / 3
			// 10
					// lägg till 10


	for (var i = 0; i < grp.length; i++) {

		//om grp är 3, ska detta gå så länge grp i < grp.length 
		
		if (i < (grp.length - 1)) {

			for (var j = 0; j < items.length; j++) {
				var nr = "group" + i;
				var x = document.getElementById(nr).childElementCount;

					if (x <= m) {
						grp[i].innerHTML += "<li data-draggable=\"item\" draggable=\"true\">" + items[j].innerHTML + "</li>";
						ol.removeChild(items[j]);
					}
			}
		} else {
			for (var k = 0; k < items.length; k++) {
				grp[i].innerHTML += "<li data-draggable=\"item\" draggable=\"true\">" + items[k].innerHTML + "</li>";
			}		
		}
		
	}
	while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
	}
	ol.innerHTML += "<h2>KLASS FE18</h2>";

	

	/*for (var j = 0; j < grp.length; j++) {
		console.log(grp[j].innerHTML);
			
			grp[j].innerHTML += items[i].innerHTML;
			
		}*/

	

}
 