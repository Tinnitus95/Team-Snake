function submit() {
  document.getElementById("newsposttoggle").style.display = "none";
  var timed = document.getElementById("timed");
  timed.className = "show";
  setTimeout(function() { //den här funktionen autostänger en popup med 3sekunder delay
    timed.className = "hide";
  }, 3000);
}
