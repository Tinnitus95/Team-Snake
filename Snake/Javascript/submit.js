function submit() {
  document.getElementById("newsposttoggle").style.display = "none";
  var timed = document.getElementById("timed");
  timed.className="show";
  setTimeout(function() {
     timed.className="hide";
  }, 3000);
}
