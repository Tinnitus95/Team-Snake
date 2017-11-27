function openCourse(id) {
  var e = document.getElementById("hidestart");
  e.style.display = (e.style.display == 'flex') ? 'none' : 'flex';
}

function openPost(id) {
  var e = document.getElementById("newsposttoggle");
  e.style.display = (e.style.display == 'flex') ? 'none' : 'flex';
}

function openAttendence(id) {
  var e = document.getElementById(id);
  e.style.display = (e.style.display == 'block') ? 'none' : 'block';

}
