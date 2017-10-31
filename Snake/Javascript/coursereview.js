function myFunctionThree() {

  var nodes = document.querySelectorAll('.questions textarea');

  for (var i in nodes) {

    if (nodes[i].type == "textarea") {
      if (nodes[i].value == "") {
        alert('Lämna svar på alla frågorna');
        nodes[i].focus();
        return false;
      }
    }

  }
  window.alert("Tack för dina svar!")
  document.getElementById("coursereview").style.display = "none";


}

function reset() {
  document.getElementById("q1").reset();
  document.getElementById("q2").reset();
  document.getElementById("q3").reset();
  document.getElementById("q4").reset();
  document.getElementById("q5").reset();
}
